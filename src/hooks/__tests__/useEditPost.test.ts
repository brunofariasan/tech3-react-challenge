import { useEditPost } from '@/hooks/useEditPost';
import { getPostById, updatePost } from '@/services/postService';
import { renderHook } from '@testing-library/react';
import { useRouter } from 'next/router';
import { act } from 'react';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/services/postService', () => ({
  getPostById: jest.fn(),
  updatePost: jest.fn(),
}));

describe('useEditPost', () => {
  const push = jest.fn();
  const mockPost = {
    id: '1',
    title: 'Test',
    description: '',
    html: '',
    slug: '',
    primary_author: { id: '1', name: 'Author' },
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      query: { id: '1' },
      push,
    });
  });

  it('busca post por id', async () => {
    (getPostById as jest.Mock).mockResolvedValueOnce(mockPost);

    const { result } = renderHook(() => useEditPost());

    expect(result.current.loading).toBe(true);
    expect(getPostById).toHaveBeenCalledWith('1');
  });

  it('chama updatePost e redireciona', async () => {
    (getPostById as jest.Mock).mockResolvedValueOnce(mockPost);
    const { result } = renderHook(() => useEditPost());

    await act(async () => {
      await result.current.handleUpdate({ title: 'Atualizado' });
    });

    expect(updatePost).toHaveBeenCalledWith('1', { title: 'Atualizado' });
    expect(push).toHaveBeenCalledWith('/');
  });

  it('não deve executar se id não for string', async () => {
    (useRouter as jest.Mock).mockReturnValueOnce({
      query: { id: undefined },
      push,
    });

    const { result } = renderHook(() => useEditPost());

    expect(result.current.post).toBe(null);
    expect(result.current.loading).toBe(true);
  });
});
