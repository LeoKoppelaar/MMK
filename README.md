# MMK Services — Website

Professional accounting & audit advisory website for MMK Services (IČO 44279949), operating across Slovakia, Czech Republic, Netherlands, and Germany.

## Tech Stack

- **Next.js 14** (App Router, static export)
- **TypeScript**
- **Tailwind CSS** with custom design tokens
- **Framer Motion** for animations
- **next/font** — Playfair Display + DM Sans via Google Fonts
- **lucide-react** for icons

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
# Build static export
npm run build

# Output is in the /out directory — ready for any static host
# (Netlify, Vercel, S3, GitHub Pages, etc.)
```

## Project Structure

```
mmk-services/
├── app/
│   ├── layout.tsx          — root layout (fonts, metadata, nav, footer)
│   ├── globals.css         — CSS variables, base styles
│   ├── page.tsx            — Home page
│   ├── services/page.tsx   — Services listing
│   ├── about/page.tsx      — About MMK
│   └── contact/page.tsx    — Contact + form
├── components/
│   ├── Navbar.tsx          — fixed responsive navbar
│   ├── Footer.tsx          — dark navy footer
│   ├── PageHeader.tsx      — inner-page dark header band
│   ├── AnimatedSection.tsx — Framer Motion fade-up wrapper
│   └── ui/
│       ├── Button.tsx      — multi-variant button
│       ├── Card.tsx        — surface card with hover
│       └── Badge.tsx       — jurisdiction pill badge
├── lib/
│   └── constants.ts        — all site content & config
├── tailwind.config.ts      — extended theme (colors, fonts)
├── next.config.mjs          — static export config
└── README.md
```

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#1B365D` | Deep Navy — headers, nav, branding |
| `--color-accent` | `#008080` | Teal — CTAs, highlights, active states |
| `--color-bg` | `#FAFAFA` | Off-white — body background |
| `--color-surface` | `#FFFFFF` | Pure white — cards, panels |
| `--color-text` | `#2C3E50` | Charcoal — body copy |

## Editing Content

All site content (company info, services, team, nav links) lives in [`lib/constants.ts`](lib/constants.ts). Edit that file to update text without touching page components.

## Deployment

This site is configured as a **static export** (`output: 'export'` in `next.config.mjs`). After `npm run build`, the `/out` directory contains plain HTML/CSS/JS that can be deployed to any static host.
