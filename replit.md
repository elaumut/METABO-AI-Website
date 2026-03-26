# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   └── metabo-ai-website/  # METABO AI marketing website (React + Vite)
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts
├── pnpm-workspace.yaml     # pnpm workspace
├── tsconfig.base.json      # Shared TS options
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## Artifacts

### `artifacts/metabo-ai-website` — METABO AI Marketing Website

Static React + Vite marketing website for METABO AI (metabo-ai.com), a French iOS health recovery app.

- **Preview path**: `/` (root)
- **Bilingual**: FR/EN with automatic browser language detection (French default)
- **Brand colors**: Primary `#5B7C99`, Background `#FAFBFC`
- **Typography**: Inter (Google Fonts), weight 300/400/500/600/700
- **No backend required** — fully static frontend

**Sections:**
1. Hero — tagline + App Store CTA
2. Features — 4 key features (Recovery Score, Sleep Analysis, Trend Detection, METABO+)
3. How it Works — 3-step HealthKit flow
4. Premium (METABO+) — monthly €4.99 / annual €39.99, free vs premium comparison table
5. Privacy — on-device data reassurance
6. Footer — contact, Privacy Policy, Terms of Use links

**Key URLs:**
- App Store: `https://apps.apple.com/app/id982107779`
- Privacy Policy: `https://elaumut.github.io/metabo-ai/privacy.html`
- Contact: `contact@metabo-ai.com`

**Files:**
- `src/i18n.ts` — all translations (FR + EN)
- `src/App.tsx` — root layout + language state
- `src/components/Navbar.tsx` — sticky nav with mobile hamburger
- `src/components/Hero.tsx`
- `src/components/Features.tsx`
- `src/components/HowItWorks.tsx`
- `src/components/Premium.tsx` — billing toggle, comparison table
- `src/components/Privacy.tsx`
- `src/components/Footer.tsx`

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/` and use `@workspace/api-zod` for request and response validation and `@workspace/db` for persistence.

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references.

- **Always typecheck from the root** — run `pnpm run typecheck`
- **`emitDeclarationOnly`** — only emit `.d.ts` files during typecheck
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references
