
import React, { useState, useEffect } from 'react';
import logoYabuta from './images/logo/logo_yabuta_negativo.svg';

const YabutaLogo: React.FC = () => (
    <div className="flex items-center space-x-2">
        <img src={logoYabuta} alt="Yabuta" className="h-12" />
    </div>
);


const Header: React.FC<{ variant?: 'default' | 'product-detail' }> = ({ variant = 'default' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (variant === 'product-detail') {
      window.location.href = `/#${id}`;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'about', label: 'Sobre' },
    { id: 'products', label: 'Produtos' },
    { id: 'locations', label: 'Unidades' },
    { id: 'contact', label: 'Contato' },
  ];

  const headerBaseClass = "fixed top-0 left-0 right-0 z-50 transition-all duration-300";
  
  const defaultVariantClass = isScrolled 
    ? 'backdrop-blur-lg bg-gray-800/50 shadow-lg' 
    : 'bg-transparent';
  
  const productDetailVariantClass = 'backdrop-blur-lg bg-yabuta-yellow/95 shadow-lg';

  const mobileMenuClass = variant === 'product-detail' 
    ? productDetailVariantClass
    : 'backdrop-blur-lg bg-gray-800/50 shadow-lg';

  return (
    <header className={`${headerBaseClass} ${variant === 'product-detail' ? productDetailVariantClass : defaultVariantClass}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => scrollToSection('hero')}>
          <YabutaLogo />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-white font-medium relative group transition-colors duration-300 uppercase tracking-widest text-sm"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yabuta-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </button>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none z-50">
            <div className="w-8 h-8 flex flex-col justify-around">
              <span className={`block w-full h-0.5 bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-white transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-64 ${mobileMenuClass} transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
        <nav className="flex flex-col items-center pt-24 space-y-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-white font-medium hover:text-yabuta-yellow transition-colors duration-300 uppercase tracking-widest text-lg"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
