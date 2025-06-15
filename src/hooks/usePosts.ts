import { getPosts, deletePost } from '@/services/postService';
import { Post } from '@/types/post';

import { useState, useEffect } from 'react';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingDelete, setLoadingDelete] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    setLoadingDelete(id);
    try {
      await deletePost(id);
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingDelete(null);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, loading, loadingDelete, handleDelete };
};
