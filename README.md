# Rentmate.in - Coming Soon Page

A modern, responsive coming soon page for Rentmate - the decentralized rental platform.

## 🚀 Project Structure

```
rentmate.in/
├── assets/
│   ├── css/
│   │   └── custom.css           # Custom styles
│   ├── js/
│   │   ├── social-links.js      # Social media links configuration
│   │   ├── email-form.js        # Email subscription functionality
│   │   └── countdown.js         # Countdown timer logic
│   ├── images/                  # Image assets (logos, icons, etc.)
│   └── fonts/                   # Custom font files
├── docs/                        # Documentation
├── src/
│   ├── components/              # Reusable components
│   └── utils/                   # Utility functions
├── config/                      # Configuration files
├── index.html                   # Main landing page
├── CNAME                        # GitHub Pages domain configuration
└── README.md                    # This file
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Inter font family

## 🎨 Features

- **Responsive Design** - Works on all devices
- **Countdown Timer** - Dynamic countdown to launch
- **Email Subscription** - Collect interested users
- **Social Media Integration** - Links to social platforms
- **Animated Elements** - Smooth animations and transitions
- **Modern UI/UX** - Clean, professional design

## 🔧 Setup & Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nandaydas/rentmate.in.git
   cd rentmate.in
   ```

2. **Open in browser:**

   - Simply open `index.html` in your browser
   - Or use a local server for development

3. **For live server (recommended):**

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🎯 Configuration

### Social Media Links

Edit `assets/js/social-links.js` to update social media URLs:

```javascript
const socialLinks = {
  facebook: "https://www.facebook.com/rentmate.technologies",
  twitter: "https://x.com/RentMate",
  instagram: "https://www.instagram.com/rentmate.official/",
  linkedin: "https://www.linkedin.com/company/rentmate-technologies/",
};
```

### Countdown Timer

Modify the countdown target date in `assets/js/countdown.js`

### Brand Colors

Update brand colors in `tailwind.config` within `index.html`

## 🚀 Deployment

This site is configured for GitHub Pages:

1. Push to main branch
2. GitHub Pages will automatically deploy
3. Custom domain configured via CNAME file

## 📞 Contact

- **Email:** contact@rentmate.in
- **Founder:** Nanday Das
- **Company:** RentMate Technologies Private Limited

## 📄 License

© 2025 RentMate Technologies Private Limited. All rights reserved.
