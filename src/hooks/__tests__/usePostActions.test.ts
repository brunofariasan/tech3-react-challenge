import { renderHook, act } from '@testing-library/react';
import { usePostActions } from '../usePostActions';
import { createPost } from '@/services/postService';
import { useRouter } from 'next/router';
import { PostFormData } from '@/types/post';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/services/postService', () => ({
  createPost: jest.fn(),
}));

describe('usePostActions', () => {
  const push = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push });
    jest.clearAllMocks();
  });

  it('chama createPost e redireciona após sucesso', async () => {
    const data: PostFormData = {
      title: 'Novo post',
      description: 'Descrição do post',
      html: '<p>Conteúdo</p>',
    };

    (createPost as jest.Mock).mockResolvedValueOnce({});

    const { result } = renderHook(() => usePostActions());

    await act(async () => {
      await result.current.handleCreate(data);
    });

    expect(createPost).toHaveBeenCalledWith(data);
    expect(push).toHaveBeenCalledWith('/');
  });

  it('se createPost falhar', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const error = new Error('Erro de rede');

    (createPost as jest.Mock).mockRejectedValueOnce(error);

    const { result } = renderHook(() => usePostActions());

    await act(async () => {
      await result.current.handleCreate({
        title: 'Erro',
        description: '',
        html: '',
      });
    });

    expect(createPost).toHaveBeenCalled();
    expect(push).not.toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledWith('Erro ao criar post:', error);

    consoleErrorSpy.mockRestore();
  });
});
