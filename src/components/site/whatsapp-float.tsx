import { site } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

/** Botão flutuante de WhatsApp — presente em todas as seções */
export function WhatsAppFloat() {
  return (
    <a
      href={site.whatsapp.href(site.whatsapp.defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp (16) 99232-8650"
      className="wa-pulse group fixed right-4 bottom-4 z-50 flex items-center gap-0 rounded-full bg-[#25D366] p-4 text-white shadow-2xl transition-all hover:bg-[#1ebe5b] sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="max-w-0 overflow-hidden text-sm font-bold whitespace-nowrap transition-all duration-500 group-hover:ml-2.5 group-hover:max-w-[180px]">
        Agende sua avaliação
      </span>
      <span className="sr-only">
        Agende sua avaliação odontológica pelo WhatsApp
      </span>
    </a>
  );
}
