 // Smooth scrolling\
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute("href").slice(1);
    const target = document.getElementById(targetID);
    if (target) {
      target.scrollIntoView(\{ behavior: "smooth" });
    }
  });
});

// Form submission\
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message!");
  this.reset();
});
