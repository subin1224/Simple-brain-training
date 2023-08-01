/** @jsxImportSource @emotion/react */
import { CSSObject } from '@emotion/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  css?: CSSObject;
}

export function CardContent({ children, css }: Props) {
  return (
    <div
      css={{
        width: '800px',
        overflow: 'hidden',
        padding: '5px',
        ...css,
      }}
    >
      {children}
    </div>
  );
}
