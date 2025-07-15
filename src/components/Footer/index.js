"use client";

import { useState } from 'react';
import Link from 'next/link';

// --- Ícones ---
const MailIcon = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

const LinkedinIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const CopyIcon = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
    </svg>
);

const CheckIcon = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

const ExternalLinkIcon = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
);


export default function Footer() {
    const [copied, setCopied] = useState(false);

    const handleCopy = (text) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
    };

    const email = "viniciuspadilhavieira@hotmail.com";
    const linkedinUser = "/in/vinicius-vieira-2918a1236";
    const linkedinProfileUrl = "https://linkedin.com" + linkedinUser;

    return (
        <footer id="contato" className="bg-gray-900/50 border-t border-white/10 mt-20">
            <div className="container mx-auto px-6 py-16">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4 transition-transform transform hover:-translate-y-1">Vamos Conversar?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-12">
                        Estou sempre aberto a novas oportunidades, projetos e ideias. Sinta-se à vontade para entrar em contato.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Contato por E-mail */}
                    <div className="bg-gray-800/50 p-6 rounded-2xl flex items-center justify-between gap-4 transition-transform transform hover:-translate-y-1 hover:shadow-xl">
                        <div className="flex items-center gap-4 min-w-0">
                            <MailIcon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                            <div className="min-w-0">
                                <h4 className="font-bold text-white">E-mail</h4>
                                <p className="text-gray-400 text-sm truncate">{email}</p>
                            </div>
                        </div>
                        <button onClick={() => handleCopy(email)} className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors flex-shrink-0">
                            {copied ? <CheckIcon className="w-5 h-5 text-green-400" /> : <CopyIcon className="w-5 h-5 text-white" />}
                        </button>
                    </div>

                    {/* Contato por LinkedIn */}
                    <div className="bg-gray-800/50 p-6 rounded-2xl flex items-center justify-between gap-4 transition-transform transform hover:-translate-y-1 hover:shadow-xl">
                        <div className="flex items-center gap-4 min-w-0">
                            <LinkedinIcon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                            <div className="min-w-0">
                                <h4 className="font-bold text-white">LinkedIn</h4>
                                <p className="text-gray-400 text-sm truncate">Acesse a página -{'>'}</p>
                            </div>
                        </div>
                        <Link href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors flex-shrink-0">
                           <ExternalLinkIcon className="w-5 h-5 text-white" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 py-6">
                <div className="container mx-auto px-2 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-300 transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                        <b>
                        &copy; {new Date().getFullYear()} Vinícius Padilha Vieira - Software Developer
                        </b>
                    </p>
                    <div className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 text-white font-bold rounded-2xl transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                        <div className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </div>
                        <p className="text-sm text-gray-400"><b>Disponível para novos projetos</b></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
