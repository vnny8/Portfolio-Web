// src/components/Logo/index.js

export default function Logo() {
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

      {/* Círculo com borda de gradiente animada */}
      <div className="rounded-full p-0.5 bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 animate-text-gradient">
        <div className="rounded-full bg-[#051631]">
          <div className="text-4xl font-black flex items-center justify-center w-10 h-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 animate-text-gradient">
              V
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
