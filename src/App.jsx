import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Services, Systems, Process, Team, FAQ, Contact, Footer } from "./components/Sections";

export default function App() {
  return (
    <>
      <a href="#servicios" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-amber focus:px-4 focus:py-2 focus:font-semibold focus:text-ink">Saltar al contenido</a>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Systems />
        <Process />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
