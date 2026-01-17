
import React, { useState, useEffect } from 'react';
import logoYabuta from './images/logo/logo_yabuta_negativo.svg';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ativa a animação logo após o componente ser montado
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center p-4">
        <div className={`mb-6 transition-all ease-out duration-1000 ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'}`}>
            <img
              src={logoYabuta}
              alt="Yabuta desde 1947"
              className="h-32 md:h-40 lg:h-48 w-auto mx-auto transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:scale-105"
            />
        </div>
        <p className={`text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-light transition-opacity ease-out duration-1000 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          Uma trajetória marcada pelo pioneirismo e amor ao trabalho, levando qualidade à sua mesa.
        </p>
        <div className={`space-x-4 transition-opacity ease-out duration-1000 delay-400 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <button onClick={() => scrollToSection('products')} className="bg-yabuta-yellow text-yabuta-dark font-bold py-3 px-8 rounded-full uppercase tracking-wider hover:bg-yellow-300 transition-all duration-300">
            Nossos Produtos
          </button>
          <button onClick={() => scrollToSection('about')} className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider hover:bg-white hover:text-yabuta-dark transition-all duration-300">
            Nossa História
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;