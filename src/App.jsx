import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import { About, Systems, Modules, Stats, Tech, Process, Team, FAQ, Footer } from "./components/Sections";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Systems />
        <Modules />
        <Stats />
        <Tech />
        <Process />
        <Team />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
