import { createPost } from '@/services/postService';
import { useRouter } from 'next/router';
import { PostFormData } from '@/types/post';

export const usePostActions = () => {
  const router = useRouter();

  const handleCreate = async (data: PostFormData) => {
    try {
      await createPost(data);
      router.push('/');
    } catch (error) {
      console.error('Erro ao criar post:', error);
    }
  };

  return { handleCreate };
};
