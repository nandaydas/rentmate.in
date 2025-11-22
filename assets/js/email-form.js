/**
 * Email subscription functionality
 * Handles the email notification signup form
 */

/**
 * Email Success Message Logic
 */
function showSuccess() {
  const msg = document.getElementById("success-msg");
  const btn = document.querySelector('button[type="submit"]');
  const input = document.querySelector('input[type="email"]');

  if (!msg || !btn || !input) {
    console.error('Email form elements not found');
    return;
  }

  // Simulate loading/sending
  btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>';
  btn.disabled = true;

  setTimeout(() => {
    msg.classList.remove("hidden");
    btn.innerHTML = "Subscribed!";
    btn.classList.add("bg-green-600", "hover:bg-green-700");
    btn.classList.remove("bg-brand-600", "hover:bg-brand-700");
    input.value = "";
    
    // Re-enable button after 3 seconds
    setTimeout(() => {
      btn.innerHTML = "Notify Me";
      btn.classList.remove("bg-green-600", "hover:bg-green-700");
      btn.classList.add("bg-brand-600", "hover:bg-brand-700");
      btn.disabled = false;
      msg.classList.add("hidden");
    }, 3000);
  }, 1000);
}

/**
 * Validate email format
 */
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Initialize email form
 */
function initializeEmailForm() {
  const form = document.querySelector('form');
  const emailInput = document.querySelector('input[type="email"]');
  
  if (form && emailInput) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const email = emailInput.value.trim();
      if (validateEmail(email)) {
        showSuccess();
      } else {
        alert('Please enter a valid email address.');
      }
    });
  }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeEmailForm);
} else {
  initializeEmailForm();
}
