// src/components/ExperienceSection/index.js

"use client";

import { useState, useEffect, useRef } from 'react';

// --- Ícones ---
const ArrowLeftIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const ArrowRightIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

// --- DADOS DAS EXPERIÊNCIAS ---
const experiences = [
  {
    company: 'Instituto de Computação (UFMT) e SJMT',
    date: 'Dezembro 2024 - Presente',
    title: 'Estagiário Full Stack',
    description: 'Atuei no desenvolvimento full-stack da aplicação, sendo responsável pela implementação de features no back-end com Java (Spring Boot) e pela criação de páginas dinâmicas e com tipagem segura no front-end utilizando Vue.js e TypeScript.',
    isCurrent: true,
  },
  {
    company: 'Grupo Optimus',
    date: 'Maio 2024 - Julho 2025',
    title: 'Estagiário Full Stack',
    description: 'Como desenvolvedor Full Stack, fui responsável por todo o ciclo de vida da aplicação, desde a criação de interfaces reativas com React e MUI até o desenvolvimento de um back-end robusto com Java, Spring Boot e PostgreSQL. Foi utilizado Flyway para garantir a consistência e o versionamento do banco de dados. Além disso, criei automações e micro-serviços com Python e Flask, incluindo rotinas de web scrapping e integração com diversas APIs externas.',
    isCurrent: false,
  },
  {
    company: 'InfoCorp',
    date: 'Novembro 2023 - Julho 2025',
    title: 'Back End Developer',
    description: 'Atuei no desenvolvimento de soluções back-end com a stack Java, Spring Boot e PostgreSQL, utilizando GitHub para controle de versão na empresa júnior do Instituto de Computação da UFMT.',
    isCurrent: false,
  },
];

export default function ExperienceSection() {
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      // No mobile, rola exatamente a largura de um card (100% da tela)
      // No desktop, mantém o scroll livre
      const scrollAmount = carouselRef.current.querySelector('div').offsetWidth;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="experiencias" className="py-30 md:py-15">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-16">
          <span>Experiências de Trabalho</span>
        </h2>
        
        <div className="relative group">
          {/* Botões de Navegação (Agora visíveis no mobile) */}
          <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-gray-800/50 p-2 rounded-full z-10 hover:bg-gray-700 transition-colors">
            <ArrowLeftIcon className="w-6 h-6 text-white" />
          </button>
          
          <div
            ref={carouselRef}
            // A classe 'no-scrollbar' é adicionada para esconder a barra de rolagem
            // A classe 'md:overflow-x-auto' restaura o scroll no desktop
            className="flex items-stretch gap-8 overflow-x-auto pb-8 px-4 md:px-12 snap-x snap-mandatory no-scrollbar"
          >
            {/* Linha do Tempo Horizontal "Smooth" */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-700/50 to-transparent -translate-y-1/2"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center transition-transform transform hover:-translate-y-1 hover:shadow-xl">
                <div className={`relative h-full p-6 rounded-2xl bg-[#0D1117]/80 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl ${exp.isCurrent ? 'border-blue-500/30' : 'border-white/10'}`}>
                  
                  
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm text-gray-400">{exp.date}</p>
                    {exp.isCurrent && (
                      <span className="px-2 py-0.5 text-xs font-medium text-cyan-300 bg-cyan-500/20 rounded-full border border-cyan-400/30 transition-transform transform hover:-translate-y-1 hover:shadow-xl">
                        Atual
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{exp.company}</h3>
                  <h4 className="text-lg font-semibold text-blue-400 mb-4">{exp.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-gray-800/50 p-2 rounded-full z-10 hover:bg-gray-700 transition-colors">
            <ArrowRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
      <style jsx>{`
        /* Esconde a barra de rolagem no mobile */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari, and Opera */
        }
        /* No desktop, o scrollbar estilizado do seu código anterior ainda se aplica se você quiser */
        .styled-scrollbar::-webkit-scrollbar { height: 8px; }
        .styled-scrollbar::-webkit-scrollbar-track { background-color: transparent; }
        .styled-scrollbar::-webkit-scrollbar-thumb { background-color: #2d3748; border-radius: 10px; }
        .styled-scrollbar::-webkit-scrollbar-thumb:hover { background-color: #4a5568; }
      `}</style>
    </section>
  );
}
