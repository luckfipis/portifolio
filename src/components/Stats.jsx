/**
 * Stats.jsx — Seção de números/destaques.
 * Contadores que animam de 0 até o valor final quando entram na viewport.
 */

import { useEffect, useRef, useState } from 'react';
import styles from './Stats.module.css';

const STATS = [
  { value: 12, suffix: '+', label: 'Projetos construídos' },
  { value: 98, suffix: '', label: 'Score Lighthouse (melhor caso)' },
  { value: 6, suffix: '', label: 'Tecnologias no dia a dia' },
  { value: 100, suffix: '%', label: 'Dedicação à próxima vaga' },
];

function Counter({ value, suffix, label, index }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const duration = 1200;
          const startTime = performance.now();

          function tick(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease-out para desacelerar no final
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, started]);

  return (
    <div
      ref={ref}
      className={`reveal ${styles.stat}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <span className={styles.number}>
        {display}{suffix}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

function Stats() {
  return (
    <section aria-label="Números">
      <div className={styles.section}>
        {STATS.map((stat, i) => (
          <Counter key={stat.label} {...stat} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Stats;
