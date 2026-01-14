
import React from 'react';

const YabutaLogo: React.FC = () => (
    <div className="flex items-center space-x-2">
        <div className="bg-yabuta-yellow p-2 rounded-md">
            <span className="text-white font-bold text-2xl font-serif">yb</span>
        </div>
        <span className="text-2xl font-bold tracking-wider text-white">YABUTA</span>
    </div>
);

const Footer: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { id: 'about', label: 'Sobre' },
        { id: 'products', label: 'Produtos' },
        { id: 'locations', label: 'Unidades' },
        { id: 'contact', label: 'Contato' },
    ];

    return (
        <footer className="bg-yabuta-dark text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
                    {/* Column 1: Logo & About */}
                    <div className="space-y-4 lg:col-span-2">
                        <div className="inline-block">
                            <YabutaLogo />
                        </div>
                        <p className="text-gray-400 max-w-md mx-auto md:mx-0">
                            Desde 1947, uma trajetória marcada pelo pioneirismo e amor ao trabalho, levando qualidade à sua mesa.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-4">Navegação</h3>
                        <ul className="space-y-2">
                            {navLinks.map(link => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-gray-400 hover:text-yabuta-yellow transition-colors"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Social */}
                    <div>
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-4">Siga-nos</h3>
                        <div className="flex space-x-4 justify-center md:justify-start">
                            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-yabuta-yellow transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                             <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-yabuta-yellow transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Yabuta. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
