# ScopeCreep.zip Jekyll Site Architecture

## Project Overview
A professional business card website showcasing cybersecurity research and platform engineering expertise with a "tarot card" aesthetic. Built with Jekyll for GitHub Pages deployment, featuring accessibility-first design, podcast integration, and a mystical "As Above, So Below" light/dark theme.

## Site Structure

```
scopecreep.zip/
├── _config.yml                # Jekyll configuration
├── Gemfile
├── index.html                 # Homepage
├── _layouts/
│   ├── default.html          # Base layout wrapper
│   ├── post.html             # Blog post layout
│   ├── page.html             # Static page layout
│   ├── podcast.html          # Podcast episode layout
│   └── home.html             # Homepage layout (unused currently)
├── _includes/
│   ├── head.html             # HTML head with meta tags
│   ├── header.html           # Site header/navigation
│   ├── footer.html           # Footer with links
│   ├── footer-social.html    # Social media links
│   ├── footer-podcast.html   # Podcast footer section
│   ├── podcast-player.html   # Audio player component
│   ├── podcast-episode-card.html  # Episode card (440+ lines)
│   ├── podcast-services.html # Platform buttons
│   ├── social-links.html     # Social media icons
│   └── format-transcript.html # Transcript formatting
├── _sass/
│   ├── base/
│   │   ├── _variables.scss   # Colors, fonts, spacing
│   │   ├── _base.scss        # Reset, global styles
│   │   └── _typography.scss
│   ├── components/
│   │   ├── _buttons.scss
│   │   ├── _cards.scss
│   │   ├── _podcast-player.scss
│   │   └── _tarot.scss       # Tarot card theme styles
│   ├── layout/
│   │   ├── _header.scss
│   │   ├── _footer.scss
│   │   └── _grid.scss
│   └── main.scss             # Main import file
├── assets/
│   ├── css/
│   │   └── main.scss         # Sass entry point
│   ├── js/
│   │   ├── main.js           # Minimal site-wide JS
│   │   └── buzzword-generator.js  # Tagline animation
│   └── images/
├── _posts/                    # Blog posts
├── _podcasts/                 # Podcast episodes collection
├── pages/                     # Static pages
│   ├── about.md
│   ├── podcasts.html
│   ├── blog.html
│   ├── contact.md
│   └── research.md
└── _data/
    ├── navigation.yml         # Site navigation
    ├── team.yml              # Team member profiles (in _config.yml)
    ├── podcast_services.yml  # Platform links
    └── social_links.yml      # Social media data
```

## Jekyll Configuration (_config.yml)

### Key Settings
```yaml
# Site metadata
title: "ScopeCreep.zip"
description: "Kali Jackson and Kat Morgan blend technical excellence with arcane elegance."
url: "https://scopecreep.zip"

# Build settings
markdown: kramdown
highlighter: rouge
sass:
  sass_dir: _sass
  style: compressed

# Plugins (GitHub Pages compatible)
plugins:
  - jekyll-feed          # RSS feed generation
  - jekyll-seo-tag       # SEO meta tags
  - jekyll-sitemap       # Sitemap generation
  - jekyll-paginate      # Blog pagination (standard, not v2)

# Collections
collections:
  podcasts:
    output: true
    permalink: /podcast/:name/
  speaking:
    output: true
    permalink: /speaking/:name/

# Pagination
paginate: 10
paginate_path: "/blog/page:num/"
```

### Team Information (Embedded in _config.yml)
Team member data is stored directly in `_config.yml` under the `team:` key rather than in a separate `_data/team.yml` file.

## Layout Templates

### Available Layouts
1. **default.html** - Base wrapper with header, footer, and main content area
2. **page.html** - For static pages (about, contact, etc.)
3. **post.html** - For blog posts
4. **podcast.html** - For podcast episode pages
5. **home.html** - Homepage layout (currently unused, index.html uses default)

### Layout Hierarchy
```
default.html (base wrapper with skip links, header, footer)
├── page.html (extends default)
├── post.html (extends default)
└── podcast.html (extends default)
```

## Include Components

### Core Components (10 files)
- **head.html** - Meta tags, fonts (Cormorant Garamond, Quicksand, JetBrains Mono), SEO
- **header.html** - Navigation and site branding
- **footer.html** - Main footer structure
- **footer-social.html** - Social media links
- **footer-podcast.html** - Podcast-specific footer section
- **podcast-player.html** - Audio player UI
- **podcast-episode-card.html** - Episode card with rolodex effect (440+ lines)
- **podcast-services.html** - Platform subscription buttons
- **social-links.html** - Social media icon links
- **format-transcript.html** - Transcript formatting with speaker labels

## SCSS Architecture

### Import Order (main.scss)
1. Base (variables, base styles, typography)
2. Components (buttons, cards, podcast-player, tarot)
3. Layout (header, footer, grid)

### Design System

#### Tarot Theme Colors (Light Mode - "As Above")
```scss
// Backgrounds
--bg-primary: #FFFDF7;      // Warm ivory
--bg-secondary: #F9F5ED;     // Soft parchment
--bg-card: #FFFFFF;          // Pure white cards

// Gold Accents
--gold-light: #F4E4BA;       // Soft gold
--gold-primary: #C9A227;     // Antique gold
--gold-dark: #8B6914;        // Deep gold

// Frieren-Inspired Colors
--sage: #A8B89C;             // Soft sage
--lavender: #B8A9C9;         // Muted lavender
--dusty-rose: #C9A9A6;       // Dusty mauve
--teal: #6B9A9A;             // Muted teal
```

#### Typography
- **Display/Headings**: Cormorant Garamond (elegant serif)
- **Body**: Quicksand (friendly, readable sans-serif)
- **Code**: JetBrains Mono (monospace)

### Key Patterns
- **Tarot Card Borders** - Ornate gold frames with corner decorations (✦)
- **Accessibility** - Skip links, ARIA labels, focus states, reduced motion support
- **Responsive Design** - Mobile-first approach with breakpoints

## JavaScript Architecture

### Minimal JavaScript Approach
Only 2 JavaScript files remain (deleted particles.js, stats.js, github-stats.js, kawaii-effects.js, dreams-counter.js):

1. **main.js** - Minimal site-wide JavaScript (mostly empty placeholder)
2. **buzzword-generator.js** - Animated tagline generator with glitch effect
   - Cycles through tech buzzwords every 3 seconds
   - Includes trending terms (GenAI, LLM, etc.)
   - Category-based filtering (ai, security, cloud, data, etc.)
   - Search and trending functions

### Removed JavaScript
The following files were deleted as part of simplification:
- particles.js (kawaii particle effects)
- stats.js (counter animations)
- github-stats.js (GitHub API integration)
- kawaii-effects.js (visual effects)
- dreams-counter.js (dream tracking)

## Data Flow
```
_config.yml (team data) → Liquid templates → HTML output
_data/*.yml → Liquid templates → HTML output
Front matter → Page-specific settings
```

## Content Structure

### Pages Directory
All static pages are in the `pages/` directory:
- **about.md** - About page
- **podcasts.html** - Podcast listing
- **blog.html** - Blog listing with pagination
- **contact.md** - Contact page
- **research.md** - Research showcase

### Collections
- **_podcasts/** - Podcast episode markdown files
- **_posts/** - Blog posts (standard Jekyll posts)
- **_speaking/** - Speaking engagement pages

## Podcast Infrastructure

### Episode Front Matter
```yaml
---
layout: podcast
title: "Episode Title"
episode_number: 1
date: 2024-01-19
duration: "45:23"
file_url: "https://cdn.example.com/episode.mp3"
platforms:
  spotify: "spotify:episode:xxx"
  apple: "https://podcasts.apple.com/..."
  youtube: "https://youtube.com/..."
transcript: true
---
```

### Podcast Features
- Multi-view episode cards (Services/Transcripts tabs)
- Carousel with rolodex rotation effect
- Speaker label color coding in transcripts
- Platform subscription buttons
- RSS feed generation via jekyll-feed

## Build Pipeline

### GitHub Actions Workflow
1. Push to `main` branch triggers build
2. Install Ruby dependencies
3. Run `bundle exec jekyll build`
4. Upload artifact to GitHub Pages
5. Deploy to scopecreep.zip

### Sass Compilation
- Source: `_sass/` directory
- Entry: `assets/css/main.scss`
- Output: `_site/assets/css/main.css`
- Style: `compressed` (minified)

## Performance Optimizations

1. **Static Generation** - No server-side processing
2. **CDN Distribution** - GitHub Pages CDN
3. **Asset Optimization** - Sass compression enabled
4. **Minimal JavaScript** - Only 2 small JS files
5. **Font Loading** - Google Fonts with preconnect

## Accessibility Features

### Always Preserved
- Skip links to main content
- ARIA labels on interactive elements
- Focus states (yellow outline)
- Reduced motion support (`@media (prefers-reduced-motion)`)
- High contrast mode support (`@media (prefers-contrast)`)
- Semantic HTML throughout
- Screen reader-only content (`.sr-only` class)

## Security Considerations

1. **Static Files** - No server vulnerabilities
2. **HTTPS Only** - Enforced by GitHub Pages
3. **No Database** - No SQL injection risks
4. **Content Security Policy** - Recommended for production
5. **Dependency Management** - Gemfile.lock for version pinning

## Current Theme: Axiom Branch

The site is currently being redesigned with a "tarot card" aesthetic:
- **Light Mode ("As Above")**: Warm ivory backgrounds, gold borders, parchment textures
- **Dark Mode ("So Below")**: Deep purples with gold accents (planned)
- **Visual Style**: Frieren anime-inspired, vintage anime feel, mystical meets modern
- **Goal**: Professional business card showcasing work, less personality-focused

## Browser Support
- Chrome/Edge: Modern versions
- Firefox: Modern versions
- Safari: Modern versions
- Mobile Safari: iOS 12+
- Android Chrome: Modern versions

## Development Commands

```bash
# Install dependencies
bundle install

# Serve locally with live reload
bundle exec jekyll serve --livereload

# Build for production
JEKYLL_ENV=production bundle exec jekyll build

# Build with specific config
bundle exec jekyll build --config _config.yml
```

## Summary

This architecture provides a solid, maintainable foundation for ScopeCreep.zip that prioritizes:
- **Simplicity**: Minimal JavaScript, standard Jekyll plugins
- **Performance**: Static generation, compressed assets
- **Accessibility**: WCAG compliant, reduced motion support
- **Maintainability**: Modular Sass, reusable components
- **GitHub Pages Compatibility**: Uses only supported plugins

The design balances professional credibility with a unique mystical/tarot aesthetic, creating a memorable business card presence that showcases technical work while maintaining visual distinctiveness.
