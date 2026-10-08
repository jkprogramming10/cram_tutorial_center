import { siteConfig, type ContactChannel } from "@/config/site";
import { visit, type Accent } from "@/data/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { accentStyles } from "@/lib/accents";
import { revealDelay } from "@/lib/reveal";

const channelAccent: Record<ContactChannel["id"], Accent> = {
  messenger: "blue",
  phone: "green",
  email: "red",
  facebook: "yellow",
};

// Long addresses may only wrap before the "@", never mid-word.
function EmailText({ value }: { value: string }) {
  const [local, domain] = value.split("@");
  return (
    <>
      {local}
      <wbr />@{domain}
    </>
  );
}

// Messenger first: it is the page's main call to action.
const order: ContactChannel["id"][] = ["messenger", "phone", "email", "facebook"];

export function Contact() {
  const channels = order
    .map((id) => siteConfig.contactChannels.find((c) => c.id === id))
    .filter((c): c is ContactChannel => Boolean(c));

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-y relative overflow-hidden bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-120 w-120 rounded-full bg-sky/15 blur-3xl"
      />
      <div className="container-page relative">
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact & Visit"
          title={visit.contactTitle}
          description="We'd love to meet you and your child. Send us a message, give us a call, or drop by during office hours."
        />

        <div data-reveal className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={siteConfig.primaryCta.href} external={siteConfig.primaryCta.external} icon="messenger">
            {siteConfig.primaryCta.label}
          </ButtonLink>
          <ButtonLink href={siteConfig.callCta.href} variant="secondary" icon="phone">
            {siteConfig.callCta.label}
          </ButtonLink>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-12 lg:gap-7">
          {/* Address + hours */}
          <div data-reveal className="flex flex-col gap-6 lg:col-span-5">
            <div className="rounded-[1.75rem] bg-white p-3 shadow-sm ring-1 ring-navy/5">
              {/* Stylised map (no third-party embed) — opens the exact address in Google Maps */}
              <a
                href={siteConfig.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open the CRAM Tutorial Center address in Google Maps (opens in a new tab)"
                className="group relative block h-36 overflow-hidden rounded-[1.25rem] bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal sm:h-40"
              >
                <span aria-hidden="true" className="absolute inset-0">
                  <span className="absolute -left-4 top-[38%] h-3 w-[120%] -rotate-6 bg-white" />
                  <span className="absolute -left-4 top-[72%] h-2 w-[120%] rotate-3 bg-white/80" />
                  <span className="absolute -top-4 left-[30%] h-[130%] w-3 rotate-12 bg-white" />
                  <span className="absolute -top-4 left-[74%] h-[130%] w-2 -rotate-6 bg-white/80" />
                  <span className="absolute left-[8%] top-[8%] h-10 w-14 rounded-lg bg-emerald-100" />
                  <span className="absolute bottom-[6%] right-[6%] h-9 w-16 rounded-lg bg-sky-100" />
                  <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-[70%] place-items-center rounded-full bg-cram-red text-white shadow-lg shadow-cram-red/30 ring-4 ring-white transition-transform duration-300 group-hover:-translate-y-[85%]">
                    <Icon name="mapPin" className="h-6 w-6" strokeWidth={2} />
                  </span>
                </span>
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-navy shadow-sm">
                  <Icon name="external" className="h-3.5 w-3.5" strokeWidth={2.25} />
                  Open in Google Maps
                </span>
              </a>
              <div className="p-4 sm:p-5">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cram-red text-white">
                  <Icon name="mapPin" className="h-6 w-6" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-navy">Address</h3>
                  <address className="mt-2 not-italic leading-relaxed text-slate-600">
                    {siteConfig.address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <a
                    href={siteConfig.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 rounded text-sm font-semibold text-royal underline decoration-royal/30 underline-offset-4 hover:decoration-royal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal"
                  >
                    Get directions on Google Maps
                    <Icon name="external" className="h-3.5 w-3.5" strokeWidth={2.25} />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </div>
              </div>
            </div>

            <div className="flex-1 rounded-[1.75rem] bg-white p-7 shadow-sm ring-1 ring-navy/5 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cram-green text-white">
                  <Icon name="clock" className="h-6 w-6" strokeWidth={2} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold text-navy">Office Hours</h3>
                  <dl className="mt-3 divide-y divide-slate-100">
                    {siteConfig.hours.map((h) => (
                      <div key={h.days} className="flex flex-wrap justify-between gap-x-4 gap-y-0.5 py-2.5">
                        <dt className="text-slate-600">{h.days}</dt>
                        <dd className={`font-semibold ${h.time === "Closed" ? "text-slate-500" : "text-navy"}`}>
                          {h.time}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 flex items-start gap-2 rounded-xl bg-amber-50 px-3 py-2.5 text-sm leading-snug text-amber-900 ring-1 ring-amber-200/70">
                    <Icon name="info" className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" strokeWidth={2} />
                    <span>
                      Hours are based on our Facebook listing.{" "}
                      <a
                        href={siteConfig.messengerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold underline decoration-amber-600/40 underline-offset-2 hover:decoration-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
                      >
                        {siteConfig.hoursNote}
                        <span className="sr-only"> (opens Messenger in a new tab)</span>
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact channels */}
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 lg:gap-5">
            {channels.map((channel, i) => {
              const accent = accentStyles[channelAccent[channel.id]];
              const external = channel.href?.startsWith("http") ?? false;
              const featured = channel.id === "messenger";
              return (
                <li key={channel.id} data-reveal style={revealDelay(i * 80)}>
                  {channel.href && channel.display ? (
                    <a
                      href={channel.href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={`group flex h-full flex-col justify-between gap-8 rounded-[1.75rem] p-7 ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgb(28_37_65/0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal sm:p-8 ${
                        featured ? "bg-royal text-white ring-royal" : "bg-white text-navy ring-navy/5"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span
                          className={`grid h-12 w-12 place-items-center rounded-2xl ${
                            featured ? "bg-white/15 text-white" : accent.soft
                          }`}
                        >
                          <Icon name={channel.icon} className="h-6 w-6" strokeWidth={2} />
                        </span>
                        <Icon
                          name={external ? "external" : "arrowRight"}
                          className={`h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 ${
                            featured ? "text-white/70" : "text-slate-400"
                          }`}
                          strokeWidth={2}
                        />
                      </div>
                      <div className="min-w-0">
                        <p className={`text-sm font-medium ${featured ? "text-blue-100" : "text-slate-500"}`}>
                          {channel.label}
                        </p>
                        <p className={`mt-1 font-display font-semibold leading-snug ${channel.id === "email" ? "text-lg" : "text-xl"}`}>
                          {channel.id === "email" ? <EmailText value={channel.display} /> : channel.display}
                        </p>
                      </div>
                      {external && <span className="sr-only"> (opens in a new tab)</span>}
                    </a>
                  ) : (
                    <div className="flex h-full flex-col justify-between gap-8 rounded-[1.75rem] bg-white p-7 text-navy ring-1 ring-navy/5 sm:p-8">
                      <span className={`grid h-12 w-12 place-items-center rounded-2xl ${accent.soft}`}>
                        <Icon name={channel.icon} className="h-6 w-6" strokeWidth={2} />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-slate-500">{channel.label}</p>
                        <p className="mt-1 font-display text-xl font-semibold text-slate-500">Coming soon</p>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
