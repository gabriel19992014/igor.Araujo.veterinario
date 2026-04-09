import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { clinicInfo, siteAssets } from "@/lib/site";

const differentials = [
  "Atendimento humanizado para cães e gatos",
  "Consulta com orientação clara para o tutor",
  "Acompanhamento dedicado no pós-consulta",
];

export function About() {
  return (
    <section id="sobre" className="bg-[var(--surface-2)] py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">Sobre o profissional</p>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--ink-900)] sm:text-4xl">
            Confiança para cuidar de quem faz parte da sua família
          </h2>
          <p className="leading-8 text-[var(--ink-600)]">
            {clinicInfo.veterinarian.name}, {clinicInfo.veterinarian.specialty}, atua com foco em medicina preventiva,
            atendimento clínico e acolhimento de tutores. Cada consulta é pensada para ser clara, cuidadosa e eficiente.
          </p>

          <div className="grid gap-3 text-sm">
            <p className="rounded-xl border border-[var(--brand-blue)]/20 bg-white px-4 py-3 text-[var(--ink-700)]">
              <span className="font-semibold text-[var(--ink-900)]">Nome:</span> {clinicInfo.veterinarian.name}
            </p>
            <p className="rounded-xl border border-[var(--brand-blue)]/20 bg-white px-4 py-3 text-[var(--ink-700)]">
              <span className="font-semibold text-[var(--ink-900)]">Especialidade:</span> {clinicInfo.veterinarian.specialty}
            </p>
            <p className="rounded-xl border border-[var(--brand-blue)]/20 bg-white px-4 py-3 text-[var(--ink-700)]">
              <span className="font-semibold text-[var(--ink-900)]">Registro:</span> {clinicInfo.veterinarian.crmv}
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_14px_60px_rgba(17,24,39,0.08)]">
          <div className="mx-auto mb-6 w-fit overflow-hidden rounded-full border-4 border-[var(--surface-1)] p-1 shadow-md">
            <Image
              src={siteAssets.veterinarianPhoto}
              alt={`Retrato de ${clinicInfo.veterinarian.name}`}
              width={180}
              height={180}
              className="h-40 w-40 rounded-full object-cover object-[center_20%]"
            />
          </div>

          <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink-500)]">Atendimento com excelência</p>
          <div className="mt-6 space-y-4">
            {differentials.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--brand-green)]" />
                <p className="text-[var(--ink-700)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
