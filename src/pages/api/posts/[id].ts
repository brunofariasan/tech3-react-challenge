import type { NextApiRequest, NextApiResponse } from 'next';
import ghostAPI from '@/lib/ghost';

const fetchPostById = async (id: string) => {
  const res = await ghostAPI.get(`/posts/${id}/?formats=html`);
  return res.data.posts?.[0];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (Array.isArray(id) || !id) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  try {
    switch (req.method) {
      case 'GET': {
        const post = await fetchPostById(id);
        return res.status(200).json(post);
      }
      case 'PUT': {
        const { title, html, excerpt } = req.body;

        if (!title || !html) {
          return res.status(400).json({ error: 'Campos obrigatórios: title e html.' });
        }

        const existingPost = await fetchPostById(id);

        const updatedPost = {
          id,
          title,
          html,
          excerpt,
          status: 'published',
          updated_at: existingPost.updated_at,
        };

        const response = await ghostAPI.put(`/posts/${id}/?source=html`, {
          posts: [updatedPost],
        });

        return res.status(200).json(response.data.posts[0]);
      }

      case 'DELETE': {
        await ghostAPI.delete(`/posts/${id}/`);
        return res.status(204).end();
      }

      default: {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
      }
    }
  } catch (err: any) {
    console.error('Erro:', JSON.stringify(err.response?.data || err, null, 2));
    return res.status(500).json({
      error: {
        message: err.message,
        details: err.response?.data || null,
      },
    });
  }
}
