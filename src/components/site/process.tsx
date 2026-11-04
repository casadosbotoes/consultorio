import { CalendarCheck, ClipboardList, Stethoscope, Syringe } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const STEPS = [
  {
    icon: Stethoscope,
    title: "1. Avaliação e diagnóstico",
    description:
      "Escuta atenta da sua história, exame clínico e exames de imagem (raio-x e tomografia) para entender o caso por completo.",
  },
  {
    icon: ClipboardList,
    title: "2. Planejamento personalizado",
    description:
      "Um plano de tratamento claro, com etapas, prazos e valores explicados sem juridiquês — você decide com segurança.",
  },
  {
    icon: Syringe,
    title: "3. Tratamento com conforto",
    description:
      "Procedimentos realizados com técnica moderna e anestesia eficaz, sempre priorizando o seu bem-estar.",
  },
  {
    icon: CalendarCheck,
    title: "4. Acompanhamento",
    description:
      "Retornos programados e acompanhamento pós-operatório para garantir resultados saudáveis e duradouros.",
  },
];

export function ProcessSection() {
  return (
    <section id="processo" aria-labelledby="processo-titulo" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          id="processo-titulo"
          eyebrow="Como funciona"
          title={
            <>
              Um caminho claro até o{" "}
              <span className="text-gradient-teal">seu novo sorriso</span>
            </>
          }
          description="Você sabe exatamente o que esperar em cada etapa — desde a primeira consulta até a manutenção do resultado."
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, idx) => (
            <Reveal key={step.title} delay={idx * 0.08}>
              <li className="relative flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span
                  aria-hidden="true"
                  className="font-heading absolute -top-3.5 right-5 grid h-9 w-9 place-items-center rounded-xl bg-teal-600 text-sm font-extrabold text-white shadow-md"
                >
                  {idx + 1}
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 text-teal-700">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="font-heading mt-4 text-base font-extrabold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
