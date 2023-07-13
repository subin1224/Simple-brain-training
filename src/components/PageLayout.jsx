/** @jsxImportSource @emotion/react */

export function PageLayout({ children }) {
  return (
    <div
      css={{
        maxWidth: "650px",
        width: "100%",
        padding: "0 auto",
        margin: "0 auto",
        height: "auto",
      }}
    >
      {children}
    </div>
  );
}
