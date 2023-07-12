/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function CardContent({ children }) {
  return (
    <div
      css={css`
        overflow: hidden;
        height: 200px;
      `}
    >
      {children}
    </div>
  );
}
