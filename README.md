# RoseraOps — Enterprise AI Cost Optimization & Human-First AI Training

Premium, floral-themed, statically-exported marketing site for **RoseraOps**.
Built with Next.js (App Router) + TypeScript + Tailwind CSS. No backend, no
database, no API routes — a single static page deployable to Cloudflare Pages.

> Prune AI waste. Let human intelligence bloom.

## Stack

- Next.js 14 (App Router, `output: 'export'`)
- TypeScript
- Tailwind CSS 3
- Google Fonts via `next/font` (Playfair Display + Inter — self-hosted at build, no runtime requests)
- CSS / SVG only for all visuals (no external image dependencies)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build (static export)

```bash
npm run build
```

This generates a fully static site in the `out/` directory.

## Deploy to Cloudflare Pages

1. Push this repository to GitHub (repo name suggestion: `roseraops-website`).
2. In Cloudflare Pages, create a project and connect the GitHub repo.
3. Use these build settings:
   - **Framework preset:** Next.js (Static HTML Export) — or "None"
   - **Build command:** `npx next build`
   - **Build output directory:** `out`
4. Deploy. Add your custom domain `roseraops.com` under the project's
   **Custom domains** tab.

The project is configured for static export (`output: 'export'`,
`images.unoptimized: true`), so no server-side features are used.

## Editing content

- All copy and data live in `lib/constants.ts`.
- Change the contact email in `lib/constants.ts` (`COMPANY.email` and `MAILTO`).
- Colors, fonts, and animations are defined in `tailwind.config.ts` and
  `app/globals.css`.

## Project structure

```
app/
  globals.css
  icon.svg
  layout.tsx
  page.tsx
components/
  AnimatedCard.tsx
  BeliefSection.tsx
  BuiltWithMethodSection.tsx
  CTASection.tsx
  FloralBackground.tsx
  Footer.tsx
  FounderThesisSection.tsx
  Hero.tsx
  MethodSection.tsx
  Navbar.tsx
  PhilosophySection.tsx
  ProblemSection.tsx
  ProofPointSection.tsx
  ResearchSection.tsx
  SectionHeading.tsx
  ServicesSection.tsx
  ThesisSection.tsx
  TrainingRulesSection.tsx
lib/
  constants.ts
next.config.mjs
package.json
postcss.config.mjs
tailwind.config.ts
tsconfig.json
```
