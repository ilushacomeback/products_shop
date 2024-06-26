export const callback = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver,
  nextPage: () => void
) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      nextPage();
      observer.unobserve(entry.target);
    }
  });
};

export const optionsObserver = {
  rootMargin: '0px 0px 150px 0px',
  threshold: 0.1,
};
