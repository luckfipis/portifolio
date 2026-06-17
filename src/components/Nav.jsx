/**
 * Nav.jsx — Navegação fixa com blur de fundo + toggle de tema.
 */

import ThemeToggle from './ThemeToggle';
import styles from './Nav.module.css';

const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contato', href: '#contato' },
];

function Nav() {
  return (
    <nav className={styles.nav} aria-label="Navegação principal">
      <span className={styles.logo}>Lucas Pereira</span>

      <div className={styles.right}>
        <ul className={styles.links}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Nav;
