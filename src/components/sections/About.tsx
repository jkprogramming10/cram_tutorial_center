import { siteConfig } from "@/config/site";
import { about, values } from "@/data/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { LogoMark, Wordmark } from "@/components/ui/Logo";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { accentStyles } from "@/lib/accents";
import { revealDelay } from "@/lib/reveal";

// Same positions as on the official logo ring: red top-left, yellow top-right,
// green bottom-right, blue bottom-left.
const corners = [
  "left-3 top-3 sm:left-5 sm:top-5",
  "right-3 top-3 sm:right-5 sm:top-5",
  "bottom-3 right-3 sm:bottom-5 sm:right-5",
  "bottom-3 left-3 sm:bottom-5 sm:left-5",
];

function ValuesCompass() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-120 overflow-hidden rounded-4xl bg-white shadow-[0_40px_80px_-40px_rgb(28_37_65/0.3)] ring-1 ring-navy/5">
      {/* Decorative layer: four-colour quadrants and rings */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[conic-gradient(from_270deg,rgb(230_57_70/0.07)_0_25%,rgb(251_191_36/0.10)_0_50%,rgb(47_180_99/0.08)_0_75%,rgb(29_111_214/0.07)_0)]" />
        <div className="absolute inset-0 bg-dots opacity-60 mask-[radial-gradient(circle,black_20%,transparent_70%)]" />
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full text-navy/15">
          <path d="M18 18 50 50M82 18 50 50M18 82 50 50M82 82 50 50" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
        </svg>
        <div className="absolute left-1/2 top-1/2 h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-navy/15" />
      </div>

      {/* Center: CRAM mark */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 flex h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white shadow-[0_20px_40px_-14px_rgb(28_37_65/0.35)] ring-1 ring-navy/5"
      >
        <LogoMark className="h-[42%] w-[42%]" />
        <Wordmark className="mt-1.5 text-lg sm:text-2xl" />
      </div>

      {/* Four core values */}
      <ul aria-label="CRAM core values">
        {values.map((value, i) => {
          const accent = accentStyles[value.accent];
          return (
            <li
              key={value.title}
              className={`absolute w-[42%] rounded-2xl bg-white/95 p-3 shadow-[0_12px_30px_-14px_rgb(28_37_65/0.3)] ring-1 ring-navy/5 backdrop-blur sm:p-4 ${corners[i]}`}
            >
              <span className={`grid h-8 w-8 place-items-center rounded-xl sm:h-9 sm:w-9 ${accent.solid}`}>
                <Icon name={value.icon} className="h-4 w-4" strokeWidth={2.25} />
              </span>
              <p className="mt-2 font-display text-base font-semibold leading-tight text-navy sm:mt-3">
                {value.title}
              </p>
              <p className="mt-0.5 hidden text-xs leading-snug text-slate-500 sm:block">{value.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-y relative overflow-hidden bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-120 w-120 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container-page relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div data-reveal className="order-2 lg:order-1">
          <ValuesCompass />
        </div>

        <div className="order-1 lg:order-2">
          <div data-reveal>
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h2
              id="about-heading"
              className="mt-4 text-[2.1rem] font-semibold leading-[1.12] text-navy sm:text-4xl lg:text-[2.9rem]"
            >
              {about.title}
            </h2>
          </div>

          <div data-reveal style={revealDelay(100)}>
            <p className="mt-6 text-lg leading-relaxed text-slate-700">{about.intro}</p>
            <p className="mt-5 leading-relaxed text-slate-600">{about.secondary}</p>
          </div>

          <figure
            data-reveal
            style={revealDelay(180)}
            className="mt-8 rounded-2xl border-l-4 border-accent bg-white px-6 py-5 shadow-sm ring-1 ring-navy/5"
          >
            <figcaption className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              {about.missionLabel}
            </figcaption>
            <blockquote className="mt-1.5 text-balance font-display text-xl font-medium leading-snug text-navy">
              {about.mission}
            </blockquote>
          </figure>

          <div data-reveal style={revealDelay(240)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={siteConfig.primaryCta.href} external={siteConfig.primaryCta.external} icon="messenger">
              {siteConfig.primaryCta.label}
            </ButtonLink>
            <ButtonLink href="#programs" variant="secondary" withArrow>
              Explore Programs
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
