
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import teamImage from './images/Contact/team.png';

const InfoBlock: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <div className="flex items-center mb-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yabuta-yellow opacity-50 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-yabuta-yellow"></div>
            </div>
            <h3 className="text-yabuta-yellow font-bold tracking-widest ml-3">{title}</h3>
        </div>
        <div className="pl-9 text-gray-300 leading-relaxed">
            {children}
        </div>
    </div>
);

const SocialIcon: React.FC<{ href: string, label: string, children: React.ReactNode }> = ({ href, label, children }) => (
    <a href={href} aria-label={label} className="w-8 h-8 flex items-center justify-center bg-white rounded-md text-yabuta-dark hover:bg-yabuta-yellow transition-colors">
        {children}
    </a>
);

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('O formulário de contato está temporariamente desativado. Por favor, entre em contato por telefone ou email.');
    };

    return (
        <section
            id="contact"
            className="py-20 relative"
            style={{
                backgroundImage: `url(${teamImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="absolute inset-0 bg-white/80"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-serif text-yabuta-dark">Fale Conosco</h2>
                    <div className="w-24 h-1.5 bg-yabuta-yellow mx-auto mt-4 rounded"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">Tem alguma dúvida ou sugestão? Entre em contato conosco. Nossa equipe está pronta para te atender.</p>
                </div>

                <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
                    {/* Left Column: Info */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg">
                        <div className="space-y-8">
                            <InfoBlock title="ENDEREÇO">
                                <p>Granja Yabuta, Secção União I, s/n</p>
                                <p>Zona Rural - Cx. Postal 187</p>
                                <p>CEP: 17690-000 - Bastos-SP</p>
                            </InfoBlock>
                            <InfoBlock title="CONTATO">
                                <p className="font-semibold">Telefones:</p>
                                <p>+55 (14) 3478-7002</p>
                                <p>+55 (14) 99651-1004</p>
                                <p className="mt-4"><span className="font-semibold">Email:</span> granja@granjayabuta.com.br</p>
                            </InfoBlock>
                            <div className="pt-6 border-t border-gray-200">
                                <h3 className="text-yabuta-dark font-bold tracking-widest mb-3">REDES SOCIAIS</h3>
                                <div className="flex items-center space-x-4">
                                    <SocialIcon href="https://www.instagram.com/granjayabuta/" label="Instagram">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" /></svg>
                                    </SocialIcon>
                                    <SocialIcon href="https://www.facebook.com/pages/Granja-Yabuta/1050679568352843" label="Facebook">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                    </SocialIcon>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow-lg">
                        <form ref={form} onSubmit={handleSubmit}>
                            <h3 className="font-bold text-2xl text-yabuta-dark mb-6">Deixe uma mensagem</h3>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="text-yabuta-dark font-semibold mb-2 block">Nome</label>
                                    <input type="text" id="name" name="name" placeholder="Seu nome completo" required className="appearance-none bg-gray-100 border-2 border-gray-200 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yabuta-yellow transition-colors" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="text-yabuta-dark font-semibold mb-2 block">Email</label>
                                    <input type="email" id="email" name="email" placeholder="seu.email@exemplo.com" required className="appearance-none bg-gray-100 border-2 border-gray-200 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yabuta-yellow transition-colors" />
                                </div>
                                <div>
                                     <label htmlFor="message" className="text-yabuta-dark font-semibold mb-2 block">Mensagem</label>
                                     <textarea id="message" name="message" rows={5} placeholder="Escreva sua mensagem aqui..." required className="w-full p-4 bg-gray-100 border-2 border-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-yabuta-yellow transition-colors"></textarea>
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="bg-yabuta-yellow text-yabuta-dark font-bold py-3 px-8 rounded-lg uppercase tracking-wider text-sm hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300">
                                        Enviar Mensagem
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                 <div className="mt-16 text-center">
                    <a
                        href="https://csapp.yabuta.com.br/apex/r/csdesenv/gestao-parceiro/verificacao-de-boleto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-yabuta-dark text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider text-sm hover:bg-gray-800 transition-all duration-300"
                    >
                        Verificador de Boletos
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
