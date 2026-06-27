import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Summit VA Solutions</div>

      <div style={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/industries">Industries</Link>
        <Link href="/success-stories">Success Stories</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <button style={styles.cta}>Book Consultation</button>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 32px",
    background: "#0F172A",
    color: "white",
    alignItems: "center",
  },
  logo: {
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  cta: {
    background: "#2563EB",
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
