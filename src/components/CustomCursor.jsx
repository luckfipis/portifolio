/**
 * CustomCursor.jsx — Cursor customizado que segue o mouse.
 * Dois elementos: um ponto pequeno que segue exatamente,
 * e um anel maior com leve atraso (lag) para sensação fluida.
 * Cresce ao passar sobre links/botões.
 */

import { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor.module.css';

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Desabilita em touch devices
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    function handleMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      if (!isVisible) setIsVisible(true);
    }

    function handleOver(e) {
      const interactive = e.target.closest('a, button, [role="button"], input, textarea');
      setIsPointer(!!interactive);
    }

    function handleLeaveWindow() {
      setIsVisible(false);
    }

    // Loop de animação para o anel com lag suave
    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      requestAnimationFrame(animateRing);
    }

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseleave', handleLeaveWindow);
    const frame = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseleave', handleLeaveWindow);
      cancelAnimationFrame(frame);
    };
  }, [isVisible]);

  return (
    <>
      <div
        ref={dotRef}
        className={`${styles.dot} ${isVisible ? styles.visible : ''}`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`${styles.ring} ${isPointer ? styles.ringHover : ''} ${isVisible ? styles.visible : ''}`}
        aria-hidden="true"
      />
    </>
  );
}

export default CustomCursor;
