# ScopeCreep.zip Architecture Overview

## Technology Stack

### Core Framework
- **Jekyll 4.x** - Static site generator
- **Ruby 3.x** - Build environment
- **Liquid** - Templating engine
- **Sass** - CSS preprocessor

### Frontend Technologies
- **HTML5** - Semantic markup
- **CSS3** - Styling with animations
- **JavaScript (ES6+)** - Interactive features
- **Web Components** - Reusable UI elements

## Architecture Diagram

```mermaid
graph TB
    subgraph "Source Files"
        A[_config.yml] --> B[Jekyll Core]
        C[_data/] --> B
        D[_includes/] --> B
        E[_layouts/] --> B
        F[_sass/] --> B
        G[Content Files<br/>.md/.html] --> B
    end
    
    subgraph "Build Process"
        B --> H[Liquid Processing]
        H --> I[Markdown Conversion]
        I --> J[Sass Compilation]
        J --> K[Asset Pipeline]
    end
    
    subgraph "Output"
        K --> L[_site/]
        L --> M[Static HTML]
        L --> N[CSS Files]
        L --> O[JS Files]
        L --> P[Media Assets]
    end
    
    subgraph "Deployment"
        L --> Q[GitHub Pages]
        Q --> R[CDN Distribution]
        R --> S[scopecreep.zip]
    end
```

## Directory Structure

```mermaid
graph LR
    A[website/] --> B[_config.yml<br/>Site configuration]
    A --> C[_data/<br/>Structured data]
    A --> D[_includes/<br/>Reusable partials]
    A --> E[_layouts/<br/>Page templates]
    A --> F[_sass/<br/>Stylesheets]
    A --> G[_site/<br/>Generated output]
    A --> H[assets/<br/>Static resources]
    A --> I[_posts/<br/>Blog content]
    A --> J[_podcasts/<br/>Podcast episodes]
    A --> K[pages/<br/>Static pages]

    C --> C1[navigation.yml]
    C --> C2[social_links.yml]
    C --> C3[podcast_services.yml]
    C --> C4[team.yml]

    F --> F1[base/<br/>Core styles]
    F --> F2[components/<br/>UI components]
    F --> F3[layout/<br/>Page structure]

    K --> K1[about.md]
    K --> K2[podcasts.html]
    K --> K3[blog.html]
    K --> K4[contact.md]
    K --> K5[research.md]
```

## Build Pipeline

```mermaid
sequenceDiagram
    participant Dev as Developer
    participant Git as GitHub
    participant GHA as GitHub Actions
    participant GP as GitHub Pages
    participant CDN as CDN/DNS
    participant User as End User
    
    Dev->>Git: Push changes
    Git->>GHA: Trigger build
    GHA->>GHA: Install dependencies
    GHA->>GHA: Run Jekyll build
    GHA->>GHA: Validate output
    GHA->>GP: Deploy _site/
    GP->>CDN: Distribute files
    User->>CDN: Request page
    CDN->>User: Serve content
```

## Key Components

### 1. Configuration Layer
- `_config.yml` - Central configuration
- Environment-specific settings
- Plugin configuration
- Build settings

### 2. Data Layer
- YAML files in `_data/`
- Structured content management
- Separation of content from presentation

### 3. Template Layer
- Layouts define page structure
- Includes provide reusable components
- Liquid templating for dynamic content

### 4. Styling Layer
- Modular Sass architecture
- Component-based styles
- Responsive design system
- Custom animations and effects

### 5. Content Layer
- Markdown files for pages
- Blog posts in `_posts/`
- Podcast episodes in `_podcasts/`
- Static pages (about, contact, etc.)

### 6. Podcast Infrastructure
- Episode carousel with rolodex effect
- Multi-view episode cards (Services/Transcripts)
- Transcript formatting system
- Speaker label color coding
- Individual episode pages with tabs

### 7. Asset Pipeline
- Minimal JavaScript (main.js, buzzword-generator.js)
- Image optimization
- Font loading (Cormorant Garamond, Quicksand, JetBrains Mono)
- CSS/JS minification via Sass compression

## Performance Optimizations

1. **Static Generation** - No server-side processing
2. **CDN Distribution** - Global edge caching
3. **Asset Optimization** - Minified CSS/JS
4. **Lazy Loading** - Images and media
5. **Critical CSS** - Inline above-fold styles
6. **Preconnect/Prefetch** - Resource hints

## Security Considerations

1. **Static Files** - No server vulnerabilities
2. **HTTPS Only** - Enforced by GitHub Pages
3. **No Database** - No SQL injection risks
4. **Content Security Policy** - XSS protection
5. **Dependency Management** - Regular updates

## Scalability

The architecture is designed for:
- **Horizontal scaling** via CDN
- **Zero server maintenance**
- **Automatic deployments**
- **Version control integration**
- **Rollback capabilities**