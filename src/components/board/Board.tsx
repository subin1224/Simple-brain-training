/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import { BoardItem } from './BoardItem';

export interface ItemObject {
  key: string;
  text: string;
  color?: string;
}

interface Props {
  row: number;
  data: Array<ItemObject>;
  colorHandler?: (value?: string | undefined) => void;
}

export function Board({ row, data, colorHandler }: Props) {
  return (
    <div
      css={{
        display: 'grid',
        gridTemplateColumns: `repeat(${row}, 1fr)`,
      }}
    >
      {data.map(
        (item): ReactNode => (
          <BoardItem
            key={item.key}
            color={item.color}
            colorHandler={colorHandler}
          >
            {item.text}
          </BoardItem>
        )
      )}
    </div>
  );
}
