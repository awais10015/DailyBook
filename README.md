# DailyBook

DailyBook is a bookkeeping dashboard for small businesses: manage **customers**, **suppliers**, and **invoices**, with a home dashboard for cash flow and recent activity.

> **Status:** Frontend prototype. Auth and data are client-side demos (no database or API yet).

## Features

- **Dashboard** — KPI cards, cash-flow chart, expense breakdown, recent invoices table
- **Customers / Suppliers / Invoices** — Searchable tables, bulk select/delete, add/edit dialogs (UI)
- **Auth** — Login, register, forgot password, set new password
- **Shell** — Collapsible sidebar, breadcrumbs, light/dark theme toggle, user menu

## Tech stack

| Layer | Technology |
|--------|------------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| UI | React 19, [Tailwind CSS 4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/) |
| Charts | [Recharts](https://recharts.org/) |
| Theme | [next-themes](https://github.com/pacocoursey/next-themes) |
| Auth (demo) | Cookie + `localStorage` token, React context |

## Prerequisites

- **Node.js** 18.18+ (20+ recommended)
- **npm** (or yarn / pnpm / bun)

## Getting started

```bash
cd DailyBook

npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Site **title**, **description**, and **Open Graph** metadata are configured in `src/app/layout.tsx`. Favicons are generated from `src/app/icon.tsx` and `src/app/apple-icon.tsx` (brand green book mark).

### Demo login

| Field | Value |
|--------|--------|
| Email | `test@test.com` |
| Password | `asdf` |

Middleware requires a `token` cookie; login sets a demo token. Register and password-reset flows are UI-only.

### Scripts

```bash
npm run dev     # Development server
npm run build   # Production build
npm run start   # Run production server (after build)
npm run lint    # ESLint
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Redirects to login or dashboard |
| `/login` | Sign in |
| `/register` | Create account (demo) |
| `/forgotpassword` | Request reset link (demo) |
| `/newpassword` | Set new password (demo) |
| `/dashboard` | Main dashboard |
| `/customer` | Customers list |
| `/supplier` | Suppliers list |
| `/invoice` | Invoices + party tabs + balance cards (demo) |

Auth routes hide the sidebar and top navbar.

## Project structure

```
DailyBook/
├── public/                 # Static assets (logo, login background)
├── src/
│   ├── app/                # App Router pages
│   ├── components/
│   │   ├── auth/           # Auth layout & headers
│   │   ├── contacts/       # Shared customer/supplier/invoice list UI
│   │   ├── dashboard/      # Stat cards, etc.
│   │   ├── charts/         # Dashboard charts
│   │   └── ui/             # shadcn primitives
│   ├── context/            # Current user (client state)
│   ├── lib/
│   │   ├── contacts-data.ts
│   │   ├── dashboard-data.ts
│   │   └── logout.ts
│   └── middleware.js       # Cookie gate for protected routes
└── package.json
```

## Design tokens

Brand green is defined in `src/app/globals.css`:

- `--brand: #53b700`
- `--brand-hover: #469900`

## Current limitations

- No backend, database, or real authentication
- List **create/edit** dialogs do not persist new rows (delete and search work in memory)
- Dashboard and invoice metrics use **sample data**
- Package name in `package.json` is still `dashboard2` (cosmetic)

## Possible next steps

- API routes or server actions + Prisma/Postgres
- Real auth (e.g. NextAuth, Clerk)
- Wire forms to CRUD and sync KPIs with live data
- Rename package to `dailybook` and add `.env.example`

## License

Private project (`"private": true` in `package.json`). Add a license if you open-source it.
