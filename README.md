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

## Run Locally

```bash
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
- GitHub Actions workflow: `.github/workflows/vercel-deploy.yml`
  - Push to `main` -> production deploy
  - PR to `main` -> preview deploy
