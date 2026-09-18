# Khushi Gehlot — Portfolio

A cinematic, dark **black-and-pink** portfolio for an AI / Data / Software Engineer.
Built with **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion + lucide-react**.

## Stack

- **Next.js 14** (App Router, React Server + Client Components)
- **TypeScript**
- **Tailwind CSS** (utilities available; the visual design lives in `globals.css`)
- **Framer Motion** — scroll reveals, staggered entrances, hero intro
- **lucide-react** — icons
- **next/font** — Bricolage Grotesque · Manrope · JetBrains Mono (self-hosted, no layout shift)
- **next/image** — optimized portrait

## Getting started

```bash
npm install
npm run dev
```

Open **http://localhost:3000**.

## Build for production

```bash
npm run build
npm start
```

## Deploy (Vercel — recommended)

```bash
npm i -g vercel   # once
vercel            # follow prompts
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new). Zero config.

## Project structure

```
src/
  app/
    layout.tsx        # fonts, SEO/OG metadata, global chrome
    page.tsx          # section composition
    globals.css       # the full design system (tokens, layout, components)
  components/
    Background.tsx     # ambient layers + cursor glow
    Nav.tsx            # sticky nav, active-section spy, mobile menu
    Hero.tsx           # hero + framed portrait
    HeroCanvas.tsx     # particle / data-flow field
    About.tsx          # story + metadata cards + terminal
    Terminal.tsx       # typing terminal
    Experience.tsx     # timeline
    Projects.tsx       # featured + grid + modal trigger
    ProjectModal.tsx   # case-study modal
    Skills.tsx         # expandable skill clusters
    BuildingNow.tsx    # "currently building"
    Certs.tsx          # certifications + education
    Contact.tsx        # CTA + links
    Footer.tsx
    Reveal.tsx         # Framer Motion reveal/stagger helpers
    Interactions.tsx   # magnetic buttons + project-card glow
    icons.tsx          # lucide icon map
  data/
    content.ts         # ALL content — edit this to update the site
public/
  profile.jpg          # portrait (swap with your own, keep ~4:5)
  favicon.svg
```

## Editing content

Almost everything (experience, projects, case studies, skills, certs, links) lives in
[`src/data/content.ts`](src/data/content.ts). Change it there — no component edits needed.

To swap the photo, replace `public/profile.jpg` (roughly 4:5 portrait works best).
