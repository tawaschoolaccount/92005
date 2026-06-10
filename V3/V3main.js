document.addEventListener("DOMContentLoaded", () => {

  const fadeSections = document.querySelectorAll(
    '.fade-section, .fade-left, .fade-right, .fade-up, .fade-down, .fade-in'
  );
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  fadeSections.forEach(section => appearOnScroll.observe(section));

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeId = entry.target.getAttribute("id");
      const activeLink = document.querySelector(`.nav-link[href="#${activeId}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
}, { threshold: 0.6 });

sections.forEach((section) => observer.observe(section));
}); 
