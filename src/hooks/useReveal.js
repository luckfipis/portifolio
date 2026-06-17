/**
 * useReveal.js
 * Hook que retorna uma ref para anexar a um elemento.
 * Quando o elemento entra na viewport, adiciona a classe 'is-visible'
 * (definida em index.css) que dispara a transição de fade + slide-up.
 */

import { useEffect, useRef } from 'react';

function useReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      el?.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export default useReveal;
