"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Programmes", href: "#programmes" },
  { label: "Campus", href: "#campus" },
  { label: "Industry Linkage", href: "#industry" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-crimson-600 rounded-full flex items-center justify-center">
            <span className="text-white font-display font-bold text-lg">JG</span>
          </div>
          <div className={`transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-white"}`}>
            <p className="font-display font-bold text-lg leading-none">JG University</p>
            <p className="text-xs tracking-widest uppercase opacity-70">Excellence by Choice</p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-link text-sm font-medium transition-colors duration-200 ${
                scrolled ? "text-gray-700 hover:text-crimson-600" : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className={`text-sm font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
              scrolled
                ? "border-crimson-600 text-crimson-600 hover:bg-crimson-50"
                : "border-white/60 text-white hover:bg-white/10"
            }`}
          >
            Enquire
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold px-5 py-2 bg-gold-500 hover:bg-gold-600 text-white rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Apply Now
          </a>
        </div>

        <button
          className={`lg:hidden p-2 rounded-md transition-colors ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t border-gray-100">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="py-3 text-gray-700 font-medium border-b border-gray-100 last:border-0 hover:text-crimson-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-4">
              <a
                href="#contact"
                className="flex-1 text-center py-3 border border-crimson-600 text-crimson-600 rounded-full text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Enquire
              </a>
              <a
                href="#contact"
                className="flex-1 text-center py-3 bg-gold-500 text-white rounded-full text-sm font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Apply Now
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
