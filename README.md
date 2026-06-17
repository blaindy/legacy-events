# Legacy Events Website

This is a custom marketing website built for **Legacy Events** in Belleville, Ontario.
It is a production client project (not a generic open source starter), with a tailored design,
content structure, and contact flow for venue inquiries.

## How It Is Built

- Framework: Astro v6
- Styling: Tailwind CSS v4 + project-specific CSS tokens
- Hosting/Deploy: Vercel
- Source control: GitHub (`blaindy/legacy-events`)
- Form handling: Web3Forms (`PUBLIC_WEB3FORMS_ACCESS_KEY`)
- Service pages: `/weddings/`, `/corporate-events/`, and `/private-events/`
- Shared site constants: `src/lib/site.ts`
- Homepage/service content data: `src/data/home.ts` and `src/data/services.ts`
- Shared page shell/SEO: `src/layouts/BaseLayout.astro` and `src/components/SeoHead.astro`

## Run Locally

Use Node `22.12.0` (see `.nvmrc`) for the same install behavior as this project setup.

```bash
nvm use
npm install
npm run dev
```

App runs at `http://localhost:4321`.

## Environment Variable

Create `.env`:

```env
PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_key
```

This key is used by the contact form (Web3Forms).

## Build

```bash
npm run build
npm run preview
```

## Deployment

- GitHub repo: `blaindy/legacy-events`
- Vercel project: `legacy-events`
- SEO/AEO signals: `EventVenue`, `WebSite`, `WebPage`, `Service`, `BreadcrumbList`, and `FAQPage` JSON-LD are generated from shared data in `src/pages/index.astro`, `src/layouts/ServicePageLayout.astro`, `src/lib/site.ts`, and `src/data/services.ts`.
- Crawler guidance: `/robots.txt`, `/sitemap.xml`, and `/llms.txt` are generated from route endpoints in `src/pages/robots.txt.ts`, `src/pages/sitemap.xml.ts`, and `src/pages/llms.txt.ts`.
- Canonical domain: `https://legacyevents.ca` is set in `astro.config.mjs` and `src/lib/site.ts`.
- Optional local SEO fields: add real Google Business Profile, social/profile URLs, geo coordinates, or opening hours in `src/lib/site.ts`; empty values are intentionally omitted from JSON-LD.
- Vercel Analytics: package is installed and `<Analytics />` is integrated; ensure Web Analytics is enabled in the Vercel project dashboard.
- Vercel Speed Insights: package is installed and `<SpeedInsights />` is integrated; ensure Speed Insights is enabled in the Vercel project dashboard.
- GitHub Actions workflow: `.github/workflows/vercel-deploy.yml`
  - Push to `main` -> production deploy
  - PR to `main` -> preview deploy
