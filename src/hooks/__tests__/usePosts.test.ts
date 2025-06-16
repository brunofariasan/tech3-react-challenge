import { renderHook, act } from '@testing-library/react';
import { usePosts } from '../usePosts';
import { getPosts, deletePost } from '@/services/postService';
import { Post } from '@/types/post';

jest.mock('@/services/postService', () => ({
  getPosts: jest.fn(),
  deletePost: jest.fn(),
}));

describe('usePosts', () => {
  const mockPosts: Post[] = [
    {
      id: '1',
      title: 'Post 1',
      description: 'Desc 1',
      html: '<p>HTML</p>',
      slug: 'post-1',
      primary_author: { id: '1', name: 'Autor 1' },
    },
    {
      id: '2',
      title: 'Post 2',
      description: 'Desc 2',
      html: '<p>HTML</p>',
      slug: 'post-2',
      primary_author: { id: '2', name: 'Autor 2' },
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve buscar os posts no mount', async () => {
    (getPosts as jest.Mock).mockResolvedValue(mockPosts);

    const { result } = renderHook(() => usePosts());

    await act(async () => {
      await Promise.resolve();
    });

    expect(getPosts).toHaveBeenCalled();
    expect(result.current.posts).toEqual(mockPosts);
    expect(result.current.loading).toBe(false);
  });

  it('deve lidar com erro ao buscar posts', async () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    (getPosts as jest.Mock).mockRejectedValue(new Error('Erro'));

    const { result } = renderHook(() => usePosts());

    await act(async () => {
      await Promise.resolve();
    });

    expect(consoleError).toHaveBeenCalled();
    expect(result.current.posts).toEqual([]);
    expect(result.current.loading).toBe(false);

    consoleError.mockRestore();
  });

  it('deve deletar um post corretamente', async () => {
    (getPosts as jest.Mock).mockResolvedValue(mockPosts);
    (deletePost as jest.Mock).mockResolvedValue({});

    const { result } = renderHook(() => usePosts());

    await act(async () => {
      await Promise.resolve();
    });

    await act(async () => {
      await result.current.handleDelete('1');
    });

    expect(deletePost).toHaveBeenCalledWith('1');
    expect(result.current.posts).toEqual([mockPosts[1]]);
    expect(result.current.loadingDelete).toBe(null);
  });

  it('deve lidar com erro ao deletar post', async () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    (getPosts as jest.Mock).mockResolvedValue(mockPosts);
    (deletePost as jest.Mock).mockRejectedValue(new Error('Erro ao deletar'));

    const { result } = renderHook(() => usePosts());

    await act(async () => {
      await Promise.resolve();
    });

    await act(async () => {
      await result.current.handleDelete('2');
    });

    expect(consoleError).toHaveBeenCalled();
    expect(result.current.posts).toEqual(mockPosts);
    expect(result.current.loadingDelete).toBe(null);

    consoleError.mockRestore();
  });
});
