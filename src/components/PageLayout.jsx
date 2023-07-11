/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function PageLayout({ children }) {
  return (
    <div
      css={css`
        max-width: 650px;
        width: 100%;
        padding: 0 4%;
        margin: 0 auto;
        height: auto;
      `}
    >
      {children}
    </div>
  );
}
