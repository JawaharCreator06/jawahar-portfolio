# Jawahar T — Portfolio (Premium Animated Starter)

This repository is a starter portfolio scaffold built with Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion + next-themes.
Personalized for **Jawahar T** with the CineVibe project pre-filled.

## Quick start (locally)

```bash
# Install
npm install

# Dev
npm run dev
# Build (for production)
npm run build
npm start
```

## Deploying to Vercel (recommended)

1. Create a GitHub repository and push this project to it (example):
```bash
git init
git add .
git commit -m "chore: initial portfolio"
# create a repo on GitHub and add remote
git remote add origin https://github.com/JawaharCreator06/jawahar-portfolio.git
git push -u origin main
```

2. Sign in to Vercel (https://vercel.com) and click **Add New Project** → **Import from Git Repository**, pick `jawahar-portfolio`.

3. Vercel will auto-detect Next.js. Use the defaults:
- Framework: Next.js
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: (leave blank)

4. Add environment variables if you add any external APIs (e.g. `OMDB_API_KEY`) in Project Settings → Environment Variables.

5. Deploy and enable automatic GitHub integration for preview deploys on PRs and branches.

## Other notes
- Use `next/image` for production-level image optimization.
- If you want a CMS-managed portfolio, integrate Sanity/Contentful or use MDX files for blog/case studies.
- Domain: set a custom domain in Vercel dashboard once deployed (e.g., Jawahar07.Techki).

---
If you want, I can also create the GitHub repo for you (I will give exact git commands) and help connect it to Vercel.
