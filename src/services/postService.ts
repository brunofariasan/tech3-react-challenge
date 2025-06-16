import axios from 'axios';
import { Post } from '@/types/post';
import { handleServiceError } from '@/utils/errorHandler';

const BASE_URL = '/api/posts';

export const getPosts = async (): Promise<Post[]> => {
  try {
    const res = await axios.get('/api/posts');
    return res.data;
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return [];
  }
};

export const getPostById = async (id: string): Promise<Post | null> => {
  try {
    const res = await axios.get(`/api/posts/${id}`);
    return res.data ?? null;
  } catch (err) {
    console.error('Erro ao buscar post:', err);
    return null;
  }
};

export const deletePost = async (id: string): Promise<boolean> => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    return true;
  } catch (error) {
    handleServiceError(error, 'Erro ao deletar post');
    return false;
  }
};

export const createPost = async (data: Partial<Post>): Promise<Post> => {
  try {
    const res = await axios.post('/api/posts', data);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updatePost = async (id: string, data: Partial<Post>): Promise<Post> => {
  try {
    const res = await axios.put(`/api/posts/${id}`, data);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
