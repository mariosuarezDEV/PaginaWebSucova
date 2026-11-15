import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Logo } from "./ui";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-white/80 shadow-sm backdrop-blur-lg" : "bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <span className="hidden text-sm font-semibold text-slate-500 sm:inline">Equipos de cómputo · Asesoría contable · Software</span>
      </div>
      <motion.div style={{ scaleX: progress }} className="h-0.5 origin-left bg-gradient-to-r from-brand-600 via-violet-500 to-cyan-500" />
    </header>
  );
}
