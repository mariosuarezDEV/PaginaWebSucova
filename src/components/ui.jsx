import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  );
}

export function SectionHead({ kicker, title, text, center = false }) {
  return (
    <Reveal className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-600">
        <span className="h-px w-6 bg-brand-600" />{kicker}
      </span>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-lg text-slate-500">{text}</p>}
    </Reveal>
  );
}

// Brillo que sigue al cursor
export function spotMove(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export function Logo({ light = false }) {
  return (
    <span className={`inline-flex items-center gap-2 text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}>
      <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-cyan-500 text-white shadow-lg shadow-brand-600/30">S</span>
      <span>Su<span className={light ? "text-cyan-300" : "text-brand-600"}>cova</span></span>
    </span>
  );
}
