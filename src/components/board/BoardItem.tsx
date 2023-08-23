/** @jsxImportSource @emotion/react */
import { Txt } from 'components/Txt';
import { ReactNode } from 'react';

interface Props {
  color?: string;
  textAlign?: string;
  children: ReactNode;
  colorHandler?: (value?: string) => void;
}

export function BoardItem({ color, children, colorHandler, ...props }: Props) {
  const clickHandler = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (colorHandler) colorHandler(color);
  };
  return (
    <div
      css={{
        textAlign: 'center',
        cursor: 'pointer',
      }}
      {...props}
      onClick={clickHandler}
    >
      <Txt typography="h5" color={color}>
        {children}
      </Txt>
    </div>
  );
}
