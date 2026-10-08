import { siteConfig } from "@/config/site";
import { features, visit } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { accentStyles } from "@/lib/accents";
import { revealDelay } from "@/lib/reveal";

const index = (i: number) => String(i + 1).padStart(2, "0");

export function WhyCram() {
  const [featured, ...rest] = features;
  const featuredAccent = accentStyles[featured.accent];

  return (
    <section
      id="why-cram"
      aria-labelledby="why-heading"
      className="section-y relative isolate overflow-hidden bg-white"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-56 -top-56 h-96 w-96 rounded-full border border-navy/10" />
        <div className="absolute -right-36 -top-36 h-64 w-64 rounded-full border border-dashed border-navy/10" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container-page">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              id="why-heading"
              eyebrow="Why Families Choose CRAM"
              title="Where Learning Feels Like Home"
              align="left"
            />
          </div>
          <p data-reveal className="text-lg leading-relaxed text-slate-600 lg:col-span-5 lg:pb-1">
            Each day at CRAM is guided by the same promise: a positive, supportive, and engaging
            learning environment for every learner.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 lg:grid-cols-12 lg:grid-rows-3">
          {/* Featured benefit */}
          <li data-reveal className="lg:col-span-5 lg:row-span-3">
            <article className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-navy p-8 text-white sm:p-10">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cram-green/30 blur-3xl" />
                <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full border border-white/10" />
                <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full border border-white/10" />
                <div className="absolute inset-0 bg-dots-light mask-[linear-gradient(to_bottom,black,transparent_60%)]" />
              </div>

              <div className="relative flex items-start justify-between">
                <span className={`grid h-14 w-14 place-items-center rounded-2xl shadow-lg ${featuredAccent.solid}`}>
                  <Icon name={featured.icon} className="h-7 w-7" strokeWidth={2} />
                </span>
                <span aria-hidden="true" className="font-display text-sm font-medium text-slate-400">
                  {index(0)} / {index(features.length - 1)}
                </span>
              </div>

              <h3 className="relative mt-10 text-[1.75rem] font-semibold leading-tight sm:text-3xl lg:mt-auto lg:pt-16">
                {featured.title}
              </h3>
              <p className="relative mt-3 max-w-sm text-lg leading-relaxed text-slate-300">
                {featured.description}
              </p>
              <a
                href={siteConfig.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-8 inline-flex items-center gap-2 self-start rounded text-sm font-semibold text-accent-light transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-navy"
              >
                <Icon name="mapPin" className="h-4 w-4" strokeWidth={2.25} />
                {visit.linkLabel}
                <span className="sr-only"> (opens map in a new tab)</span>
              </a>
            </article>
          </li>

          {/* Supporting benefits */}
          {rest.map((feature, i) => {
            const accent = accentStyles[feature.accent];
            return (
              <li key={feature.title} data-reveal style={revealDelay((i + 1) * 90)} className="lg:col-span-7">
                <article className="group flex h-full gap-5 rounded-3xl bg-surface p-6 ring-1 ring-navy/5 transition-all duration-300 hover:bg-white hover:shadow-[0_24px_48px_-28px_rgb(28_37_65/0.3)] sm:items-center sm:gap-6 sm:p-7">
                  <div className="flex shrink-0 flex-col items-center gap-2 sm:flex-row sm:gap-5">
                    <span aria-hidden="true" className="font-display text-xl font-semibold text-slate-300 sm:text-3xl">
                      {index(i + 1)}
                    </span>
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-300 group-hover:-rotate-6 ${accent.soft}`}
                    >
                      <Icon name={feature.icon} className="h-6 w-6" strokeWidth={2} />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy">{feature.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-slate-600">{feature.description}</p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
