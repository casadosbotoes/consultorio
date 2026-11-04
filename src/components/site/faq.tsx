"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "./reveal";

/**
 * Perguntas frequentes — conteúdo espelha o schema FAQPage (src/lib/schema.ts)
 * para Answer Engine Optimization (respostas diretas para buscadores e IAs).
 */
const FAQS = [
  {
    q: "Quanto custa um implante dentário em Ribeirão Preto?",
    a: "O valor de um implante dentário varia conforme o caso: número de dentes a repor, necessidade de enxerto ósseo, tipo de coroa e de prótese. Por isso, a avaliação presencial é fundamental para um orçamento preciso e sem surpresas. Agende sua avaliação pelo WhatsApp (16) 99232-8650 e receba um plano de tratamento detalhado.",
  },
  {
    q: "O implante dentário dói?",
    a: "Não. A cirurgia de implante é realizada com anestesia local e, na maioria dos casos, o pós-operatório é tranquilo, com apenas leve desconforto por alguns dias, controlado com medicação comum. O Dr. Marcelo acompanha o paciente em todas as etapas da recuperação.",
  },
  {
    q: "Quanto tempo dura um implante dentário?",
    a: "O implante de titânio, após a osseointegração, pode durar décadas — até a vida toda — quando há boa higiene bucal, manutenção periódica no consultório e acompanhamento profissional. A coroa sobre o implante pode exigir troca após muitos anos de uso, conforme o desgaste natural.",
  },
  {
    q: "O que é reabilitação oral?",
    a: "Reabilitação oral é a especialidade que devolve função, conforto e estética a bocas com perda de vários dentes ou desgastes extensos. Ela combina implantes, próteses fixas ou removíveis, coroas e tratamento da gengiva para reconstruir o sorriso de forma completa e planejada.",
  },
  {
    q: "O que é dentística?",
    a: "Dentística é a especialidade da odontologia dedicada à estética e à restauração dos dentes: facetas de porcelana, lentes de contato dental, clareamento e restaurações estéticas que devolvem a forma, a cor e a harmonia natural do sorriso.",
  },
  {
    q: "Quem é o Dr. Marcelo Dercatshoff Pereira?",
    a: "Dr. Marcelo Dercatshoff Pereira é cirurgião-dentista especializado em Implantodontia (implantes dentários), Reabilitação Oral e Dentística, atendendo no Centro de Ribeirão Preto, no Edifício Center Plaza (Rua Visconde de Inhaúma, 580 — Sala 410).",
  },
  {
    q: "Onde fica o consultório e como agendar uma consulta?",
    a: "O consultório fica na Rua Visconde de Inhaúma, 580 — Sala 410, Edifício Center Plaza, Centro de Ribeirão Preto/SP. O agendamento é feito pelo WhatsApp (16) 99232-8650, com atendimento por hora marcada.",
  },
];

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-titulo"
      className="scroll-mt-24 bg-gradient-to-b from-white via-teal-50/50 to-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          id="faq-titulo"
          eyebrow="Dúvidas frequentes"
          title={
            <>
              Perguntas <span className="text-gradient-teal">frequentes</span>
            </>
          }
          description="Respostas diretas sobre implantes dentários, reabilitação oral e tratamentos estéticos em Ribeirão Preto."
        />

        <Reveal delay={0.1}>
          <Accordion
            type="single"
            collapsible
            className="mt-12 space-y-3"
            defaultValue="faq-0"
          >
            {FAQS.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`faq-${i}`}
                className="rounded-2xl border border-slate-100 bg-white px-6 shadow-sm data-[state=open]:border-teal-200 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="py-5 text-left font-heading text-base font-bold text-slate-900 hover:no-underline hover:text-teal-800 sm:text-lg [&>svg]:text-teal-600">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
