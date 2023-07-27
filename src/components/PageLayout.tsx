/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div
      css={{
        width: '100%',
        padding: '0 auto',
        margin: '0 auto',
        height: 'auto',
      }}
    >
      {children}
    </div>
  );
}
