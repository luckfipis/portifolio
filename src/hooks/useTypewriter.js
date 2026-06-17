/**
 * useTypewriter.js
 * Digita o texto caractere por caractere.
 */
import { useState, useEffect } from 'react';

function useTypewriter(text, speed = 55, delay = 500) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed('');
    let i = 0;
    let timer;
    const start = setTimeout(() => {
      timer = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(timer);
      }, speed);
    }, delay);
    return () => { clearTimeout(start); clearInterval(timer); };
  }, [text, speed, delay]);

  return displayed;
}

export default useTypewriter;
