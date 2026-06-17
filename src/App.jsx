/**
 * App.jsx — Componente raiz.
 * Envolve tudo no ThemeProvider e monta o cursor customizado
 * no nível mais alto para cobrir a página inteira.
 */

import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import styles from './App.module.css';

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <div className={styles.app}>
        <Nav />
        <main>
          <Hero />
          <Stats />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
