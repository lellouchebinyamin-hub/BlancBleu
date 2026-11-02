# BlancBleu

Marketing site for BlancBleu, a private mortgage advisory firm (since 2004) serving Hebrew and French speakers in Israel.

## Stack

- Next.js 16 (App Router, Cache Components), React 19, TypeScript
- Tailwind CSS v4, shadcn/ui (Base UI) for ready-made components
- Motion for scroll and pointer effects; entrance animations are plain CSS
- `next/font`: Frank Ruhl Libre (headings) and Heebo (body), self-hosted

## Commands

```bash
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Structure

```
docs/                     strategy, homepage architecture, art direction, motion system
src/app/(he)/             Hebrew root layout and pages, served at /
src/app/fr/               French root layout and pages, served at /fr
src/components/ui/        shadcn components (button, sheet), tuned to the brand
src/components/layout/    document shell, header, logo
src/components/motion/    Reveal, RevealGroup, TextReveal, Parallax, MotionProvider
src/components/sections/  page sections (hero so far)
src/content/              typed dictionaries: he.ts, fr.ts
src/features/             page compositions
src/lib/                  i18n helpers, fonts, metadata, site constants, motion tokens
```

Two root layouts (one per language) set `lang` and `dir` on `<html>`, so there is no i18n library and no middleware. Components use logical Tailwind utilities (`ms-`, `ps-`, `start-`, `border-s`) so both directions share one implementation. To add a page, add a route file in each language folder and the strings to both dictionaries.

## Open items

- `src/lib/site.ts`: set `whatsappUrl` once the number is confirmed; set `NEXT_PUBLIC_SITE_URL` for the real domain.
- Replace the vector approximation in `src/components/layout/logo.tsx` with the supplied logo file, and sample the exact brand blue (`--color-brand` in `globals.css`).
- Contact form (`src/app/actions/contact.ts`): set `CONTACT_WEBHOOK_URL` to an endpoint that accepts a JSON POST (Formspree, Make, Zapier, n8n, or your own). Without it the form answers with an error instead of pretending to send. Add rate limiting before launch.
- `src/lib/site.ts`: confirm the Israeli phone number and add the French one (the old site's French number is missing a digit). Social links and company details (registration number, address) are not shown yet because they were not provided.
- Header, footer and section links point at `/services`, `/blog`, `/contact` and the legal pages, which are built in later steps.
