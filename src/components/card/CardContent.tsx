/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

export function CardContent({ children }: { children: ReactNode }) {
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
