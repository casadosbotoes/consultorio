import { site } from "./site";

/**
 * Schemas JSON-LD para SEO/AEO.
 * - Dentist (LocalBusiness): dados NAP do consultório
 * - FAQPage: perguntas e respostas para Answer Engine Optimization
 * - WebSite: identidade do site
 */

export const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${site.url}/#consultorio`,
  name: "Dr. Marcelo Dercatshoff Pereira — Consultório Odontológico",
  alternateName: "Consultório Odontológico Dr. Marcelo Dercatshoff",
  url: site.url,
  image: `${site.url}/images/og-image.jpg`,
  logo: `${site.url}/icon.svg`,
  telephone: site.whatsapp.intl,
  priceRange: "$$",
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Visconde de Inhaúma, 580 - Sala 410, Edifício Center Plaza",
    addressLocality: "Ribeirão Preto",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Ribeirão Preto" },
    { "@type": "AdministrativeArea", name: "Região de Ribeirão Preto" },
  ],
  hasMap: site.address.mapsUrl,
  founder: {
    "@type": "Person",
    name: "Marcelo Dercatshoff Pereira",
    honorificPrefix: "Dr.",
    givenName: "Marcelo",
    familyName: "Dercatshoff Pereira",
    jobTitle: "Cirurgião-dentista",
    knowsAbout: [
      "Implantodontia",
      "Implantes dentários",
      "Reabilitação oral",
      "Dentística",
      "Prótese sobre implante",
    ],
    worksFor: { "@id": `${site.url}/#consultorio` },
  },
  medicalSpecialty: ["Dentistry"],
  availableService: [
    { "@type": "MedicalProcedure", name: "Implante dentário" },
    { "@type": "MedicalProcedure", name: "Implante de um ou vários dentes" },
    { "@type": "MedicalProcedure", name: "Coroa sobre implante" },
    { "@type": "MedicalProcedure", name: "Prótese fixa sobre implante (protocolo)" },
    { "@type": "MedicalProcedure", name: "Enxerto ósseo" },
    { "@type": "MedicalProcedure", name: "Reabilitação oral" },
    { "@type": "MedicalProcedure", name: "Overdenture sobre implante" },
    { "@type": "MedicalProcedure", name: "Facetas de porcelana" },
    { "@type": "MedicalProcedure", name: "Lentes de contato dental" },
    { "@type": "MedicalProcedure", name: "Clareamento dental" },
    { "@type": "MedicalProcedure", name: "Restaurações estéticas" },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quanto custa um implante dentário em Ribeirão Preto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O valor de um implante dentário varia conforme o caso: número de dentes a repor, necessidade de enxerto ósseo, tipo de coroa e de prótese. Por isso, a avaliação presencial é fundamental para um orçamento preciso e sem surpresas. Agende sua avaliação pelo WhatsApp (16) 99232-8650 e receba um plano de tratamento detalhado.",
      },
    },
    {
      "@type": "Question",
      name: "O implante dentário dói?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. A cirurgia de implante é realizada com anestesia local e, na maioria dos casos, o pós-operatório é tranquilo, com apenas leve desconforto por alguns dias, controlado com medicação comum. O Dr. Marcelo acompanha o paciente em todas as etapas da recuperação.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo dura um implante dentário?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O implante de titânio, após a osseointegração, pode durar décadas — até a vida toda — quando há boa higiene bucal, manutenção periódica no consultório e acompanhamento profissional. A coroa sobre o implante pode exigir troca após muitos anos de uso, conforme o desgaste natural.",
      },
    },
    {
      "@type": "Question",
      name: "O que é reabilitação oral?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reabilitação oral é a especialidade que devolve função, conforto e estética a bocas com perda de vários dentes ou desgastes extensos. Ela combina implantes, próteses fixas ou removíveis, coroas e tratamento da gengiva para reconstruir o sorriso de forma completa e planejada.",
      },
    },
    {
      "@type": "Question",
      name: "O que é dentística?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dentística é a especialidade da odontologia dedicada à estética e à restauração dos dentes: facetas de porcelana, lentes de contato dental, clareamento e restaurações estéticas que devolvem a forma, a cor e a harmonia natural do sorriso.",
      },
    },
    {
      "@type": "Question",
      name: "Quem é o Dr. Marcelo Dercatshoff Pereira?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Marcelo Dercatshoff Pereira é cirurgião-dentista especializado em Implantodontia (implantes dentários), Reabilitação Oral e Dentística, atendendo no Centro de Ribeirão Preto, no Edifício Center Plaza (Rua Visconde de Inhaúma, 580 — Sala 410).",
      },
    },
    {
      "@type": "Question",
      name: "Onde fica o consultório e como agendar uma consulta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O consultório fica na Rua Visconde de Inhaúma, 580 — Sala 410, Edifício Center Plaza, Centro de Ribeirão Preto/SP. O agendamento é feito pelo WhatsApp (16) 99232-8650, com atendimento por hora marcada.",
      },
    },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dr. Marcelo Dercatshoff Pereira — Consultório Odontológico em Ribeirão Preto",
  url: site.url,
  inLanguage: "pt-BR",
  publisher: { "@id": `${site.url}/#consultorio` },
};
