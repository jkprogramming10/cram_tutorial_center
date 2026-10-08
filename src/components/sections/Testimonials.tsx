import { siteConfig } from "@/config/site";
import { testimonials } from "@/data/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { revealDelay } from "@/lib/reveal";

function QuoteMark({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 36" fill="currentColor" className={className}>
      <path d="M0 36V21.6C0 9.6 6.4 2.4 19.2 0l2.4 5.4C14.4 7.2 10.8 11.4 10.2 18H19.2V36H0Zm26.4 0V21.6C26.4 9.6 32.8 2.4 45.6 0L48 5.4C40.8 7.2 37.2 11.4 36.6 18h9V36H26.4Z" />
    </svg>
  );
}

// Abstract "reserved" story cards — deliberately contain no names or quotes.
function StoryStack() {
  const cards = [
    { pos: "left-0 top-6 -rotate-6", tone: "from-royal to-sky", z: "z-0" },
    { pos: "right-0 top-0 rotate-6", tone: "from-accent to-amber-300", z: "z-0" },
    { pos: "left-1/2 top-10 -translate-x-1/2", tone: "from-cram-red to-rose-400", z: "z-10" },
  ];

  return (
    <div aria-hidden="true" className="relative mx-auto h-60 w-full max-w-sm sm:h-64">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`absolute w-[62%] rounded-2xl bg-white p-5 shadow-[0_24px_48px_-24px_rgb(15_23_42/0.35)] ring-1 ring-slate-900/5 ${card.pos} ${card.z}`}
        >
          <QuoteMark className="h-5 w-7 text-royal/20" />
          <div className="mt-4 space-y-2">
            <div className="h-2 rounded-full bg-slate-100" />
            <div className="h-2 w-11/12 rounded-full bg-slate-100" />
            <div className="h-2 w-3/5 rounded-full bg-slate-100" />
          </div>
          <div className="mt-5 flex items-center gap-2.5">
            <span className={`h-8 w-8 rounded-full bg-linear-to-br ${card.tone}`} />
            <div className="flex-1 space-y-1.5">
              <div className="h-2 w-2/3 rounded-full bg-slate-200" />
              <div className="h-1.5 w-1/2 rounded-full bg-slate-100" />
            </div>
          </div>
        </div>
      ))}
      <span className="absolute -bottom-1 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-navy px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
        Reserved for your story
      </span>
    </div>
  );
}

export function Testimonials() {
  return (
    <section aria-labelledby="stories-heading" className="section-y bg-surface">
      <div className="container-page">
        <SectionHeading
          id="stories-heading"
          eyebrow="The CRAM Family"
          title="Stories From Our Families"
          description="Every learner's journey is different — and every milestone is worth celebrating together."
        />

        {testimonials.length > 0 ? (
          <ul className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <li key={`${t.name}-${i}`} data-reveal style={revealDelay(i * 100)}>
                <figure className="flex h-full flex-col rounded-[1.75rem] bg-white p-8 shadow-sm ring-1 ring-slate-900/5">
                  <QuoteMark className="h-7 w-9 text-royal/20" />
                  <blockquote className="mt-5 flex-1 leading-relaxed text-slate-700">
                    <p>{t.quote}</p>
                  </blockquote>
                  <figcaption className="mt-6 border-t border-slate-100 pt-5">
                    <p className="font-semibold text-navy">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        ) : (
          <div
            data-reveal
            className="relative mt-14 overflow-hidden rounded-4xl bg-white shadow-[0_30px_60px_-40px_rgb(15_23_42/0.3)] ring-1 ring-slate-900/5 sm:mt-16"
          >
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 hidden w-1/2 bg-linear-to-br from-blue-50 via-sky-50/60 to-amber-50/50 lg:block"
            />
            <div className="relative grid grid-cols-1 items-center gap-12 px-6 py-12 sm:px-12 sm:py-14 lg:grid-cols-2 lg:gap-8 lg:px-14 lg:py-16">
              <div className="text-center lg:text-left">
                <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-royal/10 text-royal">
                  <QuoteMark className="h-4 w-5" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold text-navy sm:text-3xl">
                  Your Story Could Be Here
                </h3>
                <p className="mx-auto mt-4 max-w-md leading-relaxed text-slate-600 lg:mx-0">
                  Real experiences from CRAM parents and learners will be featured here as families share their CRAM
                  journey.
                </p>
                <ButtonLink href={siteConfig.facebookUrl} external icon="facebook" className="mt-8">
                  Visit Our Facebook Page
                </ButtonLink>
              </div>
              <StoryStack />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
