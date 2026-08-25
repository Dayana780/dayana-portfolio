# Dayana — Frontend Developer Portfolio

A premium dark-minimalist personal portfolio built with React, Vite and plain CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL shown in your terminal (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/    Reusable UI pieces (Navbar, Button, SectionTitle, ProjectCard, SkillCard, Footer)
  sections/      Page sections (Hero, TechStrip, About, Skills, Projects, Journey, Contact)
  data/          Editable content (projects.js, skills.js)
  index.css      Design tokens + global styles
  App.jsx        Composes all sections
```

## What to edit first

1. **`src/data/projects.js`** — replace the placeholder projects (`Reservation Platform`,
   `Modern Business Website`) and update the `liveUrl` / `githubUrl` links. Swap the
   `image` URLs for real screenshots of your projects once you have them.
2. **`src/sections/Contact.jsx`** — update the `contactLinks` array with your real
   email, GitHub and LinkedIn URLs.
3. **`src/components/Footer.jsx`** — update the same social links.
4. **`src/sections/About.jsx`** — personalize the introduction copy if you'd like.
5. **`index.html`** — update the page title / meta description if needed.

## Design tokens

All colors, spacing and fonts are defined once in `src/index.css` under `:root`.
Changing `--accent` there will re-theme every button, tag and hover glow across the site.

## Notes

- No animation libraries are used — all motion is CSS transitions/keyframes.
- `lucide-react` is used for icons only.
- The project intentionally avoids `useEffect`/custom hooks except for the navbar's
  scroll-listener and mobile-menu toggle, to keep the code easy to read and extend.
