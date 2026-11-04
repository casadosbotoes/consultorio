import { SiteHeader } from "@/components/site/site-header";
import { HeroSection } from "@/components/site/hero-section";
import { TreatmentsMarquee } from "@/components/site/treatments-marquee";
import { AboutSection } from "@/components/site/about";
import { SpecialtiesSection } from "@/components/site/specialties";
import { ProcessSection } from "@/components/site/process";
import { FaqSection } from "@/components/site/faq";
import { ContactSection } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/site-footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <SiteHeader />
      <main className="flex-1">
        {/* Slider 3D no topo + apresentação */}
        <HeroSection />
        <TreatmentsMarquee />
        {/* Sobre o Dr. Marcelo Dercatshoff Pereira */}
        <AboutSection />
        {/* Especialidades: Implantodontia, Reabilitação Oral e Dentística */}
        <SpecialtiesSection />
        {/* Jornada do paciente */}
        <ProcessSection />
        {/* FAQ otimizado para AEO */}
        <FaqSection />
        {/* Contato, mapa e agendamento via WhatsApp */}
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
