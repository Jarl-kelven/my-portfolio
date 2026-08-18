
"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import logo from "../public/Images/logo-portfolio.svg"
const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111111]/85 backdrop-blur-md border-b border-white/8"
          : "bg-[#111111]"
      }`}
    >
      <div className="max-w-full mx-auto px-6 h-15 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="w-8 h-8">
            <Image
             alt="Kelvin.dev logo"
             src={logo}
             width={32}
             height={32}
            />
          </div>
          <span className="text-[15px] font-medium text-white tracking-tight font-sans">
            Jarl.dev
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-3">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm px-3 py-1.5 rounded-md transition-colors duration-150 ${
                pathname === href
                  ? "text-white"
                  : "text-[#aaaaaa] hover:text-white hover:bg-[#1e1e1e]"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 text-[13px] font-medium text-white bg-[#C0460A] hover:bg-[#E8652A] px-4 py-1.5 rounded-[7px] transition-colors duration-150"
          >
            Let&apos;s talk
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.25 p-1 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1.5px] bg-[#aaaaaa] rounded transition-transform duration-200 ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-[#aaaaaa] rounded transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-[#aaaaaa] rounded transition-transform duration-200 ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-white/6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block text-[15px] px-5 py-3.5 border-b border-white/6 transition-colors ${
                pathname === href ? "text-white" : "text-[#bbbbbb] hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 px-5 py-3.5 text-[15px] font-medium text-[#C0460A] hover:text-[#E8652A] transition-colors"
          >
            Let&apos;s talk
            <span className="w-1.5 h-1.5 rounded-full bg-[#C0460A] inline-block" />
          </Link>
        </div>
      )}
    </nav>
  );
}