/**
 * Footer.jsx — Rodapé com crédito.
 */

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Lucas dos Santos Pereira · Osasco, SP ·{' '}
        <a href="https://github.com/luckfipis" target="_blank" rel="noopener noreferrer">
          github.com/luckfipis
        </a>
      </p>
    </footer>
  );
}

export default Footer;
