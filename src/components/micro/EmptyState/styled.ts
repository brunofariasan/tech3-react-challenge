import styled from 'styled-components';
import { darken } from 'polished';

type ButtonProps = {
  backgroundColor?: keyof typeof import('@/styles/theme').theme.colors;
  color?: keyof typeof import('@/styles/theme').theme.colors;
  height?: string;
  width?: string;
};

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor && theme.colors[backgroundColor]
      ? theme.colors[backgroundColor]
      : theme.colors.deepNavyBlue};

  color: ${({ theme, color }) =>
    color && theme.colors[color] ? theme.colors[color] : theme.colors.white};

  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  ${({ height }) => height && `height: ${height};`}
  ${({ width }) => width && `width: ${width};`} 

  &:hover {
    background-color: ${({ theme, backgroundColor }) => {
      const colorValue =
        backgroundColor && theme.colors[backgroundColor]
          ? theme.colors[backgroundColor]
          : theme.colors.deepNavyBlue;
      return typeof colorValue === 'string' ? darken(0.1, colorValue) : theme.colors.deepNavyBlue;
    }};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  color: #666;
`;

export const Icon = styled.div`
  width: 8rem;
  height: 8rem;
  position: relative;
  margin-bottom: 1.6rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #ccc;
  }
  &::before {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #f5f5f5;
  }
  &::after {
    width: 50%;
    height: 0.6rem;
    top: 50%;
    left: 25%;
    border-radius: 0.3rem;
  }
`;
