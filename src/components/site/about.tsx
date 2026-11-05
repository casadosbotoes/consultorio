import Image from "next/image";
import { BadgeCheck, GraduationCap } from "lucide-react";
import { site, asset } from "@/lib/site";
import { Reveal, SectionHeading } from "./reveal";
import { WhatsAppIcon } from "./icons";

const CREDENTIALS = [
  "Especialista em Implantodontia",
  "Especialista em Reabilitação Oral",
  "Especialista em Dentística",
];

const PILLARS = [
  "Avaliação completa com exames de imagem",
  "Plano de tratamento claro, com etapas e valores",
  "Conforto e segurança em todas as fases",
  "Acompanhamento próximo no pós-operatório",
];

export function AboutSection() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Imagem */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-teal-200"
            />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={asset("/images/sobre-atendimento.jpg")}
                alt="Dr. Marcelo Dercatshoff Pereira atendendo paciente no consultório odontológico em Ribeirão Preto"
                width={1066}
                height={800}
                sizes="(max-width: 1024px) 100vw, 520px"
                className="h-auto w-full object-cover"
                quality={82}
              />
            </div>
            <div className="absolute -bottom-6 -right-2 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-slate-100 sm:-right-6">
              <p className="font-heading text-sm font-extrabold text-slate-900">
                Atendimento com hora marcada
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                Consultório no Edifício Center Plaza · Centro
              </p>
            </div>
          </div>
        </Reveal>

        {/* Texto */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            id="sobre-titulo"
            align="left"
            eyebrow="Sobre o consultório"
            title={
              <>
                Dr. Marcelo Dercatshoff <span className="text-gradient-teal">Pereira</span>
              </>
            }
          />

          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Cirurgião-dentista dedicado a recuperar sorrisos por meio da{" "}
              <strong className="font-semibold text-slate-800">Implantodontia</strong>, da{" "}
              <strong className="font-semibold text-slate-800">Reabilitação Oral</strong> e da{" "}
              <strong className="font-semibold text-slate-800">Dentística</strong>. Cada caso é
              avaliado individualmente, com diagnóstico preciso e um plano de tratamento
              transparente — do primeiro implante à estética final do sorriso.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              O consultório fica no <strong className="font-semibold text-slate-800">Centro de Ribeirão Preto</strong>,
              no Edifício Center Plaza, com atendimento personalizado e foco total no seu conforto.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {CREDENTIALS.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-2 rounded-xl bg-secondary px-3.5 py-2 text-sm font-semibold text-teal-900"
                >
                  <GraduationCap className="h-4 w-4 text-teal-700" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-7 space-y-3">
              {PILLARS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-slate-700">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" aria-hidden="true" />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <a
              href={site.whatsapp.href(
                "Olá, Dr. Marcelo! Gostaria de conhecer melhor os tratamentos e agendar uma avaliação.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5b]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Conversar com o consultório
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
