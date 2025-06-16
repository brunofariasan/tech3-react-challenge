import { showToast } from '@/components/micro/Toast';

export const handleServiceError = (error: unknown, message: string) => {
  console.error(`${message}:`, error);
  showToast(message, 'error');
  throw error;
};
