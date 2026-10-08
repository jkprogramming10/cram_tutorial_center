import { siteConfig } from "@/config/site";
import { announcement, programs } from "@/data/content";
import { Icon } from "@/components/ui/Icon";

const RED = "#e63946";
const YELLOW = "#fbbf24";
const GREEN = "#2fb463";
const BLUE = "#1d6fd6";
const INK = "#1c2541";

/** Original illustration inspired by the motifs on the CRAM logo (schoolhouse, ABC blocks, book, star). */
function SchoolhouseScene() {
  return (
    <svg viewBox="0 0 400 330" className="h-auto w-full" aria-hidden="true">
      {/* Clouds */}
      <g fill="#fff">
        <ellipse cx="70" cy="84" rx="34" ry="13" />
        <ellipse cx="88" cy="74" rx="20" ry="14" />
        <ellipse cx="236" cy="54" rx="28" ry="11" />
        <ellipse cx="252" cy="46" rx="16" ry="11" />
      </g>

      {/* Smiling star */}
      <polygon
        points="322,42 329.6,61.5 350.5,62.7 334.4,76 339.6,96.3 322,85 304.4,96.3 309.6,76 293.5,62.7 314.4,61.5"
        fill={YELLOW}
        stroke={YELLOW}
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <circle cx="316.5" cy="70" r="2.2" fill={INK} />
      <circle cx="327.5" cy="70" r="2.2" fill={INK} />
      <path d="M316 77 Q322 82.5 328 77" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />

      {/* Hearts */}
      <path d="M112 118c-3-4-9-1-7 4l7 6 7-6c2-5-4-8-7-4Z" fill={RED} opacity="0.75" />
      <path d="M262 104c-2.4-3.2-7.2-.8-5.6 3.2l5.6 4.8 5.6-4.8c1.6-4-3.2-6.4-5.6-3.2Z" fill={GREEN} opacity="0.75" />

      {/* Ground */}
      <path d="M0 292 Q200 252 400 292 L400 330 L0 330 Z" fill={GREEN} opacity="0.16" />
      <ellipse cx="200" cy="292" rx="150" ry="10" fill={INK} opacity="0.06" />

      {/* Trees */}
      <rect x="62" y="236" width="8" height="54" rx="3" fill="#b7791f" />
      <circle cx="66" cy="226" r="27" fill={GREEN} />
      <circle cx="58" cy="216" r="8" fill="#fff" opacity="0.22" />
      <rect x="330" y="240" width="8" height="50" rx="3" fill="#b7791f" />
      <circle cx="334" cy="230" r="24" fill={GREEN} />
      <circle cx="327" cy="221" r="7" fill="#fff" opacity="0.22" />

      {/* Schoolhouse */}
      <rect x="120" y="150" width="160" height="140" rx="10" fill="#fff" stroke="#e7e5e4" strokeWidth="2" />
      <path d="M108 158 L200 94 L292 158 Z" fill={RED} stroke={RED} strokeWidth="10" strokeLinejoin="round" />
      <rect x="160" y="126" width="80" height="27" rx="8" fill="#fff" />
      <text
        x="200"
        y="146"
        textAnchor="middle"
        fontSize="19"
        fontWeight="700"
        style={{ fontFamily: "var(--font-display)" }}
      >
        <tspan fill={RED}>C</tspan>
        <tspan fill="#f59e0b">R</tspan>
        <tspan fill={BLUE}>A</tspan>
        <tspan fill={GREEN}>M</tspan>
      </text>

      {/* Windows with flower boxes */}
      {[138, 228].map((x) => (
        <g key={x}>
          <rect x={x} y="180" width="34" height="34" rx="6" fill="#fde68a" />
          <path d={`M${x + 17} 180 V214 M${x} 197 H${x + 34}`} stroke="#fff" strokeWidth="3" />
          <rect x={x - 2} y="214" width="38" height="7" rx="3.5" fill={GREEN} />
        </g>
      ))}

      {/* Door */}
      <path d="M182 290 V240 a18 18 0 0 1 36 0 V290 Z" fill={BLUE} />
      <circle cx="210" cy="266" r="2.6" fill={YELLOW} />
      <rect x="172" y="287" width="56" height="6" rx="3" fill="#d6d3d1" />

      {/* ABC blocks */}
      <rect x="78" y="262" width="28" height="28" rx="5" fill={RED} />
      <rect x="108" y="262" width="28" height="28" rx="5" fill={YELLOW} />
      <rect x="93" y="233" width="28" height="28" rx="5" fill={BLUE} />
      <g fontSize="16" fontWeight="700" textAnchor="middle" fill="#fff" style={{ fontFamily: "var(--font-display)" }}>
        <text x="92" y="282">A</text>
        <text x="122" y="282" fill={INK}>B</text>
        <text x="107" y="253">C</text>
      </g>

      {/* Open book */}
      <path d="M300 290 L270 281 L270 259 L300 268 Z" fill="#fff" stroke={BLUE} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M300 290 L330 281 L330 259 L300 268 Z" fill="#fff" stroke={BLUE} strokeWidth="2.5" strokeLinejoin="round" />
      <path
        d="M276 268 L294 273 M276 274 L294 279 M306 273 L324 268 M306 279 L324 274"
        stroke={BLUE}
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HeroVisual() {
  const weekday = siteConfig.hours[0];

  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-104 select-none sm:max-w-124">
      {/* Panel */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-b from-sky-100 via-blue-50 to-amber-50 px-4 pb-2 pt-10 shadow-[0_40px_80px_-40px_rgb(28_37_65/0.35)] ring-1 ring-navy/5 sm:px-8 sm:pt-14">
        <div className="absolute inset-0 bg-dots opacity-50 mask-[linear-gradient(to_bottom,black,transparent_60%)]" />
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-royal/10" />
        <div className="relative">
          <SchoolhouseScene />
        </div>
      </div>

      {/* Four-colour ribbon echoing the logo ring */}
      <div className="absolute -bottom-2 left-1/2 flex h-2 w-2/3 -translate-x-1/2 overflow-hidden rounded-full shadow-sm">
        <span className="flex-1 bg-cram-red" />
        <span className="flex-1 bg-accent" />
        <span className="flex-1 bg-cram-green" />
        <span className="flex-1 bg-royal" />
      </div>

      {/* Floating: announcement, or location when there is none (all sizes) */}
      <div className="absolute -top-5 left-3 animate-float motion-reduce:animate-none sm:-left-6 sm:top-8">
        <div className="flex items-center gap-3 rounded-2xl bg-white py-2.5 pl-2.5 pr-4 shadow-[0_18px_40px_-16px_rgb(28_37_65/0.35)] ring-1 ring-navy/5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-navy">
            <Icon name={announcement ? "home" : "mapPin"} className="h-5 w-5" strokeWidth={2} />
          </span>
          <div>
            <p className="font-display text-sm font-semibold text-navy">
              {announcement ? announcement.cardTitle : siteConfig.address.locality}
            </p>
            <p className="text-xs text-slate-500">
              {announcement ? announcement.cardText : siteConfig.address.region}
            </p>
          </div>
        </div>
      </div>

      {/* Floating: hours (sm+) */}
      <div className="absolute -bottom-7 -right-4 hidden animate-float-slow motion-reduce:animate-none sm:block lg:-right-8">
        <div className="flex items-center gap-3 rounded-2xl bg-white py-2.5 pl-2.5 pr-4 shadow-[0_18px_40px_-16px_rgb(28_37_65/0.35)] ring-1 ring-navy/5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 text-cram-green-dark">
            <Icon name="clock" className="h-5 w-5" strokeWidth={2} />
          </span>
          <div>
            <p className="font-display text-sm font-semibold text-navy">Mon – Fri</p>
            <p className="text-xs text-slate-500">{weekday.time}</p>
          </div>
        </div>
      </div>

      {/* Floating: preschool class (sm+) */}
      <div className="absolute -left-10 top-[44%] hidden animate-float-slow motion-reduce:animate-none [animation-delay:-4s] sm:block">
        <div className="flex items-center gap-3 rounded-2xl bg-navy py-2.5 pl-2.5 pr-4 text-white shadow-[0_24px_48px_-16px_rgb(28_37_65/0.55)]">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-cram-red text-white">
            <Icon name="blocks" className="h-5 w-5" strokeWidth={2} />
          </span>
          <div>
            <p className="font-display text-sm font-semibold">{programs[0].title}</p>
            <p className="text-xs text-slate-300">&amp; tutorial support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
