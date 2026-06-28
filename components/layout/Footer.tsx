import { CSSProperties } from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2026 BridgeCore Virtual Solutions</p>
    </footer>
  );
}

const styles: Record<string, CSSProperties> = {
  footer: {
    padding: "20px",
    textAlign: "center",
    background: "#0F172A",
    color: "white",
  },
};
