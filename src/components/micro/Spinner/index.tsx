import * as S from "./styled";

type SpinnerProps = {
  size?: number;
  color?: string;
};

export default function Spinner({ size, color }: SpinnerProps) {
  return (
    <S.Overlay>
      <S.StyledSpinner size={size} color={color} />
    </S.Overlay>
  );
}
