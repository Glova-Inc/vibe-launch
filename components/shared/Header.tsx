"use client";

import { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/#program", label: "プログラム" },
  { href: "/#demo-day", label: "Demo Day" },
  { href: "/learning", label: "学習内容" },
  { href: "/#pricing", label: "料金" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
              scrolled
                ? "bg-brand-600 text-white"
                : "bg-white/15 text-white"
            }`}
          >
            <Rocket className="w-4.5 h-4.5" />
          </div>
          <span
            className={`text-xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            Vibe{" "}
            <span
              className={
                scrolled ? "text-brand-600" : "text-brand-300"
              }
            >
              Launch
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium px-3.5 py-2 rounded-lg transition-all ${
                scrolled
                  ? "text-slate-600 hover:text-brand-600 hover:bg-brand-50"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            className={`ml-3 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm ${
              scrolled
                ? "bg-brand-600 text-white hover:bg-brand-700 shadow-brand-600/25"
                : "bg-white text-brand-700 hover:bg-brand-50"
            }`}
          >
            無料説明会に参加
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled
              ? "text-slate-600 hover:bg-slate-100"
              : "text-white hover:bg-white/10"
          }`}
          aria-label="メニュー"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 px-4 py-3 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-xl transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-brand-600 text-white px-5 py-3 rounded-xl font-semibold mt-2 shadow-sm"
          >
            無料説明会に参加
          </Link>
        </nav>
      )}
    </header>
  );
}
