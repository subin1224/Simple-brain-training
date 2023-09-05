import { Txt } from './Txt';

interface Props {
  inputAnswer: string;
  trueAnswer: string;
}

export function InstantShowTrueAnswer({ inputAnswer, trueAnswer }: Props) {
  return (
    <div>
      <Txt>{inputAnswer}</Txt>
      <Txt>{trueAnswer}</Txt>
    </div>
  );
}
