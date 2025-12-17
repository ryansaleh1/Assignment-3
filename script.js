// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const nav = document.getElementById("siteNav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  // Close menu after tapping a link (mobile)
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Front-end-only contact form validation
const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

if (form && feedback) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!email || !message) {
      feedback.textContent = "Please fill out both fields before sending.";
      return;
    }

    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!okEmail) {
      feedback.textContent = "Please enter a valid email address.";
      return;
    }

    feedback.textContent = "Thanks! Your message is ready (this demo doesn’t send emails).";
    form.reset();
  });
}
