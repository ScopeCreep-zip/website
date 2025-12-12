# Tarot Theme Styling Patterns - ScopeCreep.zip

> **Current Implementation**: Extracted from `_sass/components/_tarot.scss` and `_sass/base/_variables.scss`

## 1. Color System

### Gold Palette (Core Theme)
```scss
// Light Theme Gold
$gold-light: #F4E4BA;       // Soft gold - badges, highlights
$gold-primary: #C9A227;     // Antique gold - primary accent
$gold-dark: #8B6914;        // Deep gold - text emphasis

// Dark Theme Gold (bridal invitation style)
$gold-light-dark: #D4C4A0;
$gold-primary-dark: #B8A67C;
$gold-dark-dark: #9A8A64;
```

### Light Theme: "As Above"
```scss
// Backgrounds
$light-bg: #FFFDF7;         // Warm ivory
$light-bg-alt: #F9F5ED;     // Soft parchment
$light-bg-card: #FFFFFF;    // Pure white cards

// Text
$light-text: #2C2416;       // Deep brown-black
$light-text-secondary: #5C4D3C;  // Warm brown
$light-text-muted: #8B7355;

// Borders
$border-light: rgba(201, 162, 39, 0.25);
$border-gold: rgba(201, 162, 39, 0.4);
```

### Dark Theme: "So Below"
```scss
// Backgrounds
$dark-bg: #0D0A14;          // Deep purple-black
$dark-bg-alt: #15101F;      // Darker purple
$dark-bg-card: #1A1425;     // Card background

// Text
$dark-text: #F0EBF4;        // Light cream
$dark-text-secondary: #C4B8D4;  // Muted lavender
$dark-text-muted: #8A7A9E;

// Borders
$border-dark: rgba(184, 166, 124, 0.15);
$border-gold-dark: rgba(184, 166, 124, 0.3);
```

### CSS Custom Properties Usage
```scss
// Applied via [data-theme="light"] or [data-theme="dark"]
--bg-primary
--bg-secondary
--bg-card
--gold-light
--gold-primary
--gold-dark
--text-primary
--text-secondary
--text-muted
--border-subtle
--border-gold
```

## 2. Typography

### Font Families
```scss
$font-display: 'Cormorant Garamond', Georgia, serif;
$font-heading: 'Cormorant Garamond', Georgia, serif;
$font-body: 'Quicksand', system-ui, sans-serif;
$font-code: 'JetBrains Mono', monospace;
```

### Font Sizes
```scss
$fs-hero: 4rem;
$fs-h1: 2.5rem;
$fs-h2: 2rem;
$fs-h3: 1.5rem;
$fs-h4: 1.25rem;
$fs-body: 1rem;
$fs-small: 0.875rem;
$fs-tiny: 0.75rem;
```

### Typography Patterns

**Hero Title**:
```scss
font-family: var(--font-display);
font-size: clamp(2rem, 4vw, 2.75rem);
font-weight: 500;
line-height: 1.3;
```

**Section Labels** (uppercase ornamental):
```scss
font-family: var(--font-display);
font-size: 1.1rem;
text-transform: uppercase;
letter-spacing: 0.15em;
color: var(--gold-dark);
// Dark mode: --gold-primary
```

**Section Titles**:
```scss
font-family: var(--font-display);
font-size: 2.5rem;
font-weight: 500;
```

**Body Text**:
```scss
font-family: var(--font-body);
font-size: 0.95rem - 1.05rem;
color: var(--text-secondary);
line-height: 1.6;
```

## 3. Spacing System

```scss
$space-xs: 0.25rem;
$space-sm: 0.5rem;
$space-md: 1rem;
$space-lg: 1.5rem;
$space-xl: 2rem;
$space-2xl: 3rem;
$space-3xl: 4rem;
```

## 4. Component Patterns

### Header
```scss
.header {
  padding: var(--space-lg) 0;
  border-bottom: 1px solid var(--border-subtle);
  background: var(--bg-primary);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--text-primary);
  // Dark mode: --gold-light
}

.nav-link {
  font-size: 0.9rem;
  color: var(--text-secondary);
  border-bottom: 1px solid transparent;

  &:hover {
    color: var(--gold-dark);
    border-bottom-color: var(--gold-primary);
  }
}
```

### Cards (Tarot Style)

**Person Cards**:
```scss
.person-card {
  background: var(--bg-card);
  border: 1px solid var(--border-gold);
  border-radius: 12px;
  padding: var(--space-xl);
  position: relative;

  &::before {
    content: '✦';
    position: absolute;
    top: var(--space-md);
    right: var(--space-md);
    color: var(--gold-primary);
    font-size: 0.7rem;
    opacity: 0.5;
  }
}
```

**Craft/Project Cards**:
```scss
.craft-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  padding: var(--space-xl);

  &:hover {
    border-color: var(--gold-primary);
  }
}
```

### Buttons

**Primary Button**:
```scss
.btn-primary {
  background: linear-gradient(135deg, var(--gold-primary) 0%, var(--gold-dark) 100%);
  color: var(--bg-primary);
  border: 1px solid var(--gold-primary);
  padding: 0.85rem 2.5rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;

  &:hover {
    transform: translateY(-2px);
  }

  // Dark mode
  [data-theme="dark"] & {
    background: var(--gold-primary);
    border-color: var(--gold-light);
  }
}
```

**Link Button**:
```scss
.btn-link {
  color: var(--gold-dark);
  text-decoration: none;
  padding: var(--space-sm) 0;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom-color: var(--gold-primary);
  }

  [data-theme="dark"] & {
    color: var(--gold-light);
  }
}
```

### Badges/Credentials
```scss
.cred {
  font-size: 0.75rem;
  padding: 0.3rem 0.75rem;
  background: var(--gold-light);
  border-radius: 20px;
  color: var(--gold-dark);

  [data-theme="dark"] & {
    background: transparent;
    border: 1px solid var(--gold-primary);
    color: var(--gold-light);
  }
}
```

### Section Dividers
```scss
.section-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  color: var(--gold-primary);

  &::before,
  &::after {
    content: '';
    width: 50px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold-dark));
  }

  &::after {
    background: linear-gradient(90deg, var(--gold-dark), transparent);
  }
}
```

## 5. Forms

```scss
.tarot-form {
  input,
  select,
  textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid var(--border-gold);
    border-radius: 8px;
    background: var(--bg-card);
    color: var(--text-primary);
    font-family: var(--font-body);

    &:focus {
      outline: none;
      border-color: var(--gold-primary);
    }
  }

  label {
    display: block;
    margin-bottom: var(--space-sm);
    font-family: var(--font-display);
    font-size: 0.95rem;
    color: var(--gold-dark);

    [data-theme="dark"] & {
      color: var(--gold-light);
    }
  }
}
```

## 6. Animations

### Glitch Effect (buzzword rotation)
```scss
@keyframes glitch {
  0%, 100% { text-shadow: 0 0 0 transparent; }
  20% { text-shadow: -2px 0 var(--gold-light), 2px 0 var(--gold-dark); }
  40% { text-shadow: 2px 0 var(--gold-primary), -2px 0 var(--gold-light); }
  60% { text-shadow: 0 0 8px var(--gold-primary); }
}

.buzzword-text.glitching {
  animation: glitch 0.3s ease-in-out;
}
```

### Podcast Carousel (3D Rolodex)
```scss
.episodes-carousel {
  perspective: 1200px;
}

.episode-slide {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &.prev {
    transform: translateX(-50%) scale(0.8) rotateY(25deg);
    opacity: 0.7;
    filter: blur(1px);
  }

  &.active {
    transform: translateX(0) scale(1) rotateY(0);
    opacity: 1;
  }

  &.next {
    transform: translateX(50%) scale(0.8) rotateY(-25deg);
    opacity: 0.7;
    filter: blur(1px);
  }
}
```

## 7. Responsive Patterns

### Mobile Breakpoint: 768px
```scss
@media (max-width: 768px) {
  // Header
  .header-inner {
    display: flex;
    flex-wrap: wrap;
    padding: 0 var(--space-md);
  }

  .logo {
    font-size: 1.2rem !important;
  }

  .tagline {
    font-size: 0.7rem !important;
  }

  // Navigation
  .nav-toggle {
    display: block;  // Hamburger visible
  }

  .nav {
    display: none;  // Hidden by default
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;

    &.is-open {
      display: flex;
    }
  }

  // Theme toggle - icon only
  .theme-toggle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .theme-label-light,
  .theme-label-dark {
    display: none !important;
  }

  // Grids
  .about-grid,
  .craft-grid {
    grid-template-columns: 1fr;
  }
}
```

## 8. Accessibility

### Focus States
```scss
:focus-visible {
  outline: 2px solid var(--gold-primary);
  outline-offset: 2px;
}
```

### Skip Link
```scss
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--gold-primary);
  color: var(--bg-primary);
  padding: 0.5rem 1rem;
  z-index: 1000;

  &:focus {
    top: 0;
  }
}
```

### Reduced Motion
```scss
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 9. Podcast-Specific Components

### Episode Cards
```scss
.episode-card {
  background: var(--bg-card);
  border: 1px solid var(--border-gold);
  border-radius: 12px;
  padding: var(--space-xl);
  min-height: 500px;

  .episode-slide.active & {
    box-shadow: 0 20px 60px rgba(201, 162, 39, 0.4);
  }
}
```

### Carousel Navigation
```scss
.carousel-nav {
  background: var(--gold-primary);
  color: var(--bg-primary);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;

  &:hover {
    background: var(--gold-dark);
    transform: translateY(-50%) scale(1.1);
  }
}
```

### Carousel Indicators
```scss
.carousel-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid var(--gold-primary);
  background: transparent;

  &.active {
    background: var(--gold-primary);
    width: 30px;
    border-radius: 15px;
  }
}
```

## 10. Grid Layouts

### Two-Column Grids
```scss
.about-grid,
.craft-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);
}

@media (max-width: 768px) {
  .about-grid,
  .craft-grid {
    grid-template-columns: 1fr;
  }
}
```

### Blog Layout
```scss
.blog-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: var(--space-2xl);
}

@media (max-width: 768px) {
  .blog-layout {
    grid-template-columns: 1fr;
  }
}
```

## 11. Theme Toggle

```scss
.theme-toggle {
  border: 1px solid var(--border-gold);
  border-radius: 20px;
  padding: 0.4rem 0.8rem;
  background: none;
  color: var(--text-muted);

  &:hover {
    border-color: var(--gold-primary);
    color: var(--gold-primary);
  }
}

// Icon visibility
[data-theme="light"] .theme-icon-light,
[data-theme="light"] .theme-label-light {
  display: inline;
}

[data-theme="dark"] .theme-icon-dark,
[data-theme="dark"] .theme-label-dark {
  display: inline;
}
```

## 12. Empty States

```scss
.empty-state {
  text-align: center;
  padding: var(--space-3xl);

  .empty-icon {
    font-size: 3rem;
    color: var(--gold-primary);
  }

  .empty-title {
    font-family: var(--font-display);
    font-size: 1.5rem;
  }

  .empty-text {
    color: var(--text-muted);
  }
}
```

## Summary

The Tarot theme emphasizes:
- **Minimal, elegant design** over flashy effects
- **Gold color palette** replacing old kawaii colors
- **Cormorant Garamond** for sophisticated serif headers
- **Subtle hover effects** (color changes, minimal transforms)
- **Ornamental details** (✦ symbols, gradient dividers)
- **Professional business card** aesthetic
- **Dual theme support** (As Above/So Below)
- **Handcrafted feel** over AI-generated look
