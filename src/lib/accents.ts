import type { Accent } from "@/data/content";

/**
 * The four CRAM brand colours (from the official logo ring) as reusable
 * class sets. Text on solid green/red stays white at icon sizes only.
 */
export const accentStyles: Record<
  Accent,
  { solid: string; soft: string; text: string; ring: string; panel: string; dot: string; number: string }
> = {
  red: {
    solid: "bg-cram-red text-white shadow-cram-red/30",
    soft: "bg-red-50 text-cram-red-dark",
    text: "text-cram-red-dark",
    ring: "border-cram-red/20",
    panel: "from-red-50 via-rose-50/70 to-orange-50/60",
    dot: "bg-cram-red",
    number: "text-cram-red/10",
  },
  yellow: {
    solid: "bg-accent text-navy shadow-accent/30",
    soft: "bg-amber-50 text-amber-700",
    text: "text-amber-700",
    ring: "border-amber-500/25",
    panel: "from-amber-50 via-yellow-50/80 to-orange-50/50",
    dot: "bg-accent",
    number: "text-amber-500/15",
  },
  green: {
    solid: "bg-cram-green text-white shadow-cram-green/30",
    soft: "bg-emerald-50 text-cram-green-dark",
    text: "text-cram-green-dark",
    ring: "border-emerald-500/25",
    panel: "from-emerald-50 via-green-50/70 to-teal-50/50",
    dot: "bg-cram-green",
    number: "text-emerald-500/15",
  },
  blue: {
    solid: "bg-royal text-white shadow-royal/30",
    soft: "bg-blue-50 text-royal",
    text: "text-royal",
    ring: "border-royal/20",
    panel: "from-blue-50 via-sky-50/80 to-indigo-50/50",
    dot: "bg-royal",
    number: "text-royal/10",
  },
};
