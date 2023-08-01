/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import { BoardItem } from './BoardItem';

interface ItemObject {
  key: string;
  text: string;
  color?: string;
}

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
          <BoardItem key={item.key} color={item.color}>
            {item.text}
          </BoardItem>
        )
      )}
    </div>
  );
}
