/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

export function CardImg({ children }: { children: ReactNode }) {
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
