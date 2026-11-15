import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import { rotating } from "../data/content";

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % rotating.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <>
      <span className="relative inline-grid h-[1.2em] overflow-hidden align-bottom" aria-hidden="true">
        <span className="invisible whitespace-nowrap">{rotating.reduce((a, b) => (b.length > a.length ? b : a))}</span>
        <AnimatePresence mode="wait">
          <motion.span key={i} className="text-gradient absolute left-0 top-0 whitespace-nowrap"
            initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}>
            {rotating[i]}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="sr-only">{rotating.join(", ")}.</span>
    </>
  );
}

// Maqueta ilustrativa del punto de venta (SVG/CSS, sin imágenes con derechos)
function PosMock() {
  const rows = [["Laptop 14\"", "1", "$12,490.00"], ["Mouse inalámbrico", "2", "$398.00"], ["Soporte técnico", "1", "$650.00"]];
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand-500/25 via-violet-400/20 to-cyan-400/25 blur-2xl" />
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-brand-900/10">
        <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-semibold text-slate-400">InternSys · Punto de venta</span>
        </div>
        <div className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <div><p className="text-xs text-slate-400">Ticket V-0012</p><p className="font-bold text-ink">Venta en curso</p></div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-emerald-500" />Pagada
            </span>
          </div>
          <div className="divide-y divide-slate-100 text-sm">
            {rows.map((r, k) => (
              <motion.div key={r[0]} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + k * 0.25 }} className="flex items-center justify-between py-2.5">
                <span className="font-medium text-slate-700">{r[0]} <span className="text-slate-400">×{r[1]}</span></span>
                <span className="font-semibold text-ink">{r[2]}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 flex items-end justify-between rounded-xl bg-gradient-to-r from-brand-600 to-violet-500 p-4 text-white">
            <div><p className="text-xs opacity-80">Total</p><p className="text-2xl font-extrabold">$13,538.00</p></div>
            <span className="flex items-center gap-1.5 rounded-lg bg-white/20 px-3 py-1.5 text-sm font-semibold"><FaCheck /> Cobrar</span>
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1 }}
        className="absolute -bottom-5 -left-4 hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:block">
        <p className="text-xs text-slate-400">Factura CFDI 4.0</p>
        <p className="flex items-center gap-2 text-sm font-bold text-ink"><span className="h-2 w-2 rounded-full bg-brand-600" />Timbrada · XML + PDF</p>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden px-5 pb-24 pt-32 sm:pt-40">
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="absolute -left-20 top-10 -z-10 h-72 w-72 animate-float rounded-full bg-brand-500/30 blur-3xl" />
      <div className="absolute -right-16 top-40 -z-10 h-72 w-72 animate-float rounded-full bg-cyan-400/30 blur-3xl [animation-delay:-4s]" />
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-4 py-1.5 text-xs font-bold text-brand-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-emerald-500" />
            Equipos de cómputo · Asesoría contable · Software
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Esto es <span className="text-gradient">Sucova.</span>
            <span className="mt-2 block text-3xl font-bold text-slate-500 sm:text-4xl">Tu sistema de</span>
            <span className="block text-4xl sm:text-5xl"><RotatingWord /></span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Vendemos equipos de cómputo, te asesoramos en contabilidad y resolvemos los problemas de tu empresa con software hecho a tu medida.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <PosMock />
        </motion.div>
      </div>
    </section>
  );
}
