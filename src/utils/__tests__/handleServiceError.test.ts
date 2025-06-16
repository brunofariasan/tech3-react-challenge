import { showToast } from '@/components/micro/Toast';
import { handleServiceError } from '../errorHandler';

jest.mock('@/components/micro/Toast', () => ({
  showToast: jest.fn(),
}));

describe('handleServiceError', () => {
  const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve chamar console.error, showToast e relançar o erro', () => {
    const error = new Error('Erro simulado');
    const message = 'Algo deu errado';

    expect(() => handleServiceError(error, message)).toThrow(error);

    expect(mockConsoleError).toHaveBeenCalledWith(`${message}:`, error);
    expect(showToast).toHaveBeenCalledWith(message, 'error');
  });
});
