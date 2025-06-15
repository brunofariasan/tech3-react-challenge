import React from 'react';
import { LinkTextContainer, TextContainer } from './styled';
import { TextProps } from './types';

const Text = ({
  variant = 'text-icon',
  richText = false,
  color,
  text,
  dynamicHeader,
  component = 'p',
  link,
  headerColor,
  children,
  ...rest
}: TextProps) => {
  if (link) {
    return (
      <LinkTextContainer href={link}>
        <TextContainer
          color={!dynamicHeader ? color : headerColor}
          variant={variant}
          component={component}
          {...rest}
        >
          {children ? children : richText}
        </TextContainer>
      </LinkTextContainer>
    );
  }
  return (
    <TextContainer
      color={!dynamicHeader ? color : headerColor}
      variant={variant}
      component={component}
      {...rest}
    >
      {children ? children : richText && text}
    </TextContainer>
  );
};

export default Text;
