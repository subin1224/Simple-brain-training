/** @jsxImportSource @emotion/react */

import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
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
});
