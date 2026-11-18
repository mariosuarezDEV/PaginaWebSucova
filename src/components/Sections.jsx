import { FaCheck, FaPlus, FaEnvelope } from "react-icons/fa6";
import { services, fadi, contim, steps, founders, FADI_URL, EMAIL, nav } from "../data/content";
import { faq } from "../data/faq";
import { Reveal, SectionHead, Kicker, Dot, Logo, Isotipo, ExternalIcon, wrap } from "./ui";

export function Services() {
  return (
    <section id="servicios" className={`${wrap} py-24 sm:py-28`}>
      <SectionHead kicker="Qué hacemos" title={<>Contabilidad, equipo y software para tu negocio<Dot /></>}
        text="Cuatro servicios que se complementan: puedes contratar uno o combinarlos según lo que necesite tu empresa." />
      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((s, k) => (
          <Reveal key={s.title} delay={(k % 2) * 0.1}>
            <article className="group relative h-full rounded-3xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-ink/15 hover:shadow-xl hover:shadow-ink/5 sm:p-8">
              <div className="flex items-start justify-between">
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-ink text-xl text-white">
                  <s.icon />
                  <span className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-amber" />
                </span>
                <span className="font-mono text-sm font-semibold text-ink-400">{String(k + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-600">{s.text}</p>
              {s.items && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <li key={i} className="inline-flex items-center gap-2 rounded-full bg-paper px-3 py-1.5 text-sm font-medium text-ink">
                      <FaCheck className="text-xs text-fadi" />{i}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Badge({ children, tone }) {
  const tones = {
    live: "bg-fadi-50 text-fadi",
    dev: "bg-amber/20 text-[#7a5a14]",
  };
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider ${tones[tone]}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${tone === "live" ? "bg-fadi" : "bg-amber"}`} />{children}
    </span>
  );
}

export function Systems() {
  return (
    <section id="sistemas" className="relative border-y border-line bg-white py-24 sm:py-28">
      <div className={wrap}>
        <SectionHead kicker="Nuestros sistemas" title={<>Software hecho por Sucova<Dot /></>}
          text="Además de desarrollar para otros, construimos nuestros propios sistemas. Cada uno lleva su propia letra y color, con el mismo punto ámbar." />

        {/* Fadi */}
        <Reveal>
          <article className="overflow-hidden rounded-[2rem] bg-fadi text-white">
            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:p-12">
              <div>
                <div className="flex flex-wrap items-center gap-4">
                  <Isotipo letter="F" bg="#ffffff" fg="#0d5c46" className="h-14 w-14" />
                  <div>
                    <h3 className="text-4xl font-extrabold leading-none">Fadi</h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-amber">{fadi.tagline}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber" />Disponible
                  </span>
                </div>
                <p className="mt-6 text-lg leading-relaxed text-white/85">{fadi.text}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {fadi.perks.map((p) => (
                    <li key={p} className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/90">{p}</li>
                  ))}
                </ul>
                <a href={FADI_URL} target="_blank" rel="noopener"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-fadi transition hover:bg-amber hover:text-ink">
                  Ir a Fadi <ExternalIcon />
                </a>
                <p className="mt-3 font-mono text-xs text-white/60">sistemas.sucova.cloud</p>
              </div>
              <ul className="grid content-start gap-3">
                {fadi.modules.map((m) => (
                  <li key={m.title} className="flex gap-4 rounded-2xl bg-white/[0.08] p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-lg text-fadi"><m.icon /></span>
                    <div>
                      <h4 className="font-display text-lg font-bold">{m.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-white/75">{m.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>

        {/* Contim */}
        <Reveal delay={0.1}>
          <article className="mt-6 rounded-[2rem] border-2 border-dashed border-ink/15 bg-paper p-7 sm:p-10 lg:p-12">
            <div className="flex flex-wrap items-center gap-4">
              <Isotipo letter="C" dashed className="h-14 w-14 text-ink-400" />
              <div>
                <h3 className="text-4xl font-extrabold leading-none text-ink">Contim</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-ink-400">Sistema empresarial</p>
              </div>
              <Badge tone="dev">En desarrollo</Badge>
            </div>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-600">{contim.text}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {contim.modules.map((m) => (
                <li key={m.title} className="rounded-2xl border border-line bg-white p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-paper text-ink"><m.icon /></span>
                  <h4 className="mt-4 font-display font-bold text-ink">{m.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">{m.text}</p>
                </li>
              ))}
              <li className="flex flex-col justify-center rounded-2xl bg-ink p-5 text-white">
                <p className="font-mono text-[11px] uppercase tracking-wider text-amber">Estado</p>
                <p className="mt-2 font-display text-lg font-bold leading-snug">Todavía en desarrollo. Aún no está disponible.</p>
              </li>
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="como-trabajamos" className={`${wrap} py-24 sm:py-28`}>
      <SectionHead kicker="Cómo trabajamos" title={<>Primero entendemos, luego resolvemos<Dot /></>}
        text="Antes de venderte un equipo o un sistema, vemos cómo trabaja tu negocio." />
      <ol className="grid gap-5 md:grid-cols-3">
        {steps.map((s, k) => (
          <Reveal as="li" key={s.title} delay={k * 0.12} className="rounded-3xl border border-line bg-white p-7">
            <span className="font-display text-5xl font-extrabold text-ink">{k + 1}<Dot /></span>
            <h3 className="mt-5 text-xl font-bold text-ink">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-ink-600">{s.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export function Team() {
  return (
    <section id="equipo" className="relative isolate overflow-hidden bg-ink py-24 sm:py-28">
      <div className="grid-dark absolute inset-0 -z-10" />
      <div className="absolute -left-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-fadi/40 blur-[110px]" />
      <div className={wrap}>
        <SectionHead dark kicker="Equipo" title={<>Quiénes estamos detrás<Dot /></>} text="Dos socios fundadores, dos especialidades: la contabilidad y la tecnología." />
        <div className="grid gap-5 md:grid-cols-2">
          {founders.map((f, k) => (
            <Reveal key={f.name} delay={k * 0.1}>
              <article className="flex h-full gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <span className="relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white font-display text-xl font-extrabold text-ink">
                  {f.initials}<span className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-amber" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{f.name}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-amber">{f.role}</p>
                  <p className="mt-3 leading-relaxed text-white/70">{f.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section id="preguntas" className={`${wrap} py-24 sm:py-28`}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <SectionHead kicker="Preguntas frecuentes" title={<>Lo que más nos preguntan<Dot /></>} text="Respuestas rápidas sobre Sucova, Fadi y Contim." />
        <div className="space-y-3">
          {faq.map((f, k) => (
            <Reveal key={f.q} delay={k * 0.04}>
              <details className="group rounded-2xl border border-line bg-white p-5 transition open:shadow-lg open:shadow-ink/5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-ink">{f.q}</h3>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-paper text-ink transition group-open:rotate-45 group-open:bg-ink group-open:text-white"><FaPlus className="text-xs" /></span>
                </summary>
                <p className="mt-3 leading-relaxed text-ink-600">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contacto" className={`${wrap} pb-24 sm:pb-28`}>
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center sm:px-12 sm:py-16">
          <div className="grid-dark absolute inset-0 -z-10" />
          <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-fadi/50 blur-[100px]" />
          <Kicker dark className="justify-center">Contacto</Kicker>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">¿Qué necesita tu negocio<span className="text-amber">?</span></h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">Cuéntanos qué necesitas y te decimos cómo podemos ayudarte.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 font-semibold text-ink transition hover:bg-amber-300">
              <FaEnvelope /> Escríbenos
            </a>
            <a href={FADI_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white/5">
              Conoce Fadi <ExternalIcon />
            </a>
          </div>
          <p className="mt-6 break-all font-mono text-sm text-white/60">{EMAIL}</p>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-white py-12">
      <div className={`${wrap} grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]`}>
        <div>
          <Logo className="h-10" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-600">Servicios contables, equipos de cómputo para negocios, desarrollo y consultoría de software.</p>
        </div>
        <nav aria-label="Secciones">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">Secciones</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => <li key={n.href}><a href={n.href} className="text-ink-600 hover:text-ink">{n.label}</a></li>)}
          </ul>
        </nav>
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={`mailto:${EMAIL}`} className="break-all text-ink-600 hover:text-ink">{EMAIL}</a></li>
            <li><a href={FADI_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-ink-600 hover:text-ink">Fadi · sistemas.sucova.cloud <ExternalIcon /></a></li>
          </ul>
        </div>
      </div>
      <div className={`${wrap} mt-10 flex flex-col gap-2 border-t border-line pt-6 text-sm text-ink-400 sm:flex-row sm:justify-between`}>
        <p>© {new Date().getFullYear()} Sucova</p>
        <p className="font-mono text-xs uppercase tracking-[0.2em]">Software y contabilidad</p>
      </div>
    </footer>
  );
}
