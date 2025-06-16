import styled, { keyframes, css } from 'styled-components';

const toastIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(50%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  pointer-events: none;
`;

interface ToastBoxProps {
  type: 'error' | 'success' | 'info';
}

export const ToastBox = styled.div<ToastBoxProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 25rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: white;
  font-size: 0.875rem;
  pointer-events: auto;
  box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.15);
  animation: ${toastIn} 0.3s ease-out;

  ${({ type }) => {
    switch (type) {
      case 'error':
        return css`background-color: ${({ theme }) => theme.colors.red};`;
      case 'success':
        return css`background-color: ${({ theme }) => theme.colors.green};`;
      default:
        return css`background-color: ${({ theme }) => theme.colors.blue};`;
    }
  }}
`;
