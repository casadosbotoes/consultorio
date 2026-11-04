/**
 * Dados centralizados do consultório.
 * Altere aqui para atualizar telefone, endereço, URL do site e redes.
 */

export const SITE_URL = "https://casadosbotoes.github.io/consultorio";

export const site = {
  url: SITE_URL,
  name: "Dr. Marcelo Dercatshoff Pereira",
  shortName: "Dr. Marcelo Dercatshoff",
  title:
    "Implantes Dentários e Reabilitação Oral em Ribeirão Preto | Dr. Marcelo Dercatshoff Pereira",
  description:
    "Consultório odontológico do Dr. Marcelo Dercatshoff Pereira no Centro de Ribeirão Preto: implantes dentários, reabilitação oral e dentística estética. Agende sua avaliação pelo WhatsApp (16) 99232-8650 — Rua Visconde de Inhaúma, 580, Sala 410, Edifício Center Plaza.",
  keywords: [
    "implante dentário Ribeirão Preto",
    "implantes dentários Ribeirão Preto",
    "implantodontista Ribeirão Preto",
    "reabilitação oral Ribeirão Preto",
    "dentística Ribeirão Preto",
    "dentista Ribeirão Preto",
    "clínica odontológica Ribeirão Preto",
    "consultório odontológico Ribeirão Preto",
    "prótese sobre implante Ribeirão Preto",
    "coroa sobre implante",
    "lentes de contato dental Ribeirão Preto",
    "facetas de porcelana Ribeirão Preto",
    "clareamento dental Ribeirão Preto",
    "enxerto ósseo dentário",
    "sorria com segurança",
    "Dr. Marcelo Dercatshoff Pereira",
    "dentista centro de Ribeirão Preto",
  ],
  whatsapp: {
    display: "(16) 99232-8650",
    intl: "+5516992328650",
    link: "https://wa.me/5516992328650",
    href: (message: string) =>
      `https://wa.me/5516992328650?text=${encodeURIComponent(message)}`,
    defaultMessage:
      "Olá, Dr. Marcelo! Visitei o site e gostaria de agendar uma avaliação. Pode me ajudar?",
  },
  address: {
    street: "Rua Visconde de Inhaúma, 580 — Sala 410",
    building: "Edifício Center Plaza",
    district: "Centro",
    city: "Ribeirão Preto",
    state: "SP",
    full: "Rua Visconde de Inhaúma, 580 — Sala 410, Edifício Center Plaza, Centro, Ribeirão Preto — SP",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+Visconde+de+Inha%C3%BAma+580,+Centro,+Ribeir%C3%A3o+Preto+-+SP",
    mapsEmbed:
      "https://maps.google.com/maps?q=Rua%20Visconde%20de%20Inha%C3%BAma%20580%2C%20Centro%2C%20Ribeir%C3%A3o%20Preto%20-%20SP&t=&z=17&ie=UTF8&iwloc=&output=embed",
  },
  hours: "Atendimento com hora marcada — consulte horários disponíveis pelo WhatsApp",
} as const;
