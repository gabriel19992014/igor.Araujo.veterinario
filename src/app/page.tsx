import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";
import { Faq } from "@/components/sections/Faq";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhatsappFloat } from "@/components/sections/WhatsappFloat";

export default function Home() {
  return (
    <div className="bg-[var(--background)]">
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Gallery />
        <Faq />
        <CTA />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
