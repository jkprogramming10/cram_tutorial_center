import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
};

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] ${
        tone === "dark" ? "text-sky" : "text-royal"
      }`}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div data-reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className={`mt-4 text-[2.1rem] font-semibold leading-[1.12] sm:text-4xl lg:text-[2.9rem] ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
