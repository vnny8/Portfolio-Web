"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- Ícones ---
const ArrowLeftIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const ArrowRightIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const GithubIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

// --- ESTRUTURA DE DADOS PARA PROJETOS ---
const projects = [
  {
    title: 'Portfolio Pessoal',
    description: 'Este é o meu portfolio pessoal, desenvolvido com Next.js e Tailwind CSS para demonstrar minhas habilidades e projetos. Possui Design responsivo e interativo.',
    image: '/PortfolioWeb.png',
    linkedin: '#',
    gradientVia: 'via-red-700',
    githubLinks: [
      { label: 'Repositório', url: 'https://github.com/vnny8/Portfolio-Web' }
    ]
  },
  {
    title: 'App de Gerenciamento de Gastos',
    description: 'Plataforma de Gerenciamento de gastos construída utilizando com ReactJs no Front-End e Java Spring Boot no Back-End. Neste projeto também foi utilizado tecnologias como OAuth2, JWT, PostgreSQL, TailwindCSS e Docker.',
    image: '/GerenciamentoDeGastos.jpeg',
    linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7291822607128027136/',
    gradientVia: 'via-green-700',
    githubLinks: [
      { label: 'Back-End', url: 'https://github.com/vnny8/Gerenciamento-de-Gastos-Back-End' },
      { label: 'Front-End', url: 'https://github.com/vnny8/Gerenciamento-de-Gastos-Front-End' },
    ]
  },
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef(null);

  // Reseta o carrossel quando o tamanho da tela muda
  useEffect(() => {
    const checkScreenSize = () => {
      const newIsDesktop = window.innerWidth >= 768;
      if (newIsDesktop !== isDesktop) {
        setIsDesktop(newIsDesktop);
        setCurrentIndex(0); // -> Reseta o índice para o início
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [isDesktop]); // -> Roda o efeito quando 'isDesktop' muda

  const slidesToDisplay = isDesktop ? 2 : 1;
  const slidePercentage = 100 / slidesToDisplay;

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - slidesToDisplay : currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? 0 : newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex >= projects.length - slidesToDisplay;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section
      ref={sectionRef}
      id="projetos"
      className={`py-30 md:py-42`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-12">
          <b>Meus Projetos</b>
        </h2>
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * slidePercentage}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full md:w-1/2 flex-shrink-0 p-2">
                <div className={`rounded-2xl p-px bg-gradient-to-r from-black ${project.gradientVia} to-black h-full transition-transform transform hover:-translate-y-1 hover:shadow-2xl`}>
                  <div className="flex flex-col p-4 gap-4 bg-[#0D1117]/80 p-6 rounded-3xl h-full transition-transform transform hover:-translate-y-1 hover:shadow-xl">
                    <div className={`rounded-3xl p-px bg-gradient-to-r from-white ${project.gradientVia} to-white`}>
                      <Image
                        src={project.image}
                        alt={`Imagem do projeto ${project.title}`}
                        width={600}
                        height={400}
                        className="rounded-3xl object-cover w-full aspect-video"
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-4 text-white">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-gray-300 text-sm">{project.description}</p>
                      <div className="flex flex-wrap items-center gap-4 mt-2">
                        {project.githubLinks && project.githubLinks.map((link) => (
                          <Link key={link.label} href={link.url} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-2xl font-semibold hover:bg-gray-600 transition-colors transition-transform transform hover:-translate-y-1 hover:shadow-xl">
                            <GithubIcon className="w-5 h-5" />
                            <span>{link.label}</span>
                          </Link>
                        ))}
                        {project.linkedin && (
                          <Link href={project.linkedin} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-2xl font-semibold hover:bg-blue-700 transition-colors transition-transform transform hover:-translate-y-1 hover:shadow-xl">
                            <LinkedinIcon className="w-5 h-5" />
                            <span>Post</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {projects.length > slidesToDisplay && (
            <>
              <button onClick={goToPrevious} className="absolute top-1/2 left-2 md:left-[-50px] -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10">
                <ArrowLeftIcon className="w-6 h-6 text-white" />
              </button>
              <button onClick={goToNext} className="absolute top-1/2 right-2 md:right-[-50px] -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10">
                <ArrowRightIcon className="w-6 h-6 text-white" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
