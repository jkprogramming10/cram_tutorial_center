# CRAM Tutorial Center — Landing Page

Next.js (App Router) · TypeScript · Tailwind CSS v4

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint       # ESLint
npm run build      # production build (also type-checks)
npm start          # serve the production build
```

## Deploying

Set the live domain so share previews and canonical URLs are absolute:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

Without it, Open Graph/Twitter image URLs point to `http://localhost:3000`.

## Brand assets

| File | Purpose |
| --- | --- |
| `src/app/icon.svg`, `src/app/favicon.ico` | Browser favicon (CRAM four-colour ring) |
| `src/app/apple-icon.tsx` | iOS home-screen icon (generated PNG) |
| `src/app/opengraph-image.tsx`, `twitter-image.tsx` | Facebook / Messenger / X share preview (generated 1200×630 PNG) |
| `src/components/ui/Logo.tsx` | Site logo — see the comment at the top to swap in the official logo file |

All generated images are built statically at `npm run build`. `favicon.ico` is a 16/32/48 px export of `icon.svg` — regenerate it if the icon changes.

## Editing content

All business information lives in two files — no need to touch components:

| File | What it holds |
| --- | --- |
| `src/config/site.ts` | Name, address, phone, email, hours, Facebook / Messenger links, main CTAs, navigation, copyright |
| `src/data/content.ts` | New-home announcement, hero copy, core values, About copy, programs, "Why CRAM" points, getting-started steps, testimonials |

### Source of truth

Business facts come from the official Facebook Page
<https://www.facebook.com/CRAMTutorialService> (public information reviewed October 5, 2026).
Do not add services, statistics, prices or claims that the page does not support.

### Still to confirm with the CRAM owner

- **Office hours** (`site.ts` → `hours`): Mon–Fri 8:00 AM–7:00 PM is what Facebook lists, but that
  listing was last updated about 4 years ago.
- **Announcement** (`content.ts` → `announcement`): the October 5, 2026 move. Set it to `null` once
  the move is no longer news — all "new home" wording switches to neutral text, no component edits needed.
- **Phone label**: Facebook lists (044) 323 1805 under "Mobile"; confirm it is the right number to call.
- **Logo**: the site uses a hand-built version. Put the official SVG/PNG in `public/brand/` and set
  `officialLogo` in `site.ts` — every logo on the page switches automatically.
- **Google Maps**: the link is a search for the exact address (it resolves to Sto. Niño Village /
  DAO Drive, Bahay Pare). If CRAM has a Google Business listing at the new address, its share link can
  replace `address.mapsUrl`.
- **Testimonials** (`content.ts` → `testimonials`): empty, so the page shows
  "Your Story Could Be Here". Add real, permission-granted quotes to show a card grid.
- **Grade levels / subjects / enrollment details**: not publicly listed, so the site does not mention them.
