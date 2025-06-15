import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styled';
import { theme } from '@/styles/theme';

type ThemeColorKeys = keyof typeof theme.colors;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  backgroundColor?: ThemeColorKeys;
  color?: ThemeColorKeys;
  height?: string;
  width?: string;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
