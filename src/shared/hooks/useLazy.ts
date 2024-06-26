import { actions, useAppDispatch } from '@/shared';

export const useLazy = () => {
  const dispatch = useAppDispatch();

  const lazy = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        dispatch(actions.setPage());
        observer.unobserve(entry.target);
      }
    });
  };

  const optionsObserver = {
    rootMargin: '0px 0px 150px 0px',
    threshold: 0.1,
  };

  return { lazy, optionsObserver }
}