/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import { BoardItem } from './BoardItem';

type ItemObject = {
  key: string;
  text: string;
  color?: string;
};

interface Props {
  row: number;
  data: Array<ItemObject>;
}

export function ColorBoard({ row, data }: Props) {
  return (
    <div
      css={{
        display: 'grid',
        gridTemplateColumns: `repeat(${row}, 1fr)`,
      }}
    >
      {data.map(
        (item): ReactNode => (
          <BoardItem color={item.color} onClick={() => console.log(item.color)}>
            {item.text}
          </BoardItem>
        )
      )}
    </div>
  );
}
