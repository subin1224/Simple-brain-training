/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

export function CardFooter({ children }: { children: ReactNode }) {
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
