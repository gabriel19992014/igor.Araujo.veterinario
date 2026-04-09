export const clinicInfo = {
  name: "Clinica Veterinaria Vet Cuidado",
  city: "Manaus",
  phoneRaw: "5592993198359",
  phoneDisplay: "(92) 99319-8359",
  address: "Av. Djalma Batista, 1234 - Manaus/AM",
  veterinarian: {
    name: "Dr. Igor Araujo",
    specialty: "Medico Veterinario",
    crmv: "CRMV-AM 1234",
  },
} as const;

export const siteAssets = {
  logo: "/images/branding/logo-igor-araujo.webp",
  logoAlt: `Logo ${clinicInfo.veterinarian.name} Atendimento Veterinario`,
  veterinarianPhoto: "/images/team/dr-igor-real.webp",
} as const;

export const siteMetadata = {
  title: `${clinicInfo.name} em ${clinicInfo.city} | Atendimento para pets`,
  description:
    `Clinica veterinaria em ${clinicInfo.city} com consulta pet, vacinas, exames, check-up e atendimento humanizado. Agendamento rapido pelo WhatsApp.`,
  openGraphDescription:
    `Cuidado completo para seu pet com consultas, vacinas, exames e agendamento facil pelo WhatsApp em ${clinicInfo.city}.`,
  twitterDescription: `Veterinario em ${clinicInfo.city} com consulta pet, vacinacao, exames e atendimento humanizado.`,
  keywords: ["veterinario", "clinica veterinaria", "consulta pet", clinicInfo.city, "vacina pet"],
} as const;

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(clinicInfo.city)}&output=embed`;

const defaultMessage = "Ola! Quero agendar uma consulta para meu pet.";

export const whatsappUrl = `https://wa.me/${clinicInfo.phoneRaw}?text=${encodeURIComponent(defaultMessage)}`;