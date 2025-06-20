# Include Components Documentation

## Overview

Include components are reusable partials that provide consistent functionality across the site. They follow the DRY (Don't Repeat Yourself) principle and enable modular development.

## Component Architecture

```mermaid
graph TD
    A[Layout] --> B[Include Components]
    B --> C[Header]
    B --> D[Footer]
    B --> E[Social Links]
    B --> F[Podcast Player]
    B --> G[Navigation]
    B --> H[Meta Tags]
    
    C --> C1[Logo]
    C --> C2[Nav Menu]
    C --> C3[Mobile Toggle]
    
    D --> D1[Footer Links]
    D --> D2[Copyright]
    D --> D3[Social Icons]
```

## Core Components

### header.html

**Purpose**: Site-wide navigation header with responsive menu

**Location**: `_includes/header.html`

**Parameters**:
- None (uses site.data.navigation)

**Usage**:
```liquid
{% include header.html %}
```

**Structure**:
```html
<header class="site-header">
  <div class="container">
    <a href="{{ '/' | relative_url }}" class="logo">
      <img src="{{ '/assets/images/logo.png' | relative_url }}" alt="{{ site.title }}">
    </a>
    <nav class="main-nav">
      {% for item in site.data.navigation.main %}
        <a href="{{ item.url | relative_url }}" 
           class="nav-link {% if page.url == item.url %}active{% endif %}">
          {{ item.title }}
        </a>
      {% endfor %}
    </nav>
    <button class="mobile-menu-toggle" aria-label="Menu">
      <span></span>
    </button>
  </div>
</header>
```

### footer.html

**Purpose**: Site footer with links and social media

**Location**: `_includes/footer.html`

**Parameters**:
- None

**Usage**:
```liquid
{% include footer.html %}
```

**Features**:
- Dynamic year for copyright
- Social media links from data file
- Newsletter signup
- Footer navigation

### social-links.html

**Purpose**: Reusable social media icon list

**Location**: `_includes/social-links.html`

**Parameters**:
- `class`: Additional CSS classes
- `show_labels`: Display platform names (default: false)

**Usage**:
```liquid
{% include social-links.html class="footer-social" show_labels=true %}
```

**Data Source**: `_data/social_links.yml`
```yaml
- platform: twitter
  url: https://twitter.com/scopecreepzip
  icon: fab fa-twitter
  label: Twitter
- platform: github
  url: https://github.com/scopecreepzip
  icon: fab fa-github
  label: GitHub
```

### podcast-player.html

**Purpose**: Embedded podcast player with controls

**Location**: `_includes/podcast-player.html`

**Parameters**:
- `episode`: Podcast episode object
- `autoplay`: Auto-start playback (default: false)
- `show_notes`: Display episode notes (default: true)

**Usage**:
```liquid
{% include podcast-player.html episode=page autoplay=false %}
```

**Features**:
```html
<div class="podcast-player" data-episode="{{ episode.id }}">
  <audio controls {% if include.autoplay %}autoplay{% endif %}>
    <source src="{{ episode.audio_url }}" type="audio/mpeg">
  </audio>
  <div class="player-info">
    <h3>{{ episode.title }}</h3>
    <time>{{ episode.date | date: "%B %d, %Y" }}</time>
    {% if include.show_notes %}
      <div class="episode-notes">{{ episode.content }}</div>
    {% endif %}
  </div>
</div>
```

### podcast-services.html

**Purpose**: List of podcast platform links

**Location**: `_includes/podcast-services.html`

**Parameters**:
- `style`: Display style (icons/buttons/list)

**Usage**:
```liquid
{% include podcast-services.html style="buttons" %}
```

**Data Source**: `_data/podcast_services.yml`

### head.html

**Purpose**: HTML head section with meta tags and assets

**Location**: `_includes/head.html`

**Parameters**:
- Inherits from page/site variables

**Usage**:
```liquid
<!DOCTYPE html>
<html lang="en">
<head>
  {% include head.html %}
</head>
```

**Features**:
- SEO meta tags
- Open Graph tags
- Twitter Cards
- Favicon links
- CSS/JS includes

## Advanced Components

### podcast-episode-card.html

**Purpose**: Episode preview card for listings

**Location**: `_includes/podcast-episode-card.html`

**Parameters**:
- `episode`: Episode object
- `show_thumbnail`: Display episode artwork
- `truncate`: Character limit for description

**Usage**:
```liquid
{% for episode in site.podcasts limit:3 %}
  {% include podcast-episode-card.html episode=episode truncate=150 %}
{% endfor %}
```

### Component Structure:
```html
<article class="episode-card">
  {% if include.show_thumbnail %}
    <img src="{{ episode.thumbnail }}" alt="{{ episode.title }}">
  {% endif %}
  <div class="episode-content">
    <h3><a href="{{ episode.url }}">{{ episode.title }}</a></h3>
    <time>{{ episode.date | date: "%B %d, %Y" }}</time>
    <p>{{ episode.description | truncate: include.truncate }}</p>
    <div class="episode-meta">
      <span class="duration">{{ episode.duration }}</span>
      <span class="episode-number">Episode {{ episode.episode_number }}</span>
    </div>
  </div>
</article>
```

## Component Communication

```mermaid
sequenceDiagram
    participant Page
    participant Layout
    participant Include
    participant Data
    
    Page->>Layout: Front matter variables
    Layout->>Include: include tag with params
    Include->>Data: Access site.data
    Data->>Include: Return data
    Include->>Layout: Render HTML
    Layout->>Page: Complete page
```

## Best Practices

### 1. Parameter Validation

```liquid
{% comment %} Validate required parameters {% endcomment %}
{% if include.episode == nil %}
  <p class="error">Error: Episode parameter required</p>
{% else %}
  {% comment %} Component logic here {% endcomment %}
{% endif %}
```

### 2. Default Values

```liquid
{% comment %} Set defaults for optional parameters {% endcomment %}
{% assign show_date = include.show_date | default: true %}
{% assign style = include.style | default: "card" %}
```

### 3. Defensive Coding

```liquid
{% comment %} Check for data existence {% endcomment %}
{% if site.data.social_links %}
  {% for link in site.data.social_links %}
    {% if link.url and link.url != "" %}
      <a href="{{ link.url }}">{{ link.platform }}</a>
    {% endif %}
  {% endfor %}
{% endif %}
```

### 4. Performance Optimization

```liquid
{% comment %} Cache expensive operations {% endcomment %}
{% assign sorted_posts = site.posts | sort: "date" | reverse %}
{% for post in sorted_posts limit: include.limit %}
  {% comment %} Use cached sorted posts {% endcomment %}
{% endfor %}
```

## Creating New Components

### Component Template

```liquid
{% comment %}
  Component: component-name.html
  Purpose: Brief description
  Parameters:
    - param1: Description (required)
    - param2: Description (optional, default: value)
  Usage: {% include component-name.html param1=value %}
{% endcomment %}

{% comment %} Parameter validation {% endcomment %}
{% if include.param1 == nil %}
  <p class="error">Error: param1 is required</p>
{% else %}

{% comment %} Set defaults {% endcomment %}
{% assign param2 = include.param2 | default: "default-value" %}

{% comment %} Component markup {% endcomment %}
<div class="component-name" data-param="{{ param2 }}">
  {{ include.param1 }}
</div>

{% endif %}
```

### Testing Components

```liquid
{% comment %} Test page: test-component.html {% endcomment %}
---
layout: page
title: Component Test
---

<h2>Test Cases</h2>

{% comment %} Test with all parameters {% endcomment %}
<h3>Full Parameters</h3>
{% include component-name.html param1="test" param2="custom" %}

{% comment %} Test with defaults {% endcomment %}
<h3>Default Values</h3>
{% include component-name.html param1="test" %}

{% comment %} Test error handling {% endcomment %}
<h3>Error Case</h3>
{% include component-name.html %}
```

## Component Library

### Available Components

| Component | Purpose | Key Parameters |
|-----------|---------|----------------|
| header.html | Site header | None |
| footer.html | Site footer | None |
| head.html | HTML head | None |
| social-links.html | Social media links | class, show_labels |
| podcast-player.html | Audio player | episode, autoplay |
| podcast-services.html | Platform links | style |
| podcast-episode-card.html | Episode preview | episode, truncate |

### Component Dependencies

```mermaid
graph LR
    A[social-links.html] --> B[_data/social_links.yml]
    C[podcast-services.html] --> D[_data/podcast_services.yml]
    E[header.html] --> F[_data/navigation.yml]
    G[podcast-player.html] --> H[JavaScript: player.js]
    I[All Components] --> J[CSS: components.scss]
```