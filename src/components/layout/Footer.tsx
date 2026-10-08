import { siteConfig, type ContactChannel } from "@/config/site";
import { programs } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

const linkClass =
  "rounded text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky";

const headingClass = "font-display text-sm font-semibold text-white";

function ChannelItem({ channel }: { channel: ContactChannel }) {
  const live = Boolean(channel.href && channel.display);

  const content = (
    <>
      <span
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ring-1 transition-colors ${
          live
            ? "bg-white/5 text-sky ring-white/10 group-hover:bg-royal group-hover:text-white group-hover:ring-royal"
            : "bg-white/3 text-slate-400 ring-white/10"
        }`}
      >
        <Icon name={channel.icon} className="h-[1.1rem] w-[1.1rem]" />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="text-sm font-medium text-white">{channel.label}</span>
        {live ? (
          <span className="truncate text-sm text-slate-300">{channel.display}</span>
        ) : (
          <span className="text-xs text-slate-400">Coming soon</span>
        )}
      </span>
    </>
  );

  // Placeholder channels render as plain text rather than dead links.
  if (!live) {
    return <div className="flex items-center gap-3 rounded-xl p-1">{content}</div>;
  }

  const external = channel.href!.startsWith("http");
  return (
    <a
      href={channel.href!}
      className="group flex items-center gap-3 rounded-xl p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}

export function Footer() {
  const contact = siteConfig.contactChannels.filter((c) => c.kind === "contact");
  const social = siteConfig.contactChannels.filter((c) => c.kind === "social");

  return (
    <footer
      aria-labelledby="footer-heading"
      className="relative isolate overflow-hidden bg-navy-deep text-slate-300"
    >
      <h2 id="footer-heading" className="sr-only">
        Contact and site information
      </h2>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-72 w-2xl rounded-full bg-royal/15 blur-3xl" />
        <div className="absolute inset-0 bg-dots-light opacity-50 mask-[linear-gradient(to_bottom,black,transparent_50%)]" />
      </div>

      <div className="container-page grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Logo tone="dark" />
          <p className="mt-5 max-w-xs leading-relaxed text-slate-400">{siteConfig.description}</p>
          <div className="mt-6 space-y-3 text-sm text-slate-400">
            <p className="flex items-start gap-2.5">
              <Icon name="mapPin" className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
              <span>{siteConfig.address.lines.join(", ")}</span>
            </p>
            <p className="flex items-start gap-2.5">
              <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
              <span>
                {siteConfig.hours.map((h) => `${h.days}: ${h.time}`).join(" · ")}
              </span>
            </p>
          </div>
          <a
            href={siteConfig.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-full bg-accent px-5 text-sm font-semibold text-navy transition-colors hover:bg-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
          >
            <Icon name="messenger" className="h-4 w-4" strokeWidth={2.25} />
            {siteConfig.primaryCta.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        {/* Link columns: side by side even on mobile */}
        <div className="grid grid-cols-2 gap-8 lg:col-span-4">
          <nav aria-labelledby="footer-nav-heading">
            <h3 id="footer-nav-heading" className={headingClass}>
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className={headingClass}>Programs</h3>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              {programs.map((p) => (
                <li key={p.title}>
                  <a href="#programs" className={linkClass}>
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact + social */}
        <div className="rounded-3xl bg-white/3 p-6 ring-1 ring-white/10 sm:p-7 lg:col-span-4">
          <h3 className={headingClass}>Contact</h3>
          <ul className="mt-4 grid gap-3">
            {contact.map((channel) => (
              <li key={channel.id}>
                <ChannelItem channel={channel} />
              </li>
            ))}
          </ul>

          <div className="my-6 h-px bg-white/10" />

          <h3 className={headingClass}>Follow Us</h3>
          <ul className="mt-4 grid gap-3">
            {social.map((channel) => (
              <li key={channel.id}>
                <ChannelItem channel={channel} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-sm text-slate-400 sm:flex-row">
          <p>{siteConfig.copyright}</p>
          <a href="#home" className={`inline-flex items-center gap-2 ${linkClass}`}>
            Back to top
            <Icon name="arrowUp" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
