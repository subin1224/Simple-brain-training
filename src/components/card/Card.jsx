/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "../Button";

export function Card({ children }) {
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