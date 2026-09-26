# Muhammad Saud — Portfolio

Personal portfolio site for Engr. Muhammad Saud — RF Engineer specializing in 2G/4G/5G network optimization, with a data analytics/data science focus (Python, SQL, Power BI).

Built with React 19, TypeScript, Vite, Tailwind CSS, and Motion for animation.

## Run locally

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

Output is written to `dist/`.

## Project structure

```
src/
  components/     UI sections (Hero, Experience, Skills, Projects, etc.)
  resumeData.ts   All resume/profile content — edit this to update the site's text
  App.tsx         Page layout / section order
public/
  avatar.jpg              Profile photo
  Muhammad-Saud-CV.pdf    Downloadable CV (linked from the Hero "Download CV" button)
```

To update content (job history, skills, certifications, projects), edit `src/resumeData.ts` — the components render directly from that file.

## Deploying

This is a static Vite app — `npm run build` produces a `dist/` folder that can be deployed to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).
