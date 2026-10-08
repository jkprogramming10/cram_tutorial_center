import { siteConfig } from "@/config/site";
import { programs } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { accentStyles } from "@/lib/accents";
import { revealDelay } from "@/lib/reveal";

export function Programs() {
  return (
    <section id="programs" aria-labelledby="programs-heading" className="section-y bg-white">
      <div className="container-page">
        <SectionHeading
          id="programs-heading"
          eyebrow="Our Programs"
          title="Learning Programs for Growing Minds"
          description="From a child's very first classroom steps to everyday lesson support, every program is built around care and steady improvement."
        />

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-7">
          {programs.map((program, i) => {
            const accent = accentStyles[program.accent];
            return (
              <li key={program.title} data-reveal style={revealDelay(i * 100)}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_1px_2px_rgb(28_37_65/0.04)] ring-1 ring-navy/[0.07] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgb(28_37_65/0.3)] focus-within:ring-2 focus-within:ring-royal md:flex-row lg:flex-col">
                  {/* Illustration panel */}
                  <div
                    aria-hidden="true"
                    className={`relative h-40 shrink-0 overflow-hidden bg-linear-to-br md:h-auto md:w-60 lg:h-44 lg:w-auto ${accent.panel}`}
                  >
                    <div className="absolute inset-0 bg-dots opacity-60 mask-[linear-gradient(to_bottom_right,black,transparent_70%)]" />
                    <div
                      className={`absolute -right-10 -top-10 h-40 w-40 rounded-full border transition-transform duration-500 group-hover:scale-110 ${accent.ring}`}
                    />
                    <div
                      className={`absolute -right-2 -top-2 h-24 w-24 rounded-full border transition-transform duration-500 group-hover:scale-110 ${accent.ring}`}
                    />
                    <span
                      className={`absolute -bottom-5 right-4 font-display text-[6.5rem] font-bold leading-none ${accent.number}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`absolute bottom-6 left-6 grid h-14 w-14 place-items-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:-translate-y-1 md:bottom-auto md:top-6 lg:bottom-6 lg:top-auto ${accent.solid}`}
                    >
                      <Icon name={program.icon} className="h-6 w-6" strokeWidth={2} />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${accent.text}`}>
                      {program.tag}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-navy">{program.title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-600">{program.description}</p>

                    <ul className="mt-5 flex-1 space-y-2">
                      {program.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${accent.soft}`}>
                            <Icon name="check" className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={siteConfig.messengerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ask about ${program.title} on Messenger (opens in a new tab)`}
                      className="mt-7 inline-flex items-center gap-3 self-start rounded-full text-sm font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-offset-4"
                    >
                      Ask about this
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-navy ring-1 ring-slate-200 transition-all duration-300 group-hover:bg-navy group-hover:text-white group-hover:ring-navy">
                        <Icon
                          name="arrowRight"
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                          strokeWidth={2.25}
                        />
                      </span>
                    </a>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <p
          data-reveal
          className="mt-12 flex flex-col items-center justify-center gap-2 text-center text-slate-600 sm:flex-row sm:gap-3"
        >
          Want to know which program fits your child?
          <a
            href={siteConfig.phone.href}
            className="inline-flex items-center gap-1.5 rounded font-semibold text-royal underline decoration-royal/30 underline-offset-4 transition-colors hover:text-royal-dark hover:decoration-royal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal"
          >
            <Icon name="phone" className="h-4 w-4" strokeWidth={2} />
            Call {siteConfig.phone.display}
          </a>
        </p>
      </div>
    </section>
  );
}
