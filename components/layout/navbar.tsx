"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = [
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-1xl items-center justify-between px-6">
        {/* Logo */}

        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="BridgeCore Virtual Solutions"
            width={200}
            height={30}
            priority
            className="h-auto w-auto"
          />
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-gray-700 transition-colors hover:text-[#1E5BBE]"
            >
              {item.name}
            </Link>
          ))}

          <button className="rounded-xl bg-[#1E5BBE] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#174ea2] hover:shadow-lg">
            Book a Call
          </button>
        </nav>

        {/* Mobile Button */}

        <button
          aria-label="Toggle Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="mt-4 border-t bg-white md:hidden">
          <div className="flex flex-col gap-6 px-6 py-6">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-gray-700 transition-colors hover:text-[#1E5BBE]"
              >
                {item.name}
              </Link>
            ))}

            <button className="rounded-xl bg-[#1E5BBE] py-3 font-semibold text-white transition-all duration-300 hover:bg-[#174ea2]">
              Book a Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
