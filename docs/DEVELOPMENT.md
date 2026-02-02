# Development Guide

## Development Environment Setup

### Prerequisites

- Node.js v14+ (https://nodejs.org/)
- npm v6+ (comes with Node.js)
- Code Editor (VS Code recommended)
- Git (optional, for version control)

### Initial Setup

```bash
# 1. Navigate to project
cd d:\projects\seo_nexus

# 2. Install dependencies
npm install

# 3. Start development
npm run watch

# 4. Open in browser
# Navigate to the generated output-en-theme-navy-dark.html
```

## Development Workflow

### File Structure for Development

```
Working Files (edit these):
├── index.pug              ← Main template - EDIT THIS
├── locals/
│   ├── en.json            ← English translations - EDIT THIS
│   └── ar.json            ← Arabic translations - EDIT THIS
├── assets/
│   ├── css/
│   │   ├── main.css       ← Global styles - EDIT THIS
│   │   ├── color-palette/ ← Theme colors - EDIT THESE
│   │   └── *.css          ← Other styles
│   └── js/
│       ├── main-custom.js ← Application logic - EDIT THIS
│       └── *.js           ← Other scripts
└── .env                   ← Configuration - EDIT THIS

Generated Files (auto-generated):
├── output-*.html          ← Don't edit directly
└── (regenerated on save)
```

### Typical Development Cycle

```
1. Edit source file (index.pug, main.css, etc.)
                ↓
2. nodemon detects change
                ↓
3. compilepg.cjs runs automatically
                ↓
4. HTML files regenerated
                ↓
5. Browser refreshes (use Live Server extension)
                ↓
6. See changes immediately
```

## Editing the Template (index.pug)

### Pug Syntax Basics

```pug
// Comments (in code, not HTML output)

// HTML elements (indentation matters!)
div.class-name
  p This is a paragraph

// Attributes
a(href="/" class="link" target="_blank") Link

// Text interpolation
h1 Welcome #{userName}

// Variables and conditionals
if isLoggedIn
  p Hello member!
else
  p Please log in

// Loops
each item in items
  li= item

// HTML shorthand
#id-name
.class-name
p.text-center Text here

// Inline vs block
p This is inline text
| This is literal text
script
  console.log('JavaScript here');
```

### Adding New Sections

1. **Create new section in index.pug**:

```pug
// ***** Your New Section Start *****
#new-section.new-section-class.section
  .container
    .row
      .col-lg-12
        h2 #{t('newsection.heading')}
        p #{t('newsection.description')}
// ***** Your New Section End *****
```

2. **Add translations to locals/en.json**:

```json
{
  "newsection": {
    "heading": "Your Heading",
    "description": "Your description text"
  }
}
```

3. **Add to locals/ar.json** (Arabic version):

```json
{
  "newsection": {
    "heading": "عنوانك",
    "description": "نص وصفك"
  }
}
```

4. **Add styles to assets/css/main.css**:

```css
.new-section-class {
  background-color: var(--secondary-color);
  padding: 60px 0;
}

.new-section-class h2 {
  color: var(--title-color);
  margin-bottom: 20px;
}
```

5. **Save and rebuild**:

```bash
npm run watch
# Files auto-recompile
```

### Modifying Existing Sections

Example: Change banner text

1. **Find the section** in index.pug
2. **Change the translation key** reference:

```pug
// Before
h2
  | #{t('banner.we_make')}

// After
h2
  | #{t('banner.welcome')}
```

3. **Or change the translation** in locals/en.json:

```json
{
  "banner": {
    "we_make": "New text here"
  }
}
```

## Editing Styles

### CSS Architecture

```
Bootstrap (CDN)
      ↓
Theme Colors (color-palette/*.css)
      ↓
Global Styles (main.css)
      ↓
Component Styles (in main.css)
      ↓
Responsive (media queries)
      ↓
Animation (animated.css)
```

### Global Styles (main.css)

```css
/* Use CSS variables from theme */
body {
  background-color: var(--main-color);
  color: var(--text-color);
  font-family: var(--font-family);
}

/* Responsive styles */
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}

/* Component styles */
.button-primary {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  color: var(--light-color);
}

.button-primary:hover {
  background-color: var(--secondary-hover-color);
}
```

### Color Palette Customization

Edit `assets/css/color-palette/navy.css`:

```css
:root {
  --main-color: #003f87;        /* Change primary color */
  --accent-color: #00d4ff;      /* Change accent color */
  --text-color: #e5e7eb;        /* Change text color */
  /* ... etc */
}
```

### Creating Component Styles

```css
/* Card component */
.service-card {
  background: var(--secondary-color);
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease;
}

.service-card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

.service-card-icon {
  font-size: 32px;
  color: var(--accent-color);
  margin-bottom: 15px;
}

.service-card-title {
  color: var(--title-color);
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.service-card-description {
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.6;
}
```

## Editing JavaScript

### Main Application File (main-custom.js)

```javascript
// Document ready
$(document).ready(function() {
  // Initialize components
  initializeForms();
  initializeEvents();
});

// Form handling
function initializeForms() {
  $('#contact').on('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
      name: $('#name').val(),
      email: $('#email').val(),
      message: $('#message').val()
    };
    
    // Validate
    if (!validateForm(formData)) {
      console.log('Form invalid');
      return;
    }
    
    // Submit
    $.ajax({
      url: '/api/contact',
      method: 'POST',
      data: formData,
      success: function(response) {
        console.log('Success:', response);
        alert('Message sent!');
        $(this).reset();
      },
      error: function(error) {
        console.log('Error:', error);
        alert('Error sending message');
      }
    });
  });
}

// Event handling
function initializeEvents() {
  // Smooth scrolling
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
}

// Form validation
function validateForm(data) {
  if (!data.name || data.name.trim() === '') return false;
  if (!data.email || !isValidEmail(data.email)) return false;
  if (!data.message || data.message.trim() === '') return false;
  return true;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

### Adding Event Listeners

```javascript
// Click events
$('.menu-trigger').on('click', function() {
  $('.nav').toggleClass('active');
});

// Scroll events
$(window).on('scroll', function() {
  if ($(window).scrollTop() > 100) {
    $('.header-area').addClass('scrolled');
  } else {
    $('.header-area').removeClass('scrolled');
  }
});

// Form submission
$('#contact').on('submit', function(e) {
  e.preventDefault();
  // Handle submission
});

// DOM ready
$(document).ready(function() {
  console.log('Page loaded');
});
```

## Working with Localization

### Translation Structure

```json
{
  "section": {
    "key": "English text",
    "nested": {
      "key": "More text"
    }
  }
}
```

### Adding New Translations

1. **Add to en.json**:

```json
{
  "features": {
    "title": "Our Features",
    "item1": "Feature One",
    "item2": "Feature Two"
  }
}
```

2. **Add to ar.json** (Arabic):

```json
{
  "features": {
    "title": "ميزاتنا",
    "item1": "الميزة الأولى",
    "item2": "الميزة الثانية"
  }
}
```

3. **Use in template**:

```pug
h2 #{t('features.title')}
p #{t('features.item1')}
```

### Translation Keys Best Practices

```
// ✓ Good: descriptive hierarchy
menu.primary.home
header.navigation.logo
button.cta.contact

// ✗ Avoid: too generic
text1, text2, text3
content.main
```

### Handling Dynamic Text

```javascript
// In JavaScript
const greeting = t('hello', { name: 'John' }); // "Hello, John!"

// In Pug with variables
h1 #{t('greeting.welcome', { user: userName })}
```

## Common Development Tasks

### Task: Change Header Logo Text

1. Edit `locals/en.json`:
```json
{
  "header": {
    "logo": {
      "part1": "Your",
      "part2": "Brand"
    }
  }
}
```

2. Edit `locals/ar.json`:
```json
{
  "header": {
    "logo": {
      "part1": "علامتك",
      "part2": "التجارية"
    }
  }
}
```

### Task: Add New Navigation Menu Item

1. Edit `index.pug`:
```pug
li.scroll-to-section
  a(href="#portfolio") #{t('menu.portfolio')}
li.scroll-to-section
  a(href="#testimonials") #{t('menu.testimonials')}  // NEW
```

2. Add to `locals/en.json`:
```json
{
  "menu": {
    "testimonials": "Testimonials"
  }
}
```

3. Add to `locals/ar.json`:
```json
{
  "menu": {
    "testimonials": "شهادات"
  }
}
```

### Task: Change Color Theme

1. Edit `.env`:
```env
THEME=ignite
```

Or in `compilepg.cjs`:
```javascript
const theme = 'ignite';
```

2. Recompile:
```bash
npm run watch
```

### Task: Add Animation to Element

1. Edit `index.pug`:
```pug
// Before
.section
  h2 Title

// After
.section.wow.slideInUp(data-wow-duration="1s" data-wow-delay="0.3s")
  h2 Title
```

### Task: Modify Form Fields

1. Edit `index.pug`:
```pug
form#contact
  .row
    .col-lg-6
      input(type="text" placeholder="Name")
    .col-lg-6
      input(type="email" placeholder="Email")
    .col-lg-12
      textarea(placeholder="Message")
    .col-lg-12
      button(type="submit") Send
```

2. Add styles in `main.css`:
```css
form input, form textarea {
  background-color: var(--light-bg-color);
  border: 1px solid var(--text-muted);
  color: var(--text-color);
  padding: 12px;
  border-radius: 4px;
}
```

## Debugging

### Browser DevTools

**Inspect HTML:**
- Right-click element → Inspect
- Check structure in Elements panel

**Check CSS:**
- Select element
- View Styles panel
- Check applied styles and overrides

**JavaScript Debugging:**
- Open Console tab
- Check for errors
- Set breakpoints
- Log variables: `console.log(variable)`

### Console Debugging

```javascript
// Log values
console.log('Variable:', myVar);

// Check element
console.log($('#contact'));

// Check computed style
console.log(
  getComputedStyle(document.body)
    .getPropertyValue('--main-color')
);

// Check localStorage
console.log(localStorage.getItem('language'));
```

### Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Styles not applying | Clear cache, restart watch, check CSS file |
| Translations not showing | Check key spelling, verify JSON valid |
| Animations not working | Ensure animate.css loaded, check WOW.js |
| Form not submitting | Check endpoint URL, verify AJAX setup |
| Mobile menu not working | Check Bootstrap JS loaded, check click event |

## Performance Optimization

### Optimization Tips

```javascript
// ✓ Good: Cache jQuery selectors
const $form = $('#contact');
$form.on('submit', function() {
  // Use $form throughout
});

// ✗ Avoid: Repeated DOM queries
$('#form').on('submit', function() {
  $('#name').val(); // Queries DOM each time
});
```

### CSS Optimization

```css
/* ✓ Good: Use CSS variables */
button {
  background-color: var(--accent-color);
}

/* ✗ Avoid: Hardcoded colors everywhere */
button {
  background-color: #F59E0B;
}
```

## Testing During Development

### Manual Testing Checklist

- [ ] Desktop browser rendering
- [ ] Tablet responsive (768px)
- [ ] Mobile responsive (320px)
- [ ] Dark mode appearance
- [ ] Light mode appearance
- [ ] English language display
- [ ] Arabic language (RTL)
- [ ] Form submission
- [ ] Link navigation
- [ ] Animation smoothness
- [ ] Cross-browser compatibility

### Device Testing

```bash
# Local network testing
ipconfig getifaddr en0  # Get local IP (macOS)
# Then access: http://YOUR-IP:8080

# Or use Live Server for live reload
npm install -g live-server
live-server
```

## Code Quality

### ESLint

```bash
# Check code
npx eslint assets/css/main.css ./assets/js/main-custom.js assets/css/color-palette/*.css

# Auto-fix issues
npx eslint assets/css/main.css ./assets/js/main-custom.js assets/css/color-palette/*.css --fix

# Check specific file
npx eslint assets/js/main-custom.js
```

### Code Style Best Practices

```javascript
// JavaScript
// ✓ Use const/let instead of var
const config = {};
let count = 0;

// ✓ Use meaningful names
const userEmail = 'user@example.com';

// ✓ Use arrow functions
const greeting = () => 'Hello';

// ✓ Use template literals
const message = `Hello, ${name}`;
```

## Version Control (Git)

### Basic Git Workflow

```bash
# Initialize repo (first time)
git init

# Check status
git status

# Stage changes
git add .

# Commit
git commit -m "Description of changes"

# View history
git log --oneline
```

### Git Ignore

Create `.gitignore`:

```
node_modules/
.env
output-*.html
dist/
.DS_Store
```

## Useful VS Code Extensions

1. **Pug** - Syntax highlighting
2. **ESLint** - Code quality
3. **Prettier** - Code formatter
4. **Live Server** - Local development server
5. **Thunder Client** - API testing
6. **Color Picker** - Color selection
7. **Peacock** - Workspace colors

## Resources

- **Pug Documentation**: https://pugjs.org/api/getting-started.html
- **Bootstrap Documentation**: https://getbootstrap.com/docs/5.3/
- **i18next Docs**: https://www.i18next.com/
- **jQuery Documentation**: https://api.jquery.com/
- **CSS Variables**: https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- **MDN Web Docs**: https://developer.mozilla.org/

---

Happy coding! 🚀
