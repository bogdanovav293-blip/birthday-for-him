document.addEventListener('DOMContentLoaded', () => {
  // Настройка плавного появления (fade-in)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade').forEach(el => observer.observe(el));

  // Анимация пламени свечи
  const flame = document.getElementById('flame');
  if (flame) {
    setInterval(() => {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      flame.style.transform = `translate(${x}px, ${y}px)`;
    }, 50);
  }

  // Анимация свечения
  const glow = document.getElementById('glow');
  if (glow) {
    setInterval(() => {
      glow.style.opacity = Math.random() * 0.3 + 0.2;
    }, 100);
  }
});
