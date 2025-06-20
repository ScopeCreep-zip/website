# Extracted Styling Patterns from ScopeCreep Homepage Template

## 1. Typography Styles

### Font Families
- **Primary Font**: `'Quicksand', -apple-system, BlinkMacSystemFont, system-ui, sans-serif`
- **Code Font**: `'JetBrains Mono', 'Courier New', monospace`
- **Font Import**: Google Fonts - Quicksand (300, 400, 600, 700) and JetBrains Mono (400, 500)

### Heading Styles
- **Logo/Brand**: 
  - Font-size: 3.5rem
  - Font-weight: 700
  - Rainbow gradient animation with text-fill
  - Text-shadow: `0 0 30px rgba(255, 105, 180, 0.6)`
  - Drop-shadow filter animation

- **Hero H1**: 
  - Font-size: 3.5rem (2.5rem mobile)
  - Font-weight: 700
  - Line-height: 1.2
  - Color: var(--text-dark)

- **Section Titles** (e.g., "Speaking & Recognition"):
  - Font-size: 3rem
  - Font-weight: 700
  - Gradient text effect (pink → purple → cyan)
  - Text centered
  - Margin-bottom: 3rem

- **Card Titles** (H3):
  - Font-size: 1.8rem
  - Font-weight: 700
  - Color: var(--text-dark)

- **Feature Titles**:
  - Font-size: 1.4rem
  - Font-weight: 700
  - Color: var(--text-dark)

### Body Text Styles
- **Base Text**:
  - Line-height: 1.6
  - Color: var(--text-dark)
  
- **Tagline**:
  - Font-size: 1.1rem
  - Font-weight: 600
  - Gradient text effect

- **Hero Paragraph**:
  - Font-size: 1.3rem
  - Color: var(--text-purple)
  - Line-height: 1.7
  - Font-weight: 500

- **Description Text**:
  - Font-size: 1.05rem
  - Font-weight: 500
  - Line-height: 1.7

## 2. Color Usage Patterns

### CSS Variables
```css
--kawaii-pink: #ff69b4;
--kawaii-purple: #9d4edd;
--kawaii-cyan: #00e5ff;
--kawaii-yellow: #ffd700;
--kawaii-mint: #7fffd4;
--bg-light-pink: #fef7f7;
--bg-lavender: #f8f5ff;
--bg-cyan-light: #f0feff;
--text-dark: #2d2d2d;
--text-purple: #4a1c5c;
--text-muted: #64748b;
--focus-yellow: #ffd600;
--white: #ffffff;
--border-kawaii: rgba(157, 78, 221, 0.3);
```

### Gradient Patterns
1. **Body Background**:
   - `linear-gradient(135deg, var(--bg-light-pink) 0%, var(--bg-lavender) 30%, var(--bg-cyan-light) 70%, #fff0f5 100%)`
   - Fixed attachment

2. **Header Background**:
   - `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 245, 255, 0.95) 50%, rgba(240, 254, 255, 0.95) 100%)`
   - Backdrop-filter: blur(15px)

3. **Text Gradients**:
   - Rainbow: `linear-gradient(45deg, var(--kawaii-pink), var(--kawaii-purple), var(--kawaii-cyan), var(--kawaii-yellow))`
   - Three-color: `linear-gradient(45deg, var(--kawaii-pink), var(--kawaii-purple), var(--kawaii-cyan))`
   - Two-color: `linear-gradient(45deg, var(--kawaii-pink), var(--kawaii-purple))`

4. **Button Gradients**:
   - Primary: `linear-gradient(135deg, var(--kawaii-pink), var(--kawaii-purple))`
   - Hover overlay: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)`

5. **Card Background Gradients**:
   - `linear-gradient(135deg, var(--bg-light-pink), var(--bg-lavender))`
   - `linear-gradient(135deg, var(--bg-lavender), var(--bg-cyan-light))`

## 3. Border Styles, Shadows, and Effects

### Border Treatments
1. **Header Border**:
   - Bottom: 3px solid var(--kawaii-purple)
   
2. **Card Borders**:
   - Standard: 3px solid color (varies by card type)
   - Border-radius: 32px (large cards), 24px (medium), 20px (small)
   - Dashed border: 3px dashed var(--kawaii-cyan)

3. **Navigation & Button Borders**:
   - 2px solid var(--kawaii-purple)
   - Border-radius: 20px-25px

4. **Recognition Cards**:
   - Border-left: 6px solid (alternating colors)
   - Border-radius: 24px

### Shadow Effects
1. **Header Shadow**:
   - `0 4px 20px rgba(157, 78, 221, 0.15)`

2. **Card Shadows**:
   - Base: `0 15px 50px rgba(0, 0, 0, 0.1)`
   - Hover: `0 25px 60px rgba(0, 0, 0, 0.15)`
   - Colored shadows: `0 15px 40px rgba(0, 229, 255, 0.2)`

3. **Button Shadows**:
   - Primary: `0 8px 25px rgba(255, 105, 180, 0.4)`
   - Hover: `0 12px 35px rgba(255, 105, 180, 0.6)`

4. **Text Shadows**:
   - Glow effects: `0 0 30px rgba(255, 105, 180, 0.6)`
   - Particle glow: `0 0 10px rgba(255, 215, 0, 0.6)`

### Special Effects
1. **Drop-shadow Filters**:
   - Logo: `drop-shadow(0 0 20px rgba(157, 78, 221, 0.4))` with animation
   
2. **Backdrop Filters**:
   - Header: `backdrop-filter: blur(15px)`

3. **Glow Effects**:
   - Animated border glow using rotating gradient
   - Text glow animations

## 4. Spacing and Layout Patterns

### Container Spacing
- Max-width: 1200px
- Padding: 0 2rem
- Section padding: 4rem 0

### Grid Layouts
1. **Stats Grid**:
   - `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`
   - Gap: 2rem

2. **Expertise Grid**:
   - `grid-template-columns: repeat(auto-fit, minmax(400px, 1fr))`
   - Gap: 3rem

3. **Recognition Grid**:
   - `grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))`
   - Gap: 2rem

4. **Subscribe Grid**:
   - `grid-template-columns: repeat(auto-fit, minmax(160px, 1fr))`
   - Gap: 1.5rem

### Card Padding
- Large cards: 3rem
- Medium cards: 2.5rem
- Small cards: 1.5rem-2rem

### Button Padding
- Primary/Secondary: 1.25rem 2.5rem
- Nav links: 0.875rem 1.5rem
- Social links: 0.75rem 1.25rem

## 5. Component-Specific Styles

### Hero Section
- White background with purple border
- Border-radius: 32px
- Padding: 3rem
- Animated border glow effect
- Box-shadow: `0 15px 50px rgba(157, 78, 221, 0.2)`

### Expert Cards
- Border: 3px solid (color varies)
- Top gradient bar (6px height)
- Avatar: 100px circular with gradient background
- Transform on hover: `translateY(-10px) scale(1.02)`

### Stats Section
- White background with cyan border
- Decorative sparkle emoji positioned absolutely
- Stat items with hover scale effect

### Recognition Cards
- Left border: 6px solid (alternating colors)
- Recognition type with gradient text
- Text-transform: uppercase for type labels

### Podcast Section
- Cyan border with shadow
- Headphone emoji positioned absolutely
- "Coming Soon" section with dashed border

## 6. Animation and Transition Effects

### Keyframe Animations
1. **rainbowGlow** (3s ease-in-out infinite alternate):
   - Background position shift
   - Filter drop-shadow changes

2. **borderGlow** (3s linear infinite):
   - 360-degree rotation

3. **textShimmer** (2s ease-in-out infinite alternate):
   - Background position: 0% to 100%

4. **kawaiFloat** (8s infinite ease-in-out):
   - Y translation: 0 → -15px → -25px → -10px → 0
   - Rotation: 0 → 5deg → 0 → -5deg → 0
   - Opacity variations

### Transition Patterns
- Standard: `all 0.3s ease`
- Buttons: `all 0.3s ease`
- Hover transforms: `translateY(-3px)` to `translateY(-10px)`
- Scale effects: `scale(1.02)` to `scale(1.05)`

### Interactive Effects
1. **Button Hover**:
   - Slide-in gradient overlay
   - Transform and scale
   - Enhanced shadow

2. **Card Hover**:
   - Lift effect with translateY
   - Scale transformation
   - Shadow intensification

3. **Nav Link Hover**:
   - Gradient slide-in from left
   - Color inversion
   - Shadow enhancement

## 7. Missing Global Styles to Apply

### Accessibility Features
1. **Focus States**:
   - Outline: 3px solid var(--focus-yellow)
   - Outline-offset: 2px or 3px

2. **Skip Link**:
   - Position absolute → fixed on focus
   - Background: var(--focus-yellow)
   - Z-index: 1000

3. **Reduced Motion**:
   - Disable all animations
   - Static gradients
   - No particle effects

4. **High Contrast**:
   - Increased border widths (4px)
   - No shadows
   - Hidden particles

### Responsive Breakpoints
- Mobile: max-width: 768px
  - Reduced font sizes
  - Single column layouts
  - Full-width buttons
  - Centered navigation

### Particle System
- Fixed positioning
- Pointer-events: none
- Multiple particle types with different animations
- Mouse interaction effects (scale and opacity)
- Click sparkle effects

### Additional UI Patterns
1. **Credential Badges**:
   - Gradient background
   - Padding: 0.4rem 1rem
   - Border-radius: 20px
   - Font-size: 0.85rem

2. **Social Links**:
   - Gradient background on hover
   - Transform on hover
   - Consistent border treatment

3. **Footer Styling**:
   - Gradient background (purple → pink → cyan)
   - SVG pattern overlay
   - Link hover with background highlight
   - Border-top for footer-bottom section