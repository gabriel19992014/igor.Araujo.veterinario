import Image from "next/image";
import { MapPin, PhoneCall, Sparkles } from "lucide-react";

import { clinicInfo, siteAssets, whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[var(--surface-1)]">
      <div className="hero-noise pointer-events-none absolute inset-0" />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:pb-24 lg:pt-20">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-blue)]/25 bg-white px-4 py-2 text-sm font-semibold text-[var(--brand-blue)]">
            <Sparkles className="h-4 w-4" />
            Clinica veterinaria em {clinicInfo.city}
          </div>

          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-[var(--ink-900)] sm:text-5xl lg:text-6xl">
              Cuidando do seu pet com carinho e atencao todos os dias
            </h1>
            <p className="max-w-xl text-lg leading-8 text-[var(--ink-600)]">
              Atendimento veterinario completo para caes e gatos com consultas, vacinas, check-up, exames e agendamento rapido pelo WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--brand-green)] px-8 text-base font-semibold text-white shadow-[0_8px_30px_rgba(22,163,74,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color-mix(in_oklab,var(--brand-green),black_8%)]"
            >
              <PhoneCall className="h-4 w-4" />
              Agende agora pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--brand-blue)]/25 bg-white px-8 text-base font-semibold text-[var(--brand-blue)] transition-all duration-300 hover:bg-[var(--brand-blue)] hover:text-white"
            >
              Ver servicos
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-blue)]">Localizacao</p>
              <p className="mt-2 flex items-center gap-2 text-sm text-[var(--ink-700)]">
                <MapPin className="h-4 w-4 text-[var(--brand-green)]" />
                {clinicInfo.address}
              </p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold text-[var(--ink-900)]">+3.000</p>
              <p className="text-sm text-[var(--ink-600)]">Atendimentos com cuidado humanizado</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--brand-green)]/30 blur-2xl" />
          <div className="absolute -bottom-10 -left-8 h-40 w-40 rounded-full bg-[var(--brand-blue)]/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-green)] p-[1px] shadow-[0_20px_80px_rgba(17,24,39,0.2)]">
            <div className="space-y-6 rounded-[calc(2rem-1px)] bg-white p-5 sm:p-7">
              <div className="overflow-hidden rounded-3xl bg-[var(--surface-2)]">
                <Image
                  src={siteAssets.logo}
                  alt={siteAssets.logoAlt}
                  width={768}
                  height={768}
                  priority
                  className="mx-auto h-auto w-full max-w-[430px] p-4"
                />
              </div>

              <div className="mx-auto w-fit rounded-full border-4 border-white bg-[var(--surface-1)] p-1 shadow-lg">
                <Image
                  src={siteAssets.veterinarianPhoto}
                  alt={`Foto profissional de ${clinicInfo.veterinarian.name}`}
                  width={120}
                  height={120}
                  className="h-28 w-28 rounded-full object-cover object-[center_20%]"
                />
              </div>

              <div className="text-center">
                <p className="text-lg font-bold text-[var(--ink-900)]">{clinicInfo.veterinarian.name}</p>
                <p className="text-sm text-[var(--ink-600)]">
                  {clinicInfo.veterinarian.specialty} | {clinicInfo.veterinarian.crmv}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
