import styled, { css } from 'styled-components';
import { TextProps } from './types';


const textVariants = {
  'text-icon': css`
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8rem;
    letter-spacing: 0.11rem;
    user-select: none;
    font-family: 'Inter', sans-serif;
  `,

  'post-title': css`
    font-family: Montserrat;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: 0.2px;
    max-width: 41rem;
  `,

  'small-title-post': css`
    font-family: Montserrat;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.5rem;
    width: 100%;
    word-break: break-word;
  `,

  'author': css`
    font-family: Montserrat;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.5rem;
    width: 100%;
    word-break: break-word;
    color: #aaa;
  `,

  'text-status': css`
    font-family: Montserrat;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.5rem;
    width: 100%;
    word-break: break-word;
    color: #e83e8c;
  `,

  'details-post': css`
    font-family: Montserrat;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.5rem;
    width: 100%;
    word-break: break-word;
    color: white;
  `,

 'title': css`
    font-family: Montserrat;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.5rem;
    width: 100%;
    word-break: break-word;
    color: white;
  `,
};

export const TextContainer = styled.span.attrs<TextProps>(({ component }) => ({
  as: component,
}))<TextProps>`
  ${({ variant }) => variant && textVariants[variant]}
  text-align:${({ textAlign }) => textAlign};
`;

export const LinkTextContainer = styled.a``;
