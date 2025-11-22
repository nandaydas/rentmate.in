/**
 * Utility functions for common tasks
 */

/**
 * Debounce function to limit function calls
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Format date to readable string
 */
function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Simple analytics tracking (placeholder)
 */
function trackEvent(eventName, properties = {}) {
  // Placeholder for analytics tracking
  console.log('Event tracked:', eventName, properties);
  
  // Example: Google Analytics 4
  // gtag('event', eventName, properties);
}

// Export for ES6 modules if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    debounce,
    formatDate,
    isInViewport,
    trackEvent
  };
}
