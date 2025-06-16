import styled from 'styled-components';
import { StyledFlexProps } from './types';

export const FlexContainer = styled.div<StyledFlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'stretch'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  flex-direction: ${(props) => props.flexDirection};
  text-align: ${(props) => props.textAlign};
  gap: ${(props) => props.gap};
  height: ${(props) => props.height || 'auto'};
  min-height: ${(props) => props.minHeight};
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  padding: ${(props) => props.p};
  padding-left: ${(props) => props.pl};
  padding-bottom: ${(props) => props.pb};
  padding-right: ${(props) => props.pr};
  padding-top: ${(props) => props.pt};
`;
