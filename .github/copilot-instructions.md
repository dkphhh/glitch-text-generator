# AI Coding Agent Instructions for Glitch Text Generator

## Project Overview

A SvelteKit-based web application for generating Unicode "glitch" text effects using various character transformations: Zalgo text, confused characters, font variants, and style variants. Built with Svelte 5, TypeScript, TailwindCSS v4, daisyUI, and i18n support via Inlang/Paraglide.

## Architecture

### Core Text Transformation Modules

Three main text transformation systems in `src/lib/`:

1. **`glitch-text/`** - Character-level transformations
   - `zalgo.ts`: Adds combining diacritical marks above/below/through characters
   - `style-text.ts`: Orchestrates multiple styles via `TEXT_STYLE_MAP` (random, sharp, confused, latin)
   - `character-variant/glitch-styles/`: Style-specific transformations (sharp-style.ts, latin-style.ts)
   - Use `deStyleText()` and `unzalgoText()` for reverse transformations

2. **`font-variant/`** - Font-style Unicode variants
   - Wraps `unicode-text-decorator` library
   - `randomFontVariant()` applies random Unicode font styles to each character

3. **`i18n/`** - Internationalization constants
   - `LangMAP` in `const.ts` maps locale codes to native language names
   - See locales section below for actual message management

### Internationalization (i18n)

**Critical**: This project uses **Inlang/Paraglide** (NOT svelte-i18n or other libraries).

**Message Management**:

- Source messages: `messages/{locale}.json` (en, es, fr, de, zh, ja, ru, pt, id, ko)
- Generated runtime: `src/lib/paraglide/` (auto-generated, DO NOT edit manually)
- Config: `project.inlang/settings.json` defines baseLocale and available locales

**Usage Pattern**:

```typescript
// Import messages
import { m } from '$lib/paraglide/messages.js';
import { setLocale } from '$lib/paraglide/runtime';

// Use in components
<p>{m.hello_world({ name: 'Alice' })}</p>
```

**Routing Integration**:

- `src/hooks.ts`: Uses `deLocalizeUrl()` for rerouting
- `src/hooks.server.ts`: `paraglideMiddleware` injects locale into page HTML (`%paraglide.lang%` placeholder)

**To add new messages**: Edit `messages/{locale}.json` files, then run build to regenerate paraglide runtime.

### Svelte 5 Runes

This project uses **Svelte 5 runes** (not legacy Svelte 4 patterns):

- `$state()` for reactive state (not `let x = 0`)
- `$derived()` / `$derived.by()` for computed values (not `$:`)
- `$effect()` for side effects (not `$:` statements)
- `$props()` for component props

**Example from codebase** (`notificationManager.svelte.ts`):

```typescript
class NotificationManager {
  message: string[] = $state([]);
  type: 'info' | 'success' | 'error' | 'warning' = $state('info');
  visible: boolean = $state(false);

  constructor() {
    $effect.root(() => {
      $effect(() => {
        if (updated.current) {
          this.sentMessage({ message: ['有版本更新,请刷新页面'] });
        }
      });
    });
  }
}
```

See `src/lib/components/common/seo/SeoTDK.svelte` for `$derived.by()` examples.

## Development Workflows

### Commands

```bash
npm run dev              # Start dev server
npm run build            # Production build
npm run preview          # Preview production build
npm run check            # Type check with svelte-check
npm run check:watch      # Watch mode type checking
npm run lint             # Run ESLint + Prettier check
npm run format           # Format code with Prettier
npm run test:unit        # Run Vitest tests
npm run test             # Run tests once (CI mode)
```

### Testing

- Framework: Vitest configured in `vite.config.ts`
- Test files: `src/**/*.{test,spec}.{js,ts}` (non-Svelte files only)
- Node environment for server-side tests
- **Important**: Tests require `expect.requireAssertions: true` - always include assertions

## Project-Specific Conventions

### File Organization

- **Reusable components**: `src/lib/components/common/`
- **Business logic/utilities**: `src/lib/<module-name>/`
- **Routes**: `src/routes/` (SvelteKit file-based routing)
- **Static assets**: `static/` for public files

### Styling

- **TailwindCSS v4** with plugins:
  - `@tailwindcss/forms`
  - `@tailwindcss/typography`
  - DaisyUI for component library
- Import in `src/app.css`: `@import 'tailwindcss';`
- **Note**: Use Tailwind v4 syntax (not v3)

### TypeScript Patterns

- Global types in `src/lib/<module>/type.d.ts` files
- Use `Record<K, V>` for typed object maps (see `TEXT_STYLE_MAP`, `LangMAP`)
- Prefer strict typing: function signatures always include return types

### ESLint Configuration

- Flat config format (`eslint.config.js`)
- TypeScript + Svelte integration via `typescript-eslint` and `eslint-plugin-svelte`
- **Critical**: `no-undef` is disabled for TypeScript files (TypeScript handles this)
- Svelte files use TypeScript parser with `projectService: true`

### Common Utility Pattern

See `src/lib/utils/common/tools.ts` for shared utilities like `getRandomValueFromArray()` used across transformation modules.

## Integration Points

### External Dependencies

- **confusables**: Character confusion/obfuscation (Latin/IPA lookalikes)
- **unicode-text-decorator**: Font variant transformations
- **svelte-exmarkdown**: Markdown rendering in components

### Build System

- **Vite 7** as build tool
- **SvelteKit** with `@sveltejs/adapter-auto` for deployment
- **Paraglide Vite Plugin** generates i18n runtime at build time

### Component Communication

- Use Svelte 5 runes for state management (no external store library)
- See `notificationManager.svelte.ts` for reactive class pattern with `$state()`

## Key Files to Reference

- **Text transformation API**: `src/lib/glitch-text/style-text.ts`
- **Svelte 5 patterns**: `src/lib/components/common/notification/notificationManager.svelte.ts`
- **i18n setup**: `src/hooks.server.ts`, `src/hooks.ts`
- **Build config**: `vite.config.ts` (Paraglide plugin configuration)
- **Type definitions**: `src/lib/glitch-text/type.d.ts` (BaseCharacters/BaseNumbers types)

## Anti-Patterns to Avoid

- ❌ Don't manually edit `src/lib/paraglide/` - these are auto-generated
- ❌ Don't use Svelte 4 syntax (`$:`, old reactivity patterns)
- ❌ Don't import from `svelte-i18n` or similar - use Paraglide
- ❌ Don't add global CSS imports beyond TailwindCSS plugins in `app.css`
- ❌ Don't disable TypeScript strict checks without discussion
