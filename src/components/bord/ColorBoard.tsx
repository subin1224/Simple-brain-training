import { ReactNode } from 'react';
import { BoardItem } from './BoardItem';

/** @jsxImportSource @emotion/react */

type ItemObject = {
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
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${row}, 1fr)`,
      }}
    >
      {data.map(
        (item): ReactNode => (
          <BoardItem style={{ color: item.color }}>{item.text}</BoardItem>
        )
      )}
    </div>
  );
}
