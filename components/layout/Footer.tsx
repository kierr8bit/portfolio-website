"use client";

import Link from "next/link";
import Image from "next/image";
import "@/styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left */}

        <div className="footer-brand">
          <Image
            src="/logo-white.png"
            alt="BridgeCore Virtual Solutions"
            width={220}
            height={60}
            className="footer-logo"
          />

          <p>
            Building dependable remote teams through world-class virtual
            professionals.
          </p>
        </div>

        {/* Navigation */}

        <div className="footer-links">
          <div>
            <h4>Company</h4>

            <Link href="/">Home</Link>
            <Link href="/#about">About</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#faqs">FAQs</Link>
            <Link href="/contact">Contact</Link>
          </div>
          {/* 
          <div>
            <h4>Services</h4>

            <Link href="/#services">Executive Virtual Assistance</Link>

            <Link href="/#services">Customer Support</Link>

            <Link href="/#services">Marketing Support</Link>

            <Link href="/#services">IT Support</Link>

            <Link href="/#services">Accounting</Link>

            <Link href="/#services">Property Management</Link>
          </div>
*/}
          <div>
            <h4>Contact</h4>

            <p>hello@bridgecorevs.com</p>

            <p>+1 (302) 555-1234</p>

            <p>Available Worldwide</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 BridgeCore Virtual Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
