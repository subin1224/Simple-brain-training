/** @jsxImportSource @emotion/react */

export function Txt({ typography = "p", color, ...props }) {
  return (
    <span
      css={{
        margin: 0,
        padding: 0,
        color,
        lineHeight: 1.6,
        ...TYPOGRAPH_VARIANT[typography],
      }}
      {...props}
    />
  );
}

const TYPOGRAPH_VARIANT = {
  h1: {
    fontSize: "56px",
    fontWeight: 900,
  },
  h2: {
    fontSize: "48px",
    fontWeight: 800,
  },
  h3: {
    fontSize: "40px",
    fontWeight: 700,
  },
  h4: {
    fontSize: "36px",
    fontWeight: 700,
  },
  h5: {
    fontSize: "24px",
    fontWeight: 700,
  },
  p: {
    fontSize: "15px",
    fontWeight: 400,
  },
};
