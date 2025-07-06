// script.js
const hoverWrappers = document.querySelectorAll('.text-hover-wrap');

hoverWrappers.forEach(wrapper => {
  const text = wrapper.querySelector('.hover-text');
  const canvas = wrapper.querySelector('.hover-canvas');
  const ctx = canvas.getContext('2d');
  let animationId;

  function resizeCanvas() {
    canvas.width = wrapper.offsetWidth;
    canvas.height = wrapper.offsetHeight;
  }

  function drawGradientShape() {
    let hue = 0;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 10,
        canvas.width / 2, canvas.height / 2, 100
      );
      gradient.addColorStop(0, `hsl(${hue % 360}, 100%, 60%)`);
      gradient.addColorStop(1, `transparent`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 80, 0, Math.PI * 2);
      ctx.fill();

      hue += 2;
      animationId = requestAnimationFrame(draw);
    }

    draw();
  }

  wrapper.addEventListener('mouseenter', () => {
    resizeCanvas();
    canvas.style.display = 'block';
    text.style.opacity = 0;
    drawGradientShape();
  });

  wrapper.addEventListener('mouseleave', () => {
    text.style.opacity = 1;
    canvas.style.display = 'none';
    cancelAnimationFrame(animationId);
  });
});
