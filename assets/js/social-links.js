/**
 * Social Media Links Configuration
 * Centralized configuration for all social media links
 */

const socialLinks = {
  facebook: "https://www.facebook.com/rentmate.technologies",
  twitter: "https://x.com/RentMate", 
  instagram: "https://www.instagram.com/rentmate.official/",
  linkedin: "https://www.linkedin.com/company/rentmate-technologies/",
  email: "contact@rentmate.in"
};

/**
 * Function to update social media links in the DOM
 * Call this function after DOM content is loaded
 */
function initializeSocialLinks() {
  // Update social media links if they exist
  const socialLinksElements = {
    facebook: document.querySelector('a[href*="facebook"]'),
    twitter: document.querySelector('a[href*="x.com"], a[href*="twitter"]'),
    instagram: document.querySelector('a[href*="instagram"]'),
    linkedin: document.querySelector('a[href*="linkedin"]')
  };

  // Apply links and add security attributes
  Object.keys(socialLinksElements).forEach(platform => {
    const element = socialLinksElements[platform];
    if (element && socialLinks[platform]) {
      element.href = socialLinks[platform];
      element.target = '_blank';
      element.rel = 'noopener noreferrer';
    }
  });
}

// Auto-initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSocialLinks);
} else {
  initializeSocialLinks();
}

// Export for ES6 modules if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { socialLinks, initializeSocialLinks };
}
