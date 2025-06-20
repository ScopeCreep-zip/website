# Getting Started with Local Development

## Prerequisites

### Required Software
- **Ruby** (>= 2.7.0)
- **Bundler** (>= 2.0)
- **Git**
- **Node.js** (optional, for JS tooling)

### System Requirements
- macOS, Linux, or Windows (with WSL)
- 2GB RAM minimum
- 500MB free disk space

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/scopecreepzip/website.git
cd website
```

### 2. Install Ruby Dependencies

```bash
# Install bundler if not present
gem install bundler

# Install project dependencies
bundle install
```

### 3. Configure Local Environment

```bash
# Copy example config (if exists)
cp _config.yml.example _config.yml

# Update local settings
# Set url to http://localhost:4000
# Set baseurl to empty string
```

## Development Workflow

```mermaid
graph LR
    A[Edit Files] --> B[Jekyll Rebuild]
    B --> C[Browser Refresh]
    C --> D[View Changes]
    D --> A
    
    E[Git Add] --> F[Git Commit]
    F --> G[Git Push]
    G --> H[GitHub Pages Build]
    H --> I[Live Site Update]
```

### Start Development Server

```bash
# Basic serve command
bundle exec jekyll serve

# With live reload
bundle exec jekyll serve --livereload

# With drafts
bundle exec jekyll serve --drafts

# On custom port
bundle exec jekyll serve --port 3000
```

### Common Development Tasks

#### Creating a New Page

```bash
# Create new page
touch new-page.md

# Add front matter
echo '---
layout: page
title: "New Page"
permalink: /new-page/
---' > new-page.md
```

#### Adding a Blog Post

```bash
# Create post with proper naming
touch _posts/2025-01-20-post-title.md

# Add front matter
echo '---
layout: post
title: "Post Title"
date: 2025-01-20
categories: [security, engineering]
---' > _posts/2025-01-20-post-title.md
```

#### Working with Sass

```scss
// Files in _sass/ are automatically compiled
// Import in main.scss
@import "components/new-component";
```

## Project Structure

```
website/
├── _config.yml          # Site configuration
├── _data/              # YAML data files
├── _includes/          # Reusable components
├── _layouts/           # Page templates
├── _posts/             # Blog posts
├── _podcasts/          # Podcast episodes
├── _sass/              # Sass partials
├── _site/              # Generated output (gitignored)
├── assets/             # Static files
│   ├── css/
│   ├── js/
│   └── images/
├── pages/              # Static pages
└── Gemfile             # Ruby dependencies
```

## Environment Variables

```bash
# Set Jekyll environment
JEKYLL_ENV=development bundle exec jekyll serve

# Production build
JEKYLL_ENV=production bundle exec jekyll build
```

## Build Commands

### Development Build
```bash
bundle exec jekyll build
```

### Production Build
```bash
JEKYLL_ENV=production bundle exec jekyll build
```

### Clean Build
```bash
bundle exec jekyll clean
bundle exec jekyll build
```

## Debugging

### Enable Verbose Output
```bash
bundle exec jekyll serve --verbose
```

### Check Configuration
```bash
bundle exec jekyll doctor
```

### Validate HTML
```bash
bundle exec htmlproofer ./_site
```

## Performance Tips

1. **Incremental Builds**
   ```bash
   bundle exec jekyll serve --incremental
   ```

2. **Limit Posts**
   ```bash
   bundle exec jekyll serve --limit_posts 10
   ```

3. **Profile Build**
   ```bash
   bundle exec jekyll build --profile
   ```

## Common Issues

### Bundle Install Fails
```bash
# Update bundler
gem update bundler

# Clear cache
rm -rf vendor/bundle
bundle install
```

### Port Already in Use
```bash
# Find process using port 4000
lsof -i :4000

# Kill process
kill -9 <PID>

# Or use different port
bundle exec jekyll serve --port 4001
```

### Sass Compilation Errors
```bash
# Clear Sass cache
rm -rf .sass-cache
rm -rf _site
bundle exec jekyll build
```

## Next Steps

- Read [GitHub Pages Deployment](./github-pages.md)
- Learn about [CI/CD Pipeline](./ci-cd.md)
- Explore [Component Documentation](../components/)