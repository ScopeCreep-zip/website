# Podcast Features Documentation

## Overview

The ScopeCreep.zip website includes a comprehensive podcast infrastructure with the following features:

- Episode carousel with rolodex effect
- Individual episode pages with transcripts
- Multi-view episode cards
- Formatted transcript display with speaker labels
- Podcast service integration

## Components

### 1. Podcast Episode Collection

Episodes are stored in the `_podcasts/` directory as markdown files with the following front matter:

```yaml
---
layout: podcast
title: "Episode Title"
episode_number: 1
date: 2025-01-20
description: "Brief episode description"
duration: "45:23"
audio_url: "/media/podcasts/episode-001.mp3"
artwork: "/media/podcasts/episode-001-art.jpg" # Optional, defaults to site podcast logo
guest: "Guest Name" # Optional
clean_transcript: |
  [Kali] Clean, edited transcript text...

  [Kat] With proper formatting...
raw_transcript: |
  [00:00] [Kali] Raw transcript with timestamps...
  [00:08] [Kat] Including all verbal fillers...
tags:
  - Topic1
  - Topic2
show_notes: "/path/to/notes.pdf" # Optional
transcript: "/path/to/transcript.pdf" # Optional downloadable transcript
---

Episode show notes and additional content go here...
```

### 2. Podcast Carousel

The podcast page (`/podcasts/`) features a carousel with rolodex effect:

- **Navigation**: Previous/next buttons and indicator dots
- **Keyboard Support**: Arrow keys for navigation
- **Touch Support**: Swipe gestures on mobile
- **Visual Effect**: Cards rotate with 3D perspective
- **Responsive**: Adapts to different screen sizes

### 3. Episode Cards

Each episode card includes:

- Episode artwork
- Episode number and date
- Title and description
- Duration and guest info (if available)
- Tags
- Action buttons (Listen Now, Transcript, Show Notes)
- **View Switcher** with three tabs:
  - **Services**: Podcast platform buttons
  - **Clean Transcript**: Formatted, edited transcript
  - **Raw Transcript**: Exact transcription with timestamps

### 4. Transcript Formatting

Transcripts support automatic formatting via `_includes/format-transcript.html` for:

#### Speaker Labels
- `[Kali]` - Dusty rose color (--dusty-rose)
- `[Kat]` - Teal color (--teal)
- `[Speaker 1]` - Gold dark color (--gold-dark)
- `[Speaker 2]` - Sage color (--sage)
- `[Guest]` - Dusty rose color (--dusty-rose)

#### Timestamps
- Format: `[00:00]` - Displayed in muted gray
- Only shown in raw transcripts

#### Formatting Rules
- Each speaker's dialogue appears on its own line
- Line breaks are preserved
- Clean transcripts use regular font
- Raw transcripts use monospace font

### 5. Individual Episode Pages

Each episode has its own page with:

- Full episode details
- Audio player
- Tabbed interface for:
  - Show Notes
  - Clean Transcript
  - Raw Transcript
- Podcast service links
- Episode tags

## File Structure

```
_podcasts/
├── 2025-01-20-hello-world.md
├── 2025-01-27-episode-002.md
└── ...

_includes/
├── podcast-episode-card.html  (440+ lines with embedded styles & JS)
├── podcast-services.html       (196 lines with embedded styles)
├── podcast-player.html         (252 lines with embedded styles & JS)
└── format-transcript.html      (27 lines)

_layouts/
└── podcast.html                (359 lines with embedded styles & JS)

_data/
└── podcast_services.yml        (Centralized service configuration)

pages/
└── podcasts.html               (Main podcast page with carousel)
```

## Styling

The podcast components use the tarot/gold theme with:

- Gold color palette (--gold-primary, --gold-light, --gold-dark)
- Gold borders (--border-gold)
- Gradient effects on titles and buttons
- Custom scrollbars with gold accents
- Smooth transitions
- Warm ivory backgrounds (--bg-card, --bg-secondary)
- Elegant tarot-inspired aesthetic

## JavaScript Features

### Carousel Control
```javascript
// Located in podcasts.html
- Handles slide navigation
- Updates indicator dots
- Manages keyboard/touch events
- Applies rolodex transformation
```

### View Switcher
```javascript
// Located in podcast-episode-card.html
- Switches between Services/Clean/Raw views
- Updates active tab styling
- Shows/hides content panes
```

### Tab Navigation
```javascript
// Located in podcast.html layout
- Switches between Show Notes/Transcripts
- Updates active tab indicator
```

## Usage Examples

### Creating a New Episode

1. Create a new file in `_podcasts/` with the date and slug:
   ```
   _podcasts/2025-02-01-episode-title.md
   ```

2. Add the required front matter
3. Include transcripts either:
   - Inline in the front matter
   - As separate files referenced by path

### Transcript Best Practices

1. **Clean Transcript**:
   - Remove filler words (um, uh, like)
   - Fix grammar and punctuation
   - Use proper paragraph breaks
   - Include speaker labels at start of each dialogue

2. **Raw Transcript**:
   - Include all verbal fillers
   - Add timestamps at regular intervals
   - Preserve exact wording
   - Include non-verbal cues (*laughs*, *pause*)

### Example Transcript Format

```
Clean:
[Kali] Welcome to our podcast! Today we're discussing cybersecurity.

[Kat] That's right! We'll cover platform engineering best practices.

Raw:
[00:00] [Kali] Um, welcome to our podcast! Today we're, uh, discussing cybersecurity.
[00:08] [Kat] That's right! *laughs* We'll cover, you know, platform engineering best practices.
```

## Maintenance

### Podcast Services Management
Update `_data/podcast_services.yml` to add/remove podcast platforms:
```yaml
platforms:
  new_platform:
    name: "Platform Name"
    url: "https://platform.url/your-podcast"
    icon: "https://platform.url/icon.png"
    enabled: true  # Set to false to hide
```

### Speaker Formatting
Modify color assignments in `_includes/format-transcript.html` for new speakers. Color variables reference the tarot theme:
- --dusty-rose (muted pink)
- --teal (muted teal)
- --gold-dark, --gold-primary (gold variations)
- --sage (soft sage)
- --lavender (muted lavender)

### Carousel Customization
Adjust carousel settings in `pages/podcasts.html`:
- Slide navigation (prev/next buttons)
- Indicator dots
- Rolodex transformation effects
- Touch/swipe threshold

### Component Styling
All components use embedded `<style>` blocks:
- podcast-player.html: Lines 63-187 (styles), 189-252 (JavaScript)
- podcast-episode-card.html: Lines 122-440 (styles), 442-470 (JavaScript)
- podcast-services.html: Lines 95-196 (styles)
- podcast.html layout: Lines 119-334 (styles), 336-359 (JavaScript)