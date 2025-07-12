// src/components/InfoPills/index.js

// --- Ícones SVG para os Badges ---
const LocationIcon = (props) => (
  <svg {...props} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.1.4-.27.662-.49.263-.22.552-.47.855-.756.303-.285.608-.593.902-.925.295-.332.58-.69.838-1.074.258-.385.487-.808.68-1.28.193-.473.34-.996.44-1.559.1-.563.15-1.152.15-1.758 0-1.846-.656-3.532-1.884-4.868C13.536 2.657 11.847 2 10 2s-3.536.657-4.764 1.993C4.006 5.325 3.35 7.01 3.35 8.856c0 .606.05 1.195.15 1.758.1.563.247 1.086.44 1.559.193-.472.38.868.68 1.28.258.384.487.808.838 1.074.294.332.599.64.902.925.303.286.592.536.855.756.262.22.476.39.662.49.093.046.186.09.281.14l.018.008.006.003zM10 8a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const CalendarIcon = (props) => (
  <svg {...props} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c0-.414.336-.75.75-.75h10.5a.75.75 0 010 1.5H5.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
  </svg>
);

const CodeIcon = (props) => (
  <svg {...props} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06z" clipRule="evenodd" />
  </svg>
);

// --- COMPONENTE "PILL" CORRIGIDO ---
const Pill = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-[#293243] px-4 py-2 text-sm text-white transition-transform transform hover:-translate-y-1 hover:shadow-xl">
    <Icon className="h-5 w-5" />
    <span><b>{text}</b></span>
  </div>
);

export default function InfoPills({ age }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Pill icon={LocationIcon} text="Cuiabá, MT" />
      <Pill icon={CalendarIcon} text={`${age} anos`} />
      <Pill icon={CodeIcon} text="Full Stack Developer" />
    </div>
  );
}
