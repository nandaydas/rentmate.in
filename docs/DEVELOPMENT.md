# Development Guide

## Quick Start

1. **Local Development:**

   ```bash
   # Clone and navigate to project
   cd rentmate.in

   # Start local server
   npm run start
   # or
   python -m http.server 8000
   ```

2. **File Structure Guidelines:**

   - Keep HTML semantic and accessible
   - Use Tailwind CSS classes for styling
   - Store custom CSS in `assets/css/custom.css`
   - Organize JavaScript by functionality in `assets/js/`

3. **Best Practices:**
   - Test on multiple devices/browsers
   - Optimize images before adding to `assets/images/`
   - Keep JavaScript modular and well-documented
   - Use semantic HTML elements

## Customization

### Changing Colors

Update the brand colors in the Tailwind config within `index.html`:

```javascript
colors: {
  brand: {
    500: "#f97316", // Main Orange
    // ... other shades
  }
}
```

### Adding New Features

1. Create component files in `src/components/`
2. Add utility functions to `src/utils/`
3. Update main JavaScript files in `assets/js/`

### Social Media Links

Update URLs in `assets/js/social-links.js`

## Deployment

The site is configured for GitHub Pages automatic deployment from the main branch.
