import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "secondary" | "accent" | "ghost";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-[-0.005em] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-royal text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.18),0_10px_24px_-10px_rgb(37_99_235/0.65)] hover:-translate-y-0.5 hover:bg-royal-dark hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.18),0_16px_32px_-12px_rgb(37_99_235/0.7)] focus-visible:ring-royal",
  secondary:
    "bg-white text-navy shadow-sm ring-1 ring-slate-200 hover:-translate-y-0.5 hover:ring-slate-300 hover:shadow-md focus-visible:ring-royal",
  accent:
    "bg-accent text-navy shadow-[inset_0_1px_0_rgb(255_255_255/0.35),0_10px_24px_-10px_rgb(245_158_11/0.7)] hover:-translate-y-0.5 hover:bg-accent-light focus-visible:ring-accent focus-visible:ring-offset-navy",
  ghost:
    "bg-white/6 text-white ring-1 ring-white/20 backdrop-blur hover:-translate-y-0.5 hover:bg-white/12 hover:ring-white/35 focus-visible:ring-white focus-visible:ring-offset-navy",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-[0.95rem]",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  /** Leading icon, e.g. "messenger" or "phone". */
  icon?: IconName;
  /** Opens in a new tab with safe rel attributes and a screen-reader hint. */
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "lg",
  withArrow = false,
  icon,
  external = false,
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {icon && <Icon name={icon} className="h-[1.1rem] w-[1.1rem]" strokeWidth={2} />}
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
      {withArrow && (
        <Icon
          name="arrowRight"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          strokeWidth={2.25}
        />
      )}
    </a>
  );
}
