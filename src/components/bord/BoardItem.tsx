/** @jsxImportSource @emotion/react */
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  color?: string;
  textAlign?: string;
}

export function BoardItem({ ...props }: Props) {
  return <p css={{ width: '48px' }} {...props} />;
}
