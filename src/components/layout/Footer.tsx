import { Phone } from "lucide-react";

import { clinicInfo } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[var(--ink-900)] text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-white/65">Atendimento Veterinário Domiciliar</p>
          <h2 className="text-2xl font-bold tracking-tight">{clinicInfo.veterinarian.name}</h2>
          <p className="max-w-sm text-sm text-white/75">
            Seu pet merece cuidado profissional no conforto da sua casa, com atendimento humanizado e equipe dedicada.
          </p>
        </div>

        <div className="space-y-3 text-sm text-white/85">
          <p className="font-semibold">Contato</p>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4" /> {clinicInfo.phoneDisplay}
          </p>
          <p>Atendimento domiciliar em {clinicInfo.city} para consultas, vacinas e check-up.</p>
          <p className="pt-2 text-sm text-white/70">© {new Date().getFullYear()} {clinicInfo.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
