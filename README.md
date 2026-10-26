# automatewithjigar

Portfolio site for Jigar Prajapati, built with [AstroWind](https://github.com/arthelokyo/astrowind) (Astro + Tailwind CSS, MIT).

Live: https://jigar48.github.io/automatewithjigar/

## Develop

```bash
npm ci
npm run dev      # http://localhost:4321/automatewithjigar/
npm run build    # outputs to dist/
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml` and publishes to GitHub Pages.
In the repo, set **Settings → Pages → Source = GitHub Actions** once.

Content lives in `src/pages/index.astro`; site settings in `src/config.yaml`; nav in `src/navigation.ts`.
