import { siteConfig } from "@/config/site";
import { announcement, values } from "@/data/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { accentStyles } from "@/lib/accents";

export function CallToAction() {
  return (
    <section aria-labelledby="cta-heading" className="section-y bg-white">
      <div className="container-page">
        <div
          data-reveal
          className="relative isolate overflow-hidden rounded-[2.5rem] bg-navy px-6 py-14 shadow-[0_40px_80px_-40px_rgb(28_37_65/0.6)] sm:px-12 sm:py-16 lg:px-16 lg:py-20"
        >
          {/* Decorative layer */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-24 -top-32 h-96 w-96 rounded-full bg-royal/45 blur-3xl" />
            <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-cram-green/20 blur-3xl" />
            <div className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute inset-0 bg-dots-light mask-[radial-gradient(ellipse_at_top_left,black,transparent_65%)]" />
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
            <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full border border-white/10" />
            {/* Four-colour ribbon */}
            <div className="absolute inset-x-0 bottom-0 flex h-1.5">
              <span className="flex-1 bg-cram-red" />
              <span className="flex-1 bg-accent" />
              <span className="flex-1 bg-cram-green" />
              <span className="flex-1 bg-royal" />
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
            <div className="text-center lg:text-left">
              <Eyebrow tone="dark">Join the CRAM Family</Eyebrow>
              <h2
                id="cta-heading"
                className="mt-5 text-[2.1rem] font-semibold leading-[1.1] text-white sm:text-4xl lg:text-5xl"
              >
                Ready to Help Your Child Learn With{" "}
                <span className="text-accent-light">Confidence?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-300 lg:mx-0">
                Take the next step toward a stronger and more confident learning journey. Send us a
                message or give us a call — we&apos;d love to hear from you.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <ButtonLink
                  href={siteConfig.primaryCta.href}
                  external={siteConfig.primaryCta.external}
                  icon="messenger"
                  variant="accent"
                >
                  {siteConfig.primaryCta.label}
                </ButtonLink>
                <ButtonLink href={siteConfig.callCta.href} icon="phone" variant="ghost">
                  {siteConfig.callCta.label}
                </ButtonLink>
              </div>
            </div>

            {/* Announcement panel — falls back to CRAM's four values when there is no announcement */}
            <div className="rounded-3xl bg-white/6 p-7 text-center ring-1 ring-white/10 backdrop-blur-sm sm:p-9 lg:text-left">
              {announcement ? (
                <>
                  <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-accent text-navy shadow-lg shadow-accent/20">
                    <Icon name="home" className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <p className="mt-6 font-display text-2xl font-semibold leading-snug text-white">
                    {announcement.headline}
                    <span className="block text-accent-light">{announcement.headlineAccent}</span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{announcement.details}</p>
                </>
              ) : (
                <>
                  <p className="font-display text-xl font-semibold text-white">What we stand for</p>
                  <ul className="mt-5 grid grid-cols-2 gap-3 text-left">
                    {values.map((v) => (
                      <li key={v.title} className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                        <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${accentStyles[v.accent].dot}`} />
                        {v.title}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 rounded text-sm font-semibold text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                See address &amp; hours
                <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
