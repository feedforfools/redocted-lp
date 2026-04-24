# REDOCTED Landing Page

100%-local browser-based document redaction for Italian regulated professionals. This is the **marketing landing page only** — not the product itself.

## Quick Start

```bash
npm install
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Build for production
npm run test       # Run Playwright smoke tests + axe a11y checks
npm run lint       # Check code style with Biome
npm run typecheck  # Check TypeScript
```

## Documentation

- **`_DESCRIPTION.md`** — Product specs, positioning, audience, tech stack, constraints (see §12 for rules)
- **`_IMPLEMENTATION_PLAN.md`** — Epic-by-epic task breakdown with status
- **`_AGENT_PROMPT.md`** — Instructions for the implementation agent, including code & content conventions

## Project Structure

```
src/
  pages/       Astro routes (HTML, [slug].astro, etc.)
  components/  Reusable UI components
  layouts/     Page templates
  styles/      Global CSS and design tokens
  content/     Typed content collections (industries, testimonials, etc.)
tests/         Playwright smoke tests + axe accessibility
.github/       GitHub Actions CI/CD
```

## Code Standards

- **TypeScript:** Strict mode, no `any` except at documented boundaries
- **Styling:** Tailwind 4 utilities + CSS custom properties in `src/styles/tokens.css`
- **Components:** One `.astro` file per component in `src/components/[ComponentName]/index.astro`
- **Commits:** Conventional style (`feat:`, `fix:`, `docs:`, etc.) — see recent git log for examples
- **Linting:** `npm run lint` enforces Biome rules; `npm run format` auto-fixes

## Zero-Tracking by Default

No Google Analytics, no cookies, no third-party scripts. Plausible (EU-hosted) is the only analytics service, and it respects privacy by default.

## Accessibility

- Playwright + axe-core run on every PR
- Keyboard navigation and screen-reader labels are non-negotiable
- WCAG 2.1 AA minimum; aim for AAA

## Performance

- Lighthouse budgets enforced per PR: Performance ≥95, Accessibility ≥95
- Home page JS budget: ≤30kb gzipped
- LCP: <1.5s on 4G throttle

## Deployment

Hosting: Cloudflare Pages (git-push deploys, EU edge, free tier)  
Domain: redocted.com  
Preview deploys: Automatic per PR (URL in comment)

**Setup instructions:** See [DEPLOYMENT.md](./DEPLOYMENT.md)
