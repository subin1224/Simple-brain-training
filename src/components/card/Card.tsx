/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div
      css={css`
        width: 600px;
        overflow: hidden;
        box-shadow: 0px 0px 15px -5px;
      `}
    >
      {children}
    </div>
  );
}
