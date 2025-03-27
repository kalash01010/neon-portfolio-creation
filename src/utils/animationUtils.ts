
export const setupScrollAnimations = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-up');
        // Optional: Stop observing after animating
        // animateOnScroll.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach((element) => {
    animateOnScroll.observe(element);
  });

  return () => {
    elements.forEach((element) => {
      animateOnScroll.unobserve(element);
    });
  };
};

export const getAnimationDelay = (index: number, base: number = 0.1): string => {
  return `${index * base}s`;
};
