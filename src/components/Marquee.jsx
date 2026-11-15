import { rotating } from "../data/content";

export default function Marquee() {
  const items = [...rotating, ...rotating];
  return (
    <section aria-label="Especialidades de InternSys" className="overflow-hidden border-y border-slate-100 bg-slate-50/60 py-5 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
        {[...items, ...items].map((t, k) => (
          <span key={k} aria-hidden={k >= rotating.length} className="flex items-center gap-3 whitespace-nowrap rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />{t}
          </span>
        ))}
      </div>
    </section>
  );
}
