/**
 * Hero.jsx — Seção inicial.
 * Retrato com moldura orgânica + parallax sutil no scroll +
 * nome em Fraunces grande, cargo com efeito typewriter.
 * A formação (FAM + EBAC) é citada aqui, na bio — em nenhum
 * outro lugar do site os projetos são atribuídos ao curso.
 */

import { useEffect, useRef } from 'react';
import useTypewriter from '../hooks/useTypewriter';
import styles from './Hero.module.css';

function Hero() {
  const role = useTypewriter('Desenvolvedor Front-end', 55, 500);
  const blobRef = useRef(null);
  const frameRef = useRef(null);

  // Parallax sutil: o blob e o retrato se movem em velocidades
  // diferentes do scroll, criando profundidade na hero.
  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      if (blobRef.current) {
        blobRef.current.style.transform = `translateY(${y * 0.12}px) rotate(${y * 0.02}deg)`;
      }
      if (frameRef.current) {
        frameRef.current.style.transform = `translateY(${y * 0.06}px)`;
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.hero} id="sobre" aria-label="Apresentação">
      <div className={styles.grid}>

        {/* ── Coluna de texto ── */}
        <div className={styles.text}>
          <p className={styles.eyebrow}>Osasco, SP · Disponível para oportunidades</p>

          <h1 className={styles.name}>
            Olá, eu sou<br />
            <span className={styles.nameItalic}>Lucas Pereira</span>
          </h1>

          <p className={styles.role}>
            {role}
            <span className={styles.cursor} aria-hidden="true" />
          </p>

          <p className={styles.desc}>
            Em transição de carreira do varejo para o desenvolvimento web.
            Formando em <strong>Análise e Desenvolvimento de Sistemas</strong> pela FAM
            e no programa <strong>Full Stack Dev</strong> da EBAC — com foco em React,
            Next.js e boas práticas de engenharia front-end.
          </p>

          <div className={styles.actions}>
            <a className={styles.btnPrimary} href="#projetos">Ver projetos</a>
            <a
              className={styles.btnGhost}
              href="https://github.com/luckfipis"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* ── Coluna de retrato ── */}
        <div className={styles.portraitWrap}>
          <svg ref={blobRef} className={styles.blob} viewBox="0 0 400 400" aria-hidden="true">
            <path
              d="M 200 40
                 C 280 40, 360 90, 360 180
                 C 360 260, 320 340, 220 360
                 C 130 378, 50 320, 38 230
                 C 26 140, 90 40, 200 40 Z"
              fill="var(--violet)"
              opacity="0.16"
            />
          </svg>

          <div ref={frameRef} className={styles.portraitFrame}>
            <img
              className={styles.portrait}
              src={`${process.env.PUBLIC_URL}/foto-perfil.jpg`}
              alt="Retrato de Lucas Pereira"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className={styles.portraitFallback} aria-hidden="true">
              <span>LP</span>
            </div>
          </div>

          <div className={styles.badge}>
            <span className={styles.badgeText}>EBAC</span>
            <span className={styles.badgeSub}>Full Stack Dev</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
