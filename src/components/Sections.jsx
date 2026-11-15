import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { FaArrowRight, FaWifi, FaCloud, FaPlus } from "react-icons/fa6";
import { services, modules, tech, steps, founders, stats, LOGIN_URL } from "../data/content";
import { Reveal, SectionHead, spotMove, Logo } from "./ui";

const wrap = "mx-auto max-w-6xl px-5";

export function About() {
  return (
    <section id="que-hacemos" className={`${wrap} py-24`}>
      <SectionHead kicker="Sucova" title="¿Qué hacemos en Sucova?" text="Tecnología y finanzas, en un solo lugar." />
      <div className="grid gap-5 md:grid-cols-3">
        {services.map((s, k) => (
          <Reveal key={s.title} delay={k * 0.1}>
            <article onPointerMove={spotMove} className="spot group h-full rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-600/10">
              <span className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${s.tone} text-2xl text-white shadow-lg transition group-hover:rotate-6 group-hover:scale-110`}><s.icon /></span>
              <h3 className="mt-5 text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-500">{s.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Systems() {
  return (
    <section id="sistemas" className="bg-slate-50 py-24">
      <div className={wrap}>
        <SectionHead kicker="Soluciones" title="Nuestros sistemas" text="Elige el que va con el tamaño de tu negocio." />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-3xl font-extrabold text-ink">InternPoS</h3>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"><FaWifi className="opacity-50" />Local · sin internet</span>
              </div>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">Nuestro punto de venta local, pensado para los comercios que necesitan seguir vendiendo aunque se caiga el internet.</p>
            </article>
          </Reveal>
          <Reveal delay={0.12}>
            <article className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-violet-600 to-indigo-800 p-8 text-white shadow-2xl shadow-brand-600/30">
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cyan-300/30 blur-3xl" />
              <div className="relative flex items-start justify-between gap-3">
                <h3 className="text-3xl font-extrabold">InternSys</h3>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur"><FaCloud />Todo en uno</span>
              </div>
              <p className="relative mt-5 text-lg leading-relaxed text-indigo-50">La solución empresarial más completa de Sucova: incluye InternPoS, local y en línea, y todas las herramientas que tu empresa necesita. Conócelas abajo.</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Modules() {
  return (
    <section id="modulos" className={`${wrap} py-24`}>
      <SectionHead kicker="Especialidades" title="Qué incluye InternSys" text="Cada especialidad resuelve una parte de tu negocio, y todas hablan entre sí." />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {modules.map((m, k) => (
          <Reveal key={m.title} delay={(k % 4) * 0.08}>
            <article onPointerMove={spotMove} className="spot group h-full rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-xl text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white"><m.icon /></span>
                <span className="text-sm font-extrabold text-slate-300">{String(k + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{m.text}</p>
            </article>
          </Reveal>
        ))}
        <Reveal delay={0.1}>
          <article className="flex h-full flex-col justify-center rounded-3xl border-2 border-dashed border-brand-200 bg-brand-50/60 p-6">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand-600 shadow-sm"><FaPlus /></span>
            <h3 className="mt-5 text-lg font-bold text-ink">InternPoS incluido</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">Tu punto de venta local, para seguir vendiendo sin internet, y también en línea.</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

function Counter({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const c = animate(0, to, { duration: reduce ? 0 : 1.2, ease: "easeOut", onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.round(v); } });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{to}</span>;
}

export function Stats() {
  return (
    <section className={`${wrap} pb-24`}>
      <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-12 sm:px-12">
        <div className="absolute -left-10 top-0 h-56 w-56 rounded-full bg-brand-500/40 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="relative grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-5xl font-extrabold text-transparent"><Counter to={s.n} /></div>
              <p className="mt-2 text-sm text-slate-300">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Tech() {
  return (
    <section id="tecnologia" className="bg-slate-50 py-24">
      <div className={wrap}>
        <SectionHead kicker="Tecnología" title="Con qué lo construimos" text="Tecnología confiable y probada, la misma que usamos en nuestros propios sistemas." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tech.map((t, k) => (
            <Reveal key={t.name} delay={(k % 4) * 0.06}>
              <article onPointerMove={spotMove} className="spot group h-full rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-slate-50 text-2xl transition group-hover:scale-110" style={{ color: t.color }}><t.icon aria-hidden="true" /></span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{t.cat}</p>
                    <h3 className="font-bold text-ink">{t.name}</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{t.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="proceso" className={`${wrap} py-24`}>
      <SectionHead kicker="Metodología" title="Así te ayudamos a arrancar" text="Trabajamos con BPMN, el estándar para modelar procesos de negocio, para que empieces a operar sin problemas." />
      <ol className="relative grid gap-8 md:grid-cols-3">
        <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-brand-200 via-violet-300 to-cyan-200 md:block" aria-hidden="true" />
        {steps.map((s, k) => (
          <Reveal as="li" key={s.n} delay={k * 0.15} className="relative">
            <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-violet-500 text-xl font-extrabold text-white shadow-lg shadow-brand-600/30">{s.n}</span>
            <h3 className="mt-5 text-xl font-bold text-ink">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-slate-500">{s.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export function Team() {
  return (
    <section className="bg-slate-50 py-24">
      <div className={wrap}>
        <SectionHead kicker="Equipo" title="Quiénes estamos detrás" text="Dos socios fundadores, dos especialidades." />
        <div className="grid gap-5 md:grid-cols-2">
          {founders.map((f, k) => (
            <Reveal key={f.title} delay={k * 0.1}>
              <article className="flex h-full gap-5 rounded-3xl border border-slate-200 bg-white p-7 transition hover:shadow-lg">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-50 text-xl text-brand-600"><f.icon /></span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{f.title}</h3>
                  <p className="mt-1 text-slate-500">{f.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className={`${wrap} py-24`}>
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-violet-600 to-indigo-800 px-6 py-16 text-center text-white">
          <div className="absolute inset-0 opacity-20 grid-bg" />
          <h2 className="relative text-3xl font-extrabold sm:text-5xl">¿Ya tienes cuenta?</h2>
          <p className="relative mx-auto mt-3 max-w-md text-indigo-100">Entra a tu sistema y sigue operando tu negocio.</p>
          <a href={LOGIN_URL} className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-brand-700 shadow-xl transition hover:-translate-y-0.5">
            Iniciar sesión <FaArrowRight className="transition group-hover:translate-x-1" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-100 py-10">
      <div className={`${wrap} flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row`}>
        <Logo />
        <p>Equipos de cómputo · Asesoría contable · Software a la medida</p>
        <p>© {new Date().getFullYear()} Sucova</p>
      </div>
    </footer>
  );
}
