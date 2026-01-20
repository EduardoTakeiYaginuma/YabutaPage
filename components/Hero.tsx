
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
      <div className="relative z-10 text-center p-4">
        <div className={`mb-6 transition-all ease-in-out duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <img
              src={logoYabuta}
              alt="Yabuta desde 1947"
              className="h-32 md:h-40 lg:h-48 w-auto mx-auto animate-pulse hover:scale-110 transition-transform duration-500 cursor-pointer"
            />
        </div>
        <p className={`text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-10 font-serif italic transition-opacity ease-out duration-1000 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          Uma trajetória marcada pelo pioneirismo e amor ao trabalho
        </p>
        <div className={`space-y-4 md:space-y-0 md:space-x-4 transition-opacity ease-out duration-1000 delay-400 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <button onClick={() => scrollToSection('products')} className="inline-flex items-center bg-yabuta-yellow text-yabuta-dark font-bold py-3 px-8 rounded-full uppercase tracking-wider hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Nossos Produtos
          </button>
          <button onClick={() => scrollToSection('about')} className="inline-flex items-center bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider hover:bg-white hover:text-yabuta-dark transform hover:scale-105 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-5.747h18" />
            </svg>
            Nossa História
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 delay-1000 ${isLoaded ? 'opacity-100 animate-bounce' : 'opacity-0'}">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;