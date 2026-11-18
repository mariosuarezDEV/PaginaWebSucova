import { motion } from "framer-motion";
import logo from "../assets/sucova-logo.svg";
import logoNeg from "../assets/sucova-logo-negativo.svg";

export const wrap = "mx-auto max-w-6xl px-4 sm:px-6";

export function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  );
}

// Etiqueta en mono, como el "SOFTWARE Y CONTABILIDAD" del logotipo.
export function Kicker({ children, dark = false, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-amber" : "text-fadi"} ${className}`}>
      <span className={`h-0.5 w-7 ${dark ? "bg-amber" : "bg-fadi"}`} />{children}
    </span>
  );
}

// El punto decimal ámbar de la marca.
export const Dot = () => <span className="text-amber">.</span>;

export function SectionHead({ kicker, title, text, dark = false }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <Kicker dark={dark}>{kicker}</Kicker>
      <h2 className={`mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-[2.6rem] ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/70" : "text-ink-600"}`}>{text}</p>}
    </Reveal>
  );
}

export function Logo({ dark = false, className = "h-9" }) {
  return <img src={dark ? logoNeg : logo} alt="Sucova, software y contabilidad" className={`w-auto ${className}`} width="216" height="64" />;
}

// Isotipos de la familia: misma retícula de segmentos, letra y color propios.
const paths = {
  S: "M15 24A6 6 0 0 1 21 18H37v7H23v4.5h14V42a6 6 0 0 1-6 6H15v-7h14v-4.5H15z",
  F: "M22 48V18h22v7H30v6h11v7H30v10z",
  C: "M15 24a6 6 0 0 1 6-6h16v7H23v16h14v7H21a6 6 0 0 1-6-6z",
};

export function Isotipo({ letter = "S", bg = "#17211d", fg = "#ffffff", dashed = false, className = "h-12 w-12", title }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role={title ? "img" : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      {dashed
        ? <rect x="1" y="1" width="62" height="62" rx="14" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 4" />
        : <rect width="64" height="64" rx="15" fill={bg} />}
      <path d={paths[letter]} fill={dashed ? "currentColor" : fg} />
      <circle cx="45" cy="45" r="5" fill="#e5b454" />
    </svg>
  );
}

export function ExternalIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
      <path d="M6 3h7v7M13 3 5 11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
