/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function CardImg({ children }) {
  return (
    <div
      css={css`
        width: auto;
        overflow: hidden;
      `}
    >
      {children}
    </div>
  );
}
