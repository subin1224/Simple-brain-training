/** @jsxImportSource @emotion/react */
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  typography?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
  color?: string;
}

export function Txt({ typography = 'p', color, ...props }: Props) {
  return (
    <span
      css={{
        margin: 0,
        padding: 0,
        lineHeight: 1.6,
        ...TYPOGRAPH_VARIANT[typography],
        color: color,
      }}
      {...props}
    />
  );
}

const TYPOGRAPH_VARIANT = {
  h1: {
    fontSize: '56px',
    fontWeight: 900,
  },
  h2: {
    fontSize: '48px',
    fontWeight: 800,
  },
  h3: {
    fontSize: '40px',
    fontWeight: 700,
  },
  h4: {
    fontSize: '36px',
    fontWeight: 700,
  },
  h5: {
    fontSize: '24px',
    fontWeight: 700,
  },
  p: {
    fontSize: '15px',
    fontWeight: 400,
  },
};
