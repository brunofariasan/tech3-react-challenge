import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPostById } from '@/services/postService';
import { Post } from '@/types/post';

export const usePostDetail = () => {
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

  return { post, loading, router };
};
