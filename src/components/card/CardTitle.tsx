/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

export function CardTitle({ children }: { children: ReactNode }) {
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
