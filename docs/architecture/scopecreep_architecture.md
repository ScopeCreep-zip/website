# ScopeCreep.zip Jekyll Site Architecture

## Project Overview
A professional kawaii tech website combining cybersecurity research credibility with egirl aesthetic. Built with Jekyll for GitHub Pages deployment, featuring accessibility-first design, podcast integration, and interactive kawaii elements.

## Site Structure

```
scopecreep.zip/
├── _config.yml
├── Gemfile
├── index.html
├── _layouts/
│   ├── default.html
│   ├── post.html
│   ├── page.html
│   └── podcast.html
├── _includes/
│   ├── head.html
│   ├── header.html
│   ├── footer.html
│   ├── particles.html
│   ├── navigation.html
│   └── podcast-player.html
├── _sass/
│   ├── _variables.scss
│   ├── _base.scss
│   ├── _layout.scss
│   ├── _components.scss
│   ├── _kawaii.scss
│   ├── _accessibility.scss
│   └── _responsive.scss
├── assets/
│   ├── css/
│   │   └── main.scss
│   ├── js/
│   │   ├── main.js
│   │   ├── particles.js
│   │   └── podcast.js
│   ├── images/
│   │   ├── logo/
│   │   ├── avatars/
│   │   └── backgrounds/
│   └── audio/
│       └── episodes/
├── _posts/
│   └── (blog posts and podcast episodes)
├── _data/
│   ├── navigation.yml
│   ├── team.yml
│   ├── speaking.yml
│   └── social.yml
├── pages/
│   ├── about.md
│   ├── speaking.md
│   ├── research.md
│   └── contact.md
└── podcast/
    ├── index.html
    └── feed.xml
```

## Jekyll Configuration (_config.yml)

```yaml
# Site settings
title: "ScopeCreep.zip"
email: "hello@scopecreep.zip"
description: >-
  Professional cybersecurity research and platform engineering with a kawaii twist. 
  Conference speakers Kali Jackson and Kat Morgan blend technical excellence with creative innovation.
baseurl: ""
url: "https://scopecreep.zip"
twitter_username: scopecreepzip
github_username: scopecreepzip

# Build settings
markdown: kramdown
highlighter: rouge
theme: minima
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag

# Exclude from processing
exclude:
  - Gemfile
  - Gemfile.lock
  - node_modules
  - vendor/bundle/
  - vendor/cache/
  - vendor/gems/
  - vendor/ruby/

# Collections
collections:
  podcasts:
    output: true
    permalink: /podcast/:name/
  speaking:
    output: true
    permalink: /speaking/:name/

# Defaults
defaults:
  - scope:
      path: ""
      type: "posts"
    values:
      layout: "post"
      author: "Kali & Kat"
  - scope:
      path: ""
      type: "podcasts"
    values:
      layout: "podcast"
  - scope:
      path: ""
      type: "pages"
    values:
      layout: "page"

# Podcast settings
podcast:
  title: "ScopeCreep.zip Podcast"
  subtitle: "Where Kawaii Meets Code"
  description: "Technical discussions covering cybersecurity research, platform engineering, and industry insights with a kawaii twist."
  language: "en-us"
  author: "Kali Jackson & Kat Morgan"
  email: "podcast@scopecreep.zip"
  category: "Technology"
  subcategory: "Software How-To"
  explicit: false
  owner: "ScopeCreep.zip"
  image: "/assets/images/podcast-cover.png"

# Team information
team:
  kali:
    name: "Kali Jackson"
    title: "Malware Analyst & Security Researcher"
    avatar: "/assets/images/avatars/kali.png"
    bio: "Self-described 'smartest airhead' who combines serious cybersecurity expertise with kawaii aesthetics!"
    credentials: ["GIAC GREM", "OSCP", "PhD Candidate"]
    social:
      blog: "https://radicalkjax.com"
      research: "https://malwarEvangelist.com"
      bluesky: "https://bsky.app/profile/radicalkjax.com"
  kat:
    name: "Kat Morgan"
    title: "Platform Engineer & Open Sourceress"
    avatar: "/assets/images/avatars/kat.png"
    bio: "'Neuro spicy autist' and platform engineering wizard at Cisco!"
    credentials: ["CKA", "AWS Certified", "CNCF Ambassador"]
    social:
      blog: "https://blog.usrbinkat.io/en/"
      github: "https://github.com/usrbinkat"
      bluesky: "https://bsky.app/profile/usrbinkat.io"
```

## Gemfile

```ruby
source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

gem "jekyll", "~> 4.3.0"
gem "minima", "~> 2.5"
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
```

## Layout Templates

### _layouts/default.html
```html
<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: 'en' }}">
  {% include head.html %}
  <body class="kawaii-tech">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    {% include particles.html %}
    {% include header.html %}
    
    <main class="main" id="main-content">
      {{ content }}
    </main>
    
    {% include footer.html %}
    
    <script src="{{ '/assets/js/main.js' | relative_url }}"></script>
    {% if page.podcast %}
      <script src="{{ '/assets/js/podcast.js' | relative_url }}"></script>
    {% endif %}
  </body>
</html>
```

### _layouts/post.html
```html
---
layout: default
---

<article class="post">
  <div class="container">
    <header class="post-header">
      <h1 class="post-title">{{ page.title | escape }}</h1>
      <div class="post-meta">
        <time datetime="{{ page.date | date_to_xmlschema }}">
          {{ page.date | date: "%B %-d, %Y" }}
        </time>
        {% if page.author %}
          <span class="post-author">by {{ page.author }}</span>
        {% endif %}
      </div>
    </header>
    
    <div class="post-content">
      {{ content }}
    </div>
    
    {% if page.tags %}
      <div class="post-tags">
        {% for tag in page.tags %}
          <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
    {% endif %}
  </div>
</article>
```

### _layouts/podcast.html
```html
---
layout: default
podcast: true
---

<article class="podcast-episode">
  <div class="container">
    <header class="episode-header">
      <div class="episode-meta">
        <span class="episode-number">Episode {{ page.episode }}</span>
        <time datetime="{{ page.date | date_to_xmlschema }}">
          {{ page.date | date: "%B %-d, %Y" }}
        </time>
      </div>
      <h1 class="episode-title">{{ page.title | escape }}</h1>
      {% if page.subtitle %}
        <p class="episode-subtitle">{{ page.subtitle }}</p>
      {% endif %}
    </header>
    
    {% include podcast-player.html %}
    
    <div class="episode-content">
      {{ content }}
    </div>
    
    {% if page.guests %}
      <div class="episode-guests">
        <h3>Guests</h3>
        {% for guest in page.guests %}
          <div class="guest">
            <h4>{{ guest.name }}</h4>
            <p>{{ guest.bio }}</p>
            {% if guest.links %}
              <div class="guest-links">
                {% for link in guest.links %}
                  <a href="{{ link.url }}" class="guest-link">{{ link.title }}</a>
                {% endfor %}
              </div>
            {% endif %}
          </div>
        {% endfor %}
      </div>
    {% endif %}
  </div>
</article>
```

## Include Templates

### _includes/head.html
```html
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  {% seo %}
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="{{ '/assets/css/main.css' | relative_url }}">
  <link rel="canonical" href="{{ page.url | replace:'index.html','' | absolute_url }}">
  <link rel="alternate" type="application/rss+xml" title="{{ site.title | xml_escape }}" href="{{ '/feed.xml' | relative_url }}">
  
  {% if site.podcast %}
    <link rel="alternate" type="application/rss+xml" title="{{ site.podcast.title | xml_escape }}" href="{{ '/podcast/feed.xml' | relative_url }}">
  {% endif %}
  
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  
  {% if jekyll.environment == 'production' %}
    <!-- Analytics code here -->
  {% endif %}
</head>
```

### _includes/header.html
```html
<header class="header" role="banner">
  <div class="header-container">
    <div class="brand">
      <a href="{{ '/' | relative_url }}" class="logo-link">
        <div class="logo">{{ site.title }}</div>
      </a>
      <div class="tagline">Where Kawaii Meets Code 💖✨</div>
    </div>
    
    {% include navigation.html %}
  </div>
</header>
```

### _includes/navigation.html
```html
<nav class="nav" role="navigation" aria-label="Main navigation">
  {% for item in site.data.navigation.main %}
    <a href="{{ item.url | relative_url }}" class="nav-link" 
       {% if page.url == item.url %}aria-current="page"{% endif %}>
      {{ item.title }}
    </a>
  {% endfor %}
</nav>
```

### _includes/particles.html
```html
<div class="particles" aria-hidden="true" role="presentation" id="particles"></div>
```

### _includes/podcast-player.html
```html
{% if page.audio_file %}
  <div class="podcast-player">
    <audio controls preload="metadata" class="audio-player">
      <source src="{{ page.audio_file }}" type="audio/mpeg">
      <p>Your browser does not support the audio element.</p>
    </audio>
    
    <div class="episode-info">
      {% if page.duration %}
        <span class="duration">Duration: {{ page.duration }}</span>
      {% endif %}
      {% if page.file_size %}
        <span class="file-size">Size: {{ page.file_size }}</span>
      {% endif %}
    </div>
    
    <div class="subscribe-buttons">
      <a href="{{ '/podcast/feed.xml' | relative_url }}" class="subscribe-btn rss">
        📡 RSS Feed
      </a>
      <a href="#" class="subscribe-btn spotify">🎵 Spotify</a>
      <a href="#" class="subscribe-btn apple">🍎 Apple</a>
      <a href="#" class="subscribe-btn youtube">📺 YouTube</a>
    </div>
  </div>
{% endif %}
```

### _includes/footer.html
```html
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-content">
      <div class="footer-section">
        <h4>Professional Services ✨</h4>
        <ul class="footer-links">
          <li><a href="/services/security-consulting/">Security Consulting</a></li>
          <li><a href="/services/platform-architecture/">Platform Architecture</a></li>
          <li><a href="/services/technical-training/">Technical Training</a></li>
          <li><a href="/speaking/">Conference Speaking</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Content & Research 📚</h4>
        <ul class="footer-links">
          <li><a href="/blog/">Technical Blog</a></li>
          <li><a href="/research/">Research Papers</a></li>
          <li><a href="/podcast/">Podcast</a></li>
          <li><a href="/speaking/">Conference Materials</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Connect With Us 💫</h4>
        <ul class="footer-links">
          {% for member in site.team %}
            {% assign person = member[1] %}
            <li><a href="{{ person.social.blog }}">{{ person.name }}'s Blog</a></li>
          {% endfor %}
          <li><a href="/contact/">Get In Touch</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Get In Touch 💌</h4>
        <ul class="footer-links">
          <li><a href="/contact/speaking/">Speaking Inquiries</a></li>
          <li><a href="/contact/consulting/">Consulting Requests</a></li>
          <li><a href="/contact/collaboration/">Collaboration</a></li>
          <li><a href="/contact/media/">Media Inquiries</a></li>
        </ul>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {{ 'now' | date: "%Y" }} {{ site.title }} - Made with 💖 by Kali & Kat in Sacramento ✨</p>
    </div>
  </div>
</footer>
```

## SCSS Architecture

### assets/css/main.scss
```scss
---
---

@import 'variables';
@import 'base';
@import 'accessibility';
@import 'kawaii';
@import 'layout';
@import 'components';
@import 'responsive';
```

### _sass/_variables.scss
```scss
// Kawaii Color Palette
:root {
  --kawaii-pink: #ff69b4;
  --kawaii-purple: #9d4edd;
  --kawaii-cyan: #00e5ff;
  --kawaii-yellow: #ffd700;
  --kawaii-mint: #7fffd4;
  
  // Background Colors
  --bg-light-pink: #fef7f7;
  --bg-lavender: #f8f5ff;
  --bg-cyan-light: #f0feff;
  --white: #ffffff;
  
  // Text Colors
  --text-dark: #2d2d2d;
  --text-purple: #4a1c5c;
  --text-muted: #64748b;
  
  // Interactive Colors
  --focus-yellow: #ffd600;
  --border-kawaii: rgba(157, 78, 221, 0.3);
}

// Typography
$font-family-base: 'Quicksand', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
$font-family-mono: 'JetBrains Mono', 'Courier New', monospace;

// Breakpoints
$mobile: 768px;
$tablet: 1024px;
$desktop: 1200px;

// Spacing
$spacing-xs: 0.5rem;
$spacing-sm: 1rem;
$spacing-md: 1.5rem;
$spacing-lg: 2rem;
$spacing-xl: 3rem;
$spacing-xxl: 4rem;

// Border radius
$border-radius-sm: 8px;
$border-radius-md: 16px;
$border-radius-lg: 24px;
$border-radius-xl: 32px;

// Shadows
$shadow-sm: 0 4px 15px rgba(157, 78, 221, 0.2);
$shadow-md: 0 8px 25px rgba(157, 78, 221, 0.3);
$shadow-lg: 0 15px 40px rgba(0, 0, 0, 0.1);
$shadow-xl: 0 25px 60px rgba(0, 0, 0, 0.15);
```

### _sass/_base.scss
```scss
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: $font-family-base;
  background: linear-gradient(135deg, var(--bg-light-pink) 0%, var(--bg-lavender) 30%, var(--bg-cyan-light) 70%, #fff0f5 100%);
  background-attachment: fixed;
  color: var(--text-dark);
  line-height: 1.6;
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: $spacing-sm;
}

p {
  margin-bottom: $spacing-sm;
}

a {
  color: var(--kawaii-purple);
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--kawaii-pink);
  }
  
  &:focus {
    outline: 2px solid var(--focus-yellow);
    outline-offset: 2px;
    border-radius: 4px;
  }
}

img {
  max-width: 100%;
  height: auto;
}

code {
  font-family: $font-family-mono;
  background: var(--bg-lavender);
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-size: 0.9em;
}

pre {
  background: var(--text-dark);
  color: var(--white);
  padding: $spacing-md;
  border-radius: $border-radius-sm;
  overflow-x: auto;
  
  code {
    background: none;
    padding: 0;
  }
}
```

### _sass/_accessibility.scss
```scss
// Skip link
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--focus-yellow);
  color: var(--text-dark);
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 1000;
  font-weight: 700;
  
  &:focus {
    top: 6px;
  }
}

// Focus management
.using-keyboard *:focus {
  outline: 3px solid var(--focus-yellow);
  outline-offset: 2px;
}

// Reduced motion preferences
@media (prefers-reduced-motion: reduce) {
  .particle {
    animation: none !important;
  }
  
  .logo {
    animation: none !important;
    background: var(--kawaii-purple);
    background-clip: text;
    -webkit-background-clip: text;
  }
  
  .hero-highlight {
    animation: none !important;
    background: var(--kawaii-pink);
    background-clip: text;
    -webkit-background-clip: text;
  }
  
  * {
    transition: none !important;
    animation: none !important;
  }
}

// High contrast mode
@media (prefers-contrast: high) {
  .expert-card,
  .stats,
  .recognition-card {
    border-width: 4px;
    box-shadow: none;
  }
  
  .particles {
    display: none;
  }
}

// Screen reader only content
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### _sass/_kawaii.scss
```scss
// Kawaii particle system
.particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.particle {
  position: absolute;
  pointer-events: none;
  animation: kawaiFloat 8s infinite ease-in-out;
  
  &.star {
    color: var(--kawaii-yellow);
    font-size: 14px;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.6);
  }
  
  &.heart {
    color: var(--kawaii-pink);
    font-size: 12px;
    text-shadow: 0 0 8px rgba(255, 105, 180, 0.5);
  }
  
  &.code {
    color: var(--kawaii-purple);
    font-size: 10px;
    font-family: $font-family-mono;
    font-weight: 500;
  }
  
  &.sparkle {
    color: var(--kawaii-cyan);
    font-size: 8px;
  }
}

@keyframes kawaiFloat {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
    opacity: 0.7; 
  }
  25% { 
    transform: translateY(-15px) rotate(5deg); 
    opacity: 1; 
  }
  50% { 
    transform: translateY(-25px) rotate(0deg); 
    opacity: 0.8; 
  }
  75% { 
    transform: translateY(-10px) rotate(-5deg); 
    opacity: 1; 
  }
}

// Kawaii gradients and effects
.kawaii-gradient {
  background: linear-gradient(45deg, var(--kawaii-pink), var(--kawaii-purple), var(--kawaii-cyan));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.kawaii-glow {
  box-shadow: 0 0 20px rgba(157, 78, 221, 0.4);
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 0 30px rgba(157, 78, 221, 0.6);
  }
}

// Kawaii borders
.kawaii-border {
  border: 3px solid var(--kawaii-purple);
  border-radius: $border-radius-xl;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, var(--kawaii-pink), var(--kawaii-purple), var(--kawaii-cyan), var(--kawaii-yellow));
    border-radius: $border-radius-xl;
    z-index: -1;
    animation: borderGlow 3s linear infinite;
  }
}

@keyframes borderGlow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

## JavaScript Architecture

### assets/js/main.js
```javascript
// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
  initializeParticles();
  initializeInteractions();
  initializeAccessibility();
  initializeSmoothScrolling();
});

// Initialize particle system
function initializeParticles() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }
  
  const particlesScript = document.createElement('script');
  particlesScript.src = '/assets/js/particles.js';
  document.head.appendChild(particlesScript);
}

// Initialize kawaii interactions
function initializeInteractions() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }
  
  // Mouse interactions
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('click', handleClick);
}

// Handle mouse movement for particle interactions
function handleMouseMove(e) {
  const particles = document.querySelectorAll('.particle');
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  
  particles.forEach(particle => {
    const rect = particle.getBoundingClientRect();
    const particleX = rect.left + rect.width / 2;
    const particleY = rect.top + rect.height / 2;
    
    const distance = Math.sqrt(
      Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2)
    );
    
    if (distance < 120) {
      const scale = 1 + (120 - distance) / 120;
      particle.style.transform = `scale(${scale})`;
      particle.style.opacity = '1';
      particle.style.textShadow = '0 0 15px currentColor';
    } else {
      particle.style.transform = 'scale(1)';
      particle.style.opacity = '0.7';
      particle.style.textShadow = '0 0 8px currentColor';
    }
  });
}

// Handle click effects
function handleClick(e) {
  const sparkles = ['✨', '💖', '🌸', '⭐', '💫'];
  
  for (let i = 0; i < 8; i++) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
    sparkle.style.position = 'fixed';
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    sparkle.style.fontSize = '20px';
    sparkle.setAttribute('aria-hidden', 'true');
    
    document.body.appendChild(sparkle);
    
    const randomX = (Math.random() - 0.5) * 150;
    const randomY = (Math.random() - 0.5) * 150;
    
    sparkle.animate([
      { 
        transform: 'translate(0, 0) scale(1) rotate(0deg)', 
        opacity: 1 
      },
      { 
        transform: `translate(${randomX}px, ${randomY}px) scale(0) rotate(180deg)`, 
        opacity: 0 
      }
    ], {
      duration: 1200,
      easing: 'ease-out'
    }).onfinish = () => {
      sparkle.remove();
    };
  }
}

// Initialize accessibility features
function initializeAccessibility() {
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('using-keyboard');
    }
  });
  
  document.addEventListener('mousedown', function() {
    document.body.classList.remove('using-keyboard');
  });
}

// Initialize smooth scrolling
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        target.focus();
      }
    });
  });
}
```

### assets/js/particles.js
```javascript
// Kawaii particle system
function createKawaiiParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  
  const particleTypes = [
    { symbol: '✦', class: 'star', count: 30 },
    { symbol: '♥', class: 'heart', count: 20 },
    { symbol: '✨', class: 'sparkle', count: 25 },
    { symbol: '{', class: 'code', count: 12 },
    { symbol: '}', class: 'code', count: 12 },
    { symbol: '<', class: 'code', count: 8 },
    { symbol: '>', class: 'code', count: 8 },
    { symbol: '💖', class: 'heart', count: 10 }
  ];
  
  particleTypes.forEach(type => {
    for (let i = 0; i < type.count; i++) {
      const particle = document.createElement('div');
      particle.className = `particle ${type.class}`;
      particle.textContent = type.symbol;
      particle.setAttribute('aria-hidden', 'true');
      
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.setProperty('--delay', Math.random() * 8);
      
      container.appendChild(particle);
    }
  });
}

// Initialize particles
createKawaiiParticles();
```

### assets/js/podcast.js
```javascript
// Podcast functionality
document.addEventListener('DOMContentLoaded', function() {
  initializePodcastPlayer();
});

function initializePodcastPlayer() {
  const audioPlayers = document.querySelectorAll('.audio-player');
  
  audioPlayers.forEach(player => {
    // Add custom controls and functionality
    player.addEventListener('loadedmetadata', function() {
      updateDuration(this);
    });
    
    player.addEventListener('timeupdate', function() {
      updateProgress(this);
    });
    
    player.addEventListener('ended', function() {
      handleEpisodeEnd(this);
    });
  });
}

function updateDuration(player) {
  const duration = formatTime(player.duration);
  const durationElement = player.parentElement.querySelector('.duration');
  if (durationElement) {
    durationElement.textContent = `Duration: ${duration}`;
  }
}

function updateProgress(player) {
  const progress = (player.currentTime / player.duration) * 100;
  // Update custom progress bar if needed
}

function handleEpisodeEnd(player) {
  // Handle episode completion
  console.log('Episode ended');
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}
```

## Data Files

### _data/navigation.yml
```yaml
main:
  - title: "Our Expertise"
    url: "/#expertise"
  - title: "Podcast"
    url: "/podcast/"
  - title: "Speaking"
    url: "/speaking/"
  - title: "Research"
    url: "/research/"
  - title: "Contact"
    url: "/contact/"

footer:
  - title: "About"
    url: "/about/"
  - title: "Blog"
    url: "/blog/"
  - title: "Privacy"
    url: "/privacy/"
  - title: "Terms"
    url: "/terms/"
```

### _data/team.yml
```yaml
kali:
  name: "Kali Jackson"
  title: "Malware Analyst & Security Researcher"
  bio: "Self-described 'smartest airhead' who combines serious cybersecurity expertise with kawaii aesthetics!"
  avatar: "/assets/images/avatars/kali.png"
  credentials:
    - "Technical Solutions Specialist"
    - "Hacker"
    - "Green Witch"
  expertise:
    - "Deep Learning for Malware Classification"
    - "Advanced Persistent Threat (APT) Analysis"
    - "Reverse Engineering & Exploit Development"
    - "TensorFlow Security Applications"
    - "Endpoint Security & Incident Response"
    - "Conference Speaking & Security Education"
  social:
    blog: "https://radicalkjax.com"
    research: "https://malwarEvangelist.com"
    bluesky: "https://bsky.app/profile/radicalkjax.com"

kat:
  name: "Kat Morgan"
  title: "Platform Engineer & Open Sourceress"
  bio: "'Neuro spicy autist' and platform engineering wizard at Cisco!"
  avatar: "/assets/images/avatars/kat.png"
  credentials:
    - "Windows 7 MTA"
    - "Open Sourceress"
    - "Insecurity Expert"
  expertise:
    - "Kubernetes & Container Orchestration"
    - "Multi-Cloud Architecture (AWS, Azure, GCP)"
    - "Infrastructure as Code & Automation"
    - "CI/CD Pipeline Design"
    - "Site Reliability Engineering (SRE)"
    - "Enterprise DevOps Transformation"
    - "AI Microservice Infrastructure"
  social:
    blog: "https://blog.usrbinkat.io/en/"
    github: "https://github.com/usrbinkat"
    bluesky: "https://bsky.app/profile/usrbinkat.io"
```

### _data/speaking.yml
```yaml

- type: "Conference Speaker"
  title: "KubeCon + CloudNativeCon"
  description: "Delivered keynotes at conferences' - proving that enterprise Kubernetes can be both robust and delightful to work with"
  year: 2024

- type: "Research"
  title: "Deep Learning Malware Analysis: A Multi-Provider Ensemble Approach"
  description: "Research on applications in automated threat detection, making AI security research more accessible"
  year: 2025

- type: "Community Leadership"
  title: "ContainerCraft.io"
  description: "Founder of ContainerCraft.io, organizing meetups and fostering inclusive tech communities"
  year: 2024

- type: "Industry Expertise"
  title: "Broad Spectrum of Understanding"
  description: "Solution Architects that are continuously learning and sharing knowledge with the community"
  year: 2024
```

## Content Structure

### Homepage (index.html)
```html
---
layout: default
title: "ScopeCreep.zip - Where Kawaii Meets Code"
description: "Professional cybersecurity research and platform engineering with a kawaii twist."
---

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <div class="hero-content">
      <h1>Professional <span class="hero-highlight">Cybersecurity Research</span> with a Kawaii Twist</h1>
      <p>We're Kali and Kat - conference speakers, security researchers, and platform engineers who prove that technical excellence and creativity aren't mutually exclusive. Join us as we blend serious cybersecurity with kawaii innovation! 🌸🔐</p>
      <div class="cta-buttons">
        <a href="#expertise" class="btn-primary">Meet Our Team ✨</a>
        <a href="#speaking" class="btn-secondary">Book Us to Speak 🎤</a>
      </div>
    </div>
  </div>
</section>

<!-- Stats Section -->
<section class="stats">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-number">7+</div>
        <div class="stat-label">Years Combined Experience</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">50+</div>
        <div class="stat-label">Conference Talks Given</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">1000+</div>
        <div class="stat-label">Malware Samples Analyzed</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">99.9%</div>
        <div class="stat-label">Platform Uptime</div>
      </div>
    </div>
  </div>
</section>

<!-- Team Section -->
<section class="expertise" id="expertise">
  <div class="container">
    <h2 class="section-title">Our Kawaii Tech Expertise 🌟</h2>
    
    <div class="expertise-grid">
      {% for member in site.data.team %}
        {% assign person = member[1] %}
        <div class="expert-card {{ member[0] }}">
          <div class="expert-header">
            <div class="expert-avatar">
              {% if member[0] == 'kali' %}🌸{% else %}🚀{% endif %}
            </div>
            <div class="expert-info">
              <h3>{{ person.name }}</h3>
              <div class="expert-title">{{ person.title }}</div>
              <div class="expert-credentials">
                {% for credential in person.credentials %}
                  <span class="credential-badge">{{ credential }}</span>
                {% endfor %}
              </div>
            </div>
          </div>
          
          <p class="expert-description">{{ person.bio }}</p>
          
          <ul class="expertise-list">
            {% for skill in person.expertise %}
              <li>{{ skill }}</li>
            {% endfor %}
          </ul>
          
          <div class="social-professional">
            {% for social in person.social %}
              <a href="{{ social[1] }}" class="social-link">
                {% case social[0] %}
                  {% when 'blog' %}📝 Blog
                  {% when 'research' %}🛡️ Research
                  {% when 'github' %}💻 GitHub
                  {% when 'bluesky' %}🦋 Social
                {% endcase %}
              </a>
            {% endfor %}
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- Speaking & Recognition -->
<section class="recognition" id="speaking">
  <div class="container">
    <h2 class="section-title">Speaking & Recognition 🎤✨</h2>
    
    <div class="recognition-grid">
      {% for item in site.data.speaking %}
        <div class="recognition-card">
          <div class="recognition-type">{{ item.type }}</div>
          <div class="recognition-title">{{ item.title }}</div>
          <div class="recognition-details">{{ item.description }}</div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- Podcast Section -->
<section class="podcast" id="podcast">
  <div class="container">
    <div class="podcast-content">
      <h2>ScopeCreep.zip Podcast</h2>
      <p class="podcast-description">
        Join us for technical discussions that don't take themselves too seriously! We dive deep into cybersecurity research, platform engineering, and industry insights while keeping things fun, accessible, and sprinkled with kawaii energy. Perfect for security professionals and engineers who want substance with a smile! 🎧💖
      </p>
      
      <div class="podcast-features">
        <div class="feature-item">
          <div class="feature-icon">🔒</div>
          <div class="feature-title">Security Deep-Dives</div>
          <div class="feature-description">Latest malware analysis techniques, threat hunting, and AI-powered security tools explained with clarity and charm</div>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">⚙️</div>
          <div class="feature-title">Platform Magic</div>
          <div class="feature-description">Cloud-native architectures, Kubernetes wizardry, and enterprise infrastructure made understandable and delightful</div>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">🎤</div>
          <div class="feature-title">Amazing Guests</div>
          <div class="feature-description">Conversations with industry innovators, researchers, and engineers who are shaping the future of technology</div>
        </div>
      </div>
      
      <div style="background: linear-gradient(135deg, var(--bg-lavender), var(--bg-cyan-light)); border: 3px dashed var(--kawaii-cyan); padding: 3rem; border-radius: 20px; margin: 2rem 0;">
        <p style="color: var(--text-purple); font-weight: 700; font-size: 1.2rem; text-align: center;">🎵 Coming Soon! 🎵</p>
        <p style="font-size: 1rem; margin-top: 1rem; text-align: center; color: var(--text-dark);">We're crafting the perfect blend of technical excellence and kawaii charm!</p>
      </div>
      
      <div class="subscribe-grid">
        <a href="/podcast/feed.xml" class="subscribe-btn">📡 RSS</a>
        <a href="#" class="subscribe-btn">🎵 Spotify</a>
        <a href="#" class="subscribe-btn">🍎 Apple</a>
        <a href="#" class="subscribe-btn">📺 YouTube</a>
      </div>
    </div>
  </div>
</section>
```

## Podcast Feed (podcast/feed.xml)
```xml
---
layout: null
---
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>{{ site.podcast.title | xml_escape }}</title>
    <link>{{ site.url }}{{ site.baseurl }}/podcast/</link>
    <description>{{ site.podcast.description | xml_escape }}</description>
    <language>{{ site.podcast.language }}</language>
    <managingEditor>{{ site.podcast.email }} ({{ site.podcast.author }})</managingEditor>
    <webMaster>{{ site.podcast.email }} ({{ site.podcast.author }})</webMaster>
    <copyright>Copyright {{ 'now' | date: '%Y' }} {{ site.podcast.owner }}</copyright>
    <pubDate>{{ site.time | date_to_rfc822 }}</pubDate>
    <lastBuildDate>{{ site.time | date_to_rfc822 }}</lastBuildDate>
    <image>
      <url>{{ site.url }}{{ site.baseurl }}{{ site.podcast.image }}</url>
      <title>{{ site.podcast.title | xml_escape }}</title>
      <link>{{ site.url }}{{ site.baseurl }}/podcast/</link>
    </image>
    <itunes:author>{{ site.podcast.author | xml_escape }}</itunes:author>
    <itunes:summary>{{ site.podcast.description | xml_escape }}</itunes:summary>
    <itunes:owner>
      <itunes:name>{{ site.podcast.owner | xml_escape }}</itunes:name>
      <itunes:email>{{ site.podcast.email }}</itunes:email>
    </itunes:owner>
    <itunes:image href="{{ site.url }}{{ site.baseurl }}{{ site.podcast.image }}" />
    <itunes:category text="{{ site.podcast.category }}">
      <itunes:category text="{{ site.podcast.subcategory }}" />
    </itunes:category>
    <itunes:explicit>{{ site.podcast.explicit }}</itunes:explicit>
    
    {% for post in site.podcasts reversed %}
      <item>
        <title>{{ post.title | xml_escape }}</title>
        <link>{{ site.url }}{{ site.baseurl }}{{ post.url }}</link>
        <description>{{ post.content | strip_html | xml_escape }}</description>
        <pubDate>{{ post.date | date_to_rfc822 }}</pubDate>
        <guid isPermaLink="true">{{ site.url }}{{ site.baseurl }}{{ post.url }}</guid>
        {% if post.audio_file %}
          <enclosure url="{{ site.url }}{{ site.baseurl }}{{ post.audio_file }}" length="{{ post.file_size | default: '0' }}" type="audio/mpeg" />
          <itunes:duration>{{ post.duration }}</itunes:duration>
        {% endif %}
        <itunes:author>{{ post.author | default: site.podcast.author | xml_escape }}</itunes:author>
        <itunes:subtitle>{{ post.subtitle | xml_escape }}</itunes:subtitle>
        <itunes:summary>{{ post.content | strip_html | xml_escape }}</itunes:summary>
        <itunes:episode>{{ post.episode }}</itunes:episode>
        {% if post.season %}
          <itunes:season>{{ post.season }}</itunes:season>
        {% endif %}
      </item>
    {% endfor %}
  </channel>
</rss>
```

## Example Podcast Episode

### _podcasts/2025-01-01-episode-001-welcome.md
```markdown
---
layout: podcast
title: "Welcome to ScopeCreep.zip!"
subtitle: "Introducing Kali & Kat and our kawaii tech mission"
episode: 1
season: 1
date: 2025-01-01
author: "Kali Jackson & Kat Morgan"
duration: "45:32"
audio_file: "/assets/audio/episodes/001-welcome.mp3"
file_size: "65432100"
guests:
  - name: "Example Guest"
    bio: "Security researcher and kawaii enthusiast"
    links:
      - title: "Website"
        url: "https://example.com"
---

Welcome to the very first episode of ScopeCreep.zip! We're Kali and Kat, and we're here to prove that cybersecurity and platform engineering can be both technically rigorous and absolutely adorable.

## In This Episode

- Introduction to our backgrounds and expertise
- Why we started this podcast
- The intersection of kawaii culture and tech
- Our upcoming episodes and what to expect

## Show Notes

### Topics Discussed

- Malware analysis with a smile
- Making Kubernetes cute
- Conference speaking tips
- Building inclusive tech communities

### Resources Mentioned

- [SANS Institute](https://www.sans.org/)
- [Cloud Native Computing Foundation](https://www.cncf.io/)
- [DEF CON Conference](https://defcon.org/)

## Connect With Us

Follow us for more kawaii tech content and updates on upcoming episodes!
```

## Deployment Instructions

### GitHub Actions Workflow (.github/workflows/deploy.yml)
```yaml
name: Deploy Jekyll site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.1'
          bundler-cache: true
          cache-version: 0
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v4
      - name: Build with Jekyll
        run: bundle exec jekyll build --baseurl "${{ steps.pages.outputs.base_path }}"
        env:
          JEKYLL_ENV: production
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Performance Optimizations

### Image Optimization
- Use WebP format with fallbacks
- Implement lazy loading for images
- Optimize SVG files
- Use responsive images with srcset

### CSS/JS Optimization
- Minify CSS and JavaScript in production
- Use critical CSS for above-the-fold content
- Implement service worker for caching
- Compress assets with gzip

### Accessibility Checklist
- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA standards
- [ ] Keyboard navigation works throughout
- [ ] Screen reader compatibility tested
- [ ] Focus indicators are visible
- [ ] Skip links implemented
- [ ] Semantic HTML structure
- [ ] ARIA labels where needed

## Development Commands

```bash
# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Build for production
bundle exec jekyll build

# Check for broken links
bundle exec htmlproofer ./_site

# Lint CSS
stylelint "**/*.scss"

# Test accessibility
pa11y http://localhost:4000
```

## Browser Support
- Chrome/Edge: 2 versions back
- Firefox: 2 versions back
- Safari: 2 versions back
- iOS Safari: 2 versions back
- Android Chrome: 2 versions back

## Security Considerations
- Enable GitHub Pages HTTPS
- Implement Content Security Policy
- Regular dependency updates
- Input sanitization for any forms
- Rate limiting for API endpoints

This architecture provides a solid foundation for building the ScopeCreep.zip website with Jekyll, maintaining the perfect balance of kawaii aesthetics and professional credibility while ensuring accessibility and performance.