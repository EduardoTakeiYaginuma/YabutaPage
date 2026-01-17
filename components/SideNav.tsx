
import React, { useState, useEffect } from 'react';

const sections = ['hero', 'about', 'products', 'locations', 'contact'];

const SideNav: React.FC = () => {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (
                        scrollPosition >= sectionTop - windowHeight / 2 &&
                        scrollPosition < sectionTop + sectionHeight - windowHeight / 2
                    ) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 pr-2">
            <ul className="space-y-4">
                {sections.map((id) => (
                    <li key={id} className="group relative">
                        <button
                            onClick={() => scrollToSection(id)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                activeSection === id ? 'bg-yabuta-yellow scale-125' : 'bg-white/50 hover:bg-white'
                            }`}
                        ></button>
                        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-yabuta-dark text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap capitalize">
                            {id}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SideNav;
