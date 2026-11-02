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

## Pages

Home, services, blog (index and six-article template, five articles so far), contact, and the privacy policy, terms of use and accessibility statement. Each exists in Hebrew (at `/`) and French (at `/fr`).

## Structure

```
docs/                     strategy, homepage architecture, art direction, motion system
public/brand/             the logo (logo.png)
src/app/(he)/             Hebrew root layout and pages, served at /
src/app/fr/               French root layout and pages, served at /fr
src/app/                  icon.png (favicon) and opengraph-image.png (the preview a shared link shows)
src/components/ui/        shadcn components (button, accordion), tuned to the brand
src/components/layout/    document shell, header, footer, mobile menu, WhatsApp button, accessibility menu
src/components/blog/      blog hero, cards, article body, table of contents, reading progress
src/components/motion/    Reveal, RevealGroup, TextReveal, Parallax, MotionProvider
src/components/sections/  page sections
src/content/              typed dictionaries (he.ts, fr.ts), blog articles (blog-*.ts), legal texts (legal-*.ts)
src/features/             page compositions
src/lib/                  i18n helpers, fonts, metadata, site constants, motion tokens, accessibility settings
```

Two root layouts (one per language) set `lang` and `dir` on `<html>`, so there is no i18n library and no middleware. Components use logical Tailwind utilities (`ms-`, `ps-`, `start-`, `border-s`) so both directions share one implementation. To add a page, add a route file in each language folder and the strings to both dictionaries.

To add a blog article, add an entry to `postsHe` in `src/content/blog-he.ts` and `postsFr` in `src/content/blog-fr.ts` (same slug), and a line illustration for the slug in `src/components/sections/article-visuals.tsx`.

## Open items

- `src/lib/site.ts`: set `whatsappUrl` (a `https://wa.me/<number>` link) once the number is confirmed. Until then the WhatsApp buttons lead to the contact page.
- Set `NEXT_PUBLIC_SITE_URL` to the real domain once it is connected. Until then, on Vercel, links and previews use the project's own production address.
- Contact form (`src/app/actions/contact.ts`): set `CONTACT_WEBHOOK_URL` to an endpoint that accepts a JSON POST (Formspree, Make, Zapier, n8n, or your own). Without it the form answers with an error instead of pretending to send. Add rate limiting before launch.
- `src/lib/site.ts`: confirm the Israeli phone number and add the French one (the old site's French number is missing a digit). Social links and company details (registration number, address) are not shown yet because they were not provided.
- Blog: the "5 biggest mistakes" article is still missing its text, and the articles' FAQ answers were not supplied. The articles' figures (rates, savings) are as the firm supplied them and should be kept current.
- The privacy policy, terms of use and accessibility statement are drafts written for the site as it is today. Have a legal adviser review them, and update them if cookies, analytics or new data collection are added.
