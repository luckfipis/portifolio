/**
 * Projects.jsx — Seção de projetos.
 */

import PROJECTS from '../data/projects';
import ProjectCard from './ProjectCard';
import useReveal from '../hooks/useReveal';
import styles from './Section.module.css';

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
  gap: '18px',
};

function Projects() {
  const headerRef = useReveal();

  return (
    <section id="projetos" aria-label="Projetos">
      <div className={styles.section}>
        <header ref={headerRef} className={`reveal ${styles.header}`}>
          <span className={styles.index}>Projetos</span>
          <h2 className={styles.title}>
            O que já <em>construí</em>
          </h2>
          <p className={styles.subtitle}>
            Cada um explora uma parte diferente do desenvolvimento web,
            de pipelines automatizados até arquiteturas distribuídas.
          </p>
        </header>

        <div style={gridStyle}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
