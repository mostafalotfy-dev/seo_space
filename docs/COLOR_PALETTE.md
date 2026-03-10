# Color Palette Documentation

## Overview

SEO Space includes five professionally designed color palettes with full dark/light mode support. Each theme is defined in a separate CSS file with CSS custom properties (variables) for easy customization.

## Theme Files

| Theme | File | Use Case |
|-------|------|----------|
| **Loyal Green** | `assets/css/color-palette/loyal-green.css` | Sophisticated green and teal branding |
| **Navy** | `assets/css/color-palette/navy.css` | Professional, corporate |
| **New Corporate Tech** | `assets/css/color-palette/new-corporate-tech.css` | Modern tech company |
| **Olive Garden Feast** | `assets/css/color-palette/olive-garden-feast.css` | Earthy, organic brand |
| **Cranberries** | `assets/css/color-palette/cranberries.css` | Warm, berry-inspired brand |

## Color Variable System

### Complete Variable Reference

All themes define these CSS custom properties, organized by category:

```css
:root {
  /* ========================
     CORE BACKGROUND COLORS
     ======================== */
  --main-color              /* Primary background for main page content */
  --secondary-color         /* Background for sections, cards, and components */
  --light-bg-color          /* Subtle/soft background for nested elements */
  
  /* ========================
     BRAND & ACCENT COLORS
     ======================== */
  --third-color             /* Primary brand color for links and icons */
  --accent-color            /* Accent for CTAs, highlights, and interactive elements */
  --secondary-hover-color   /* Hover state for secondary interactive elements */
  
  /* ========================
     TEXT COLORS
     ======================== */
  --text-color              /* Primary text color for body content */
  --title-color             /* Color for headings and titles */
  --paragraph-color         /* Color for paragraph text */
  --text-muted              /* Muted text for secondary information */
  --text-hover-color        /* Color on hover state for text elements */
  --text-accent-color       /* Accent text for emphasis */
  --heading-color           /* Color for general headings */
  --history-text-color      /* Color for history/timeline text */
  
  /* ========================
     UTILITY COLORS
     ======================== */
  --light-color             /* Light utility color */
  --dark-color              /* Dark utility color */
  --selection-color         /* Color for text selection highlights */
  --header-bg-color         /* Header background color */
  
  /* ========================
     NAVIGATION & LISTS
     ======================== */
  --navbar-list-color       /* Color for navigation list items */
  --list-color              /* Color for list items */
  --footer-text-color       /* Color for footer text */
  
  /* ========================
     TYPOGRAPHY
     ======================== */
  --font-family             /* Primary font family for the theme */
  --text-muted-placeholder  /* Placeholder text color for form inputs */
  
  /* ========================
     SOCIAL MEDIA COLORS
     ======================== */
  --linkedin-hover-color    /* LinkedIn brand hover color */
  --facebook-hover-color    /* Facebook brand hover color */
  --twitter-hover-color     /* Twitter brand hover color */
  --instagram-hover-color   /* Instagram brand hover color */
  --youtube-hover-color     /* YouTube brand hover color */
  
  /* ========================
     DISABLED STATE COLORS
     ======================== */
  --disabled-color          /* Background for disabled elements */
  --disabled-hover-color    /* Hover state for disabled elements */
  --disabled-text-color     /* Text color for disabled elements */
  
  /* ========================
     GRAY SCALE COLORS
     ======================== */
  --gray-color              /* Standard gray color */
  --gray-hover-color        /* Gray color on hover state */
}
```

## Olive Garden Feast Theme (Example)

### Dark Mode (Default)

```css
:root,[data-theme="dark"] {
  /* --- Core Background Colors --- */
  --main-color: #212121;
  /* Primary background for main page content */
  --secondary-color: #284946;
  /* Background for sections, cards, and components */
  --light-bg-color: #020617;
  /* Subtle/soft background for nested elements */

  /* --- Brand & Accent Colors --- */
  --third-color: #3B82F6;
  /* Primary brand color for links and icons */
  --accent-color: #5365ce;
  /* Accent for CTAs, highlights, and interactive elements */
  --secondary-hover-color: #2563EB;
  /* Hover state for secondary interactive elements */

  /* --- Text Colors --- */
  --text-color: #E5E7EB;
  /* Primary text color for body content */
  --title-color: #E5E7EB;
  /* Color for headings and titles */
  --paragraph-color: #E5E7EB;
  /* Color for paragraph text */
  --text-muted: #94A3B8;
  /* Muted text for secondary information */
  --history-text-color: #94A3B8;
  /* Color for history/timeline text */
  --text-hover-color: #FBBF24;
  /* Color on hover state for text elements */
  --text-accent-color: white;
  /* Accent text for emphasis */
  --heading-color: white;
  /* Color for general headings */

  /* --- Utility Colors --- */
  --light-color: #FFFFFF;
  /* Light utility color */
  --dark-color: #020617;
  /* Dark utility color */
  --selection-color: var(--accent-color);
  /* Color for text selection highlights */

  /* --- Typography --- */
  --font-family: 'Poppins', sans-serif;
  /* Primary font family for the theme */
  --text-muted-placeholder: white;
  /* Placeholder text color for form inputs */

  /* --- Social Media Hover Colors --- */
  --linkedin-hover-color: #0e76a8;
  /* LinkedIn brand hover color */
  --facebook-hover-color: #3b5998;
  /* Facebook brand hover color */
  --twitter-hover-color: #00acee;
  /* Twitter brand hover color */
  --instagram-hover-color: #3f729b;
  /* Instagram brand hover color */
  --youtube-hover-color: #c4302b;
  /* YouTube brand hover color */

  /* --- Disabled State Colors --- */
  --disabled-color: #555555;
  /* Background for disabled elements */
  --disabled-hover-color: #777777;
  /* Hover state for disabled elements */
  --disabled-text-color: #999999;
  /* Text color for disabled elements */

  /* --- Gray Scale Colors --- */
  --gray-color: #cccccc;
  /* Standard gray color */
  --gray-hover-color: #999999;
  /* Gray color on hover state */
  --footer-text-color: white;
  /* Color for footer text */
}
```

**Visual Palette:**
- Background: Dark gray (#212121)
- Secondary: Deep teal (#284946)
- Primary Accent: Blue (#3B82F6)
- Highlights: Muted blue (#5365ce)
- Text: Light gray (#E5E7EB)
- Muted Text: Medium gray (#94A3B8)

### Light Mode

### Light Mode

```css
:root,[data-theme="light"] {
  /* --- Core Background Colors --- */
  --main-color: #F9FAFB;
  /* Primary background for main page content in light mode */
  --secondary-color: #2b7565;
  /* Background for sections, cards, and components in light mode */
  --light-bg-color: #88d9e6;
  /* Subtle/soft background for nested elements in light mode */

  /* --- Brand & Accent Colors --- */
  --third-color: #2563EB;
  /* Primary brand color in light mode */
  --accent-color: #F97316;
  /* Accent color for CTAs and highlights in light mode */
  --secondary-hover-color: #e27777;
  /* Hover state for secondary interactive elements */

  /* --- Text Colors --- */
  --text-color: #111827;
  /* Primary text color in light mode */
  --title-color: var(--text-color);
  /* Title color inherits from primary text */
  --paragraph-color: #444444;
  /* Paragraph text color */
  --text-muted: #3c6357;
  /* Muted text for secondary information */
  --text-hover-color: #dda15e;
  /* Color on hover state for text elements */
  --text-accent-color: white;
  /* Accent text for emphasis */
  --heading-color: white;
  /* Color for general headings */
  --history-text-color: #cccccc;
  /* Color for history/timeline text */

  /* --- Utility Colors --- */
  --light-color: #fff;
  /* Light utility color */
  --dark-color: black;
  /* Dark utility color */
  --selection-color: var(--third-color);
  /* Color for text selection highlights */

  /* --- Typography --- */
  --font-family: 'Poppins', sans-serif;
  /* Primary font family (consistent across modes) */
  --text-muted-placeholder: var(--light-color);
  /* Placeholder text color for form inputs */

  /* --- Social Media Hover Colors --- */
  --linkedin-hover-color: #0e76a8;
  /* LinkedIn brand hover color */
  --facebook-hover-color: #3b5998;
  /* Facebook brand hover color */
  --twitter-hover-color: #00acee;
  /* Twitter brand hover color */
  --instagram-hover-color: #3f729b;
  /* Instagram brand hover color */
  --youtube-hover-color: #c4302b;
  /* YouTube brand hover color */

  /* --- Disabled State Colors --- */
  --disabled-color: #555555;
  /* Background for disabled elements */
  --disabled-hover-color: #777777;
  /* Hover state for disabled elements */
  --disabled-text-color: #999999;
  /* Text color for disabled elements */

  /* --- Gray Scale Colors --- */
  --gray-color: #cccccc;
  /* Standard gray color */
  --gray-hover-color: #999999;
  /* Gray color on hover state */
  --footer-text-color: black;
  /* Color for footer text */
}
```

**Visual Palette (Light Mode):**
- Background: Off-white (#F9FAFB)
- Secondary: Teal green (#2b7565)
- Light Areas: Light cyan (#88d9e6)
- Primary Accent: Blue (#2563EB)
- Highlights: Orange (#F97316)
- Text: Dark gray/black (#111827)
- Muted Text: Muted green (#3c6357)

## Theme Usage

### Selecting a Theme

During compilation, specify the theme in `.env`:

```env
THEME=olive-garden-feast  # or 'navy', 'ignite', 'new-corporate-tech'
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

### Step 2: Update Environment

Edit `.env` to use your new theme:

```env
THEME=my-custom-theme
```

### Step 3: Test the Theme

```bash
npm run watch:gulp
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

### Loyal Green Theme

**Dark**: Sophisticated green and teal professional branding
- Main Background: #212121
- Secondary: #04211D
- Primary Brand: #272932
- Accent: #c92a2a
- Text: #ffffff
- Accent Hover: #dda15e

**Light**: Clean professional green palette
- Main Background: #ffffff
- Secondary: #217054
- Primary Brand: #2563EB
- Accent: #53957f
- Text: varies
- Title Color: #212121

### Navy Theme

**Dark**: Professional blue with golden accents
- Main Background: #212121
- Secondary: #345281
- Primary Brand: #3B82F6
- Accent: #F59E0B (Golden)
- Light Background: #88d9e6
- Text: #F9FAFB

**Light**: Corporate clean whites with blue accents
- Main Background: #F9FAFB
- Secondary: #345281
- Primary Brand: #2563EB
- Accent: #813434
- Text: #212121
- Paragraph: #ffffff

### New Corporate Tech Theme

**Dark**: Modern tech aesthetic with blue and gold
- Main Background: #212121
- Secondary: #345281
- Primary Brand: #3B82F6
- Accent: #F59E0B (Golden)
- Text: white
- Heading: white

**Light**: Clean tech professional design
- Main Background: #ffffff
- Secondary: #345281
- Primary Brand: #2563EB
- Accent: #F97316
- Text: #111827
- Muted Text: #6B7280

### Cranberries Theme

**Dark**: Berry-inspired warm color scheme with deep reds
- Main Background: #212121
- Secondary: #A60A3D (Deep berry red)
- Primary Brand: #272932
- Accent: #A60A3D
- Text: #f3d0d0 (Warm tone)
- Title: #943232
- Hover Color: #dda15e

**Light**: Warm berry and pink tones
- Main Background: #F9FAFB
- Secondary: #A60A3D
- Primary Brand: #2563EB
- Accent: #A60A3D
- Text: #f56767 (Warm red tone)
- Title: #212121
- Paragraph: #470303

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

**Last Updated:** March 10, 2026
**Version:** 2.3.0
**Total Variables:** 40+ CSS custom properties
