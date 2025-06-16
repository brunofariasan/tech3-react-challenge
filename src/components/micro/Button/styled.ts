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
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: small;
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
