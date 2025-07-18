"use client";

import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";
import InfoPills from "@/components/InfoPills";

// --- Componente de Ícone para o Botão ---
const ArrowIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
);

export default function AboutSection({ age }) {
  return (
    <>
      {/* Estilos para a animação do gradiente */}
      <style jsx global>{`
        @keyframes text-gradient-animation {
          to {
            background-position: 200% center;
          }
        }
        .animate-text-gradient {
          background-size: 200% auto;
          animation: text-gradient-animation 1.5s linear infinite;
        }
      `}</style>

      <section id="sobre" className="container mx-auto px-6 pt-20 md:pt-32 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          
          {/* --- Coluna da Esquerda (IMAGEM) --- */}
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="p-1.5 rounded-full bg-gradient-to-r from-red-300 via-blue-700 to-red-300 animate-text-gradient">
              <div className="p-1.5 bg-gray-900 rounded-full">
                <Image
                  src="/profile.png"
                  alt="Foto de Vinícius Vieira"
                  width={400}
                  height={400}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 mt-4">
              <InfoPills age={age} />
              <SocialLinks />
            </div>
          </div> 

          {/* --- Coluna da Direita (TEXTO) --- */}
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-5xl md:text-7xl font-black">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 animate-text-gradient">
                Vinícius Vieira
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-blue-700 to-red-300 animate-text-gradient">
                Full Stack Developer
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-lg leading-relaxed font-medium">
              Cursando Ciência da Computação. Desenvolvedor Full Stack com foco em criar experiências digitais incríveis e soluções robustas, do front-end ao back-end.
            </p>

            <div className="group mt-4 inline-block rounded-lg p-px bg-gradient-to-r from-red-300 via-blue-700 to-red-300 transition-transform transform hover:-translate-y-1 hover:shadow-xl animate-text-gradient">
              <a 
                href="https://drive.google.com/file/d/1ZbNlB4VIpT8c0AgpnsJGWTAA--Rj1cpw/view?usp=sharing" 
                className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white font-bold rounded-md "
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Ver Currículo</span>
                <ArrowIcon className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
