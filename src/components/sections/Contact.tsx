import { Clock3, MapPin, Phone, PhoneCall } from "lucide-react";

import { TrackedExternalLink } from "@/components/ui/TrackedExternalLink";
import { clinicInfo, mapEmbedUrl, whatsappUrl } from "@/lib/site";

export function Contact() {
  return (
    <section id="contato" className="bg-[var(--surface-2)] py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6 rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_10px_50px_rgba(17,24,39,0.08)] sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">Contato</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--ink-900)]">Fale com a nossa equipe</h2>
          </div>

          <div className="space-y-3 text-[var(--ink-700)]">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[var(--brand-green)]" /> {clinicInfo.address}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[var(--brand-green)]" /> {clinicInfo.phoneDisplay}
            </p>
            <p className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-[var(--brand-green)]" /> Atendimento rápido para consultas e emergências
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <TrackedExternalLink
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Falar com a clínica pelo WhatsApp"
              title="Falar com a clínica pelo WhatsApp"
              eventName="whatsapp_click"
              eventParams={{ placement: "contact_section" }}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-green)] px-6 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(22,163,74,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color-mix(in_oklab,var(--brand-green),black_8%)]"
            >
              <PhoneCall className="h-4 w-4" />
              Falar no WhatsApp
            </TrackedExternalLink>
            <TrackedExternalLink
              href={`tel:+${clinicInfo.phoneRaw}`}
              aria-label="Ligar agora para a clínica"
              title="Ligar agora para a clínica"
              eventName="phone_click"
              eventParams={{ placement: "contact_section" }}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-[var(--brand-blue)]/25 bg-white px-6 text-sm font-semibold text-[var(--brand-blue)] transition-all duration-300 hover:bg-[var(--brand-blue)] hover:text-white"
            >
              <Phone className="h-4 w-4" />
              Ligar agora
            </TrackedExternalLink>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white p-2 shadow-[0_10px_50px_rgba(17,24,39,0.08)]">
          <iframe
            title="Mapa da clínica veterinária"
            src={mapEmbedUrl}
            loading="lazy"
            className="h-[480px] w-full rounded-[1.6rem]"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
