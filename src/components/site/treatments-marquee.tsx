import { ToothIcon } from "./icons";

const TREATMENTS = [
  "Implante dentário",
  "Prótese sobre implante",
  "Coroa sobre implante",
  "Enxerto ósseo",
  "Reabilitação oral",
  "Overdenture",
  "Lentes de contato dental",
  "Facetas de porcelana",
  "Clareamento dental",
  "Restaurações estéticas",
];

/** Faixa rolante com os tratamentos (palavras-chave SEO de forma natural) */
export function TreatmentsMarquee() {
  const items = [...TREATMENTS, ...TREATMENTS];
  return (
    <section
      aria-label="Tratamentos odontológicos oferecidos no consultório em Ribeirão Preto"
      className="border-y border-teal-100 bg-teal-50/60 py-4"
    >
      <div className="marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-3 pr-3">
          {items.map((t, i) => (
            <span
              key={`${t}-${i}`}
              aria-hidden={i >= TREATMENTS.length}
              className="flex items-center gap-2 rounded-full border border-teal-200/80 bg-white px-4 py-2 text-sm font-semibold whitespace-nowrap text-teal-900 shadow-sm"
            >
              <ToothIcon className="h-3.5 w-3.5 text-teal-500" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
