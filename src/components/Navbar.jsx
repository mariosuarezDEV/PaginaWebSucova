import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";
import { nav, LOGIN_URL } from "../data/content";
import { Logo } from "./ui";

export default function Navbar() {
  const [open, setOpen] = useState(false);
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
        <a href="#inicio" aria-label="Sucova, inicio"><Logo /></a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-brand-50 hover:text-brand-700">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={LOGIN_URL} className="hidden rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-600 sm:inline-block">Iniciar sesión</a>
          <button className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-slate-100 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open}>
            {open ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>
      <motion.div style={{ scaleX: progress }} className="h-0.5 origin-left bg-gradient-to-r from-brand-600 via-violet-500 to-cyan-500" />
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            className="border-t border-slate-100 bg-white px-5 pb-5 lg:hidden" aria-label="Móvil">
            {nav.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 font-semibold text-slate-700">{l.label}</a>
            ))}
            <a href={LOGIN_URL} className="mt-4 block rounded-full bg-brand-600 py-3 text-center font-semibold text-white">Iniciar sesión</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
