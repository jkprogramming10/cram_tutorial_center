import { steps } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { revealDelay } from "@/lib/reveal";

const stageColors = ["text-red-300", "text-accent-light", "text-emerald-300"];
const nodeRings = ["ring-cram-red/70", "ring-accent/70", "ring-cram-green/70"];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="section-y relative isolate overflow-hidden bg-navy text-white"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-80 w-3xl -translate-x-1/2 rounded-full bg-royal/25 blur-3xl" />
        <div className="absolute inset-0 bg-dots-light mask-[linear-gradient(to_bottom,black,transparent)]" />
      </div>

      <div className="container-page">
        <SectionHeading
          id="how-heading"
          eyebrow="Getting Started"
          title="Joining the CRAM Family Is Easy"
          description="Three simple steps to welcome your child into a caring, positive place to learn."
          tone="dark"
        />

        <div className="relative mt-14 sm:mt-16 lg:mt-20">
          {/* Journey line — vertical on mobile, horizontal on desktop */}
          <div
            aria-hidden="true"
            className="absolute bottom-16 left-7 top-7 w-0.5 rounded-full bg-linear-to-b from-cram-red via-accent to-cram-green lg:bottom-auto lg:left-[16.666%] lg:right-[16.666%] lg:top-18 lg:h-0.5 lg:w-auto lg:bg-linear-to-r"
          />
          {/* Direction arrows between steps (desktop) */}
          {[1, 2].map((n) => (
            <span
              key={n}
              aria-hidden="true"
              style={{ left: `${(n / 3) * 100}%` }}
              className="absolute top-18 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-navy text-slate-300 ring-1 ring-white/15 lg:grid"
            >
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.25} />
            </span>
          ))}

          <ol className="relative grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-0">
            {steps.map((step, i) => (
              <li
                key={step.number}
                data-reveal
                style={revealDelay(i * 140)}
                className="flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:px-5 lg:text-center"
              >
                {/* Stage label above the node (desktop) */}
                <p
                  className={`hidden h-7 items-center text-xs font-semibold uppercase tracking-[0.16em] lg:flex ${stageColors[i]}`}
                >
                  {step.stage}
                </p>

                <span
                  className={`relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-navy font-display text-lg font-semibold text-white ring-2 shadow-[0_0_0_8px_var(--color-navy)] lg:mt-4 ${nodeRings[i]}`}
                >
                  {step.number}
                </span>

                <div className="flex-1 lg:mt-8 lg:w-full">
                  {/* Stage label (mobile) */}
                  <p
                    className={`flex h-14 items-center text-xs font-semibold uppercase tracking-[0.16em] lg:hidden ${stageColors[i]}`}
                  >
                    {step.stage}
                  </p>
                  <div className="rounded-3xl bg-white/4 p-6 ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/7 sm:p-7 lg:h-full lg:p-8">
                    <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-accent-light">
                      <Icon name={step.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-slate-300">{step.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
