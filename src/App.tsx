import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import AdditionalServices from "./components/AdditionalServices";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FAQ from "./components/FAQ";

function App() {
  const [activeSection, setActiveSection] = useState<string>("home");

  return (
    <div className="flex min-h-screen flex-col">
      <Header activeSection={activeSection} />

      <main className="flex-grow">
        <section id="home">
          <Hero setActiveSection={setActiveSection} />
        </section>

        <section id="services" className="scroll-mt-20">
          <Services setActiveSection={setActiveSection} />
        </section>

        <section id="pricing" className="scroll-mt-20">
          <Pricing setActiveSection={setActiveSection} />
        </section>

        <section id="additional-services" className="scroll-mt-20">
          <AdditionalServices setActiveSection={setActiveSection} />
        </section>

        <section id="faq" className="scroll-mt-20">
          <FAQ setActiveSection={setActiveSection} />
        </section>

        <section id="contact" className="scroll-mt-20">
          <Contact setActiveSection={setActiveSection} />
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
