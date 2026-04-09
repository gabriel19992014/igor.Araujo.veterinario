import { MessageCircleMore } from "lucide-react";

import { whatsappUrl } from "@/lib/site";

export function WhatsappFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_35px_rgba(37,211,102,0.5)] transition hover:scale-105"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircleMore className="h-7 w-7" />
    </a>
  );
}
