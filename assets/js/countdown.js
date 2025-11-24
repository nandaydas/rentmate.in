/**
 * Countdown Timer functionality
 * Displays countdown to launch date
 */

/**
 * Countdown Timer Logic
 */
function initializeCountdown() {
  // Set a fixed launch date - March 5, 2025 (100 days from Nov 24, 2024)
  // You can change this date as needed
  const countDownDate = new Date("2026-03-05T00:00:00").getTime();

  const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Get DOM elements
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    // Update display
    if (daysEl) daysEl.innerHTML = days < 10 ? "0" + days : days;
    if (hoursEl) hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;
    if (minutesEl) minutesEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    if (secondsEl) secondsEl.innerHTML = seconds < 10 ? "0" + seconds : seconds;

    // Handle countdown completion
    if (distance < 0) {
      clearInterval(timer);
      const grid = document.querySelector(".grid");
      if (grid) {
        grid.innerHTML = 
          "<div class='col-span-4 text-center text-2xl font-bold text-brand-600'>We are Live!</div>";
      }
    }
  }, 1000);

  return timer;
}

/**
 * Set custom launch date
 */
function setLaunchDate(targetDate) {
  if (targetDate instanceof Date) {
    localStorage.setItem('launchDate', targetDate.toISOString());
    initializeCountdown();
  }
}

/**
 * Get launch date from storage or default
 */
function getLaunchDate() {
  const stored = localStorage.getItem('launchDate');
  if (stored) {
    return new Date(stored);
  }
  
  // Default: 100 days from now
  const defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() + 100);
  return defaultDate;
}

// Auto-initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeCountdown);
} else {
  initializeCountdown();
}

// Export functions for external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initializeCountdown, setLaunchDate, getLaunchDate };
}
