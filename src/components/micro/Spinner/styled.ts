import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const StyledSpinner = styled.div<{ size?: number; color?: string }>`
  animation: ${rotate360} 1s linear infinite;
  width: ${({ size = 24 }) => size}px;
  height: ${({ size = 24 }) => size}px;
  border-radius: 50%;
  border: ${({ size = 24, color = '#fff' }) => `${size / 12}px solid ${color}`};
  border-top-color: transparent;
  transform: translateZ(0);
`;
