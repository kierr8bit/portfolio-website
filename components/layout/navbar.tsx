"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

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
    { name: "About", href: "#about" },
    { name: "FAQs", href: "#faqs" },
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
            width={150}
            height={50}
            priority
            className="h-auto w-60"
          />
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="pr-10 text-[20px] mr-2 font-semibold text-gray-700 transition-all duration-300 hover:text-[#1E5BBE]"
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={() => router.push("/contact")}
            className="rounded-xl bg-[#1E5BBE] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#174ea2] hover:shadow-lg"
          >
            Contact Us
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
