"use client";

import { useState, useEffect, useRef } from "react";

// --- Ícones ---
const ArrowLeftIcon = (props) => (
  <svg
    {...props}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);

const ArrowRightIcon = (props) => (
  <svg
    {...props}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

// --- DADOS DAS EXPERIÊNCIAS ---
const experiences = [
  {
    company: "GAO Tech",
    date: "Agosto 2025 - Atualmente",
    title: "Desenvolvedor Full Stack",
    description:
      "Desenvolvimento full-stack de sistemas e aplicações web utilizando TypeScript, Angular, ReactJS e PHP. Aplicação de padrões arquiteturais sólidos nos projetos, incluindo Clean Architecture e DDD. Responsável pela criação de interfaces responsivas e acessíveis, estruturação de componentes com Atomic Design, integração eficiente com APIs e automação de pipelines CI/CD com Docker e GitLab.",
    isCurrent: true,
  },
  {
    company:
      "Universidade Federal de Mato Grosso (UFMT) e Sistema Judiciário de Mato Grosso (SJMT)",
    date: "Novembro 2024 - Agosto 2025",
    title: "Desenvolvedor Full Stack (Estágio)",
    description:
      "Desenvolvimento de APIs robustas no Back-End com Java Spring Boot, implementando paginação e controle de segurança. Construção de interfaces web responsivas em Vue.js e TypeScript para a Seção Judiciária da Justiça Federal de MT (SJMT). Aplicação rigorosa de práticas de Clean Code para assegurar a entrega de um software legível, escalável e sustentável, além de estruturação de consultas dinâmicas com Specification JPA.",
    isCurrent: false,
  },
  {
    company: "Optimus Investimentos",
    date: "Maio 2024 - Julho 2025",
    title: "Desenvolvedor Full Stack (Estágio)",
    description:
      "Desenvolvimento full-stack englobando todo o ciclo de vida da aplicação, com criação de APIs RESTful robustas em Java e Spring Boot. Construção de interfaces dinâmicas e reativas para o site principal utilizando React.js, Material-UI (MUI), hooks e roteamento. Criação de micro-serviços e automações em Python com Flask, implementando rotinas de web scraping e integração com APIs externas, além do deploy de infraestrutura na AWS.",
    isCurrent: false,
  },
  {
    company: "InfoCorp - Empresa Júnior do Instituto de Computação (UFMT)",
    date: "Novembro 2023 - Julho 2025",
    title: "Desenvolvedor Back-End",
    description:
      'Desenvolvimento de soluções Back-End escaláveis utilizando o framework Java Spring Boot para a criação e manutenção do site principal da Empresa Júnior (EJ) e da plataforma de eventos "seuEvento". Atuação direta na modelagem estrutural e persistência de dados utilizando JPA e Hibernate, implementando mecanismos de segurança, proteção de dados e controle de acesso com Spring Security.',
    isCurrent: false,
  },
];

export default function ExperienceSection() {
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.querySelector("div").offsetWidth;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
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
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-gray-800/50 p-2 rounded-full z-10 hover:bg-gray-700 transition-colors"
          >
            <ArrowLeftIcon className="w-6 h-6 text-white" />
          </button>

          <div
            ref={carouselRef}
            className="flex items-stretch gap-8 overflow-x-auto pb-8 px-4 md:px-12 snap-x snap-mandatory no-scrollbar"
          >
            {/* Linha do Tempo Horizontal "Smooth" */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-700/50 to-transparent -translate-y-1/2"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center transition-transform transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`relative h-full p-6 rounded-2xl bg-[#0D1117]/80 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl ${exp.isCurrent ? "border-blue-500/30" : "border-white/10"}`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm text-gray-400">{exp.date}</p>
                    {exp.isCurrent && (
                      <span className="px-2 py-0.5 text-xs font-medium text-cyan-300 bg-cyan-500/20 rounded-full border border-cyan-400/30 transition-transform transform hover:-translate-y-1 hover:shadow-xl">
                        Atual
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {exp.company}
                  </h3>
                  <h4 className="text-lg font-semibold text-blue-400 mb-4">
                    {exp.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-gray-800/50 p-2 rounded-full z-10 hover:bg-gray-700 transition-colors"
          >
            <ArrowRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
      <style jsx>{`
        /* Esconde a barra de rolagem no mobile */
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, and Opera */
        }
        /* No desktop, o scrollbar estilizado do seu código anterior ainda se aplica se você quiser */
        .styled-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .styled-scrollbar::-webkit-scrollbar-track {
          background-color: transparent;
        }
        .styled-scrollbar::-webkit-scrollbar-thumb {
          background-color: #2d3748;
          border-radius: 10px;
        }
        .styled-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #4a5568;
        }
      `}</style>
    </section>
  );
}
