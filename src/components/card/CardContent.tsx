/** @jsxImportSource @emotion/react */
import { CSSObject } from "@emotion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  css?: CSSObject;
}

export function CardContent({ children, css }: Props) {
  return (
    <div
      css={{
        overflow: "hidden",
        ...css,
      }}
    >
      {children}
    </div>
  );
}
