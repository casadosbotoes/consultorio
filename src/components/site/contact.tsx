"use client";

import { useState } from "react";
import { Clock, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";
import { Reveal, SectionHeading } from "./reveal";
import { WhatsAppIcon } from "./icons";

const TREATMENT_OPTIONS = [
  "Implante dentário",
  "Reabilitação oral",
  "Prótese sobre implante",
  "Dentística / estética do sorriso",
  "Clareamento dental",
  "Outro tratamento",
];

export function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: { name?: string; phone?: string } = {};
    if (!name.trim()) next.name = "Informe seu nome.";
    if (!phone.trim()) next.phone = "Informe seu WhatsApp para retorno.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const lines = [
      `Olá, Dr. Marcelo! Meu nome é ${name.trim()}.`,
      `Tenho interesse em: ${treatment || "avaliação odontológica"}.`,
      phone.trim() ? `Meu WhatsApp: ${phone.trim()}` : "",
      message.trim() ? `Mensagem: ${message.trim()}` : "",
    ].filter(Boolean);

    window.open(site.whatsapp.href(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
    window.setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          id="contato-titulo"
          eyebrow="Contato e agendamento"
          title={
            <>
              Agende sua avaliação em{" "}
              <span className="text-gradient-teal">Ribeirão Preto</span>
            </>
          }
          description="Fale diretamente com o consultório pelo WhatsApp. É rápido, sem compromisso e você já sai com o próximo passo definido."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Informações + mapa */}
          <Reveal>
            <div className="flex h-full flex-col gap-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-600 text-white">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading mt-3 text-sm font-extrabold text-slate-900">
                    Endereço
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {site.address.street}
                    <br />
                    {site.address.building} — {site.address.district},{" "}
                    {site.address.city}/{site.address.state}
                  </p>
                  <p className="mt-2 text-xs font-bold text-teal-700 underline-offset-2 group-hover:underline">
                    Ver no Google Maps →
                  </p>
                </a>

                <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <div>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#25D366] text-white">
                      <WhatsAppIcon className="h-5 w-5" />
                    </span>
                    <h3 className="font-heading mt-3 text-sm font-extrabold text-slate-900">
                      WhatsApp / Telefone
                    </h3>
                    <a
                      href={`tel:${site.whatsapp.intl}`}
                      className="mt-1 block text-lg font-extrabold text-slate-900"
                    >
                      {site.whatsapp.display}
                    </a>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      Atendimento com hora marcada
                    </p>
                  </div>
                  <a
                    href={site.whatsapp.href(site.whatsapp.defaultMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition-all hover:bg-[#1ebe5b]"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex-1 overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                <iframe
                  title="Mapa do consultório — Rua Visconde de Inhaúma, 580, Centro, Ribeirão Preto/SP"
                  src={site.address.mapsEmbed}
                  className="h-64 w-full sm:h-72 lg:h-full lg:min-h-[280px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>

          {/* Formulário → WhatsApp */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex h-full flex-col gap-5 rounded-3xl border border-teal-100 bg-white p-7 shadow-xl shadow-teal-900/5 sm:p-9"
            >
              <div>
                <h3 className="font-heading text-xl font-extrabold text-slate-900">
                  Solicite seu agendamento
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Preencha os dados e continue a conversa no WhatsApp.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nome">Seu nome *</Label>
                  <Input
                    id="nome"
                    name="nome"
                    autoComplete="name"
                    placeholder="Como podemos te chamar?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "erro-nome" : undefined}
                    required
                  />
                  {errors.name && (
                    <p id="erro-nome" className="text-xs font-medium text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Seu WhatsApp *</Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="(16) 9 9999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "erro-telefone" : undefined}
                    required
                  />
                  {errors.phone && (
                    <p id="erro-telefone" className="text-xs font-medium text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tratamento">Tratamento de interesse</Label>
                <Select value={treatment} onValueChange={setTreatment}>
                  <SelectTrigger id="tratamento" className="w-full">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    {TREATMENT_OPTIONS.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem">Mensagem (opcional)</Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  placeholder="Conte brevemente o que você precisa — ex.: perdi um dente e quero avaliar implante."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                className="mt-auto inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-[#1ebe5b]"
              >
                <Send className="h-5 w-5" aria-hidden="true" />
                Enviar para o WhatsApp
              </Button>

              <p aria-live="polite" className="min-h-5 text-center text-sm font-medium text-teal-700">
                {sent
                  ? "Abrindo o WhatsApp… se não abrir, verifique o bloqueador de pop-ups."
                  : ""}
              </p>

              <p className="text-center text-xs leading-relaxed text-slate-400">
                Seus dados são usados apenas para o primeiro contato pelo WhatsApp.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
