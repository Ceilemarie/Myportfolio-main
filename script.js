document.addEventListener("DOMContentLoaded", function () {
  // Apply hover effect to all shape-hover-wrapper elements
  document.querySelectorAll('.shape-hover-wrapper').forEach(function(wrapper) {
    const shape = wrapper.querySelector('.hover-shape');
    const text = wrapper.querySelector('.hover-text');

    wrapper.addEventListener('mouseenter', () => {
      if (shape) {
        gsap.to(shape, {
          duration: 0.6,
          opacity: 1,
          scale: 1.2,
          rotate: 20,
          ease: "power3.out"
        });
      }
      if (text) {
        gsap.to(text, {
          duration: 0.5,
          backgroundImage: "linear-gradient(135deg,rgb(0, 8, 255),rgb(51, 255, 252))",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent"
        });
      }
    });

    wrapper.addEventListener('mouseleave', () => {
      if (shape) {
        gsap.to(shape, {
          duration: 0.5,
          opacity: 0,
          scale: 1,
          rotate: 0,
          ease: "power2.inOut"
        });
      }
      if (text) {
        gsap.to(text, {
          duration: 0.5,
          color: "black",
          backgroundImage: "none"
        });
      }
    });
  });

  // dark mode toggle 
  const toggle = document.getElementById('toggle-darkmode');
  if (toggle) {
    toggle.addEventListener('change', function() {
      document.body.classList.toggle('darkmode', this.checked);
    });
  }
});