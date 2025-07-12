// src/app/page.js

import Image from "next/image";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks"; // Importa a versão atualizada
import InfoPills from "@/components/InfoPills";   // Importa o novo componente

// --- Função para calcular a idade ---
const calculateAge = (birthDateString) => {
  const [day, month, year] = birthDateString.split('/').map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

// --- Componente de Ícone para o Botão ---
const ArrowIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
);


export default function Home() {
  // --- Lógica da idade sendo executada aqui ---
  const birthDate = "31/03/2003";
  const age = calculateAge(birthDate);

  return (
    <div className="flex flex-col min-h-screen text-gray-800 font-[family-name:var(--font-geist-sans)]">
      <Header />
      
      <main className="flex-grow">
        <section 
          id="sobre" 
          className="container mx-auto px-6 py-20 md:py-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
            
            {/* --- Coluna da Esquerda (IMAGEM) --- */}
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="p-1 rounded-full bg-gradient-to-br from-red-200 to-red-700">
                <div className="p-1 bg-black rounded-full">
                  <Image
                    src="/profile.png"
                    alt="Foto"
                    width={450}
                    height={400}
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* === NOVOS ITENS SENDO USADOS AQUI === */}
              <div className="flex flex-col items-center gap-6 mt-4">
                {/* 1. Badges com informações */}
                <InfoPills age={age} />

                {/* 2. Links de redes sociais atualizados */}
                <SocialLinks />
              </div>

            </div>

            {/* === NOVA COLUNA DE TEXTO COM ESTILO ÚNICO === */}
              <div className="flex flex-col items-start gap-6">
                
                {/* Título com gradiente animado */}
                <h1 className="text-5xl md:text-7xl font-black">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white-500 to-blue-500 animate-text-gradient">
                    Vinícius Vieira
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white-500 to-red-700 animate-text-gradient">
                    Full Stack Developer
                  </span>
                </h1>
                
                {/* Parágrafo com estilo mais limpo */}
                <p className="text-lg text-white max-w-lg leading-relaxed">
                  <b>Cursando Ciência da Computação. Desenvolvedor Full Stack com foco em criar experiências digitais incríveis e soluções robustas, do front-end ao back-end.</b>
                </p>

                {/* Novo estilo de botão com ícone e animação */}
                {/* Novo botão com borda de gradiente */}
                <div className="group mt-4 inline-block rounded-lg p-px bg-gradient-to-r from-blue-500 via-white-500 to-red-500 transition-transform transform hover:-translate-y-1 hover:shadow-xl">
                  <a 
                    href="/caminho/para/seu/curriculo.pdf" 
                    className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white font-bold rounded-md"
                  >
                    <span>Ver Currículo</span>
                    <ArrowIcon className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                  </a>
                </div>
              </div>

          </div>
        </section>
      </main>
    </div>
  );
}