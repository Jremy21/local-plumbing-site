const revealSections = document.querySelectorAll('.home-proof, .faq-section');

if (revealSections.length > 0) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.22,
    rootMargin: '0px 0px -8% 0px',
  });

  revealSections.forEach((section) => revealObserver.observe(section));
}
