/**
 * The CRAM ring mark as plain SVG, for `next/og` images (favicon variants and
 * social previews). Matches src/app/icon.svg.
 */
export function BrandRing({ size, letter = true }: { size: number; letter?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <path d="M7 32A25 25 0 0 1 32 7" fill="none" stroke="#e63946" strokeWidth="14" />
      <path d="M32 7A25 25 0 0 1 57 32" fill="none" stroke="#fbbf24" strokeWidth="14" />
      <path d="M57 32A25 25 0 0 1 32 57" fill="none" stroke="#2fb463" strokeWidth="14" />
      <path d="M32 57A25 25 0 0 1 7 32" fill="none" stroke="#1d6fd6" strokeWidth="14" />
      <circle cx="32" cy="32" r="18.5" fill="#ffffff" />
      {letter && (
        <path
          d="M38.7 25.3A9.5 9.5 0 1 0 38.7 38.7"
          fill="none"
          stroke="#1c2541"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
