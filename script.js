document.addEventListener("DOMContentLoaded", function() {
  // Toggle mobile navigation
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  navToggle.addEventListener("click", function() {
    const isVisible = nav.style.display === "block";
    if (isVisible) {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  });

  // Simple form validation for Contact page (if exists)
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const nameInput = document.querySelector("#name");
      const emailInput = document.querySelector("#email");
      const messageInput = document.querySelector("#message");
      let valid = true;
      let errors = [];

      if (nameInput.value.trim() === "") {
        valid = false;
        errors.push("Name is required");
      }
      if (emailInput.value.trim() === "") {
        valid = false;
        errors.push("Email is required");
      } else {
        // simple email format check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
          valid = false;
          errors.push("Email is invalid");
        }
      }
      if (messageInput.value.trim() === "") {
        valid = false;
        errors.push("Message is required");
      }

      // Show errors or success
      const errorDiv = document.querySelector("#form-errors");
      if (!valid) {
        errorDiv.innerHTML = errors.map(e => `<p>${e}</p>`).join("");
        errorDiv.style.color = "red";
      } else {
        errorDiv.innerHTML = "<p>Message sent successfully!</p>";
        errorDiv.style.color = "green";
        // Optionally: clear form
        contactForm.reset();
      }
    });
  }
});
