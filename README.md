# Legacy Events Landing Page

Single-page events venue landing site built with Astro + Tailwind CSS, ready for GitHub + Vercel deployment.

## Stack

- Astro
- Tailwind CSS
- Web3Forms (contact form)
- Vercel deployment adapter

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create env file:
   ```bash
   cp .env.example .env
   ```
3. Set your Web3Forms key in `.env`:
   ```env
   PUBLIC_WEB3FORMS_ACCESS_KEY=your_real_access_key
   ```
4. Start dev server:
   ```bash
   npm run dev
   ```

## Build and Preview

```bash
npm run build
npm run preview
```

## Contact Form (Web3Forms)

The form posts to `https://api.web3forms.com/submit` and reads the access key from:

- `PUBLIC_WEB3FORMS_ACCESS_KEY`

If the env var is missing, the form shows an inline error message and does not submit.

## Vercel Deployment Flow (GitHub Actions)

This repo includes `.github/workflows/vercel-deploy.yml` with:

- Preview deploys on pull requests to `main` (same-repo PRs)
- Production deploys on pushes to `main`

### One-time setup

1. Link this repo to a Vercel project once locally:
   ```bash
   npx vercel link
   ```
2. Get IDs for GitHub secrets:
   ```bash
   cat .vercel/project.json
   ```
   Use `orgId` and `projectId` values.
3. Create a Vercel personal token:
   - Vercel Dashboard -> Settings -> Tokens
4. Add these GitHub repository secrets:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
5. Ensure Vercel project environment variable is set:
   - `PUBLIC_WEB3FORMS_ACCESS_KEY`

After this, each push to `main` auto-deploys production, and PRs get preview deploys.

## Notes

- Brand name is centralized in `src/pages/index.astro` (`venueName` constant).
- Footer map is currently a static placeholder card ready for iframe replacement.
