import React, { useState, useEffect } from 'react';
import { ThermometerSnowflake } from 'lucide-react';
import { config } from '../data/config';
/**
 * Navbar Component
 * Estilo atualizado: removida a borda branca e adicionado efeito de sombra suave
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-slate-950/80 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] py-4' 
        : 'bg-transparent py-7'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <img src="/imagens/logo.jpg" alt={`${config.company.name} Logo`} className="h-10 w-auto rounded object-contain" />
          <span className="text-xl font-bold tracking-tight text-white">{config.company.name}</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#sobre-nos" className="hover:text-primary transition-colors">Sobre Nós</a>
          <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#projetos" className="hover:text-primary transition-colors">Projetos</a>
          <a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>

        <a 
          href={`https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(config.contact.whatsappMessage)}`}
          target="_blank" 
          rel="noreferrer" 
          className="relative overflow-hidden bg-green-500 text-white shadow-lg px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-400 hover:scale-105 transition-all group"
        >
          <span className="relative z-10">Orçamento Gratuito</span>
          <div className="absolute top-0 -inset-full h-full w-[150%] z-0 block bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
