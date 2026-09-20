# Kavindya Wickramarachchi - Portfolio

Personal portfolio for **Kavindya Wickramarachchi**, positioned as a Frontend Developer focused on React and React Native.

Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion and React Router. Designed as a single-page homepage with project case-study routes.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

The production build copies `dist/index.html` to `dist/404.html` so GitHub Pages can load client routes such as `/projects/orbito`.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. If the site is served from `https://<user>.github.io/<repo>/`, set `base` in `vite.config.ts` to `'/<repo>/'`.
3. If you later use a custom domain such as `kavindya.dev`, keep `base: '/'`.
4. Build the project and publish the `dist` folder, or wire GitHub Actions / the Pages source to that output.

## Replace placeholders

The site is designed to look complete before personal assets are added. Update these files when you have the real content:

| File | What to replace |
| --- | --- |
| `src/data/site.ts` | Email, LinkedIn, GitHub, certifications URL |
| `src/data/projects.ts` | Live demo and GitHub URLs for each project |
| `public/profile.svg` | Replace with `public/profile.jpg`, then point `profileImage` at it |
| `public/resume.pdf` | Your real CV |
| `public/projects/*.svg` | Real screenshots (`orbito.png`, `voyra.png`, `mediease.png`) |

Empty live/GitHub/social URLs are hidden automatically. Fill them in when you want the buttons to appear.

## Site structure

```text
/
├── Hero
├── About
├── What I do
├── Selected projects
├── Experience
├── Skills
├── Education
├── Certifications
└── Contact

/projects/orbito
/projects/voyra
/projects/mediease
```
