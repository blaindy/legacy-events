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

## Deploy to GitHub + Vercel

1. Initialize and push to GitHub:
   ```bash
   git add .
   git commit -m "Build Astro landing page"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. In Vercel, import the GitHub repository.
3. Add environment variable in Vercel project settings:
   - `PUBLIC_WEB3FORMS_ACCESS_KEY` = your Web3Forms key
4. Deploy.

## Notes

- Brand name is centralized in `src/pages/index.astro` (`venueName` constant).
- Footer map is currently a static placeholder card ready for iframe replacement.
