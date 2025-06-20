# Jekyll Architecture Plan for ScopeCreep.zip

## Overview

This document outlines the technical architecture for ScopeCreep.zip, a Jekyll-based static site hosted on GitHub Pages that showcases Kali and Kat's personalities, podcasts, and content.

## Technology Stack

### Core Technologies
- **Static Site Generator**: Jekyll 4.x
- **Hosting**: GitHub Pages
- **CDN**: Cloudflare (optional for enhanced performance)
- **Version Control**: Git/GitHub
- **Languages**: HTML5, CSS3, JavaScript (ES6+), Liquid, Markdown

### Build Tools
- **CSS Processing**: Sass/SCSS
- **JavaScript Bundling**: Webpack or Rollup
- **Image Optimization**: Jekyll-responsive-image
- **Minification**: Jekyll-minifier
- **Linting**: Stylelint, ESLint

## Project Structure

```
website/
├── _config.yml                 # Jekyll configuration
├── _data/                      # Data files (YAML/JSON)
│   ├── navigation.yml         # Site navigation
│   ├── podcasts.yml          # Podcast metadata
│   ├── authors.yml           # Kali & Kat profiles
│   └── social.yml            # Social media links
├── _includes/                  # Reusable components
│   ├── head.html
│   ├── header.html
│   ├── footer.html
│   ├── podcast-player.html
│   ├── neon-logo.html
│   └── pixel-avatar.html
├── _layouts/                   # Page templates
│   ├── default.html
│   ├── home.html
│   ├── post.html
│   ├── podcast.html
│   └── page.html
├── _sass/                      # Sass partials
│   ├── base/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _reset.scss
│   │   └── _typography.scss
│   ├── components/
│   │   ├── _buttons.scss
│   │   ├── _cards.scss
│   │   ├── _neon-effects.scss
│   │   ├── _pixel-art.scss
│   │   └── _podcast-player.scss
│   ├── layout/
│   │   ├── _header.scss
│   │   ├── _footer.scss
│   │   ├── _grid.scss
│   │   └── _responsive.scss
│   └── main.scss
├── _posts/                     # Blog posts
├── _podcasts/                  # Podcast episodes (custom collection)
├── assets/                     # Compiled assets
│   ├── css/
│   ├── js/
│   │   ├── main.js
│   │   ├── podcast-player.js
│   │   ├── neon-effects.js
│   │   └── pixel-animations.js
│   ├── images/
│   └── fonts/
├── media/                      # Media files
│   ├── site_media/
│   ├── podcast_art/
│   └── avatars/
├── pages/                      # Static pages
│   ├── about.md
│   ├── podcasts.md
│   ├── blog.md
│   └── contact.md
├── _plugins/                   # Custom Jekyll plugins
│   ├── podcast_feed_generator.rb
│   └── neon_text_filter.rb
├── feed.xml                    # RSS feed
├── podcast.xml                 # Podcast RSS feed
├── robots.txt
├── sitemap.xml
├── 404.html
├── Gemfile
├── Gemfile.lock
└── README.md
```

## Collections Configuration

### Podcasts Collection
```yaml
collections:
  podcasts:
    output: true
    permalink: /podcasts/:title/
    sort_by: date
    reverse: true
```

### Episode Front Matter
```yaml
---
layout: podcast
title: "Episode Title"
episode_number: 1
season: 1
date: 2024-01-19
duration: "45:23"
file_url: "https://cdn.scopecreep.zip/episodes/s01e01.mp3"
file_size: 43234567
explicit: false
hosts:
  - kali
  - kat
platforms:
  spotify: "spotify:episode:xxx"
  apple: "https://podcasts.apple.com/..."
  youtube: "https://youtube.com/..."
description: "Episode description"
transcript: true
---
```

## Component Architecture

### Reusable Components

#### 1. Podcast Player Component
```liquid
<!-- _includes/podcast-player.html -->
<div class="podcast-player" data-episode="{{ episode.id }}">
  <div class="player-controls">
    <button class="play-pause pixel-btn"></button>
    <div class="progress-bar neon-border">
      <div class="progress-fill"></div>
    </div>
    <span class="time-display">00:00 / {{ episode.duration }}</span>
  </div>
  <div class="platform-links">
    {% for platform in episode.platforms %}
      <a href="{{ platform[1] }}" class="platform-link">
        <img src="/assets/images/icons/{{ platform[0] }}.svg" alt="{{ platform[0] }}">
      </a>
    {% endfor %}
  </div>
</div>
```

#### 2. Neon Logo Component
```liquid
<!-- _includes/neon-logo.html -->
<div class="site-logo neon-container">
  <h1 class="neon-text" data-text="ScopeCreep.zip">
    <span class="pixel-font">ScopeCreep</span>
    <span class="neon-glow">.zip</span>
  </h1>
  <div class="neon-particles"></div>
</div>
```

### Data Architecture

#### Navigation Structure
```yaml
# _data/navigation.yml
main:
  - title: Home
    url: /
    icon: home
  - title: About
    url: /about/
    icon: users
    subnav:
      - title: Kali
        url: /about/kali/
      - title: Kat
        url: /about/kat/
  - title: Podcasts
    url: /podcasts/
    icon: podcast
  - title: Blog
    url: /blog/
    icon: edit
```

#### Author Profiles
```yaml
# _data/authors.yml
kali:
  name: Kali
  handle: "@radicalkjax"
  avatar: /media/avatars/kali-pixel.png
  bio: "Trans hacker, malware researcher, AI enthusiast"
  social:
    bluesky: "https://bsky.app/profile/radicalkjax.com"
    website: "https://radicalkjax.com"
  colors:
    primary: "#6d105a"
    accent: "#FF10F0"

kat:
  name: Kat
  handle: "@usrbinkat"
  avatar: /media/avatars/kat-pixel.png
  bio: "Platform engineer, open sourceress, neuro-spicy"
  social:
    bluesky: "https://bsky.app/profile/usrbinkat.io"
    website: "https://blog.usrbinkat.io"
  colors:
    primary: "#00FFF0"
    accent: "#87CEEB"
```

## Performance Optimization

### Asset Pipeline
1. **Image Optimization**
   - Responsive images using `jekyll-responsive-image`
   - WebP format with fallbacks
   - Lazy loading for below-fold images
   - SVG sprites for icons

2. **CSS Optimization**
   - Critical CSS inlining
   - Sass compilation with compression
   - Unused CSS removal
   - CSS custom properties for theming

3. **JavaScript Strategy**
   - Modular JavaScript with ES6 modules
   - Defer non-critical scripts
   - Minification and bundling
   - Progressive enhancement

### Caching Strategy
```yaml
# _config.yml
plugins:
  - jekyll-assets
  - jekyll-cache

assets:
  cache: true
  compression: true
  digest: true
```

## SEO & Analytics

### Meta Tags Structure
```liquid
<!-- _includes/head.html -->
<meta property="og:title" content="{{ page.title | default: site.title }}">
<meta property="og:description" content="{{ page.description | default: site.description }}">
<meta property="og:image" content="{{ page.image | default: site.default_image }}">
<meta property="og:type" content="{{ page.type | default: 'website' }}">

<!-- Podcast-specific meta -->
{% if page.layout == 'podcast' %}
<meta property="og:audio" content="{{ page.file_url }}">
<meta property="music:duration" content="{{ page.duration_seconds }}">
{% endif %}
```

### Structured Data
```liquid
<!-- Podcast episode structured data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "PodcastEpisode",
  "name": "{{ page.title }}",
  "datePublished": "{{ page.date | date_to_xmlschema }}",
  "duration": "{{ page.duration }}",
  "url": "{{ page.url | absolute_url }}",
  "associatedMedia": {
    "@type": "MediaObject",
    "contentUrl": "{{ page.file_url }}"
  }
}
</script>
```

## Podcast Infrastructure

### RSS Feed Generation
```ruby
# _plugins/podcast_feed_generator.rb
module Jekyll
  class PodcastFeedGenerator < Generator
    def generate(site)
      # Generate iTunes-compatible podcast RSS
      # Include all required podcast namespace elements
    end
  end
end
```

### Platform Integration
- **Spotify**: Spotify for Podcasters submission
- **Apple Podcasts**: iTunes Connect configuration
- **YouTube**: Automated video generation from audio
- **RSS**: Standard podcast RSS feed

## Deployment & CI/CD

### GitHub Actions Workflow
```yaml
# .github/workflows/deploy.yml
name: Build and Deploy

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: 3.0
          bundler-cache: true
      - run: bundle exec jekyll build
      - uses: actions/upload-pages-artifact@v1
        with:
          path: _site

  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    steps:
      - uses: actions/deploy-pages@v1
```

### Environment Configuration
```yaml
# _config.yml
url: "https://scopecreep.zip"
baseurl: ""

# Environment-specific settings
development:
  url: "http://localhost:4000"
  livereload: true

production:
  compress_html:
    clippings: all
    comments: all
    endings: all
    startings: []
    blanklines: false
    profile: false
```

## Security Considerations

1. **Content Security Policy**
   ```html
   <meta http-equiv="Content-Security-Policy" 
         content="default-src 'self'; 
                  script-src 'self' 'unsafe-inline'; 
                  style-src 'self' 'unsafe-inline';
                  img-src 'self' data: https:;
                  media-src 'self' https:;">
   ```

2. **HTTPS Enforcement**
   - GitHub Pages provides HTTPS by default
   - Enforce HTTPS in Cloudflare settings
   - Update all internal links to use HTTPS

3. **Dependency Management**
   - Regular Dependabot updates
   - Security scanning with GitHub Security
   - Minimal plugin usage

## Future Enhancements

### Phase 2 Features
- **Comments System**: Utterances (GitHub-based)
- **Search Functionality**: Lunr.js integration
- **Newsletter**: ConvertKit or Buttondown integration
- **Analytics**: Privacy-focused (Plausible/Fathom)

### Phase 3 Features
- **Member Portal**: Patreon/Ko-fi integration
- **Live Streaming**: Twitch/YouTube embed support
- **Interactive Transcripts**: Searchable, timestamped
- **Community Forum**: Discourse integration

## Development Workflow

### Local Development
```bash
# Install dependencies
bundle install

# Run development server
bundle exec jekyll serve --livereload

# Build for production
JEKYLL_ENV=production bundle exec jekyll build
```

### Branch Strategy
- `main`: Production branch (deploys to GitHub Pages)
- `develop`: Development branch
- `feature/*`: Feature branches
- `hotfix/*`: Emergency fixes

## Monitoring & Maintenance

### Performance Monitoring
- Google PageSpeed Insights
- WebPageTest integration
- Core Web Vitals tracking

### Error Tracking
- 404 monitoring
- Build failure notifications
- Broken link checking

### Content Management
- Markdown files for easy editing
- Front matter templates
- Automated podcast publishing workflow

## Summary

This architecture provides a solid foundation for ScopeCreep.zip that balances performance, maintainability, and the unique aesthetic requirements of the brand. The modular structure allows for easy expansion while maintaining the cohesive design vision outlined in the design document.