export function initScrollAnimations(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target as HTMLElement;
        el.classList.add('visible');

        // Stagger direct [data-stagger] children
        el.querySelectorAll<HTMLElement>('[data-stagger]').forEach((child, i) => {
          child.style.transitionDelay = `${i * 90}ms`;
          child.classList.add('visible');
        });

        observer.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('[data-anim]').forEach((el) => observer.observe(el));
}
