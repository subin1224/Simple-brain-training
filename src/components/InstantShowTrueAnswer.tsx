import { Txt } from './Txt';

interface Props {
  inputAnswer: string;
  trueAnswer: string;
}

export function InstantShowTrueAnswer({ inputAnswer, trueAnswer }: Props) {
  //어느컴포넌트 아래에 둘것인지 고민
  return (
    <div>
      <Txt>{inputAnswer}</Txt>
      <Txt>{trueAnswer}</Txt>
    </div>
  );
}
