"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

const MOBILE_MENU_ID = "mobile-menu";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-offset-2";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(siteConfig.nav[0].href);

  // Elevate the navbar once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const sections = siteConfig.nav
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape or when resizing up to desktop.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onChange);
    };
  }, [open]);

  const elevated = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Main"
        className={`mx-auto max-w-304 rounded-2xl border transition-[background-color,box-shadow,border-color] duration-300 ${
          elevated
            ? "border-slate-200/80 bg-white/90 shadow-[0_12px_32px_-16px_rgb(15_23_42/0.18)] backdrop-blur-xl"
            : "border-white/60 bg-white/55 backdrop-blur-md"
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-4 pl-4 pr-3 sm:pl-5">
          <a
            href="#home"
            aria-label={`${siteConfig.fullName} — back to top`}
            className={`rounded-lg ${focusRing}`}
          >
            <Logo priority />
          </a>

          <ul className="hidden items-center gap-0.5 rounded-full bg-slate-100/70 p-1 ring-1 ring-slate-200/60 lg:flex">
            {siteConfig.nav.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`block rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${focusRing} ${
                      isActive
                        ? "bg-white text-royal shadow-sm ring-1 ring-slate-200/80"
                        : "text-slate-600 hover:bg-white/70 hover:text-navy"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <ButtonLink
                href={siteConfig.primaryCta.href}
                external={siteConfig.primaryCta.external}
                icon="messenger"
                size="md"
              >
                {siteConfig.primaryCta.label}
              </ButtonLink>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={MOBILE_MENU_ID}
              aria-label={open ? "Close menu" : "Open menu"}
              className={`grid h-10 w-10 place-items-center rounded-xl text-navy ring-1 transition-colors lg:hidden ${focusRing} ${
                open ? "bg-navy text-white ring-navy" : "bg-white ring-slate-200 hover:bg-slate-50"
              }`}
            >
              <Icon name={open ? "close" : "menu"} className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Mobile menu: animates height via grid rows; `inert` keeps it out of tab order when closed */}
        <div
          id={MOBILE_MENU_ID}
          inert={!open}
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none lg:hidden ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-slate-200/80 px-3 pb-4 pt-3">
              <ul className="flex flex-col gap-1">
                {siteConfig.nav.map((item) => {
                  const isActive = active === item.href;
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive ? "location" : undefined}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-[0.95rem] font-medium transition-colors ${focusRing} ${
                          isActive ? "bg-blue-50 text-royal" : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {item.label}
                        <Icon
                          name="arrowRight"
                          className={`h-4 w-4 ${isActive ? "opacity-100" : "opacity-40"}`}
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-3 grid gap-2 border-t border-slate-100 pt-4">
                <ButtonLink
                  href={siteConfig.primaryCta.href}
                  external={siteConfig.primaryCta.external}
                  icon="messenger"
                  onClick={() => setOpen(false)}
                  className="w-full"
                >
                  {siteConfig.primaryCta.label}
                </ButtonLink>
                <ButtonLink
                  href={siteConfig.callCta.href}
                  icon="phone"
                  variant="secondary"
                  onClick={() => setOpen(false)}
                  className="w-full"
                >
                  {siteConfig.callCta.label}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
