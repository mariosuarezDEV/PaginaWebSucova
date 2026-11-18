import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { nav, FADI_URL } from "../data/content";
import { Logo, ExternalIcon } from "./ui";

export default function Navbar() {
  const [light, setLight] = useState(false); // true cuando ya pasamos el hero oscuro
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => {
      const hero = document.getElementById("inicio");
      setLight(window.scrollY > (hero ? hero.offsetHeight - 64 : 400));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, []);

  const solid = light || open;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid ? "border-b border-line bg-paper/90 backdrop-blur-lg" : "border-b border-transparent bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <a href="#inicio" aria-label="Sucova, inicio" onClick={() => setOpen(false)}><Logo dark={!solid} className="h-8 sm:h-9" /></a>
        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className={`text-sm font-medium transition ${solid ? "text-ink-600 hover:text-ink" : "text-white/75 hover:text-white"}`}>{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={FADI_URL} target="_blank" rel="noopener"
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${solid ? "bg-fadi text-white hover:bg-fadi-700" : "bg-white text-ink hover:bg-amber"}`}>
            Conoce Fadi <ExternalIcon />
          </a>
          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="menu-movil" aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className={`grid h-10 w-10 place-items-center rounded-full lg:hidden ${solid ? "text-ink hover:bg-ink/5" : "text-white hover:bg-white/10"}`}>
            {open ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="menu-movil" aria-label="Menú" className="border-t border-line bg-paper px-4 pb-4 lg:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-line py-3 font-medium text-ink last:border-0">{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
