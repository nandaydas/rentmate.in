/**
 * Countdown Timer functionality
 * Displays countdown to launch date
 */

/**
 * Countdown Timer Logic
 */
function initializeCountdown() {
  // Set the date we're counting down to (100 days from now)
  const countDownDate = new Date();
  countDownDate.setDate(countDownDate.getDate() + 100);

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
