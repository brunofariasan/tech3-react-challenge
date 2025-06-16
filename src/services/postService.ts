import axios from 'axios';
import { Post } from '@/types/post';
import { handleServiceError } from '@/utils/errorHandler';
import { showToast } from '@/components/micro/Toast';
import { MESSAGES } from '@/constants/messages';

const BASE_URL = '/api/posts';

export const getPosts = async (): Promise<Post[]> => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    showToast(MESSAGES.ERROR_FETCH_POSTS, 'error');
    handleServiceError(error, MESSAGES.ERROR_FETCH_POSTS);
    return [];
  }
};

export const getPostById = async (id: string): Promise<Post | null> => {
  try {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data ?? null;
  } catch (error) {
    showToast(MESSAGES.ERROR_FETCH_POST, 'error');
    handleServiceError(error, MESSAGES.ERROR_FETCH_POST);
    return null;
  }
};

export const deletePost = async (id: string): Promise<boolean> => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    return true;
  } catch (error) {
    showToast(MESSAGES.ERROR_DELETE_POST, 'error');
    handleServiceError(error, MESSAGES.ERROR_DELETE_POST);
    return false;
  }
};

export const createPost = async (data: Partial<Post>): Promise<Post> => {
  try {
    const res = await axios.post(BASE_URL, data);
    return res.data;
  } catch (error) {
    showToast(MESSAGES.ERROR_CREATE_POST, 'error');
    handleServiceError(error, MESSAGES.ERROR_CREATE_POST);
    throw error;
  }
};

export const updatePost = async (id: string, data: Partial<Post>): Promise<Post> => {
  try {
    const res = await axios.put(`${BASE_URL}/${id}`, data);
    return res.data;
  } catch (error) {
    showToast(MESSAGES.ERROR_UPDATE_POST, 'error');
    handleServiceError(error, MESSAGES.ERROR_UPDATE_POST);
    throw error;
  }
};
