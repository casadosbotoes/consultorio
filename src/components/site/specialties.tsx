import { Bone, Check, SmilePlus, Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal, SectionHeading } from "./reveal";
import { WhatsAppIcon } from "./icons";

const SPECIALTIES = [
  {
    icon: Bone,
    name: "Implantodontia",
    slug: "implantodontia",
    description:
      "Reposição de dentes perdidos com implantes de titânio, devolvendo mastigação, segurança e naturalidade ao seu sorriso.",
    items: [
      "Implante de um dente ou de vários",
      "Enxerto ósseo e levantamento de seio",
      "Coroa sobre implante",
      "Prótese fixa sobre implante (protocolo)",
    ],
    message:
      "Olá, Dr. Marcelo! Gostaria de uma avaliação para implante dentário. Pode me explicar como funciona?",
  },
  {
    icon: SmilePlus,
    name: "Reabilitação Oral",
    slug: "reabilitacao-oral",
    description:
      "Reconstrução completa de bocas com perdas dentárias múltiplas ou desgastes extensos, unindo implantes e próteses em um plano único.",
    items: [
      "Reabilitação total do sorriso",
      "Prótese sobre implante e overdenture",
      "Próteses fixas e removíveis",
      "Oclusão ajustada com precisão",
    ],
    message:
      "Olá, Dr. Marcelo! Perdi alguns dentes e gostaria de avaliar uma reabilitação oral. Podemos conversar?",
  },
  {
    icon: Sparkles,
    name: "Dentística",
    slug: "dentistica",
    description:
      "Estética e restauração dos dentes com técnicas modernas, para um sorriso harmônico, branco e natural.",
    items: [
      "Facetas de porcelana",
      "Lentes de contato dental",
      "Clareamento dental",
      "Restaurações estéticas",
    ],
    message:
      "Olá, Dr. Marcelo! Tenho interesse em tratamento estético (dentística). Como agendar uma avaliação?",
  },
] as const;

const MINI_SERVICES = [
  { title: "Implante dentário", desc: "Titânio biocompatível, com osseointegração" },
  { title: "Prótese sobre implante", desc: "Fixa ou removível, conforme o seu caso" },
  { title: "Coroa sobre implante", desc: "Materiais estéticos e resistentes" },
  { title: "Enxerto ósseo", desc: "Base sólida para o implante" },
  { title: "Lentes de contato dental", desc: "Pouquíssimo desgaste dental" },
  { title: "Facetas de porcelana", desc: "Forma, cor e harmonia" },
  { title: "Clareamento dental", desc: "Sorriso mais branco com segurança" },
  { title: "Restaurações estéticas", desc: "Invisíveis e duradouras" },
];

export function SpecialtiesSection() {
  return (
    <section
      id="especialidades"
      aria-labelledby="especialidades-titulo"
      className="scroll-mt-24 bg-gradient-to-b from-white via-teal-50/50 to-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          id="especialidades-titulo"
          eyebrow="Especialidades"
          title={
            <>
              Tratamentos especializados em{" "}
              <span className="text-gradient-teal">Ribeirão Preto</span>
            </>
          }
          description="Da reposição de um único dente à reabilitação completa do sorriso: tratamentos conduzidos com diagnóstico criterioso e planejamento individual."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SPECIALTIES.map((s, idx) => (
            <Reveal key={s.slug} delay={idx * 0.1}>
              <article className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-xl">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-teal-600 text-white shadow-md shadow-teal-600/25 transition-transform duration-300 group-hover:scale-110">
                  <s.icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="font-heading mt-5 text-xl font-extrabold text-slate-900">
                  {s.name}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">{s.description}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={site.whatsapp.href(s.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#25D366]/30 bg-[#25D366]/5 px-4 py-3 text-sm font-bold text-[#128C4B] transition-all hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Agendar avaliação de {s.name.toLowerCase()}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Tratamentos relacionados (palavras-chave SEO) */}
        <Reveal delay={0.15}>
          <div className="mt-12 rounded-3xl border border-teal-100 bg-white/80 p-7 backdrop-blur sm:p-9">
            <h3 className="font-heading text-lg font-extrabold text-slate-900 sm:text-xl">
              Também realizamos no consultório
            </h3>
            <ul className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
              {MINI_SERVICES.map((m) => (
                <li key={m.title}>
                  <p className="font-heading text-sm font-bold text-teal-900">{m.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">{m.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
