import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana A.",
    text: "Salvaram meu cachorro em uma madrugada. Equipe incrível e muito atenciosa.",
  },
  {
    name: "Carlos e Nina",
    text: "Atendimento rápido, diagnóstico preciso e acompanhamento depois da consulta.",
  },
  {
    name: "Josi R.",
    text: "A clínica passa muita confiança. Minha gata foi super bem tratada na cirurgia.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">Depoimentos</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--ink-900)] sm:text-4xl">
          Prova social que gera confiança
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-black/5 bg-[linear-gradient(160deg,#f0fdf4_0%,#eff6ff_100%)] p-8 shadow-[0_12px_50px_rgba(17,24,39,0.08)]"
            >
              <Quote className="h-9 w-9 text-[var(--brand-green)]" />
              <div className="mt-4 flex items-center gap-1 text-[var(--brand-green)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-lg leading-8 text-[var(--ink-700)]">
                <span aria-hidden="true">&ldquo;</span>
                {item.text}
                <span aria-hidden="true">&rdquo;</span>
              </p>
              <p className="mt-5 text-sm font-semibold text-[var(--ink-900)]">{item.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
