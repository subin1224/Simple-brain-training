/** @jsxImportSource @emotion/react */
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  color?: string;
  textAlign?: string;
}

export function BoardItem({ color, ...props }: Props) {
  return (
    <p
      css={{
        color: color,
        textAlign: 'center',
        fontWeight: 'bold',
        cursor: 'pointer',
      }}
      {...props}
    />
  );
}
