import React from 'react';
import { MESSAGES } from '@/constants/messages';
import Text from '../Text';
import * as S from './styled';
type EmptyStateProps = {
  message?: string;
};

export default function EmptyState({ message = MESSAGES.EMPTY_STATE }: EmptyStateProps) {
  return (
    <S.Container>
      <S.Icon />
      <Text variant="text-icon">{message}</Text>
    </S.Container>
  );
}
