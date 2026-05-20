<script>
  const observadorAnim = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const root = entry.target as HTMLElement;
      const stagger = parseInt(root.dataset.animStagger || '0', 10);
      const items = root.querySelectorAll<HTMLElement>('[data-anim-item]');

      items.forEach((item, i) => {
        item.style.setProperty('--anim-delay', `${(i + 1) * stagger}ms`);
      });

      root.classList.add('activo');
      observadorAnim.unobserve(root);
    });
  }, { threshold: 0.1, rootMargin: '100px' });

  document.querySelectorAll<HTMLElement>('.anim-entrada').forEach(el => {
    observadorAnim.observe(el);
  });
</script>
