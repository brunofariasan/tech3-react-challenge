// pages/api/posts/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import ghostAPI from '@/lib/ghost';

const allowedMethods = ['GET', 'POST'];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return handleGet(req, res);

    case 'POST':
      return handlePost(req, res);

    default:
      res.setHeader('Allow', allowedMethods);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const handleGet = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await ghostAPI.get('/posts/');
    const posts = response.data.posts;
    return res.status(200).json(posts);
  } catch (error: any) {
    console.error('[GET /api/posts] Error:', error);
    return res.status(500).json({ error: 'Erro ao buscar posts' });
  }
};

const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, html, status = 'published' } = req.body;

  if (!title || !html) {
    return res.status(400).json({ error: 'Título e conteúdo são obrigatórios.' });
  }

  try {
    const response = await ghostAPI.post('/posts/?source=html', {
      posts: [{ title, html, status }],
    });

    const createdPost = response.data.posts?.[0];
    return res.status(201).json(createdPost);
  } catch (error: any) {
    console.error('[POST /api/posts] Error:', error);
    return res.status(500).json({ error: 'Erro ao criar post' });
  }
};
