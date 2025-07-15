import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import Footer from "@/components/Footer";

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


export default function Home() {
  // --- Lógica da idade para se manter SEMPRE atualizada ---
  const birthDate = "31/03/2003";
  const age = calculateAge(birthDate);

  return (
    // Fundo escuro para a página toda
    <div className="flex flex-col min-h-screen bg-[#051631] text-gray-200 font-[family-name:var(--font-geist-sans)]">
      <Header />
      
      <main className="flex-grow mt-15">
        {/* Componente "Sobre" e idade como propriedade */}
        <ScrollAnimationWrapper>
          <AboutSection age={age} />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          {/* Componente "Projetos" */}
          <ProjectsSection />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          {/* Componente "Habilidades" */}
          <SkillsSection />
        </ScrollAnimationWrapper>
        <Footer /> 
      </main>
    </div>
  );
}
