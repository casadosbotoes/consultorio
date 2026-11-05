"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/site";

type Slide = {
  src: string;
  alt: string;
  tag: string;
  title: string;
};

const SLIDES: Slide[] = [
  {
    src: asset("/images/slider-implante.jpg"),
    alt: "Implante dentário de titânio com coroa sobre modelo didático — Implantodontia em Ribeirão Preto",
    tag: "Implantodontia",
    title: "Implantes dentários com planejamento",
  },
  {
    src: asset("/images/slider-sorriso.jpg"),
    alt: "Sorriso harmônico com dentes brancos e alinhados — estética dental em Ribeirão Preto",
    tag: "Dentística",
    title: "Estética e harmonia do sorriso",
  },
  {
    src: asset("/images/slider-reabilitacao.jpg"),
    alt: "Paciente sorrindo durante atendimento de reabilitação oral em Ribeirão Preto",
    tag: "Reabilitação Oral",
    title: "Reabilitação oral completa",
  },
  {
    src: asset("/images/slider-protese.jpg"),
    alt: "Coroa protética sendo posicionada sobre modelo de arcada dentária — prótese sobre implante",
    tag: "Prótese sobre implante",
    title: "Próteses com precisão",
  },
  {
    src: asset("/images/slider-atendimento.jpg"),
    alt: "Dentista atendendo paciente em consultório odontológico moderno e acolhedor",
    tag: "Atendimento humanizado",
    title: "Você no centro de tudo",
  },
  {
    src: asset("/images/slider-clinica.jpg"),
    alt: "Consultório odontológico moderno no Centro de Ribeirão Preto — Edifício Center Plaza",
    tag: "Estrutura moderna",
    title: "Consultório no Centro de Ribeirão Preto",
  },
];

const AUTOPLAY_MS = 5000;
const DRAG_THRESHOLD = 56;

/** Configuração visual por distância do slide ativo (efeito coverflow 3D) */
const LAYER = [
  { x: 0, z: 50, rot: 0, scale: 1, opacity: 1 }, // central
  { x: 60, z: -170, rot: 40, scale: 0.88, opacity: 0.72 }, // vizinho
  { x: 104, z: -330, rot: 52, scale: 0.76, opacity: 0.4 }, // distante (fallback)
];

function circularOffset(i: number, active: number, n: number) {
  let off = i - active;
  if (off > n / 2) off -= n;
  if (off < -n / 2) off += n;
  return off;
}

export function Hero3DSlider() {
  const n = SLIDES.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragging = useRef(false);
  const startX = useRef(0);
  const moved = useRef(0);

  // Exibe o slide central + vizinhos imediatos (coverflow limpo, sem vazamento nas bordas)
  const maxVisible = 1;

  const go = useCallback(
    (dir: 1 | -1) => setActive((a) => (a + dir + n) % n),
    [n],
  );

  // Autoplay (pausa em hover/foco/arraste)
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, go, active]);

  // ---- Arraste / swipe ----
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Não iniciar arraste quando o ponteiro começa em um controle interativo
    // (setas de navegação) — isso cancelaria o clique delas.
    if ((e.target as HTMLElement).closest("button, a")) return;
    dragging.current = true;
    startX.current = e.clientX;
    moved.current = 0;
    setPaused(true);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    moved.current = e.clientX - startX.current;
  };
  const endDrag = () => {
    if (!dragging.current) return;
    const dx = moved.current;
    dragging.current = false;
    if (Math.abs(dx) > DRAG_THRESHOLD) go(dx < 0 ? 1 : -1);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    }
  };

  const activeSlide = SLIDES[active];

  return (
    <div
      className="relative select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* brilho decorativo atrás do carrossel */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-200/50 blur-3xl"
      />

      <div
        role="region"
        aria-roledescription="carrossel"
        aria-label="Galeria do consultório — implantodontia, reabilitação oral e dentística"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        style={{ touchAction: "pan-y" }}
        className="relative h-[300px] w-full rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 sm:h-[430px] lg:h-[460px] xl:h-[500px]"
      >
        <div
          aria-hidden={false}
          className="absolute inset-0"
          style={{ perspective: "1400px" }}
        >
          <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
            {SLIDES.map((slide, i) => {
              const off = circularOffset(i, active, n);
              const abs = Math.abs(off);
              const cfg = LAYER[Math.min(abs, LAYER.length - 1)];
              const hidden = abs > maxVisible;
              return (
                <figure
                  key={slide.src}
                  aria-hidden={abs !== 0}
                  aria-roledescription="slide"
                  className={cn(
                    "absolute left-1/2 top-1/2 aspect-[3/2] w-[74%] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-900/10 sm:w-[58%] lg:w-[56%] xl:w-[60%]",
                    abs === 0 ? "shadow-2xl shadow-teal-900/30" : "shadow-lg shadow-teal-900/20",
                  )}
                  style={{
                    maxWidth: "540px",
                    transform: `translate(-50%, -50%) translateX(${off * cfg.x}%) translateZ(${cfg.z}px) rotateY(${off * -cfg.rot}deg) scale(${cfg.scale})`,
                    opacity: hidden ? 0 : cfg.opacity,
                    zIndex: 30 - abs,
                    filter: `brightness(${1 - abs * 0.2}) saturate(${1 - abs * 0.06})`,
                    pointerEvents: hidden ? "none" : "auto",
                    transition:
                      "transform 0.75s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.75s ease, filter 0.75s ease",
                  }}
                  onClick={() => {
                    if (Math.abs(moved.current) < 10 && abs !== 0) setActive(i);
                  }}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 640px) 88vw, (max-width: 1024px) 60vw, 540px"
                      className="object-cover"
                      priority={i === 0}
                      quality={80}
                      draggable={false}
                    />
                    {/* legenda (apenas slide ativo) */}
                    <figcaption
                      className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent px-4 pb-4 pt-12 transition-opacity duration-500 sm:px-5 sm:pb-5"
                      style={{ opacity: abs === 0 ? 1 : 0 }}
                    >
                      <span className="mb-1.5 inline-block rounded-full bg-teal-500/90 px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-white uppercase">
                        {slide.tag}
                      </span>
                      <p className="font-heading text-sm font-bold text-white drop-shadow sm:text-base">
                        {slide.title}
                      </p>
                    </figcaption>
                  </div>
                  {/* moldura de destaque do slide ativo */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute inset-0 rounded-2xl transition-all duration-500",
                      abs === 0 ? "ring-4 ring-teal-500/80 ring-offset-2 ring-offset-transparent" : "ring-0",
                    )}
                  />
                </figure>
              );
            })}
          </div>
        </div>

        {/* sombra de "chão" sob o carrossel */}
        <div
          aria-hidden="true"
          className="absolute -bottom-6 left-1/2 h-10 w-[62%] -translate-x-1/2 rounded-[100%] bg-teal-900/15 blur-xl"
        />

        {/* setas de navegação */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Slide anterior"
          className="absolute left-0 top-1/2 z-40 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-lg transition-all hover:bg-white hover:text-teal-700 sm:left-2 lg:left-4"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Próximo slide"
          className="absolute right-0 top-1/2 z-40 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-lg transition-all hover:bg-white hover:text-teal-700 sm:right-2 lg:right-4"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* indicadores (alvos de toque ≥ 44px) */}
      <div className="mt-6 flex items-center justify-center gap-1">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Ir para o slide ${i + 1}: ${s.title}`}
            aria-current={i === active}
            className="grid h-11 w-7 place-items-center"
          >
            <span
              className={cn(
                "block h-2.5 rounded-full transition-all duration-300",
                i === active
                  ? "w-6 bg-teal-600"
                  : "w-2.5 bg-teal-200 hover:bg-teal-400",
              )}
            />
          </button>
        ))}
      </div>

      {/* texto alternativo textual do slide ativo (acessibilidade/SEO) */}
      <p aria-live="polite" className="sr-only">
        {activeSlide.tag} — {activeSlide.title}
      </p>
    </div>
  );
}
