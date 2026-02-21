# personal-website

A static personal website and digital business card built with SvelteKit, featuring a Linux TWM (Tiling Window Manager) dark terminal aesthetic.

## Tech Stack

- **Framework**: SvelteKit v2 / Svelte v5
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript 5.9
- **Testing**: Playwright (E2E)
- **Deployment**: GitHub Pages (adapter-static)

## Design

The UI draws from the Linux developer workstation aesthetic — dark theme, zero border-radius, 1px solid borders, and terminal-style interactions. Typography uses Syne and Space Grotesk for headings, Intel One Mono for body and code, and LXGW WenKai Screen for Chinese text. All site copy is in Traditional Chinese (zh-TW).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [pnpm](https://pnpm.io/)

### Commands

```bash
pnpm install   # Install dependencies
pnpm dev       # Start dev server
pnpm build     # Production build
pnpm preview   # Preview production build
pnpm test      # Run E2E tests
pnpm lint      # Check formatting & lint
pnpm format    # Auto-format code
```

## License

This project is licensed under [CC BY-NC-ND 4.0](LICENSE).
