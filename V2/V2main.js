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
