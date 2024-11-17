$("#owl_courses").owlCarousel({
  loop: true,
  margin: 40,
  responsiveClass: true,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    769: {
      items: 3,
    },
  },
});
$("#testimonials").owlCarousel({
  center: true,
  loop: true,
  nav: true,
  margin: 40,
  responsiveClass: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
  navText: [
    '<span class="fas fa-arrow-left"></span>',
    '<span class="fas fa-arrow-right"></span>',
  ],
});

//Counter for Stats//
document.addEventListener("DOMContentLoaded", () => {
  const statsSection = document.getElementById("stats-section");
  const stats = document.querySelectorAll("#stats-section h3");

  const animateCounter = (el) => {
    const target = +el.getAttribute("data-target");
    let current = 0;
    const increment = Math.ceil(target / 100); // Adjust speed of counting

    const updateCounter = () => {
      current += increment;
      if (current > target) {
        el.textContent = target.toLocaleString(); // Final value
      } else {
        el.textContent = current.toLocaleString(); // Update intermediate value
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          stats.forEach((stat) => {
            stat.textContent = "0"; // Reset counter to 0
            animateCounter(stat);
          });
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the section is visible
  );

  observer.observe(statsSection);
});
