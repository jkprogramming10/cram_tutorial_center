import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { RevealObserver } from "@/components/RevealObserver";
import { StructuredData } from "@/components/StructuredData";
import { About } from "@/components/sections/About";
import { CallToAction } from "@/components/sections/CallToAction";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Programs } from "@/components/sections/Programs";
import { QuickFacts } from "@/components/sections/QuickFacts";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyCram } from "@/components/sections/WhyCram";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <QuickFacts />
        <Programs />
        <About />
        <HowItWorks />
        <WhyCram />
        <Testimonials />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
      <StructuredData />
    </>
  );
}
