/**
 * Skills.jsx — Seção de habilidades com barras de progresso.
 * Cada skill tem um nível (0-100) que anima ao entrar na viewport.
 */

import { useEffect, useRef, useState } from 'react';
import styles from './Section.module.css';
import skillStyles from './Skills.module.css';

const SKILLS = [
  { name: 'HTML & CSS', level: 90 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Next.js', level: 65 },
  { name: 'Git & GitHub', level: 80 },
  { name: 'TypeScript', level: 55 },
  { name: 'CI/CD', level: 60 },
  { name: 'Node.js', level: 40 },
];

function SkillBar({ name, level, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={skillStyles.skillRow}>
      <div className={skillStyles.skillHead}>
        <span className={skillStyles.skillName}>{name}</span>
        <span className={skillStyles.skillLevel}>{visible ? level : 0}%</span>
      </div>
      <div className={skillStyles.track}>
        <div
          className={skillStyles.fill}
          style={{
            width: visible ? `${level}%` : '0%',
            transitionDelay: `${index * 60}ms`,
          }}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" aria-label="Habilidades">
      <div className={styles.divider} />

      <div className={styles.section}>
        <header className={styles.header}>
          <span className={styles.index}>Skills</span>
          <h2 className={styles.title}>
            Tecnologias que <em>domino</em>
          </h2>
          <p className={styles.subtitle}>
            Níveis aproximados, refletindo a prática real em projetos —
            não certificações.
          </p>
        </header>

        <div className={skillStyles.grid}>
          {SKILLS.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
