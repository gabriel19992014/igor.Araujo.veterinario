import Image from "next/image";
import { PhoneCall } from "lucide-react";

import { siteAssets, whatsappUrl } from "@/lib/site";

const navItems = [
  { label: "Servicos", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-2.5 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center">
          <Image
            src={siteAssets.logo}
            alt={siteAssets.logoAlt}
            width={220}
            height={94}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-semibold tracking-[0.01em] text-[var(--ink-700)] transition-colors hover:text-[var(--brand-blue)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-9 items-center justify-center gap-2 rounded-full bg-[var(--brand-green)] px-3 text-xs font-semibold text-white shadow-[0_8px_30px_rgba(22,163,74,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color-mix(in_oklab,var(--brand-green),black_8%)] sm:h-10 sm:px-5 sm:text-sm"
        >
          <PhoneCall className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </header>
  );
}
