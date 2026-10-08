import type { CSSProperties } from "react";
import { siteConfig } from "@/config/site";
import { announcement, hero, values } from "@/data/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { accentStyles } from "@/lib/accents";
import { HeroVisual } from "./HeroVisual";

// Hero content animates in on load (CSS only; disabled for reduced motion).
const enter = "motion-safe:animate-fade-up";
const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-surface pb-28 pt-28 sm:pb-36 sm:pt-36 lg:pb-40 lg:pt-40 xl:pt-44"
    >
      {/* Background: warm paper, soft brand-colour glows, faded grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(50rem_36rem_at_88%_0%,rgb(90_184_245/0.22),transparent_60%),radial-gradient(36rem_28rem_at_0%_35%,rgb(251_191_36/0.16),transparent_60%),radial-gradient(30rem_22rem_at_55%_105%,rgb(47_180_99/0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-grid mask-[linear-gradient(to_bottom,black,transparent_80%)]" />
        <div className="absolute left-[5%] top-32 hidden h-14 w-14 rounded-full border-2 border-cram-red/15 lg:block" />
        <div className="absolute left-[46%] top-36 hidden h-2.5 w-2.5 rounded-full bg-cram-green/70 lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-white" />
      </div>

      <div className="container-page grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div className="max-w-xl sm:mx-auto sm:text-center lg:mx-0 lg:text-left">
          {announcement && (
            <a
              href={announcement.href}
              aria-label={`New: ${announcement.label}`}
              className={`group inline-flex max-w-full items-center gap-2.5 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-medium text-navy shadow-sm ring-1 ring-navy/10 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal ${enter}`}
            >
              <span className="shrink-0 rounded-full bg-accent px-2.5 py-0.5 font-display text-xs font-semibold uppercase tracking-wide text-navy">
                New
              </span>
              <span className="truncate sm:hidden">{announcement.shortLabel}</span>
              <span className="hidden truncate sm:inline">{announcement.label}</span>
              <Icon
                name="arrowRight"
                className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2.25}
              />
            </a>
          )}

          <p
            style={delay(60)}
            className={`mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-royal ${enter}`}
          >
            <span className="hidden sm:inline">{hero.eyebrowName} · </span>
            {hero.eyebrowLocation}
          </p>

          <h1
            id="hero-heading"
            style={delay(120)}
            className={`mt-4 text-[2.6rem] font-bold leading-[1.05] tracking-[-0.01em] text-navy sm:text-6xl lg:text-[3.4rem] xl:text-[4.1rem] ${enter}`}
          >
            {hero.titleLead}{" "}
            <span className="relative inline-block whitespace-nowrap text-royal">
              {hero.titleHighlight}
              <svg
                aria-hidden="true"
                viewBox="0 0 200 16"
                preserveAspectRatio="none"
                className="absolute -bottom-1.5 left-0 h-3 w-full text-accent sm:-bottom-2"
              >
                <path d="M3 11C50 4 120 2 197 8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            {hero.titleTail}
          </h1>

          <p
            style={delay(180)}
            className={`mt-7 text-lg leading-relaxed text-slate-600 sm:text-balance sm:text-xl sm:leading-relaxed ${enter}`}
          >
            {hero.description}
          </p>

          <div
            style={delay(240)}
            className={`mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start ${enter}`}
          >
            <ButtonLink href={siteConfig.primaryCta.href} external={siteConfig.primaryCta.external} icon="messenger">
              {siteConfig.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={siteConfig.callCta.href} variant="secondary" icon="phone">
              {siteConfig.callCta.label}
            </ButtonLink>
          </div>

          <ul
            style={delay(320)}
            aria-label="Our core values"
            className={`mt-10 flex flex-wrap gap-2 sm:justify-center lg:justify-start ${enter}`}
          >
            {values.map((v) => (
              <li
                key={v.title}
                className="inline-flex items-center gap-2 rounded-full bg-white/80 py-1.5 pl-2 pr-3.5 text-sm font-medium text-slate-700 ring-1 ring-navy/10"
              >
                <span className={`h-2.5 w-2.5 rounded-full ${accentStyles[v.accent].dot}`} />
                {v.title}
              </li>
            ))}
          </ul>
        </div>

        <div style={delay(200)} className={enter}>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
