import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPostById, updatePost } from '@/services/postService';
import { Post } from '@/types/post';

export const useEditPost = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (typeof id === 'string') {
      setLoading(true);
      getPostById(id)
        .then(setPost)
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleUpdate = async (data: Partial<Post>) => {
    if (typeof id === 'string') {
      setLoading(true);
      try {
        await updatePost(id, data);
        router.push('/');
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return { post, loading, handleUpdate };
};
