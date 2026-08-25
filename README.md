# Dayana — Frontend Developer Portfolio

A dark-minimalist personal portfolio built with React, Vite and plain CSS.

🔗 **Live site:** https://dayana-portfolio.vercel.app

## Tech stack

- React 19
- Vite
- Plain CSS (no framework, no animation libraries — all motion is CSS transitions/keyframes)
- [lucide-react](https://lucide.dev/) for icons

## Sections

Hero, Tech Strip, About, Skills, Projects, Journey, Contact — each implemented as its own
component in `src/sections/`.

## Featured projects

- **[Lumora Shop](https://lumora-shop-indol.vercel.app)** — cosmetics e-commerce site with
  cart, wishlist, auth, filtering/sorting and Supabase integration.
- **[Task Management App](https://task-management-chi-eight-25.vercel.app)** — Kanban-style
  task manager with drag & drop, filters, comments and activity history.
- **[Hirely](https://hirely-woad-gamma.vercel.app)** — freelance/job marketplace with
  authentication and bookmarked listings.

## Project structure

\```
src/
components/ Reusable UI pieces (Navbar, Button, SectionTitle, ProjectCard, SkillCard, Footer)
sections/ Page sections (Hero, TechStrip, About, Skills, Projects, Journey, Contact)
data/ Editable content
