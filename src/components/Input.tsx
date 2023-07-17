/** @jsxImportSource @emotion/react */

import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
} from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactElement; // 추후 수정
}

export const Input = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        css={{
          border: "none",
          width: "4.8ch",
          background:
            "repeating-linear-gradient(90deg, dimgrey 0, dimgrey 2ch, transparent 0, transparent 2.5ch) 0 100%/100% 2px no-repeat",
          color: "dimgrey",
          fontSize: "48px",
          letterSpacing: "1ch",
          "&:focus": {
            outline: "none",
          },
        }}
        ref={ref}
        {...props}
      />
    );
  }
);
