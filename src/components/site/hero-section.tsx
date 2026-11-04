import { ArrowDown, HeartHandshake, MapPin, ShieldCheck, SmilePlus, Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import { Hero3DSlider } from "./hero-3d-slider";
import { Reveal } from "./reveal";
import { ToothIcon, WhatsAppIcon } from "./icons";

const TRUST = [
  { icon: ShieldCheck, label: "Planejamento personalizado" },
  { icon: Sparkles, label: "Estética natural" },
  { icon: HeartHandshake, label: "Atendimento humanizado" },
];

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-titulo"
      className="relative overflow-x-clip bg-gradient-to-b from-teal-50/80 via-white to-white"
    >
      {/* decoração de fundo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-10%] h-96 w-96 rounded-full bg-teal-100/60 blur-3xl" />
        <div className="absolute bottom-0 left-[-8%] h-72 w-72 rounded-full bg-teal-100/50 blur-3xl" />
        <div className="bg-dots absolute inset-x-0 top-0 h-64 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-14 pt-10 sm:px-6 sm:pt-16 lg:grid-cols-[1.02fr_1fr] lg:gap-16 lg:pb-20 lg:pt-14">
        {/* Coluna de texto */}
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-1.5 text-xs font-semibold text-teal-800 shadow-sm sm:text-sm">
              <MapPin className="h-3.5 w-3.5 text-teal-600" aria-hidden="true" />
              Centro de Ribeirão Preto · Atendimento com hora marcada
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              id="hero-titulo"
              className="font-heading mt-5 text-4xl leading-[1.08] font-extrabold tracking-tight text-slate-900 sm:text-5xl xl:text-[3.4rem]"
            >
              Recupere seu sorriso com{" "}
              <span className="text-gradient-teal">implantes dentários</span> e{" "}
              <span className="text-gradient-teal">reabilitação oral</span> em
              Ribeirão Preto
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              O <strong className="font-semibold text-slate-800">Dr. Marcelo Dercatshoff Pereira</strong>{" "}
              é cirurgião-dentista especializado em{" "}
              <strong className="font-semibold text-slate-800">Implantodontia</strong>,{" "}
              <strong className="font-semibold text-slate-800">Reabilitação Oral</strong> e{" "}
              <strong className="font-semibold text-slate-800">Dentística</strong>.
              Tratamentos planejados sob medida para devolver função, conforto e
              estética ao seu sorriso.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.whatsapp.href(site.whatsapp.defaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-7 py-4 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5b] hover:shadow-xl"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Agendar avaliação pelo WhatsApp
              </a>
              <a
                href="#especialidades"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-teal-700/25 bg-white px-7 py-4 text-base font-bold text-teal-800 transition-all hover:-translate-y-0.5 hover:border-teal-700/50 hover:bg-teal-50"
              >
                Conhecer especialidades
                <ArrowDown className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              {TRUST.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm font-medium text-slate-700"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-teal-100 text-teal-700">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Slider 3D */}
        <Reveal delay={0.2} y={32} className="relative">
          <div className="relative">
            <Hero3DSlider />

            {/* selos flutuantes */}
            <div
              aria-hidden="true"
              className="float-soft absolute -left-2 top-6 z-30 hidden items-center gap-2.5 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:flex lg:-left-6"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal-600 text-white">
                <ToothIcon className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold text-slate-900">Implantodontia</span>
                <span className="block text-xs text-slate-500">implantes com precisão</span>
              </span>
            </div>
            <div
              aria-hidden="true"
              className="float-soft-delay absolute -right-2 bottom-20 z-30 hidden items-center gap-2.5 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:flex lg:-right-6"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal-600 text-white">
                <SmilePlus className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold text-slate-900">Reabilitação Oral</span>
                <span className="block text-xs text-slate-500">seu sorriso de volta</span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
