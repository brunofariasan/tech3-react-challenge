import Text from '../Text';
import * as S from './styled';
type EmptyStateProps = {
  message?: string;
};

export default function EmptyState({ message = 'Nenhum post para exibir.' }: EmptyStateProps) {
  return (
    <S.Container>
      <S.Icon />
      <Text variant="text-icon">{message}</Text>
    </S.Container>
  );
}
