import React from 'react';
import { LinkTextContainer, TextContainer } from './styled';
import { TextProps } from './types';

const Text = ({
  variant = 'text-icon',
  richText = false,
  text,
  component = 'p',
  link,
  children,
  ...rest
}: TextProps) => {
  if (link) {
    return (
      <LinkTextContainer href={link}>
        <TextContainer
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
      variant={variant}
      component={component}
      {...rest}
    >
      {children ? children : richText && text}
    </TextContainer>
  );
};

export default Text;
