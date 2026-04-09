import { ArrowRight } from "lucide-react";

import { whatsappUrl } from "@/lib/site";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-blue-soft)] py-16 sm:py-20">
      <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/45 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-20 h-60 w-60 rounded-full bg-[var(--brand-blue)]/30 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">Atendimento rapido e sem complicacao</p>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--ink-900)] sm:text-4xl">Agende agora a consulta do seu pet</h2>
          <p className="text-[var(--ink-600)]">Fale com a equipe em poucos segundos: rapido, facil e pratico.</p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--brand-green)] px-8 text-base font-semibold text-white shadow-[0_8px_30px_rgba(22,163,74,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color-mix(in_oklab,var(--brand-green),black_8%)]"
        >
          Chamar no WhatsApp
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
