import React, { FC } from 'react';
import { FlexProps } from './types';
import { FlexContainer } from './styled';

const Flex: FC<FlexProps> = ({
  direction,
  justify,
  align,
  wrap,
  flexDirection,
  textAlign,
  gap,
  height,
  minHeight,
  width,
  maxWidth,
  p,
  pl,
  pb,
  pr,
  pt,
  children,
  ...rest
}) => {
  return (
    <FlexContainer
      direction={direction}
      justify={justify}
      align={align}
      wrap={wrap}
      flexDirection={flexDirection}
      textAlign={textAlign}
      gap={gap}
      height={height}
      minHeight={minHeight}
      width={width}
      maxWidth={maxWidth}
      p={p}
      pl={pl}
      pb={pb}
      pr={pr}
      pt={pt}
      {...rest}
    >
      {children}
    </FlexContainer>
  );
};

export default Flex;
