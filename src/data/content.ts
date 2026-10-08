import type { IconName } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";

/**
 * Editable landing-page content. Update copy here rather than in components.
 *
 * Facts are based on the official CRAM Facebook Page
 * (https://www.facebook.com/CRAMTutorialService). Marketing phrasing is ours,
 * but no claim below goes beyond what the page shows.
 */

export type Accent = "red" | "yellow" | "green" | "blue";

/* ------------------------------------------------------------------ */
/* Announcement                                                        */
/* ------------------------------------------------------------------ */

export type Announcement = {
  /** Label for the hero badge. */
  label: string;
  /** Shorter badge label for small phones. */
  shortLabel: string;
  /** Where the badge links. */
  href: `#${string}`;
  /** Floating card on the hero illustration. */
  cardTitle: string;
  cardText: string;
  /** Feature panel in the closing call-to-action section. */
  headline: string;
  headlineAccent: string;
  details: string;
};

// From the "WE ARE MOVING!" post: operations at the new location start
// October 5, 2026. Set this to `null` when the move is no longer news —
// every "new home" mention on the page switches to neutral wording automatically.
export const announcement: Announcement | null = {
  label: "Now open at our new CRAM home in Bahay Pare",
  shortLabel: "Now open in Bahay Pare",
  href: "#contact",
  cardTitle: "New CRAM home",
  cardText: "Now open in Bahay Pare",
  headline: "New Home. New Beginnings.",
  headlineAccent: "Same Commitment to Learning.",
  details: "Our new CRAM home in Sto. Niño Village, Bahay Pare opened on October 5, 2026.",
};

/** Location wording that adapts to whether the move is still being announced. */
export const visit = {
  factLabel: announcement ? "Our new home" : "Visit us",
  contactTitle: announcement ? "Visit Our New CRAM Home" : "Visit CRAM Tutorial Center",
  linkLabel: announcement ? "Visit our new home" : "Get directions",
};

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  /** Eyebrow above the headline; the name part is hidden on phones (the logo already shows it). */
  eyebrowName: siteConfig.fullName,
  eyebrowLocation: siteConfig.location,
  titleLead: "A caring place for",
  titleHighlight: "young learners",
  titleTail: "to grow",
  description:
    "A preschool class, tutorial support, and hands-on learning activities in a safe, positive learning space — helping learners improve, become independent, and achieve their goals.",
};

/* ------------------------------------------------------------------ */
/* Core values — the four words on the official CRAM logo              */
/* ------------------------------------------------------------------ */

export type Value = { title: string; description: string; icon: IconName; accent: Accent };

export const values: Value[] = [
  { title: "Improvement", description: "Steady progress, step by step", icon: "trending", accent: "red" },
  { title: "Independence", description: "Confident, self-reliant learners", icon: "star", accent: "yellow" },
  { title: "Care", description: "Patient, caring guidance", icon: "heart", accent: "green" },
  { title: "Inclusivity", description: "Every learner is welcome", icon: "users", accent: "blue" },
];

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  eyebrow: "About CRAM",
  title: "Part of the CRAM Family",
  intro:
    `CRAM Tutorial Center in ${siteConfig.location} is run by committed individuals who provide quality, healthy, and positive learning strategies for our learners.`,
  secondary:
    "Every day, we guide children through their schoolwork, help them build good habits, and keep a close eye on each learner's progress — all in an organized, welcoming learning space.",
  mission: "Inspiring learners to improve, become independent, and achieve their goals.",
  missionLabel: "What drives us",
};

/* ------------------------------------------------------------------ */
/* Programs (verified from the official page)                          */
/* ------------------------------------------------------------------ */

export type Program = {
  title: string;
  tag: string;
  description: string;
  highlights: string[];
  icon: IconName;
  accent: Accent;
};

export const programs: Program[] = [
  {
    title: "Preschool Class",
    tag: "For our youngest learners",
    description:
      "A warm, child-friendly class where little ones take their first learning steps with patient guidance.",
    highlights: ["Early writing practice", "Play-based, hands-on learning"],
    icon: "blocks",
    accent: "yellow",
  },
  {
    title: "Tutorial Support",
    tag: "Lessons & assignments",
    description:
      "Guided help with lessons, assignments, and learning activities, while we monitor and support each learner's progress.",
    highlights: ["Good study habits", "Progress you can follow"],
    icon: "book",
    accent: "blue",
  },
  {
    title: "Learning Activities",
    tag: "Learning beyond the books",
    description:
      "Creative, hands-on projects and celebrations that make learning joyful and help children grow in confidence.",
    highlights: ["Lantern making & healthy-snack projects", "Christmas & Halloween celebrations"],
    icon: "palette",
    accent: "red",
  },
];

/* ------------------------------------------------------------------ */
/* Why CRAM                                                            */
/* ------------------------------------------------------------------ */

export type Feature = { title: string; description: string; icon: IconName; accent: Accent };

// The first feature is displayed as the highlighted card.
export const features: Feature[] = [
  {
    title: "A Safe, Child-Friendly Space",
    description:
      "An organized, welcoming learning space where children feel safe, comfortable, and ready to learn.",
    icon: "home",
    accent: "green",
  },
  {
    title: "Progress You Can See",
    description: "We monitor and support each learner's academic progress along the way.",
    icon: "trending",
    accent: "red",
  },
  {
    title: "Good Habits & Confidence",
    description: "We encourage good study habits, confidence, and positive behavior.",
    icon: "star",
    accent: "yellow",
  },
  {
    title: "Learning That's Fun",
    description: "Hands-on activities and celebrations make every learning moment memorable.",
    icon: "palette",
    accent: "blue",
  },
];

/* ------------------------------------------------------------------ */
/* Getting started                                                     */
/* ------------------------------------------------------------------ */

export type Step = {
  number: string;
  stage: string;
  title: string;
  description: string;
  icon: IconName;
};

export const steps: Step[] = [
  {
    number: "01",
    stage: "Reach out",
    title: "Message or Call Us",
    description: `Send us a message on Facebook or call ${siteConfig.phone.display} to ask about our programs.`,
    icon: "messenger",
  },
  {
    number: "02",
    stage: "Visit",
    title: announcement ? "Visit Our New Home" : "Visit Us",
    description: `Drop by ${announcement ? "our new home" : "our center"} in Sto. Niño Village, Bahay Pare, ${siteConfig.location}.`,
    icon: "home",
  },
  {
    number: "03",
    stage: "Grow",
    title: "Join the CRAM Family",
    description: "Start learning in a positive space built on improvement, independence, care, and inclusivity.",
    icon: "heart",
  },
];

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

export type Testimonial = {
  quote: string;
  name: string;
  /** e.g. "Parent of a preschool learner" */
  role: string;
};

// Add REAL testimonials here (with permission). While this list is empty the
// section shows the "Your Story Could Be Here" empty state instead.
export const testimonials: Testimonial[] = [];
