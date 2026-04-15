import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#eaeaea] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Instagram Icon */}
          <a
            href="https://instagram.com/ebenengenharia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#072763] hover:text-[#c7962e] transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logosvg.svg"
              alt="EBEN Engenharia"
              width={160}
              height={54}
              className="h-11 w-auto"
            />
          </Link>

          {/* Footer Links */}
          <nav className="flex flex-col items-center md:items-start gap-2 text-sm text-[#072763]">
            <Link href="/servicos" className="hover:text-[#c7962e] transition-colors">
              Serviços
            </Link>
            <Link href="/sobre-nos" className="hover:text-[#c7962e] transition-colors">
              Sobre nós
            </Link>
            <Link href="/contato" className="hover:text-[#c7962e] transition-colors">
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
