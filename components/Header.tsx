
import React, { useState, useEffect } from 'react';

const YabutaLogo: React.FC = () => (
    <div className="flex items-center space-x-2">
        <div className="bg-yabuta-yellow p-2 rounded-md">
            <span className="text-white font-bold text-2xl font-serif">yb</span>
        </div>
        <span className="text-2xl font-bold tracking-wider text-white">YABUTA</span>
    </div>
);


const Header: React.FC = () => {
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
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'about', label: 'Sobre' },
    { id: 'products', label: 'Produtos' },
    { id: 'locations', label: 'Unidades' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-yabuta-dark shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => scrollToSection('hero')}>
          <YabutaLogo />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-white font-medium hover:text-yabuta-yellow transition-colors duration-300 uppercase tracking-widest text-sm"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden transition-all duration-500 ease-in-out bg-yabuta-dark`}>
        <nav className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-white font-medium hover:text-yabuta-yellow transition-colors duration-300 uppercase tracking-widest"
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
