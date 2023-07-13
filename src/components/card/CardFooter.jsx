/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function CardFooter({ children }) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        margin: 0.5rem;
      `}
    >
      {children}
    </div>
  );
}
