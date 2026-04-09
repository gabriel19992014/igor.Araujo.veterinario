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
    title: "Consulta domiciliar",
    description: "Avaliação clínica completa na sua casa para reduzir estresse do pet.",
    icon: Stethoscope,
  },
  {
    title: "Vacinação em casa",
    description: "Protocolos atualizados aplicados com conforto e segurança no domicílio.",
    icon: ShieldPlus,
  },
  {
    title: "Check-up domiciliar",
    description: "Acompanhamento preventivo para detectar alterações com antecedência.",
    icon: HeartPulse,
  },
  {
    title: "Coleta e exames",
    description: "Encaminhamento e orientação de exames com suporte clínico cuidadoso.",
    icon: Microscope,
  },
  {
    title: "Atestado de viagem",
    description: "Documentação veterinária para viagens nacionais e internacionais.",
    icon: Plane,
  },
  {
    title: "Curativos e acompanhamento",
    description: "Cuidados pós-procedimento e retornos agendados no atendimento domiciliar.",
    icon: FileText,
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">Serviços</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--ink-900)] sm:text-4xl">
            Serviços veterinários no conforto do seu lar
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
