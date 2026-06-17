/**
 * ProjectCard.jsx — Card reutilizável para exibir um projeto.
 * Usa useReveal para animar a entrada quando visível na viewport.
 * Microinteração: tilt 3D sutil que segue a posição do mouse,
 * dando profundidade ao card sem exagerar.
 *
 * Props:
 *   project { id, title, description, tags, repo, demo, highlight }
 *   index — usado para escalonar o delay da animação
 */

import { useRef } from 'react';
import useReveal from '../hooks/useReveal';
import styles from './ProjectCard.module.css';

function ProjectCard({ project, index = 0 }) {
  const { title, description, tags, repo, demo, highlight } = project;
  const revealRef = useReveal();
  const cardRef = useRef(null);

  // Tilt 3D: calcula a posição do mouse relativa ao centro do card
  // e aplica uma rotação proporcional — efeito sutil, max ~6 graus.
  function handleMouseMove(e) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
  }

  // Combina as duas refs (reveal + tilt) — useReveal retorna um ref object,
  // então atribuímos o mesmo nó DOM a ambas as referências.
  function setRefs(el) {
    cardRef.current = el;
    revealRef.current = el;
  }

  return (
    <article
      ref={setRefs}
      className={`reveal ${styles.card}`}
      style={{ transitionDelay: `${index * 80}ms` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {highlight && (
        <span className={styles.highlight} aria-label={`Destaque: ${highlight}`}>
          {highlight}
        </span>
      )}

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>

      <ul className={styles.tags} aria-label="Tecnologias">
        {tags.map(tag => (
          <li key={tag} className={styles.tag}>{tag}</li>
        ))}
      </ul>

      <div className={styles.links}>
        {repo && (
          <a
            className={styles.link}
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Repositório do projeto ${title}`}
          >
            Repositório ↗
          </a>
        )}
        {demo && (
          <a
            className={styles.link}
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Demo do projeto ${title}`}
          >
            Demo ↗
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
