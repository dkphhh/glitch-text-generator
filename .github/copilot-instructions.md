# Glitch Text Generator - AI Coding Agent Instructions

## Project Overview

A **SvelteKit 2 + Svelte 5** application that generates glitch/stylized text using Unicode transformations. Supports 33+ text styles (Zalgo, cursed, flip, font variants, etc.) with **10 language localizations** via Paraglide.js i18n framework.

## Architecture & Key Patterns

### Svelte 5 Runes (Critical)

This project uses **Svelte 5 runes** - the new reactivity system. Never use Svelte 4 patterns:

- Use `$state()` for reactive variables (not `let x = ...`)
- Use `$derived()` for computed values (not `$:`)
- Use `$effect()` for side effects (not `$:` statements)
- Use `$props()` for component props (not `export let`)

Example from `Generator.svelte`:

```svelte
let selectedStyle = $state<Style>('zalgo');
let intensity = $state(5);
let outputText = $derived.by(() => generateText());
```

### Generator System Architecture

**Core files**: `src/lib/generator/generator.ts`, `generatorData.ts`, `type.d.ts`

1. **Generator Types** (`type.d.ts`): Global types defined as `Style`, `SpecialGenerator`, `GeneratorType`
2. **Generator Data** (`generatorData.ts`): Maps generator keys to metadata (displayName, subtitle, description, urlPath) using Paraglide i18n keys
3. **Text Processing** (`generator.ts`): Central `stylizeText()` function dispatches to style-specific transformers in `styles/` directory
4. **Style Implementations**: Individual style logic in `styles/glitch-style/` (character maps) and `styles/font-variant/` (Unicode text decorators)

### Dynamic Routing with Param Matchers

Uses SvelteKit's `[page=generator]` pattern with custom param matcher (`src/params/generator.ts`):

```typescript
export const match = ((param: string) => {
  return ALL_GENERATOR_KEY.includes(param);
}) satisfies ParamMatcher;
```

Routes like `/generator/zalgo-text-generator` are validated against `ALL_GENERATOR_KEY`.

### I18n with Paraglide.js

**Setup**: `project.inlang/settings.json` defines 10 locales, messages in `messages/{locale}.json`
**Generated code**: `src/lib/paraglide/` (auto-generated, never edit directly)

**Usage patterns**:

- Import messages: `import { m } from '$lib/paraglide/messages.js'`
- Localized navigation: `import { localizeHref } from '$lib/paraglide/runtime'`
- Server middleware: `src/hooks.server.ts` injects `paraglideMiddleware` for locale detection
- HTML lang attribute: Uses `%paraglide.lang%` placeholder replaced in `hooks.server.ts`

**Adding new translations**: Edit JSON files in `messages/`, run `npm run dev` to regenerate Paraglide code.

### Content Management System

**Location**: `src/lib/page-data/content/` organized by section (blog, about, guide, etc.)
**Processing**: `utils.ts` provides functions like `getAllBlogPosts()` that:

1. Use Vite's `import.meta.glob('*.md', { query: '?raw' })` to load markdown files
2. Parse frontmatter with `gray-matter` and `js-yaml`
3. Return typed objects (`BlogPost`, `BlogFrontmatter`)

**Frontmatter pattern** (see `types.d.ts`):

```yaml
---
title: 'Post Title'
date: '2024-01-01'
description: '...'
---
```

### Notification System

**Global singleton**: `src/lib/components/common/notification/notificationManager.svelte.ts`

```typescript
notificationManager.sentMessage({
  message: ['Error message here'],
  type: 'error',  // 'info' | 'success' | 'error' | 'warning'
  duration: 3000  // optional, milliseconds
});
```

Uses Svelte 5 `$effect.root()` to monitor app updates and navigation.

## Development Workflow

### Commands

- **Dev server**: `npm run dev` (starts Vite dev server + Paraglide watch)
- **Build**: `npm run build` (SSG build, all routes prerendered - see `+layout.ts`)
- **Tests**: `npm run test` (Vitest unit tests, currently minimal setup)
- **Linting**: `npm run lint` (ESLint + Prettier check)
- **Type checking**: `npm run check` (svelte-check)

### Build Configuration

- **Adapter**: `@sveltejs/adapter-auto` (detects deployment platform)
- **Prerendering**: Enabled globally via `export const prerender = true` in `+layout.ts`
- **Vite plugins**: Tailwind CSS v4 (`@tailwindcss/vite`), Paraglide (`paraglideVitePlugin`)

### Testing Setup

Uses **Vitest** with separate test projects:

- Server environment for `.spec.ts` files
- Excludes `.svelte.spec.ts` (browser tests not yet configured)

## Project-Specific Conventions

### Styling

- **Framework**: Tailwind CSS v4 + DaisyUI components
- **Theme switching**: `ColorModeButton.svelte` manages light/dark mode
- **Global styles**: `src/app.css`

### File Naming

- Pages: `+page.svelte`
- Server-only: `+page.server.ts`
- Layouts: `+layout.svelte`
- Type definitions: `type.d.ts` (global types, no imports needed)

### Component Organization

```
src/lib/components/
├── common/        # Reusable UI (ColorModeButton, Notification, SEO)
├── generator/     # Generator-specific components
└── layout/        # Page sections (Nav, Footer, FAQ, Features)
```

### SEO Pattern

`SeoTDK.svelte` component uses `$derived` to compute:

- Title with site suffix
- Meta descriptions with character limits
- Canonical URLs with locale
- OpenGraph tags

Usage: `<SeoTDK title={m.page_title()} description={m.page_description()} />`

## Key Dependencies

- **Text processing**: `confusables` (character confusion detection), `unicode-text-decorator` (font variants)
- **Markdown**: `svelte-exmarkdown` (Markdown rendering in Svelte), `gray-matter` (frontmatter parsing)
- **Utilities**: `js-yaml` (YAML parsing for frontmatter)

## Common Pitfalls

1. **Don't manually edit** `src/lib/paraglide/` - regenerated by Paraglide plugin
2. **Always use `localizeHref()`** for internal links to maintain locale context
3. **Generator configs** (`generatorData.ts`) must match keys in `type.d.ts` and param matcher
4. **URL paths** must be unique across all generators (validated by `GENERATOR_URL_PATH_MAP`)
5. **Svelte 5 syntax**: Never mix old reactivity (`$:`) with new runes (`$state`)

## Adding New Generators

1. Define type in `src/lib/generator/type.d.ts` (`Style` or `SpecialGenerator`)
2. Add implementation in `src/lib/generator/styles/`
3. Register in `ALL_GENERATOR_DATA` (`generatorData.ts`) with i18n keys
4. Add translations to all 10 `messages/{locale}.json` files
5. Create route config in `generator/[page=generator]/+page.svelte` if needs custom UI

## SEO & Metadata Strategy

Each generator has dedicated SEO metadata:

- URL patterns: `{locale}/generator/{urlPath}` (e.g., `/en/generator/zalgo-text-generator`)
- Parameterized page titles/descriptions via i18n keys
- Canonical URLs handle locale prefixes automatically
- Sitemap generation: `src/routes/sitemap.xml/+server.ts`

## Analytics & Monitoring

- Google Analytics 
- Microsoft Clarity