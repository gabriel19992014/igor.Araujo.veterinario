import { seoFaqs } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--ink-900)] sm:text-4xl">
            Dúvidas frequentes sobre atendimento veterinário domiciliar em Manaus
          </h2>
        </div>

        <div className="grid gap-3 sm:gap-4">
          {seoFaqs.map((item) => (
            <article
              key={item.question}
              className="rounded-2xl border border-black/5 bg-[var(--surface-2)] p-5 shadow-[0_8px_24px_rgba(17,24,39,0.06)]"
            >
              <h3 className="text-base font-bold text-[var(--ink-900)] sm:text-lg">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--ink-600)] sm:text-base">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
