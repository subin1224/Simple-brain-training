/** @jsxImportSource @emotion/react */
import { Txt } from 'components/Txt';
import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  color?: string;
  textAlign?: string;
  children: ReactNode;
}

export function BoardItem({ color, children, ...props }: Props) {
  /** conextAPI / useReducer 사용 */
  const correctAnswer = 'blue';
  let answerCount = 0;
  const confirmClickValue = (color: string | undefined) => {
    console.log(color);
    if (correctAnswer === color) {
      answerCount++;
    }
    console.log(answerCount);
  };
  return (
    <div
      css={{
        textAlign: 'center',
        cursor: 'pointer',
      }}
      {...props}
      onClick={() => confirmClickValue(color)}
    >
      <Txt typography="h5" color={color}>
        {children}
      </Txt>
    </div>
  );
}
