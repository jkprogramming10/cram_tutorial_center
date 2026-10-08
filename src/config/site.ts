import type { IconName } from "@/components/ui/Icon";

/**
 * Central business information for CRAM Tutorial Center (Meycauayan branch).
 *
 * SOURCE: official Facebook Page https://www.facebook.com/CRAMTutorialService
 * (publicly visible information, reviewed October 5, 2026).
 *
 * Any channel value set to `null` is not publicly listed yet. Replace it with
 * the real value and the site will automatically render it as a working link.
 */

export type NavItem = { label: string; href: `#${string}` };

export type ContactChannel = {
  id: "phone" | "email" | "facebook" | "messenger";
  /** "contact" channels and "social" links are grouped separately in the footer. */
  kind: "contact" | "social";
  label: string;
  icon: IconName;
  /** Text shown to visitors. `null` = not yet provided. */
  display: string | null;
  /** Link target (tel:, mailto:, https://). `null` = not yet provided. */
  href: string | null;
};

export type Cta = { label: string; href: string; external?: boolean };

/** An official logo file placed in /public. */
export type LogoAsset = { src: string; width: number; height: number };

type SiteConfig = {
  name: string;
  tagline: string;
  fullName: string;
  branch: string;
  /** City + province, written the same way everywhere on the site. */
  location: string;
  /** Production URL — used for canonical/Open Graph URLs. */
  siteUrl: string;
  title: string;
  description: string;
  metaDescription: string;
  /**
   * OFFICIAL LOGO: when the owner provides the logo, put the files in
   * /public/brand/ and fill these in. Until then a hand-built CSS badge is used.
   * `onDark` is optional (a light version for the dark footer).
   */
  officialLogo: { onLight: LogoAsset; onDark?: LogoAsset } | null;
  facebookUrl: string;
  messengerUrl: string;
  phone: { display: string; href: string; e164: string };
  email: { display: string; href: string };
  address: {
    lines: string[];
    street: string;
    locality: string;
    region: string;
    postalCode: string;
    mapsUrl: string;
  };
  hours: { days: string; time: string }[];
  /** Shown with the hours — Facebook says the listing was last updated ~4 years ago. */
  hoursNote: string;
  /** Main call to action used across the page. */
  primaryCta: Cta;
  /** Secondary call to action used across the page. */
  callCta: Cta;
  nav: NavItem[];
  contactChannels: ContactChannel[];
  copyright: string;
};

const facebookUrl = "https://www.facebook.com/CRAMTutorialService";
// Facebook's standard Messenger link for the page username (verified to resolve).
const messengerUrl = "https://m.me/CRAMTutorialService";
const location = "Meycauayan City, Bulacan";
const addressLines = [
  "B41 Lot 4, DAO Drive, Phase 4A",
  "Sto. Niño Village, Brgy. Bahay Pare",
  `${location} 3020`,
];

export const siteConfig: SiteConfig = {
  name: "CRAM",
  tagline: "Tutorial Center",
  fullName: "CRAM Tutorial Center",
  branch: "Meycauayan",
  location,
  // Set NEXT_PUBLIC_SITE_URL to the live domain when deploying (e.g. https://www.example.com).
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  title: `CRAM Tutorial Center | ${location}`,
  description: `A caring place for young learners in ${location}.`,
  metaDescription: `CRAM Tutorial Center in ${location} offers a preschool class, tutorial support, and hands-on learning activities for young learners in a safe, child-friendly space.`,

  officialLogo: null,

  facebookUrl,
  messengerUrl,
  phone: { display: "(044) 323 1805", href: "tel:+63443231805", e164: "+63443231805" },
  email: {
    display: "CRAMTutorialServices@gmail.com",
    href: "mailto:CRAMTutorialServices@gmail.com",
  },
  address: {
    lines: addressLines,
    street: "B41 Lot 4, DAO Drive, Phase 4A, Sto. Niño Village, Brgy. Bahay Pare",
    locality: "Meycauayan City",
    region: "Bulacan",
    postalCode: "3020",
    // Search URL for the exact address — no invented coordinates.
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${addressLines.join(", ")}, Philippines`,
    )}`,
  },
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 7:00 PM" },
    { days: "Saturday – Sunday", time: "Closed" },
  ],
  hoursNote: "Message us to confirm before visiting.",

  primaryCta: { label: "Message Us", href: messengerUrl, external: true },
  callCta: { label: "Call (044) 323 1805", href: "tel:+63443231805" },

  nav: [
    { label: "Home", href: "#home" },
    { label: "Programs", href: "#programs" },
    { label: "About", href: "#about" },
    { label: "Why CRAM", href: "#why-cram" },
    { label: "Contact", href: "#contact" },
  ],

  contactChannels: [
    { id: "phone", kind: "contact", label: "Phone", icon: "phone", display: "(044) 323 1805", href: "tel:+63443231805" },
    {
      id: "email",
      kind: "contact",
      label: "Email",
      icon: "mail",
      display: "CRAMTutorialServices@gmail.com",
      href: "mailto:CRAMTutorialServices@gmail.com",
    },
    { id: "facebook", kind: "social", label: "Facebook", icon: "facebook", display: "CRAMTutorialService", href: facebookUrl },
    { id: "messenger", kind: "social", label: "Messenger", icon: "messenger", display: "Send us a message", href: messengerUrl },
  ],

  copyright: "© 2026 CRAM Tutorial Center. All rights reserved.",
};
