export const clinicInfo = {
  name: "Vet Cuidado Domiciliar",
  city: "Manaus",
  phoneRaw: "5592993198359",
  phoneDisplay: "(92) 99319-8359",
  veterinarian: {
    name: "Dr. Igor Araújo",
    specialty: "Médico Veterinário",
    crmv: "CRMV-AM 1234",
  },
} as const;

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const siteAssets = {
  logo: "/images/branding/logo-igor-araujo.webp",
  logoAlt: `Logo ${clinicInfo.veterinarian.name} Atendimento Veterinário Domiciliar`,
  veterinarianPhoto: "/images/team/dr-igor-real.webp",
} as const;

export const siteMetadata = {
  siteName: `${clinicInfo.veterinarian.name} Atendimento Veterinário Domiciliar`,
  title: `${clinicInfo.veterinarian.name} | Atendimento veterinário domiciliar em ${clinicInfo.city}`,
  description:
    `Atendimento veterinário domiciliar em ${clinicInfo.city} com consulta pet, vacinas, check-up e acompanhamento no conforto da sua casa. Agendamento rápido pelo WhatsApp.`,
  openGraphDescription:
    `Leve o cuidado veterinário até seu pet com consultas domiciliares, vacinação e acompanhamento em ${clinicInfo.city}.`,
  twitterDescription: `Veterinário domiciliar em ${clinicInfo.city} para consultas, vacinação e check-up na sua casa.`,
  openGraphImage: "/images/branding/logo-igor-araujo.webp",
  keywords: [
    "veterinário domiciliar em Manaus",
    "consulta veterinária em casa",
    "vacina pet em casa",
    "check-up pet domiciliar",
    "atendimento veterinário domiciliar",
    clinicInfo.city,
  ],
} as const;

export const seoServiceNames = [
  "Consulta veterinária domiciliar",
  "Vacinação em domicílio para pets",
  "Check-up preventivo para cães e gatos",
  "Coleta e orientação de exames",
  "Atestado veterinário para viagens",
  "Curativos e acompanhamento domiciliar",
] as const;

export const seoFaqs = [
  {
    question: "Como funciona o atendimento veterinário domiciliar em Manaus?",
    answer:
      "O atendimento é agendado pelo WhatsApp. O veterinário vai até sua casa em Manaus para consulta, avaliação clínica e orientações de tratamento para seu pet.",
  },
  {
    question: "Vocês atendem cães e gatos em domicílio?",
    answer:
      "Sim. O atendimento domiciliar é realizado para cães e gatos, com foco em conforto, menor estresse do animal e cuidado individualizado.",
  },
  {
    question: "É possível fazer vacinação de pet em casa?",
    answer:
      "Sim. A vacinação domiciliar segue orientação veterinária e protocolo atualizado, garantindo segurança no conforto da sua casa.",
  },
  {
    question: "Qual região vocês atendem?",
    answer:
      "O atendimento é realizado em Manaus, com agendamento prévio e confirmação de disponibilidade pelo WhatsApp.",
  },
] as const;

const defaultMessage = "Olá! Quero agendar um atendimento veterinário domiciliar para meu pet.";

export const whatsappUrl = `https://wa.me/${clinicInfo.phoneRaw}?text=${encodeURIComponent(defaultMessage)}`;