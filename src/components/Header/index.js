"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import Logo from '@/components/Logo';

// --- Ícones para o Menu Mobile ---
const MenuIcon = (props) => (
  <svg {...props} stroke="currentColor" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = (props) => (
  <svg {...props} stroke="currentColor" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- LINKS ATUALIZADOS PARA APONTAR PARA OS IDs DAS SEÇÕES ---
  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Projetos", href: "#projetos" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Experiências", href: "#experiencias" },
    { name: "Contato", href: "#contato" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- FUNÇÃO PARA ROLAGEM SUAVE ---
  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Previne o comportamento padrão de "pulo" do link.
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerOffset = 150; // Espaço para compensar a altura do header fixo. Ajuste se necessário.
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth" // A mágica da rolagem suave!
      });

      // Fecha o menu mobile após clicar em um link
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <header className="container mx-auto max-w-6xl mt-8 mb-8 pointer-events-auto">
        <div className="rounded-full bg-gradient-to-r from-slate-500 via-slate-100 to-slate-500 p-[1.5px]">
          <div className="relative flex items-center justify-center bg-gray-900/80 backdrop-blur-xl rounded-full p-4">
            
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Logo />
              </Link>
            </div>

            <nav className="hidden md:flex">
              <ul className="flex items-center gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    {/* O onClick agora chama a função de rolagem */}
                    <a
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className="cursor-pointer block rounded-full border border-transparent px-4 py-2 text-lg font-medium text-white transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/10 hover:text-white hover:border-white/20 hover:shadow-lg"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-200 hover:text-white">
                {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Painel do Menu Mobile */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="mx-4 mt-2 p-5 bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl">
            <nav>
              <ul className="flex flex-col items-center gap-5">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className="cursor-pointer text-2xl font-semibold text-white hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
