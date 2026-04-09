import {
  FileText,
  HeartPulse,
  Plane,
  Microscope,
  ShieldPlus,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    title: "Consultas",
    description: "Avaliacao clinica completa para orientar o melhor cuidado do pet.",
    icon: Stethoscope,
  },
  {
    title: "Vacinas",
    description: "Protocolos atualizados para prevencao e protecao em todas as fases.",
    icon: ShieldPlus,
  },
  {
    title: "Check-up",
    description: "Acompanhamento preventivo para detectar alteracoes com antecedencia.",
    icon: HeartPulse,
  },
  {
    title: "Exames",
    description: "Diagnostico com suporte laboratorial e orientacao precisa.",
    icon: Microscope,
  },
  {
    title: "Atestado de viagem",
    description: "Documentacao veterinaria para viagens nacionais e internacionais.",
    icon: Plane,
  },
  {
    title: "Curativos",
    description: "Cuidados pos-procedimento e tratamento de feridas com seguranca.",
    icon: FileText,
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">Servicos</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--ink-900)] sm:text-4xl">
            Tudo que seu pet precisa em um atendimento rapido e completo
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group rounded-3xl border border-black/5 bg-white p-6 shadow-[0_12px_50px_rgba(17,24,39,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand-green)]/15 text-[var(--brand-green)] transition group-hover:bg-[var(--brand-green)] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold tracking-tight text-[var(--ink-900)]">{service.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--ink-600)]">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
