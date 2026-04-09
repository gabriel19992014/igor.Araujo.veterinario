import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CTA } from "@/components/sections/CTA";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhatsappFloat } from "@/components/sections/WhatsappFloat";

export default function Home() {
  return (
    <div className="bg-[var(--background)]">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
