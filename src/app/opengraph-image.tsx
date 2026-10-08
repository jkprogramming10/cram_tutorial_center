import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { programs } from "@/data/content";
import { BrandRing } from "./_brand/BrandRing";

// Social-sharing preview (Facebook, Messenger, X). Generated as a static PNG at build time.
export const alt = `${siteConfig.fullName} — ${siteConfig.location}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#1c2541";
const RED = "#e63946";
const YELLOW = "#fbbf24";
const GREEN = "#2fb463";
const BLUE = "#1d6fd6";
const letters: [string, string][] = [
  ["C", RED],
  ["R", "#f59e0b"],
  ["A", BLUE],
  ["M", GREEN],
];

const fontDir = join(process.cwd(), "src/assets/fonts");
const fredokaSemiBold = readFile(join(fontDir, "fredoka-latin-600-normal.woff"));
const fredokaBold = readFile(join(fontDir, "fredoka-latin-700-normal.woff"));

/** Simplified schoolhouse scene (same motifs as the hero illustration, no text). */
function Schoolhouse() {
  return (
    <svg width="420" height="347" viewBox="0 0 400 330">
      <ellipse cx="70" cy="84" rx="34" ry="13" fill="#fff" />
      <ellipse cx="88" cy="74" rx="20" ry="14" fill="#fff" />
      <ellipse cx="236" cy="54" rx="28" ry="11" fill="#fff" />
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
      <path d="M0 292 Q200 252 400 292 L400 330 L0 330 Z" fill={GREEN} fillOpacity="0.18" />
      <rect x="62" y="236" width="8" height="54" rx="3" fill="#b7791f" />
      <circle cx="66" cy="226" r="27" fill={GREEN} />
      <rect x="330" y="240" width="8" height="50" rx="3" fill="#b7791f" />
      <circle cx="334" cy="230" r="24" fill={GREEN} />
      <rect x="120" y="150" width="160" height="140" rx="10" fill="#fff" stroke="#e7e5e4" strokeWidth="2" />
      <path d="M108 158 L200 94 L292 158 Z" fill={RED} stroke={RED} strokeWidth="10" strokeLinejoin="round" />
      <rect x="160" y="126" width="80" height="27" rx="8" fill="#fff" />
      <circle cx="178" cy="139.5" r="5" fill={RED} />
      <circle cx="194" cy="139.5" r="5" fill={YELLOW} />
      <circle cx="210" cy="139.5" r="5" fill={BLUE} />
      <circle cx="226" cy="139.5" r="5" fill={GREEN} />
      <rect x="138" y="180" width="34" height="34" rx="6" fill="#fde68a" />
      <rect x="228" y="180" width="34" height="34" rx="6" fill="#fde68a" />
      <rect x="136" y="214" width="38" height="7" rx="3.5" fill={GREEN} />
      <rect x="226" y="214" width="38" height="7" rx="3.5" fill={GREEN} />
      <path d="M182 290 V240 a18 18 0 0 1 36 0 V290 Z" fill={BLUE} />
      <circle cx="210" cy="266" r="2.6" fill={YELLOW} />
      <rect x="78" y="262" width="28" height="28" rx="5" fill={RED} />
      <rect x="108" y="262" width="28" height="28" rx="5" fill={YELLOW} />
      <rect x="93" y="233" width="28" height="28" rx="5" fill={BLUE} />
      <path d="M300 290 L270 281 L270 259 L300 268 Z" fill="#fff" stroke={BLUE} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M300 290 L330 281 L330 259 L300 268 Z" fill="#fff" stroke={BLUE} strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#fff8ec",
          fontFamily: "Fredoka",
          color: INK,
        }}
      >
        {/* Soft background glows */}
        <div style={{ position: "absolute", top: -160, right: -120, width: 560, height: 560, borderRadius: 9999, background: "rgba(90,184,245,0.22)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: -200, left: -140, width: 480, height: 480, borderRadius: 9999, background: "rgba(251,191,36,0.16)", display: "flex" }} />

        {/* Left: brand + message */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 0 24px 80px", width: 680 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <BrandRing size={104} letter={false} />
            <div style={{ display: "flex", flexDirection: "column", marginLeft: 24 }}>
              <div style={{ display: "flex", fontSize: 112, fontWeight: 700, lineHeight: 1, letterSpacing: -2 }}>
                {letters.map(([l, c]) => (
                  <span key={l} style={{ color: c }}>
                    {l}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", fontSize: 28, fontWeight: 600, letterSpacing: 7, color: "#475569", marginTop: 6 }}>
                TUTORIAL CENTER
              </div>
            </div>
          </div>

          <div style={{ display: "flex", fontSize: 50, fontWeight: 600, lineHeight: 1.12, marginTop: 44, maxWidth: 580 }}>
            A caring place for young learners to grow
          </div>

          <div style={{ display: "flex", marginTop: 34 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "#ffffff",
                borderRadius: 9999,
                padding: "12px 26px 12px 18px",
                fontSize: 28,
                fontWeight: 600,
                border: "2px solid rgba(28,37,65,0.08)",
              }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" style={{ marginRight: 12 }}>
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" fill={RED} />
                <circle cx="12" cy="10" r="3" fill="#ffffff" />
              </svg>
              {siteConfig.location}
            </div>
          </div>

          <div style={{ display: "flex", marginTop: 26, fontSize: 24, fontWeight: 600, color: "#475569" }}>
            {programs.map((p) => p.title).join("  ·  ")}
          </div>
        </div>

        {/* Right: illustration panel */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1, paddingRight: 56 }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              width: 440,
              height: 440,
              borderRadius: 56,
              background: "linear-gradient(180deg, #e0f2fe 0%, #eff6ff 55%, #fffbeb 100%)",
              border: "2px solid rgba(28,37,65,0.06)",
              overflow: "hidden",
            }}
          >
            <Schoolhouse />
          </div>
        </div>

        {/* Four-colour ribbon */}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 16, display: "flex" }}>
          <div style={{ flex: 1, background: RED, display: "flex" }} />
          <div style={{ flex: 1, background: YELLOW, display: "flex" }} />
          <div style={{ flex: 1, background: GREEN, display: "flex" }} />
          <div style={{ flex: 1, background: BLUE, display: "flex" }} />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fredoka", data: await fredokaSemiBold, weight: 600, style: "normal" },
        { name: "Fredoka", data: await fredokaBold, weight: 700, style: "normal" },
      ],
    },
  );
}
