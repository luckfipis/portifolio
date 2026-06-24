/**
 * CustomCursor.jsx — Cursor customizado que segue o mouse.
 *
 * Correções aplicadas após revisão:
 * 1. Um único loop de requestAnimationFrame por ciclo de vida do
 *    componente — antes, o efeito reexecutava a cada mudança de
 *    isVisible, recriando listeners e o loop de RAF repetidamente.
 *    Agora o estado de visibilidade é lido via ref (não dependência
 *    do effect), então o RAF nunca é recriado.
 * 2. O cursor nativo só é escondido (`cursor: none`) depois que
 *    confirmamos que o JS rodou e o mouse de fato se moveu —
 *    nunca via CSS global fixo. Assim, se o script falhar por
 *    qualquer motivo, o cursor padrão do sistema continua visível.
 * 3. Detecta navegação por teclado (Tab): se a pessoa não está
 *    usando mouse, o cursor customizado não aparece e o cursor
 *    nativo permanece, preservando o indicador de foco do navegador.
 */

import { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.css';

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Não ativa em touch/telas sem hover, nem quando a pessoa
    // pediu menos movimento — o cursor com lag é puramente decorativo
    // e não deve forçar animação contínua nesses casos.
    const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouchDevice || prefersReducedMotion) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let usingMouse = false;

    function showCursor() {
      if (isVisibleRef.current) return;
      isVisibleRef.current = true;
      dotRef.current?.classList.add(styles.visible);
      ringRef.current?.classList.add(styles.visible);
      // Só escondemos o cursor nativo depois de confirmar que o
      // cursor customizado está realmente sendo desenhado.
      document.body.classList.add(styles.hideNativeCursor);
    }

    function hideCustomCursor() {
      isVisibleRef.current = false;
      dotRef.current?.classList.remove(styles.visible);
      ringRef.current?.classList.remove(styles.visible);
      document.body.classList.remove(styles.hideNativeCursor);
    }

    function handleMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!usingMouse) {
        usingMouse = true;
        showCursor();
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    }

    function handleOver(e) {
      const interactive = e.target.closest('a, button, [role="button"], input, textarea');
      ringRef.current?.classList.toggle(styles.ringHover, !!interactive);
    }

    function handleLeaveWindow() {
      hideCustomCursor();
    }

    // Tab pressionado: a pessoa está navegando por teclado.
    // Escondemos o cursor customizado e devolvemos o foco visual nativo.
    function handleKeyDown(e) {
      if (e.key === 'Tab') {
        usingMouse = false;
        hideCustomCursor();
      }
    }

    // Loop único de animação para o anel com lag suave.
    // Roda durante todo o ciclo de vida do componente — não é
    // recriado em re-renders, pois não depende de estado React.
    let frameId;
    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      frameId = requestAnimationFrame(animateRing);
    }

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleOver);
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mouseleave', handleLeaveWindow);
    frameId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mouseleave', handleLeaveWindow);
      document.body.classList.remove(styles.hideNativeCursor);
      cancelAnimationFrame(frameId);
    };
  }, []); // ← sem dependências: o efeito roda uma única vez

  return (
    <>
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  );
}

export default CustomCursor;
