import { Clock, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { BrandMark, WhatsAppIcon } from "./icons";

const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre o Dr. Marcelo" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#processo", label: "Como funciona" },
  { href: "#faq", label: "Dúvidas frequentes" },
  { href: "#contato", label: "Contato e agendamento" },
];

const SPECIALTIES = [
  "Implante dentário",
  "Reabilitação oral",
  "Prótese sobre implante",
  "Coroa sobre implante",
  "Enxerto ósseo",
  "Lentes de contato dental",
  "Facetas de porcelana",
  "Clareamento dental",
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-teal-950 text-teal-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Marca */}
        <div>
          <div className="flex items-center gap-3">
            <BrandMark className="bg-teal-600" />
            <span className="flex flex-col leading-tight">
              <span className="font-heading text-sm font-extrabold text-white">
                Dr. Marcelo Dercatshoff
              </span>
              <span className="text-[11px] font-medium text-teal-300">
                Implantes · Reabilitação Oral · Dentística
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-teal-200/80">
            Consultório odontológico no Centro de Ribeirão Preto, especializado
            em implantes dentários, reabilitação oral e dentística — para
            devolver função, conforto e estética ao seu sorriso.
          </p>
          <a
            href={site.whatsapp.href(site.whatsapp.defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#1ebe5b]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {site.whatsapp.display}
          </a>
        </div>

        {/* Navegação */}
        <nav aria-label="Links do rodapé">
          <h2 className="font-heading text-sm font-extrabold tracking-wider text-white uppercase">
            Navegação
          </h2>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-teal-200/85 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Especialidades */}
        <div>
          <h2 className="font-heading text-sm font-extrabold tracking-wider text-white uppercase">
            Tratamentos
          </h2>
          <ul className="mt-4 space-y-2.5">
            {SPECIALTIES.map((s) => (
              <li key={s}>
                <a
                  href="#especialidades"
                  className="text-sm text-teal-200/85 transition-colors hover:text-white"
                >
                  {s} em Ribeirão Preto
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h2 className="font-heading text-sm font-extrabold tracking-wider text-white uppercase">
            Onde atendemos
          </h2>
          <address className="mt-4 space-y-3 text-sm not-italic text-teal-200/85">
            <p className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" aria-hidden="true" />
              <span>
                {site.address.street}
                <br />
                {site.address.building}
                <br />
                {site.address.district} — {site.address.city}/{site.address.state}
              </span>
            </p>
            <p className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" aria-hidden="true" />
              <span>{site.hours}</span>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-teal-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs text-teal-300/70 sm:px-6 md:flex-row md:text-left">
          <p>
            © {year} Dr. Marcelo Dercatshoff Pereira — Consultório Odontológico.
            Todos os direitos reservados.
          </p>
          <p>Implantodontia · Reabilitação Oral · Dentística — Ribeirão Preto/SP</p>
        </div>
      </div>
    </footer>
  );
}
