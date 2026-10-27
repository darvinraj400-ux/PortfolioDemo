# ALEX MORI — Experimental Creative Portfolio

A bold, experimental personal portfolio for an independent multidisciplinary designer. Built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Motion for React**.

> *"Design is the space between intention & form."*

---

## ✨ Features

- **Asymmetric grid system** — Every project tile has a unique composition (left-heavy, right-heavy, centered, diagonal, split, stacked)
- **Oversized typography** — Fluid `clamp()`-based type scale from 320px to wide desktop
- **7 fictional case studies** — Each with its own abstract visual composition, challenge, solution, palette, and results
- **Working category filters** — Branding, Digital Products, Art Direction, Experiments (with animated layout transitions)
- **Expandable case-study panels** — Inline detail view with client, role, description, challenge, solution, color palette, and results
- **Custom cursor** — Spring-physics cursor with hover states (desktop only, respects touch devices)
- **Loading screen** — Animated progress bar on initial load
- **Grain overlay** — Subtle animated texture for depth
- **Marquee band** — Infinite scrolling discipline list
- **Section dividers** — Minimal typographic separators
- **Back-to-top button** — Appears on scroll with smooth animation
- **Mobile-first responsive** — Tested at 320px, 375px, 390px, 768px, 1024px, and wide desktop
- **Accessible navigation** — Keyboard navigable, screen-reader friendly, `prefers-reduced-motion` respected
- **Black, white, and electric-blue palette** — No generic gradients, no stock dashboard components

---

## 📁 Project Structure

```
alex-mori-portfolio/
├── index.html                          # Entry HTML with Google Fonts
├── package.json                        # Dependencies & scripts
├── tsconfig.json                       # TypeScript configuration
├── vite.config.js                      # Vite build configuration
├── README.md                           # This file
│
└── src/
    ├── main.tsx                        # React entry point
    ├── App.tsx                         # Root component (orchestrates all sections)
    ├── index.css                       # Tailwind + design tokens + custom animations
    │
    ├── components/
    │   ├── Navigation.tsx              # Fixed nav bar + mobile hamburger menu
    │   ├── Hero.tsx                    # Bold opening statement + philosophy
    │   ├── ProjectArchive.tsx          # Filterable project grid + abstract visuals
    │   ├── CaseStudyPanel.tsx          # Expandable case-study detail view
    │   ├── About.tsx                   # Biography, clients, collaborators, recognition
    │   ├── Contact.tsx                 # Email (copy-to-clipboard), social links, footer
    │   ├── CustomCursor.tsx            # Spring-physics cursor (desktop only)
    │   ├── Loader.tsx                  # Initial loading progress animation
    │   ├── BackToTop.tsx               # Floating scroll-to-top button
    │   └── SectionDivider.tsx          # Minimal typographic section separator
    │
    ├── data/
    │   └── projects.ts                 # All project data, categories, clients, collaborators
    │
    └── hooks/
        ├── useReducedMotion.ts         # Detects prefers-reduced-motion OS setting
        └── useCursor.ts                # Tracks mouse position for custom cursor
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or yarn / pnpm)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd alex-mori-portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server (default: http://localhost:5173)
npm run dev
```

### Production Build

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The built output is written to `dist/` and can be deployed to any static hosting service (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-electric` | `#0066FF` | Primary accent, links, highlights |
| `--color-electric-light` | `#3388FF` | Hover states |
| `--color-electric-dark` | `#0044CC` | Active states |
| `--color-surface` | `#0A0A0A` | Elevated surfaces |
| `--color-surface-elevated` | `#111111` | Cards, panels |
| `--color-border` | `#222222` | Subtle borders |
| `--color-text-primary` | `#FFFFFF` | Headings, body text |
| `--color-text-secondary` | `#888888` | Supporting text |
| `--color-text-muted` | `#555555` | Labels, metadata |

### Typography

| Font | Family | Usage |
|------|--------|-------|
| **Space Grotesk** | Sans-serif | Headings, body text, UI |
| **Space Mono** | Monospace | Labels, metadata, navigation, code |

### Fluid Type Scale

```css
/* Hero display */
text-[clamp(2.5rem, 8vw, 8rem)]

/* Section headings */
text-3xl md:text-5xl lg:text-6xl

/* Body text */
text-base md:text-lg

/* Mono labels */
font-mono text-[10px] / text-xs
```

### Spacing

All spacing uses a consistent scale: `px-5 md:px-8 lg:px-12` for horizontal padding, `py-20 md:py-32` for vertical sections.

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^18 | UI framework |
| `react-dom` | ^18 | DOM renderer |
| `motion` | ^11 | Animation library (Motion for React) |
| `tailwindcss` | ^4 | Utility-first CSS |
| `vite` | ^6 | Build tool & dev server |
| `typescript` | ^5 | Type safety |

---

## 🧩 Component Architecture

### Layout Components

- **`Navigation`** — Fixed top bar with desktop links + mobile hamburger menu. Full-screen overlay on mobile with staggered animation. Tracks active section via `IntersectionObserver`.
- **`SectionDivider`** — Minimal horizontal rule with optional label and number.
- **`BackToTop`** — Floating button that appears after scrolling past 50vh.

### Section Components

- **`Hero`** — Full-viewport opening with oversized statement, philosophy text, floating accent elements, scroll indicator, and infinite marquee.
- **`ProjectArchive`** — Filter bar + asymmetric 12-column grid. Each project has a unique `composition` type that controls its grid placement and visual style.
- **`About`** — Two-column layout with biography on the left and clients/collaborators/recognition on the right.
- **`Contact`** — Email with copy-to-clipboard, social links grid, availability indicator, and footer.

### Interactive Components

- **`CaseStudyPanel`** — Expandable panel inside each project card. Shows client, role, year, description, challenge, solution, color palette, and results.
- **`CustomCursor`** — Spring-physics cursor with outer ring and inner dot. Uses `mix-blend-difference` for visibility on any background. Disabled on touch devices.
- **`Loader`** — Progress bar animation on initial page load. Auto-completes instantly if `prefers-reduced-motion` is enabled.

### Data-Driven Components

- **`ProjectArchive`** renders abstract visuals procedurally using CSS gradients, shapes, and typography — no external images required.
- Each project's `composition` property (`left-heavy`, `right-heavy`, `centered`, `diagonal`, `split`, `stacked`) controls both its grid placement and its visual treatment.

---

## ♿ Accessibility

- **Keyboard navigation** — All interactive elements are focusable with visible `:focus-visible` outlines (electric blue, 2px offset).
- **Screen reader support** — Semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`), ARIA labels on buttons, `role="tablist"` on filters, `aria-expanded` on case studies.
- **Reduced motion** — Full `prefers-reduced-motion` support via `useReducedMotion` hook. All animations, transitions, parallax, and decorative effects are disabled when the OS setting is enabled.
- **Touch targets** — All buttons and interactive elements have a minimum 44×44px touch target.
- **Color contrast** — Text on dark backgrounds meets WCAG AA contrast ratios. Electric blue (`#0066FF`) on black passes at 4.5:1 for normal text.
- **No hover-dependent content** — All essential information and functionality is available without hover.

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | 320px–374px | Single column, stacked navigation, compact spacing |
| Small mobile | 375px–389px | Single column, slightly larger type |
| Large mobile | 390px–767px | Single column, full desktop padding |
| Tablet | 768px–1023px | 12-column grid, desktop navigation visible |
| Desktop | 1024px+ | Full asymmetric grid, custom cursor active |
| Wide desktop | 1440px+ | Content max-width constrained, generous whitespace |

---

## 🎬 Animation System

All animations use **Motion for React** with consistent easing:

```ts
// Standard easing curve used throughout
ease: [0.16, 1, 0.3, 1]  // Custom cubic-bezier (smooth deceleration)

// Standard durations
duration: 0.3  // Micro-interactions (hover, focus)
duration: 0.5  // Component transitions
duration: 0.7  // Section reveals
duration: 1.0  // Hero headline entrance
```

### Animation Types

| Type | Trigger | Example |
|------|---------|---------|
| **Scroll reveal** | `whileInView` | All section content fades up on scroll |
| **Layout animation** | `layout` prop | Project grid reflows when filters change |
| **Spring physics** | `type: 'spring'` | Custom cursor follows mouse |
| **Stagger** | `delay` per index | Filter buttons, client list items |
| **Infinite loop** | `repeat: Infinity` | Marquee, floating accent elements, grain |
| **Exit animation** | `AnimatePresence` | Case study panels, mobile menu, loader |

---

## 🖼️ Project Visuals

Each project has a unique abstract visual composition generated entirely with CSS — no external images required. The compositions use:

- Geometric shapes (circles, rectangles, lines)
- Color-tinted gradients based on each project's palette
- Animated elements (rotation, scale, position)
- Typographic elements (large initial letters, project titles)
- Grid overlays for texture

This approach ensures:
- Zero broken images
- Instant loading
- Consistent visual language
- Unique identity per project

---

## 🔧 Customization

### Adding a New Project

Edit `src/data/projects.ts` and add a new entry to the `projects` array:

```ts
{
  id: 'your-project-id',
  title: 'PROJECT NAME',
  subtitle: 'Short description',
  category: 'branding', // or 'digital', 'art-direction', 'experiments'
  year: '2025',
  role: 'Your role',
  client: 'Client name — Description',
  description: 'Full project description.',
  challenge: 'What was the problem?',
  solution: 'How did you solve it?',
  results: ['Result 1', 'Result 2', 'Result 3'],
  colors: ['#0066ff', '#ffffff', '#0a0a0a'],
  composition: 'left-heavy', // or 'right-heavy', 'centered', 'diagonal', 'split', 'stacked'
}
```

### Changing the Color Palette

Edit the `@theme` block in `src/index.css`:

```css
@theme {
  --color-electric: #0066ff;        /* Change primary accent */
  --color-electric-light: #3388ff;  /* Change hover state */
  --color-electric-dark: #0044cc;   /* Change active state */
}
```

### Changing Fonts

Update the Google Fonts link in `index.html` and the `@theme` block in `src/index.css`.

---

## 🧪 Testing Checklist

Before deploying, verify:

- [ ] 320px viewport — no horizontal overflow, all content readable
- [ ] 375px / 390px — touch targets ≥ 44px, hamburger menu works
- [ ] 768px — grid transitions correctly, desktop nav visible
- [ ] 1024px+ — custom cursor active, full asymmetric grid
- [ ] Keyboard navigation — Tab through all interactive elements
- [ ] `prefers-reduced-motion` — all animations disabled
- [ ] Screen reader — semantic HTML, ARIA labels present
- [ ] Filter buttons — all categories work, empty state handled
- [ ] Case study panels — expand/collapse works, content readable
- [ ] Copy email — clipboard API works, fallback for older browsers
- [ ] Mobile menu — opens/closes, body scroll locked when open
- [ ] Back to top — appears after scroll, smooth scroll works
- [ ] No console errors in production build

---

## 🔧 Browser Compatibility

This portfolio is designed to work across a wide range of browsers and devices. Several compatibility layers have been implemented to ensure consistent behavior:

### Supported Browsers

- **Chrome/Edge** ≥ 80
- **Firefox** ≥ 78
- **Safari** ≥ 13
- **iOS Safari** ≥ 13
- **Android Chrome** ≥ 80

### Compatibility Fixes Implemented

#### 1. **CSS Fallbacks**

- **`aspect-ratio`** → Padding-bottom fallback for older browsers
- **`backdrop-filter`** → `-webkit-` prefix + solid background fallback
- **`clamp()`** → Fixed-size fallbacks in critical paths
- **`:focus-visible`** → `:focus` fallback for older browsers
- **`gap` in flexbox** → Margin-based fallback
- **`mix-blend-mode`** → Invert filter fallback
- **`text-wrap`** → Unset fallback for browsers without support
- **Safe area insets** → `constant()` fallback for iOS 11.0-11.2

#### 2. **JavaScript Polyfills**

- **`IntersectionObserver`** → Stub implementation for very old browsers
- **`requestAnimationFrame`** → Vendor prefix fallback + setTimeout fallback
- **`navigator.clipboard`** → `document.execCommand('copy')` fallback
- **`matchMedia`** → Legacy `addListener`/`removeListener` for Safari < 14

#### 3. **Error Boundaries**

- **Component-level error boundaries** → Individual sections can fail without breaking the entire app
- **Global error handler** → Catches uncaught errors and promise rejections
- **Graceful degradation** → Shows user-friendly error messages with refresh button
- **Browser support check** → Detects very old browsers and shows appropriate message

#### 4. **Robust Loading**

- **Safety timeout** → Loader auto-completes after 4 seconds even if animation fails
- **Error handling** → Loader catches errors and still calls `onComplete()`
- **Cleanup** → All intervals and timeouts properly cleared on unmount

#### 5. **Build Configuration**

- **Browser targets** → `.browserslistrc` ensures proper transpilation
- **Chunk splitting** → Vendor and motion libraries split for better caching
- **CSS target** → Set to `chrome61` for broader CSS feature support
- **ES2015 target** → Ensures compatibility with older JavaScript engines

#### 6. **Touch & Mobile Optimizations**

- **Touch detection** → Custom cursor disabled on touch devices
- **Passive event listeners** → Better scroll performance
- **Safe area support** → Proper padding for notched devices
- **Viewport meta** → `viewport-fit=cover` for full-screen support

### Known Limitations

- **Very old browsers** (IE11, Safari < 13) → Show "Browser Not Supported" message
- **Reduced motion** → All animations disabled when OS setting is enabled
- **Custom cursor** → Only works on desktop with fine pointer (mouse)
- **Grain overlay** → Disabled when reduced motion is preferred

### Troubleshooting

If the portfolio doesn't load on some PCs but works on others:

1. **Check browser version** → Ensure it meets minimum requirements above
2. **Clear cache** → Old cached files may conflict with new builds
3. **Disable extensions** → Ad blockers or privacy extensions can interfere
4. **Check console** → Open DevTools (F12) to see error messages
5. **Try incognito mode** → Rules out extension conflicts
6. **Update graphics drivers** → Some animation issues stem from outdated GPU drivers
7. **Check RAM/CPU** → Low-end devices may struggle with heavy animations

### Performance Tips for Low-End Devices

- Animations automatically simplify when `prefers-reduced-motion` is enabled
- Custom cursor is disabled on touch devices and low-end hardware
- Grain overlay can be disabled via reduced motion preference
- Chunk splitting ensures faster initial load
- Passive event listeners improve scroll performance

---

## 📄 License

This project is provided as-is for educational and portfolio purposes. The fictional project data, client names, and designer identity are entirely fictional.

---

## 🙏 Credits

- **Typography**: Space Grotesk & Space Mono by [Florian Karsten](https://floriankarsten.github.io/space-grotesk/)
- **Animation**: [Motion for React](https://motion.dev/) (formerly Framer Motion)
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)

---

## 📞 Contact

For questions or collaboration inquiries, reach out via the portfolio's contact section or open an issue on this repository.

---

*Designed & developed with intention.*
