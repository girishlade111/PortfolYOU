# PortfolYOU

A modern, fully-responsive personal portfolio website built with **Next.js 15**, **React**, **TypeScript**, **Tailwind CSS** and **shadcn/ui**. It showcases a developer profile with sections for hero, about, projects, services, testimonials, and contact — all rendered as a fast static site.

## ✨ Features

- **Hero section** — headline intro with calls-to-action
- **About** — bio, skills and background
- **Projects** — portfolio project cards with details
- **Services** — service offerings grid
- **Testimonials** — client feedback carousel
- **Contact** — client-side validated contact form that opens the visitor's email client with the message pre-filled (works without any backend), plus direct email and social links
- **Fully static** — `output: "export"`, deployable to any static host
- Dark-themed, polished UI with Radix-based shadcn components

## 🛠️ Built With

- **Next.js 15** — React framework (static export)
- **React 18** — UI library
- **TypeScript** — type-safe code
- **Tailwind CSS** — utility-first styling
- **shadcn/ui + Radix UI** — accessible components
- **Lucide React** — icon set

## 🚀 Quick Start

```bash
npm install
npm run dev        # start dev server (default: http://localhost:9002)
```

## 📦 Project Structure

```
PortfolYOU/
├── src/
│   ├── app/                  # Next.js app router (layout, page, globals.css)
│   ├── components/
│   │   ├── common/           # Header, Footer
│   │   ├── sections/         # Hero, About, Projects, Services, Testimonials, Contact
│   │   └── ui/               # shadcn/ui primitives
│   ├── hooks/                # React hooks (e.g. use-toast)
│   └── lib/                  # Utilities
├── public/                   # Static assets
└── next.config.ts            # Next.js config (static export enabled)
```

## 🌐 Deploy

Static export is enabled (`output: "export"` in `next.config.ts`):

```bash
npm install
npm run build   # emits the static site to ./out
```

Deploy the `out/` folder to any static host — the live site runs on GitHub Pages.

### Notes on the static conversion

- The original codebase included Next.js Server Actions backed by Genkit AI flows. Those required a `GOOGLE_GENAI_API_KEY` server secret, so the AI bio-generator and server contact action were removed to allow full static hosting.
- The contact form is fully client-side: it validates input in the browser and opens the visitor's email client with the message pre-filled.

## Credits

**Built by Girish Lade** — [ladestack.in](https://ladestack.in)
