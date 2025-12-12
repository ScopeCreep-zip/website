# Tarot Theme System Documentation

## Design Philosophy

**"As Above, So Below"** - A dual-theme system inspired by tarot mysticism and Frieren anime aesthetics.

ScopeCreep.zip presents a professional business card that showcases technical work with mystical elegance. The design emphasizes a handcrafted, authentic feel over AI-generated aesthetics, combining witchy-but-whimsical tech culture with professional credibility.

## Theme Concept

### Visual Inspiration
- **Frieren anime**: Soft, muted colors, vintage anime feel, Ghibli-esque warmth
- **Tarot cards**: Ornate gold borders, corner decorations (✦), elegant frames
- **Bridal invitations**: Sophisticated dark mode with gold accents
- **Goal**: Less AI-looking, more handcrafted and authentic

### Light Theme: "As Above"
Bright, warm, celestial - representing the visible world
- Warm ivory backgrounds (#FFFDF7)
- Gold framing and ornamental details
- Professional warmth

### Dark Theme: "So Below"
Deep, mystical, earthly - representing the hidden world
- Deep purple-black backgrounds (#0D0A14)
- Gold accents maintain elegance
- Sophisticated mystery

---

## Color System

### Gold Palette

The gold color system is the heart of the tarot theme, replacing the previous kawaii palette.

```scss
// Light Theme Gold
$gold-light: #F4E4BA;       // Soft gold - for badges, highlights
$gold-primary: #C9A227;     // Antique gold - primary accent
$gold-dark: #8B6914;        // Deep gold - text emphasis

// Dark Theme Gold (bridal invitation style)
$gold-light-dark: #D4C4A0;
$gold-primary-dark: #B8A67C;
$gold-dark-dark: #9A8A64;
```

### Light Theme Palette: "As Above"

```scss
// Backgrounds
--bg-primary: #FFFDF7       // Warm ivory - main background
--bg-secondary: #F9F5ED     // Soft parchment - alternate sections
--bg-card: #FFFFFF          // Pure white - card backgrounds

// Text
--text-primary: #2C2416     // Deep brown-black - headings, primary text
--text-secondary: #5C4D3C   // Warm brown - body text
--text-muted: #8B7355       // Muted brown - metadata, captions

// Borders
--border-subtle: rgba(201, 162, 39, 0.25)  // Very subtle borders
--border-gold: rgba(201, 162, 39, 0.4)     // Standard borders

// Gold accents
--gold-light: #F4E4BA
--gold-primary: #C9A227
--gold-dark: #8B6914
```

### Dark Theme Palette: "So Below"

```scss
// Backgrounds
--bg-primary: #0D0A14       // Deep purple-black - main background
--bg-secondary: #15101F     // Darker purple - alternate sections
--bg-card: #1A1425          // Card background - slightly lighter

// Text
--text-primary: #F0EBF4     // Light cream - headings, primary text
--text-secondary: #C4B8D4   // Muted lavender - body text
--text-muted: #8A7A9E       // Muted purple-gray - metadata

// Borders
--border-subtle: rgba(184, 166, 124, 0.15)  // Very subtle borders
--border-gold: rgba(184, 166, 124, 0.3)     // Standard borders

// Gold accents (adjusted for dark backgrounds)
--gold-light: #D4C4A0
--gold-primary: #B8A67C
--gold-dark: #9A8A64
```

### Color Usage Guidelines

| Element | Light Mode | Dark Mode | Purpose |
|---------|-----------|-----------|---------|
| **Primary CTA** | Gold gradient (#C9A227 → #8B6914) | Solid #B8A67C | Main action buttons |
| **Borders** | rgba(201, 162, 39, 0.4) | rgba(184, 166, 124, 0.3) | Card borders, dividers |
| **Hover accents** | #C9A227 | #D4C4A0 | Interactive element highlights |
| **Section labels** | #8B6914 | #B8A67C | Uppercase ornamental labels |
| **Badges** | #F4E4BA bg | #B8A67C border | Credentials, tags |
| **Focus rings** | #C9A227 | #B8A67C | Accessibility focus indicators |

---

## Typography System

### Font Stack

```scss
// Display and Headings - Elegant Serif
$font-display: 'Cormorant Garamond', Georgia, serif;
$font-heading: 'Cormorant Garamond', Georgia, serif;

// Body Text - Friendly, Readable Sans-Serif
$font-body: 'Quicksand', system-ui, sans-serif;

// Code and Technical Content - Monospace
$font-code: 'JetBrains Mono', monospace;
```

### Font Loading

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Quicksand:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

### Type Scale

```scss
// Heading Scale (Cormorant Garamond)
$fs-hero: 4rem           // 64px - Hero headlines (responsive)
$fs-h1: 2.5rem           // 40px - Page titles
$fs-h2: 2rem             // 32px - Section titles
$fs-h3: 1.5rem           // 24px - Subsection titles
$fs-h4: 1.25rem          // 20px - Card titles
$fs-h5: 1.1rem           // ~18px - Labels

// Body Scale (Quicksand)
$fs-body: 1rem           // 16px - Standard body text
$fs-large: 1.05rem       // ~17px - Lead text, hero descriptions
$fs-small: 0.875rem      // 14px - Captions, metadata
$fs-tiny: 0.75rem        // 12px - Badges, fine print
```

### Typography Usage

**Hero Title**:
```scss
font-family: var(--font-display);
font-size: clamp(2rem, 4vw, 2.75rem);
font-weight: 500;
line-height: 1.3;
color: var(--text-primary);
```

**Section Label** (ornamental):
```scss
font-family: var(--font-display);
font-size: 1.1rem;
font-weight: 400;
text-transform: uppercase;
letter-spacing: 0.15em;
color: var(--gold-dark);  // Light mode
color: var(--gold-primary); // Dark mode
```

**Section Title**:
```scss
font-family: var(--font-display);
font-size: 2.5rem;
font-weight: 500;
color: var(--text-primary);
```

**Body Text**:
```scss
font-family: var(--font-body);
font-size: 0.95rem;
font-weight: 400;
line-height: 1.6;
color: var(--text-secondary);
```

**Emphasis/Italic**:
```scss
font-family: var(--font-display);
font-style: italic;
color: var(--gold-dark);  // Light mode
color: var(--gold-light); // Dark mode
```

---

## Spacing System

### Base Unit: 0.25rem (4px)

```scss
$space-xs: 0.25rem;   // 4px
$space-sm: 0.5rem;    // 8px
$space-md: 1rem;      // 16px
$space-lg: 1.5rem;    // 24px
$space-xl: 2rem;      // 32px
$space-2xl: 3rem;     // 48px
$space-3xl: 4rem;     // 64px
```

### Layout Constants

```scss
$max-width: 1200px;
$header-height: 80px;
$header-height-mobile: 60px;
```

### Spacing Usage

| Component | Padding | Margin/Gap |
|-----------|---------|------------|
| **Cards** | var(--space-xl) | - |
| **Sections** | 4rem vertical | 3rem bottom |
| **Grids** | - | var(--space-3xl) |
| **Hero** | var(--space-3xl) | - |
| **Header** | var(--space-lg) vertical | - |

---

## Component System

### Cards

**Person Cards (Tarot style)**:
```scss
.person-card {
  background: var(--bg-card);
  border: 1px solid var(--border-gold);
  border-radius: 12px;
  padding: var(--space-xl);
  position: relative;

  // Corner ornament
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
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--gold-primary);
  }
}
```

### Buttons

**Primary Button**:
```scss
.btn-primary {
  display: inline-block;
  padding: 0.85rem 2.5rem;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s;

  // Light mode
  background: linear-gradient(135deg, var(--gold-primary) 0%, var(--gold-dark) 100%);
  color: var(--bg-primary);
  border: 1px solid var(--gold-primary);

  &:hover {
    transform: translateY(-2px);
  }
}

// Dark mode override
[data-theme="dark"] .btn-primary {
  background: var(--gold-primary);
  border-color: var(--gold-light);
}
```

**Link Button** (minimal style):
```scss
.btn-link {
  font-size: 0.9rem;
  color: var(--gold-dark);
  text-decoration: none;
  padding: var(--space-sm) 0;
  border-bottom: 1px solid transparent;
  transition: all 0.2s;

  &:hover {
    border-bottom-color: var(--gold-primary);
  }
}

[data-theme="dark"] .btn-link {
  color: var(--gold-light);
}
```

### Navigation

```scss
.nav-link {
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
  transition: all 0.2s;

  &:hover {
    color: var(--gold-dark);
    border-bottom-color: var(--gold-primary);
  }
}

[data-theme="dark"] .nav-link:hover {
  color: var(--gold-light);
}
```

### Badges

```scss
.cred {
  font-size: 0.75rem;
  padding: 0.3rem 0.75rem;
  background: var(--gold-light);
  border-radius: 20px;
  color: var(--gold-dark);
  transition: all 0.3s ease;
}

[data-theme="dark"] .cred {
  background: transparent;
  border: 1px solid var(--gold-primary);
  color: var(--gold-light);
}
```

---

## Theme Switching

### JavaScript Implementation

```javascript
// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
```

### CSS Custom Properties

Theme switching is accomplished via `[data-theme]` attribute selectors:

```scss
:root {
  // Font families (constant across themes)
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Quicksand', system-ui, sans-serif;
  --font-code: 'JetBrains Mono', monospace;

  // Spacing (constant across themes)
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
}

// Light theme
[data-theme="light"] {
  --bg-primary: #FFFDF7;
  --bg-secondary: #F9F5ED;
  --bg-card: #FFFFFF;
  --gold-light: #F4E4BA;
  --gold-primary: #C9A227;
  --gold-dark: #8B6914;
  --text-primary: #2C2416;
  --text-secondary: #5C4D3C;
  --text-muted: #8B7355;
  --border-subtle: rgba(201, 162, 39, 0.25);
  --border-gold: rgba(201, 162, 39, 0.4);
}

// Dark theme
[data-theme="dark"] {
  --bg-primary: #0D0A14;
  --bg-secondary: #15101F;
  --bg-card: #1A1425;
  --gold-light: #D4C4A0;
  --gold-primary: #B8A67C;
  --gold-dark: #9A8A64;
  --text-primary: #F0EBF4;
  --text-secondary: #C4B8D4;
  --text-muted: #8A7A9E;
  --border-subtle: rgba(184, 166, 124, 0.15);
  --border-gold: rgba(184, 166, 124, 0.3);
}
```

---

## Animations

### Philosophy
Subtle, elegant transitions that enhance professionalism without distraction.

### Glitch Effect (for buzzword rotation)
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

### Hover Interactions

**Cards**:
- Border color changes to `var(--gold-primary)`
- No lift or scale effects
- Smooth transition: 0.2s ease

**Buttons**:
- Primary buttons: `translateY(-2px)` lift
- No scale effects
- Transition: 0.2s ease

**Navigation**:
- Border-bottom appears in gold
- Color changes to gold variant
- Transition: 0.2s ease

---

## Responsive Design

### Breakpoints

```scss
$bp-mobile: 320px;
$bp-tablet: 768px;
$bp-desktop: 1024px;
$bp-wide: 1440px;
```

### Mobile (<768px)

**Header**:
- Logo: 1.2rem (reduced from 1.75rem)
- Tagline: 0.7rem (reduced from 1rem)
- Hamburger menu visible
- Theme toggle: icon only, circular (40px)

**Navigation**:
- Vertical stacked menu
- Slides down from header
- Full-width items
- Background: `var(--bg-primary)`

**Grids**:
- All multi-column grids become single column
- Reduced gaps

**Typography**:
- Hero title: responsive via clamp()
- Section titles: slightly smaller

---

## Accessibility

### Focus Management

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

### Color Contrast

All text combinations meet WCAG AA standards:
- Primary text on primary background: >7:1
- Secondary text on primary background: >4.5:1
- Muted text on primary background: >4.5:1

---

## Design Tokens Summary

### Core Design Principles

1. **Professional First**: Technical credibility is paramount
2. **Mystical Enhancement**: Tarot-inspired elegance supports the message
3. **Accessible Always**: WCAG AA compliance minimum
4. **Responsive Throughout**: Mobile-first approach
5. **Performant**: Minimal animations, optimized assets

### File Structure

```
_sass/
├── base/
│   └── _variables.scss       // Theme color definitions
├── components/
│   └── _tarot.scss           // All tarot theme components
└── main.scss                 // Import order
```

### Implementation Notes

- Theme variables defined in `_variables.scss`
- Components use CSS custom properties exclusively
- Theme switching via `data-theme` attribute
- Legacy kawaii variables mapped to gold for compatibility
- All ornamental details (✦) use Unicode, not images

---

## Migration from Kawaii Theme

### Color Mapping

| Old Kawaii | New Tarot | Context |
|------------|-----------|---------|
| `--kawaii-pink` | `--gold-primary` | Primary accent |
| `--kawaii-purple` | `--gold-dark` | Dark accent |
| `--kawaii-cyan` | `--gold-light` | Light accent |
| `--kawaii-yellow` | `--gold-primary` | Focus states |
| `--focus-yellow` | `--gold-primary` | Accessibility |

### Font Changes

| Old | New | Usage |
|-----|-----|-------|
| Quicksand (all) | Cormorant Garamond | Headings, display |
| Quicksand (body) | Quicksand | Body text (unchanged) |
| - | JetBrains Mono | Code blocks |

### Visual Changes

- Removed: Particle systems, neon glows, rainbow gradients
- Replaced with: Subtle gold accents, minimal borders, ornamental symbols
- Emphasis: Professional elegance over playful energy

---

This tarot theme system provides a sophisticated, professional foundation for ScopeCreep.zip while maintaining full accessibility and responsive design principles.
