import { siteConfig } from "@/config/site";
import { visit, type Accent } from "@/data/content";
import { Icon, type IconName } from "@/components/ui/Icon";
import { accentStyles } from "@/lib/accents";

type Fact = {
  label: string;
  value: string;
  detail: string;
  icon: IconName;
  accent: Accent;
  link: { label: string; href: string; external?: boolean };
};

// Verified details only (official Facebook Page) — replaces placeholder statistics.
const facts: Fact[] = [
  {
    label: visit.factLabel,
    value: siteConfig.location,
    detail: "Sto. Niño Village, Bahay Pare",
    icon: "mapPin",
    accent: "red",
    link: { label: "Get directions", href: siteConfig.address.mapsUrl, external: true },
  },
  {
    label: "Office hours",
    value: "Mon – Fri",
    detail: siteConfig.hours[0].time,
    icon: "clock",
    accent: "green",
    link: { label: "See full hours", href: "#contact" },
  },
  {
    label: "Call us",
    value: siteConfig.phone.display,
    detail: "During office hours",
    icon: "phone",
    accent: "blue",
    link: { label: "Call now", href: siteConfig.phone.href },
  },
  {
    label: "Message us",
    value: "On Facebook",
    detail: "Ask about our programs",
    icon: "messenger",
    accent: "yellow",
    link: { label: "Open Messenger", href: siteConfig.messengerUrl, external: true },
  },
];

export function QuickFacts() {
  return (
    <section aria-labelledby="facts-heading" className="relative z-10 -mt-16 sm:-mt-20">
      <h2 id="facts-heading" className="sr-only">
        Visit CRAM at a glance
      </h2>
      <div className="container-page">
        <ul
          data-reveal
          className="grid grid-cols-1 gap-2 rounded-[1.75rem] bg-white p-2 shadow-[0_30px_60px_-30px_rgb(28_37_65/0.28)] ring-1 ring-navy/5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {facts.map((fact) => {
            const accent = accentStyles[fact.accent];
            return (
              <li key={fact.label} className="flex gap-4 rounded-[1.25rem] bg-surface p-5 sm:p-6">
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${accent.soft}`}>
                  <Icon name={fact.icon} className="h-5 w-5" strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{fact.label}</p>
                  <p className="mt-1 font-display text-lg font-semibold leading-snug text-navy">{fact.value}</p>
                  <p className="text-sm text-slate-600">{fact.detail}</p>
                  <a
                    href={fact.link.href}
                    {...(fact.link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`mt-2 inline-flex items-center gap-1 rounded text-sm font-semibold underline decoration-current/30 underline-offset-4 transition-colors hover:decoration-current focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal ${accent.text}`}
                  >
                    {fact.link.label}
                    <Icon name={fact.link.external ? "external" : "arrowRight"} className="h-3.5 w-3.5" strokeWidth={2.25} />
                    {fact.link.external && <span className="sr-only"> (opens in a new tab)</span>}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
