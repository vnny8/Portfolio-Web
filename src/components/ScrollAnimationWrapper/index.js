"use client";

import { useState, useEffect, useRef } from 'react';

export default function ScrollAnimationWrapper({ children, className }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]) {
          // Atualiza o estado 'isVisible' com base se o elemento está ou não na tela.
          setIsVisible(entries[0].isIntersecting);
        }
      },
      {
        threshold: 0.1, // A animação começa quando 10% do componente está visível.
      }
    );

    // Começa a observar o elemento.
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Função de limpeza: para de observar o elemento quando o componente é desmontado.
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []); // O array vazio garante que este efeito rode apenas uma vez (na montagem do componente).

  return (
    <div
      ref={ref}
      // Aplica as classes de animação com base no estado 'isVisible'.
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
}
