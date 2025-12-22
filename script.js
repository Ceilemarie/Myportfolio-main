document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.shape-hover-wrapper').forEach(function(wrapper) {
      const shapes = wrapper.querySelectorAll('.hover-shape');
      const text = wrapper.querySelector('.hover-portfolio');
      const hoverName = wrapper.querySelector('.hover-name');
      const hoverContact = wrapper.querySelector('.hover-info');
      

      wrapper.addEventListener('mouseenter', () => {
        shapes.forEach((shape) => {
  if (shape.classList.contains('first-shape')) {
    gsap.to(shape, {
      duration: 0.6,
      opacity: 1,
      scale: 1.2,
      rotate: 20,
      ease: "power3.out"
    });
  } else if (shape.classList.contains('second-shape')) {
    gsap.to(shape, {
      duration: 0.6,
      opacity: 0.6,
      scale: 1.5,
      rotate: -10,
      ease: "power3.out"
    });
  }
  if (shape.classList.contains('third-shape')) {
    gsap.to(shape, {
      duration: 0.6,
      opacity: 0.6,
      scale: 1.5,
      rotate: -10,
      ease: "power3.out"
    });
  }
});

        if (text) {
          gsap.to(text, {
            duration: 0.5,
            backgroundImage: "linear-gradient(135deg,rgb(0, 8, 255),rgb(51, 255, 252))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent"
          });
        }
        if (hoverName) {
          gsap.to(hoverName, {
            duration: 0.5,
            backgroundImage: "linear-gradient(135deg,rgba(234, 0, 255, 1),rgba(51, 255, 211, 1))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent"
          });
        }
        if (hoverContact) {
          gsap.to(hoverContact, {
            duration: 0.5,
            backgroundImage: "linear-gradient(135deg,rgba(207, 147, 147, 1),rgba(255, 153, 0, 1))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent"
          });
        }
      });


      wrapper.addEventListener('mouseleave', () => {
        shapes.forEach(shape => {
          gsap.to(shape, {
            duration: 0.5,
            opacity: 0,
            scale: 1,
            rotate: 0,
            ease: "power2.inOut"
          });
        });

        if (text) {
          gsap.to(text, {
            duration: 0.5,
            color: "black"
          });
        }
        if (hoverName) {
          gsap.to(hoverName, {
            duration: 0.5,
            color: "black"
          });
        }
        if (hoverContact) {
          gsap.to(hoverContact, {
            duration: 0.5,
            color: "black"
          });
        }
      });
    });
  });

  
