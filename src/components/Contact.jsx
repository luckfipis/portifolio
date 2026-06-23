/**
 * Contact.jsx — Seção de contato com links diretos.
 */

import useReveal from '../hooks/useReveal';
import styles from './Section.module.css';
import contactStyles from './Contact.module.css';

const LINKS = [
  {
    label: 'GitHub',
    value: '@luckfipis',
    href: 'https://github.com/luckfipis',
  },
  {
    label: 'LinkedIn',
    value: 'Lucas Pereira',
    href: 'https://linkedin.com/in/luckfipis',
  },
  {
    label: 'E-mail',
    value: 'lucassampe.ldsp@gmail.com',
    href: 'mailto:lucassampe.ldsp@gmail.com',
  },
];

function Contact() {
  const headerRef = useReveal();

  return (
    <section id="contato" aria-label="Contato">
      <div className={styles.divider} />

      <div className={styles.section}>
        <header ref={headerRef} className={`reveal ${styles.header}`}>
          <span className={styles.index}>Contato</span>
          <h2 className={styles.title}>
            Vamos <em>conversar</em>
          </h2>
          <p className={styles.subtitle}>
            Aberto a oportunidades em desenvolvimento front-end. Respondo rápido.
          </p>
        </header>

        <div className={contactStyles.links}>
          {LINKS.map((link, i) => {
            const isMail = link.href.startsWith('mailto');
            return (
              <a
                key={link.label}
                className={contactStyles.link}
                href={link.href}
                target={isMail ? undefined : '_blank'}
                rel={isMail ? undefined : 'noopener noreferrer'}
                aria-label={`${link.label}: ${link.value}`}
              >
                <span className={contactStyles.linkContent}>
                  <span className={contactStyles.linkLabel}>{link.label}</span>
                  <span className={contactStyles.linkValue}>{link.value}</span>
                </span>
                <span className={contactStyles.arrow} aria-hidden="true">↗</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
