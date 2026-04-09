export const clinicInfo = {
  name: "Clínica Veterinária Vet Cuidado",
  city: "Manaus",
  phoneRaw: "5592993198359",
  phoneDisplay: "(92) 99319-8359",
  address: "Av. Djalma Batista, 1234 - Manaus/AM",
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
  logoAlt: `Logo ${clinicInfo.veterinarian.name} Atendimento Veterinário`,
  veterinarianPhoto: "/images/team/dr-igor-real.webp",
} as const;

export const siteMetadata = {
  title: `${clinicInfo.name} em ${clinicInfo.city} | Atendimento para pets`,
  description:
    `Clínica veterinária em ${clinicInfo.city} com consulta pet, vacinas, exames, check-up e atendimento humanizado. Agendamento rápido pelo WhatsApp.`,
  openGraphDescription:
    `Cuidado completo para seu pet com consultas, vacinas, exames e agendamento fácil pelo WhatsApp em ${clinicInfo.city}.`,
  twitterDescription: `Veterinário em ${clinicInfo.city} com consulta pet, vacinação, exames e atendimento humanizado.`,
  keywords: ["veterinário", "clínica veterinária", "consulta pet", clinicInfo.city, "vacina pet"],
} as const;

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(clinicInfo.city)}&output=embed`;

const defaultMessage = "Olá! Quero agendar uma consulta para meu pet.";

export const whatsappUrl = `https://wa.me/${clinicInfo.phoneRaw}?text=${encodeURIComponent(defaultMessage)}`;