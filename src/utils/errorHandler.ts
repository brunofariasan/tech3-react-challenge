export const handleServiceError = (error: unknown, message: string) => {
  console.error(`${message}:`, error);
  throw error;
};
