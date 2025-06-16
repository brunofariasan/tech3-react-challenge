import { renderHook, act } from '@testing-library/react';
import { usePostDetail } from '../usePostDetail';
import { getPostById } from '@/services/postService';
import { useRouter } from 'next/router';
import { Post } from '@/types/post';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/services/postService', () => ({
  getPostById: jest.fn(),
}));

describe('usePostDetail', () => {
  const mockPost: Post = {
    id: '123',
    title: 'Título',
    description: 'Descrição',
    html: '<p>conteúdo</p>',
    slug: 'titulo',
    primary_author: {
      id: '1',
      name: 'Autor',
    },
  };

  const push = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('busca e armazena o post corretamente', async () => {
    (useRouter as jest.Mock).mockReturnValue({ query: { id: '123' }, push });
    (getPostById as jest.Mock).mockResolvedValue(mockPost);

    const { result } = renderHook(() => usePostDetail());

    await act(async () => {
      await Promise.resolve();
    });

    expect(getPostById).toHaveBeenCalledWith('123');
    expect(result.current.post).toEqual(mockPost);
    expect(result.current.loading).toBe(false);
  });

  it('lida com erro ao buscar post', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    (useRouter as jest.Mock).mockReturnValue({ query: { id: '456' }, push });
    (getPostById as jest.Mock).mockRejectedValue(new Error('Erro ao buscar post'));

    const { result } = renderHook(() => usePostDetail());

    await act(async () => {
      await Promise.resolve();
    });

    expect(getPostById).toHaveBeenCalledWith('456');
    expect(result.current.post).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(consoleErrorSpy).toHaveBeenCalled();

    consoleErrorSpy.mockRestore();
  });

  it('não deve chama getPostById se id não for string', async () => {
    (useRouter as jest.Mock).mockReturnValue({ query: { id: undefined }, push });

    renderHook(() => usePostDetail());

    await act(async () => {
      await Promise.resolve();
    });

    expect(getPostById).not.toHaveBeenCalled();
  });
});
