import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  min-height: 20rem;
`;

export const CloseIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #333;
    top: 50%;
    left: 0;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

export const Icon = styled.div`
  width: 8rem;
  height: 8rem;
  position: relative;
  margin-bottom: 1.6rem;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #fbeaea;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 0.6rem;
    background-color: #d32f2f;
    border-radius: 0.3rem;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {}

  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 0.6rem;
    background-color: #d32f2f;
    border-radius: 0.3rem;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;
