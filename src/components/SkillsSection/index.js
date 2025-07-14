"use client";

import { useState, useRef } from 'react';
import { FaJava, FaReact, FaPython, FaNodeJs, FaDatabase, 
  FaGithub, FaDocker, FaJs, FaWindowMaximize, 
  FaVuejs} from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiTypescript} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

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

// --- DADOS DAS HABILIDADES ---
const skillsData = {
  "GitHub": { icon: FaGithub, color: "#ffffff", category: "DevOps" },
  "Java": { icon: FaJava, color: "#F89820", category: "Backend" },
  "Spring Boot": { icon: SiSpringboot, color: "#6DB33F", category: "Backend" },
  "React": { icon: FaReact, color: "#61DAFB", category: "Frontend" },
  "JavaScript": { icon: FaJs, color: "#F7DF1E", category: "Frontend" },
  "Node.js": { icon: FaNodeJs, color: "#68A063", category: "Backend" },
  "Python": { icon: FaPython, color: "#FFD43B", category: "Backend" },
  "PostgreSQL": { icon: FaDatabase, color: "#336791", category: "Database" },
  "VueJs": { icon: FaVuejs, color: "#4FC08D", category: "Frontend" },
  "C#": { icon: TbBrandCSharp, color: "#512BD4", category: "Backend" },
  ".NET": { icon: FaWindowMaximize, color: "#512BD4", category: "Backend" },
  "Docker": { icon: FaDocker, color: "#2496ED", category: "DevOps" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6", category: "Frontend" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38B2AC", category: "Frontend" },
};

const categories = ["Todas", "Frontend", "Backend", "Database", "DevOps"];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);

  const filteredSkills = Object.entries(skillsData).filter(([key, value]) => 
    activeCategory === "Todas" || value.category === activeCategory
  );

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8; // Rola 80% da largura visível
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="habilidades"
      className="pb-20 md:pb-32"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-4">Habilidades & Tecnologias</h2>
        <p className="text-center text-gray-400 mb-12">Filtre por categoria ou navegue pelo carrossel.</p>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carrossel de Habilidades */}
        <div className="relative group">
          <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-800/50 p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowLeftIcon className="w-6 h-6 text-white" />
          </button>
          
          <div
            ref={carouselRef}
            className="flex items-center gap-6 overflow-x-auto py-4 px-4 styled-scrollbar"
          >
            {filteredSkills.map(([name, { icon: Icon, color }], index) => (
              <div
                key={name}
                style={{ '--skill-color': color }}
                className={`
                  flex-shrink-0
                  flex flex-col items-center justify-center gap-3 w-36 h-36 p-4 rounded-2xl 
                  border border-white/10 bg-gray-900/50
                  transition-all duration-300 ease-in-out
                  hover:border-[var(--skill-color)] hover:scale-105 hover:shadow-lg
                `}
              >
                <Icon className="w-12 h-12" style={{ color: color }} />
                <span className="font-bold text-sm text-center text-white">{name}</span>
              </div>
            ))}
          </div>

          <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-800/50 p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
      
      {/* --- ESTILOS PARA A BARRA DE ROLAGEM --- */}
      <style jsx>{`
        .styled-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .styled-scrollbar::-webkit-scrollbar-track {
          background-color: transparent;
        }
        .styled-scrollbar::-webkit-scrollbar-thumb {
          background-color: #2d3748; /* Um cinza escuro para combinar */
          border-radius: 10px;
        }
        .styled-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #4a5568; /* Um cinza mais claro no hover */
        }
      `}</style>
    </section>
  );
}
