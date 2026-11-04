"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MapPin, Menu, PhoneCall, X } from "lucide-react";
import { site } from "@/lib/site";
import { BrandMark, WhatsAppIcon } from "./icons";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#processo", label: "Como funciona" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu mobile ao redimensionar para desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Barra superior com NAP (SEO local) */}
      <div className="hidden bg-teal-900 text-teal-50 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 text-xs">
          <p className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-teal-300" aria-hidden="true" />
            <span>{site.address.full}</span>
          </p>
          <a
            href={`tel:${site.whatsapp.intl}`}
            className="flex items-center gap-1.5 font-medium transition-colors hover:text-white"
          >
            <PhoneCall className="h-3.5 w-3.5 text-teal-300" aria-hidden="true" />
            <span>{site.whatsapp.display}</span>
          </a>
        </div>
      </div>

      {/* Navegação principal */}
      <div
        className={cn(
          "border-b bg-white/90 backdrop-blur-md transition-shadow",
          scrolled ? "border-slate-200 shadow-[0_8px_30px_-12px_rgba(15,118,110,0.25)]" : "border-transparent",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <Link
            href="#inicio"
            className="flex items-center gap-3"
            aria-label="Dr. Marcelo Dercatshoff Pereira — início"
          >
            <BrandMark />
            <span className="flex flex-col leading-tight">
              <span className="font-heading text-sm font-extrabold tracking-tight text-slate-900 sm:text-base">
                Dr. Marcelo Dercatshoff
              </span>
              <span className="text-[11px] font-medium text-teal-700 sm:text-xs">
                Implantes · Reabilitação Oral · Dentística
              </span>
            </span>
          </Link>

          <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-secondary hover:text-teal-800"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.whatsapp.href(site.whatsapp.defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5b] hover:shadow-md sm:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Agendar avaliação
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          id="menu-mobile"
          className={cn(
            "overflow-hidden border-t border-slate-100 bg-white transition-[max-height,opacity] duration-300 lg:hidden",
            open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav aria-label="Navegação móvel" className="flex flex-col gap-1 px-4 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-secondary hover:text-teal-800"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.whatsapp.href(site.whatsapp.defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-base font-bold text-white shadow-sm"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Agendar pelo WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
