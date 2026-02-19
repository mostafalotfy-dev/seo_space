# Color Palette Documentation

## Overview

SEO Space includes four professionally designed color palettes with full dark/light mode support. Each theme is defined in a separate CSS file with CSS custom properties (variables) for easy customization.

## Theme Files

| Theme | File | Use Case |
|-------|------|----------|
| **Ignite** | `assets/css/color-palette/Ignite.css` | Energetic, vibrant brand |
| **Navy** | `assets/css/color-palette/navy.css` | Professional, corporate |
| **New Corporate Tech** | `assets/css/color-palette/new-corporate-tech.css` | Modern tech company |
| **Olive Garden Feast** | `assets/css/color-palette/olive-garden-feast.css` | Earthy, organic brand |

## Color Variable System

### Core Variables

All themes define these CSS custom properties:

```css
:root {
  /* Backgrounds */
  --main-color              /* Primary background for sections */
  --secondary-color         /* Cards, containers background */
  --light-bg-color          /* Light background areas */
  
  /* Text Colors */
  --text-color              /* Main paragraph/body text */
  --title-color             /* Headings, titles */
  --paragraph-color         /* Descriptive text */
  --text-muted              /* Secondary/disabled text */
  --text-hover-color        /* Text on hover states */
  
  /* Brand Colors */
  --third-color             /* Primary accent (links, icons) */
  --accent-color            /* CTA buttons, highlights */
  --secondary-hover-color   /* Hover state for secondary elements */
  
  /* Utility Colors */
  --light-color             /* Pure white/light */
  --dark-color              /* Pure dark/black */
  --selection-color         /* Text selection background */
  
  /* Typography */
  --font-family             /* Primary font stack */
}
```

## Olive Garden Feast Theme (Example)

### Dark Mode (Default)

```css
:root,[data-theme="dark"] {
  --main-color:           #020617;          /* Deep blue-black */
  --secondary-color:      #020617;
  --light-bg-color:       #020617;
  
  --third-color:          #3B82F6;          /* Bright blue */
  --accent-color:         #F59E0B;          /* Amber/gold */
  --secondary-hover-color:#2563EB;          /* Darker blue */
  
  --text-color:           #E5E7EB;          /* Light gray */
  --title-color:          #E5E7EB;
  --paragraph-color:      #E5E7EB;
  --text-muted:           #94A3B8;          /* Muted gray */
  --text-hover-color:     #FBBF24;          /* Lighter amber */
  
  --light-color:          #FFFFFF;
  --dark-color:           #020617;
  --selection-color:      var(--accent-color);
  --font-family:          'Poppins', sans-serif;
}
```

**Visual Palette:**
- Background: Very dark blue (#020617)
- Primary Accent: Bright blue (#3B82F6)
- Highlights/CTA: Warm amber (#F59E0B)
- Text: Light gray (#E5E7EB)
- Muted Text: Medium gray (#94A3B8)

### Light Mode

```css
@media screen and (prefers-color-scheme: light) {
  :root {
    --main-color:           #F9FAFB;        /* Off-white */
    --secondary-color:      #5365ce;        /* Muted blue */
    --light-bg-color:       #88d9e6;        /* Light cyan */
    
    --third-color:          #2563EB;        /* Medium blue */
    --accent-color:         #F97316;        /* Orange */
    --secondary-hover-color:#e27777;        /* Rose tone */
    --text-hover-color:     #dda15e;        /* Tan */
    
    --text-color:           #111827;        /* Dark gray/black */
    --paragraph-color:      #444444;
    --title-color:          #111827;
    --text-muted:           #6B7280;        /* Medium gray */
    
    --light-color:          #fff;
    --dark-color:           black;
    --selection-color:      var(--third-color);
    --font-family:          'Poppins', sans-serif;
  }
}
```

**Visual Palette:**
- Background: Off-white/cream (#F9FAFB)
- Secondary: Muted blue (#5365ce)
- Light Areas: Light cyan (#88d9e6)
- Primary Accent: Medium blue (#2563EB)
- Highlights: Orange (#F97316)
- Text: Dark gray (#111827)

## Theme Usage

### Selecting a Theme

During compilation, specify the theme:

```javascript
// In compilepg.cjs
const theme_name = 'olive-garden-feast'; // or 'navy', 'ignite', 'new-corporate-tech'
```

### In HTML Output

The theme CSS is dynamically loaded:

```html
<link rel="stylesheet" href="assets/css/color-palette/olive-garden-feast.css">
```

### Switching Themes with JavaScript

```javascript
// Change theme at runtime
document.body.dataset.theme = 'dark'; // or 'light'

// Change color palette (requires new stylesheet)
const link = document.querySelector('link[href*="color-palette"]');
link.href = 'assets/css/color-palette/navy.css';
```

## Creating a Custom Theme

### Step 1: Create New Theme File

Create `assets/css/color-palette/my-custom-theme.css`:

```css
/* My Custom Theme */
/*----------------------------------------------------------
Author: Your Name
-----------------------------------------------------------*/

/* =========================
   DARK MODE (DEFAULT)
   ========================= */
:root,[data-theme="dark"] {
  /* Background Colors */
  --main-color: #1a1a2e;              /* Dark background */
  --secondary-color: #16213e;         /* Darker background */
  --light-bg-color: #0f3460;          /* Accent background */
  
  /* Brand Colors */
  --third-color: #e94560;             /* Red/Pink primary */
  --accent-color: #f39c12;            /* Gold accent */
  --secondary-hover-color: #c0392b;   /* Darker red */
  
  /* Text Colors */
  --text-color: #ecf0f1;              /* Light text */
  --title-color: #ecf0f1;
  --paragraph-color: #ecf0f1;
  --text-muted: #95a5a6;              /* Muted text */
  --text-hover-color: #f1c40f;        /* Hover text */
  
  /* Utility */
  --light-color: #ffffff;
  --dark-color: #1a1a2e;
  --selection-color: var(--accent-color);
  --font-family: 'Poppins', sans-serif;
}

/* =========================
   LIGHT MODE
   ========================= */
@media screen and (prefers-color-scheme: light) {
  :root {
    --main-color: #f8f9fa;            /* Light background */
    --secondary-color: #e9ecef;       /* Lighter background */
    --light-bg-color: #e3f2fd;        /* Accent background */
    
    --third-color: #e74c3c;           /* Red primary */
    --accent-color: #e67e22;          /* Orange accent */
    --secondary-hover-color: #c0392b; /* Darker red */
    
    --text-color: #2c3e50;            /* Dark text */
    --title-color: #2c3e50;
    --paragraph-color: #34495e;
    --text-muted: #7f8c8d;            /* Muted text */
    --text-hover-color: #d35400;      /* Hover text */
    
    --light-color: #ffffff;
    --dark-color: #2c3e50;
    --selection-color: var(--third-color);
    --font-family: 'Poppins', sans-serif;
  }
}
```

### Step 2: Update Compilation Config

In `compilepg.cjs`, add your theme to the available themes list.

### Step 3: Test the Theme

```bash
npm run watch
```

Check the generated HTML with your new theme applied.

## Color Theory & Best Practices

### Color Contrast Requirements

- **Body text on background**: Minimum 4.5:1 contrast ratio (WCAG AA)
- **Headings**: Minimum 3:1 contrast ratio
- **Interactive elements**: Clear visual distinction

### Recommended Color Combinations

#### Dark Mode

```
Background:       Very Dark (#000-#1a)
Text:            Light gray (#e-#f)
Primary Accent:  Bright color (high saturation)
Secondary:       Muted or saturated supporting color
```

#### Light Mode

```
Background:      Off-white/cream (#f-#fff)
Text:           Dark gray/black (#0-#2)
Primary Accent: Medium saturation color
Secondary:      Light supporting color
```

## Existing Theme Specifications

### Ignite Theme

**Dark**: Energetic reds and oranges on dark backgrounds
- Primary: #ff6b6b
- Accent: #ffd93d
- Background: #0a0e27

**Light**: Bright vibrant colors
- Primary: #ff4757
- Accent: #ffc107
- Background: #ffffff

### Navy Theme

**Dark**: Professional navy blues
- Primary: #003f87
- Accent: #00a8ff
- Background: #0d1b2a

**Light**: Corporate clean whites
- Primary: #003f87
- Accent: #0066cc
- Background: #f0f4f8

### New Corporate Tech Theme

**Dark**: Modern tech aesthetic
- Primary: #1e40af
- Accent: #3b82f6
- Background: #0f172a

**Light**: Clean tech professional
- Primary: #1e3a8a
- Accent: #3b82f6
- Background: #f8fafc

## CSS Variables Usage in Code

### In Component CSS

```css
/* Color palette variables applied */
.section {
  background-color: var(--main-color);
  color: var(--text-color);
}

.button-primary {
  background-color: var(--accent-color);
  color: var(--light-color);
}

.button-primary:hover {
  background-color: var(--secondary-hover-color);
  color: var(--text-hover-color);
}

.heading {
  color: var(--title-color);
}

.text-muted {
  color: var(--text-muted);
}
```

### Fallback Support

```css
/* With fallback for older browsers */
.element {
  background-color: #020617;
  background-color: var(--main-color);
}
```

## Accessibility Considerations

### Color Blindness

- Don't rely on color alone for information
- Use patterns, icons, or text labels
- Test with accessibility tools

### High Contrast Mode

- Variables automatically adapt
- Light theme provides high contrast by default
- Dark theme offers inverted contrast

### Motion & Animations

- Respect `prefers-reduced-motion`
- Test animations with accessibility checker

## Testing Themes

### Browser DevTools

```javascript
// Test color variable
getComputedStyle(document.body).getPropertyValue('--main-color')

// Switch themes programmatically
document.body.dataset.theme = 'light';
```

### Testing Checklist

- [ ] All text readable (4.5:1 contrast)
- [ ] Links distinguishable
- [ ] Hover states visible
- [ ] Focus states clear
- [ ] Works in dark mode
- [ ] Works in light mode
- [ ] Responsive on mobile
- [ ] Images load correctly with theme

## Exporting & Sharing Themes

### Color Palette Export

Create a JSON file for sharing:

```json
{
  "name": "Olive Garden Feast",
  "dark": {
    "main": "#020617",
    "primary": "#3B82F6",
    "accent": "#F59E0B",
    "text": "#E5E7EB",
    "muted": "#94A3B8"
  },
  "light": {
    "main": "#F9FAFB",
    "primary": "#2563EB",
    "accent": "#F97316",
    "text": "#111827",
    "muted": "#6B7280"
  }
}
```

## Troubleshooting

### Issue: Colors not applying
- Verify CSS file loaded (check network tab)
- Clear browser cache
- Check specificity of CSS rules

### Issue: Theme not switching
- Ensure `data-theme` attribute on body element
- Check media query for light/dark mode
- Test with DevTools: `document.body.dataset.theme = 'dark'`

### Issue: Contrast too low
- Use accessibility checker (WAVE, Axe)
- Increase color saturation
- Adjust brightness values

## Resources

- **Color Tools**:
  - https://coolors.co/ - Color palette generator
  - https://colorhexa.com/ - Color information
  - https://contrastchecker.com/ - WCAG contrast checker

- **Accessibility**:
  - https://www.w3.org/WAI/WCAG21/quickref/ - WCAG guidelines
  - https://webaim.org/articles/contrast/ - Contrast analysis

---

Happy coloring! 🎨

---

**Last Updated:** February 20, 2026  
**Version:** 2.2.2
