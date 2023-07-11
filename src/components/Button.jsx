/** @jsxImportSource @emotion/react */

export function Button({ variant = "primary", size = "medium", ...props }) {
  return (
    <button
      css={{
        outline: "none",
        border: "0 solid transparent",
        borderRadius: "7px",
        cursor: "pointer",
        transition: "background .2s ease,color .1s ease",
        fontWeight: 600,
        lineHeight: "26px",
        ...TYPE_VARIANTS[variant],
        ...SIZE_VARIANTS[size],
      }}
      {...props}
    />
  );
}

const TYPE_VARIANTS = {
  primary: {
    color: "#fff",
    backgroundColor: "#006eff",
    "&:hover": {
      backgroundColor: "#69a9ff",
    },
  },
  secondary: {
    color: "#383838",
    backgroundColor: "#f0eded",
    "&:hover": {
      backgroundColor: "#dbd7d7",
    },
  },
};

const SIZE_VARIANTS = {
  medium: {
    fontSize: "15px",
    padding: "11px 16px",
  },
  large: {
    fontSize: "17px",
    padding: "11px 22px",
  },
};
