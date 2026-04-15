"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Página Inicial", href: "/" },
    { name: "Serviços", href: "/servicos" },
    { name: "Sobre nós", href: "/sobre-nos" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header className="bg-white w-full z-50 relative">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-center py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center mr-12">
          <Image
            src="/logosvg.svg"
            alt="EBEN Engenharia"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[#072763] text-sm font-medium transition-colors hover:text-[#c7962e] ${
                pathname === link.href
                  ? "border-b-2 border-[#072763] pb-0.5"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden ml-auto text-[#072763] p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-[#072763] text-sm font-medium border-b border-gray-50 ${
                pathname === link.href ? "font-bold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
