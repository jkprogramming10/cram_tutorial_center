import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Icon } from "./Icon";

/*
 * HOW TO USE THE OFFICIAL LOGO
 * 1. Add the file(s) to /public/brand/ (SVG preferred, or a high-resolution PNG).
 * 2. Set `officialLogo` in src/config/site.ts, e.g.
 *      officialLogo: { onLight: { src: "/brand/cram-logo.svg", width: 512, height: 512 } }
 *    Optionally add `onDark` for the dark footer.
 * Every <Logo /> then switches automatically; the hand-built badge below stays as the fallback.
 */

// Letter colours follow the official logo: C red · R yellow · A blue · M green.
const letterColors = ["text-cram-red", "text-amber-500", "text-royal", "text-cram-green"];

/** Hand-built CRAM badge: a ring in the four brand colours around an open book. */
export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`relative block aspect-square shrink-0 rounded-full bg-[conic-gradient(from_270deg,var(--color-cram-red)_0_25%,var(--color-accent)_0_50%,var(--color-cram-green)_0_75%,var(--color-royal)_0)] shadow-sm ${className}`}
    >
      <span className="absolute inset-[16%] grid place-items-center rounded-full bg-white text-navy">
        <Icon name="book" className="h-[55%] w-[55%]" strokeWidth={2.25} />
      </span>
    </span>
  );
}

/** Multicolour "CRAM" wordmark (decorative — pair it with accessible text). */
export function Wordmark({ className = "text-2xl" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`font-display font-bold leading-none tracking-tight ${className}`}>
      {siteConfig.name.split("").map((letter, i) => (
        <span key={i} className={letterColors[i % letterColors.length]}>
          {letter}
        </span>
      ))}
    </span>
  );
}

type LogoProps = {
  tone?: "light" | "dark";
  /** Load eagerly (use for the navbar logo, which is above the fold). */
  priority?: boolean;
};

export function Logo({ tone = "light", priority = false }: LogoProps) {
  const dark = tone === "dark";
  const official = siteConfig.officialLogo;
  const asset = official ? (dark && official.onDark ? official.onDark : official.onLight) : null;

  if (asset) {
    return (
      <Image
        src={asset.src}
        width={asset.width}
        height={asset.height}
        alt={siteConfig.fullName}
        priority={priority}
        className="h-11 w-auto"
      />
    );
  }

  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="flex flex-col">
        <Wordmark className="text-[1.6rem]" />
        <span
          aria-hidden="true"
          className={`mt-0.5 text-[0.62rem] font-semibold uppercase leading-none tracking-[0.18em] ${
            dark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {siteConfig.tagline}
        </span>
      </span>
      <span className="sr-only">{siteConfig.fullName}</span>
    </span>
  );
}
