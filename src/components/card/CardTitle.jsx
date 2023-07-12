/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Children } from "react";

export function CardTitle({ children }) {
  return (
    <div
      css={css`
        margin: 0.2rem;
      `}
    >
      {children}
    </div>
  );
}
