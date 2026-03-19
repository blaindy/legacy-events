# Legacy Events Landing Page

Astro + Tailwind landing page for an events venue.

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
