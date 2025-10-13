# ScopeCreep.zip Website

Professional cybersecurity research and platform engineering with a kawaii twist. This is the source code for [scopecreep.zip](https://scopecreep.zip).

## About

ScopeCreep.zip is the collaborative platform of Kali Jackson and Kat Morgan, blending technical excellence with creative innovation in cybersecurity and platform engineering.

## Features

- Responsive Jekyll-based static site
- Podcast platform with centralized service management
- Social media integration
- Conference speaking portfolio
- Technical blog/research section
- Kawaii-themed design with particle effects

## Documentation

📚 **[View Full Documentation](./docs/)**

- [Architecture Overview](./docs/architecture/overview.md) - System design and technology stack
- [Getting Started](./docs/deployment/getting-started.md) - Local development setup
- [Component Library](./docs/components/includes.md) - Reusable components
- [Theme System](./docs/styling/theme-system.md) - Colors, typography, and styling
- [Content Updates](./docs/maintenance/content-updates.md) - How to update content
- [Troubleshooting](./docs/maintenance/troubleshooting.md) - Common issues and solutions

## Quick Start

1. **Install Prerequisites**
   - Ruby (>= 2.7.0)
   - Bundler (>= 2.0)
   - Git

2. **Clone and Setup**
   ```bash
   git clone https://github.com/ScopeCreep-zip/website.git
   cd website
   bundle install
   ```

3. **Run Locally**
   ```bash
   bundle exec jekyll serve --livereload
   # Open http://localhost:4000
   ```

## Project Structure

```
website/
├── _config.yml      # Site configuration
├── _data/          # YAML data files
├── _includes/      # Reusable components
├── _layouts/       # Page templates
├── _posts/         # Blog posts
├── _podcasts/      # Podcast episodes
├── _sass/          # Stylesheets
├── assets/         # Images, JS, CSS
└── docs/           # Documentation
```

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### Custom Domain Setup

The site uses the custom domain `scopecreep.zip`. The CNAME file is already configured.

### DNS Configuration

For the custom domain to work, configure your DNS with:
- A records pointing to GitHub Pages IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- Or a CNAME record pointing to `[your-username].github.io`

## Configuration

- Site configuration: `_config.yml`
- Social links: `_data/social_links.yml`
- Podcast services: `_data/podcast_services.yml`
- Team information: `_data/team.yml`

## Contributing

We welcome contributions! Please see our [documentation](./docs/) for:
- Code style guidelines
- Component development
- Testing procedures
- Pull request process

## License

© 2025 ScopeCreep.zip - All rights reserved