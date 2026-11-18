import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FADI_URL } from "../data/content";
import { Kicker, Dot, Isotipo, ExternalIcon } from "./ui";

// Pantalla de segmentos, como la de una calculadora (el motivo de la identidad).
const SEG = {
  a: [8, 0, 40, 10], b: [46, 8, 10, 40], c: [46, 52, 10, 40], d: [8, 90, 40, 10],
  e: [0, 52, 10, 40], f: [0, 8, 10, 40], g: [8, 45, 40, 10],
};
const DIGITS = ["abcdef", "bc", "abged", "abgcd", "fgbc", "afgcd", "afgedc", "abc", "abcdefg", "abcdfg"];

function Digit({ x, n }) {
  const on = DIGITS[n];
  return (
    <g transform={`translate(${x} 0)`}>
      {Object.entries(SEG).map(([k, [sx, sy, w, h]]) => (
        <rect key={k} x={sx} y={sy} width={w} height={h} rx="2"
          className="transition-[fill,opacity] duration-500"
          fill="#ffffff" opacity={on.includes(k) ? 0.4 : 0.07} />
      ))}
    </g>
  );
}

function SegmentDisplay() {
  const [v, setV] = useState([0, 0, 0]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    const t = setInterval(() => {
      i = (i + 1) % 10;
      setV([i, (i * 3) % 10, (i * 7) % 10]);
    }, 1600);
    return () => clearInterval(t);
  }, []);
  return (
    <svg viewBox="0 0 226 100" className="w-full max-w-[15rem] sm:max-w-md" role="img" aria-label="Pantalla de calculadora con punto decimal ámbar">
      <Digit x={0} n={v[0]} />
      <circle cx="78" cy="92" r="8" fill="#e5b454" className="animate-blink" />
      <Digit x={100} n={v[1]} />
      <Digit x={170} n={v[2]} />
    </svg>
  );
}

const family = [
  { letter: "S", bg: "#ffffff", fg: "#17211d", name: "Sucova", note: "Software y contabilidad" },
  { letter: "F", bg: "#0d5c46", fg: "#ffffff", name: "Fadi", note: "Disponible" },
  { letter: "C", dashed: true, name: "Contim", note: "En desarrollo" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-ink px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40">
      <div className="grid-dark absolute inset-0 -z-10" />
      <div className="absolute -right-40 -top-20 -z-10 h-[38rem] w-[38rem] rounded-full bg-fadi/45 blur-[120px]" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Kicker dark>Contabilidad · Equipos · Software</Kicker>
          <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-[4.2rem]">
            Tus números y tu tecnología, siempre en orden<Dot />
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            En Sucova ofrecemos servicios contables, equipos de cómputo para negocios, desarrollo y consultoría de software.
            Y tenemos nuestros propios sistemas: <strong className="font-semibold text-white">Fadi</strong>, para facturar, y <strong className="font-semibold text-white">Contim</strong>, en desarrollo.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#servicios" className="rounded-full bg-amber px-6 py-3 font-semibold text-ink transition hover:bg-amber-300">Ver servicios</a>
            <a href={FADI_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white/5">
              Conoce Fadi <ExternalIcon />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-12 lg:items-end">
          <SegmentDisplay />
          <ul className="grid w-full max-w-md grid-cols-3 gap-3">
            {family.map((f) => (
              <li key={f.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                <Isotipo letter={f.letter} bg={f.bg} fg={f.fg} dashed={f.dashed} className={`h-11 w-11 ${f.dashed ? "text-white/50" : ""}`} />
                <p className="mt-3 font-display text-lg font-bold text-white">{f.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-white/50">{f.note}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
