
import React from 'react';

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
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('Obrigado pelo seu contato! Mensagem enviada (simulação).');
        event.currentTarget.reset();
    };

    return (
        <section
            id="contact"
            className="relative py-28 bg-cover bg-center text-white"
            style={{ backgroundImage: "url('https://www.yabuta.com.br/wp-content/uploads/2016/11/trabalhadores_yabuta_ovos-1.jpg')" }}
        >
            <div className="absolute inset-0 bg-yabuta-dark bg-opacity-80"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-12">Contate-nos</h2>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column: Info */}
                    <div className="space-y-8">
                        <InfoBlock title="ENDEREÇO">
                            <p>Endereço: Granja Yabuta,</p>
                            <p>Secção União I, s/n - Zona Rural</p>
                            <p>Cx. Postal 187 - CEP: 17690-000</p>
                            <p>Bastos-SP</p>
                        </InfoBlock>
                        <InfoBlock title="CONTATO">
                            <p className="font-semibold">Telefones:</p>
                            <p>+55 (14) 3478 - 7002</p>
                            <p>+55 (14) 9 9651 - 1004</p>
                            <p>+55 (14) 9 9631 - 5409</p>
                            <p>+55 (14) 9 9755 - 6050</p>
                            <p className="mt-4"><span className="font-semibold">Email:</span> granja@granjayabuta.com.br</p>
                        </InfoBlock>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-white p-8 rounded-lg shadow-2xl text-yabuta-dark">
                        <form onSubmit={handleSubmit}>
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex items-center">
                                    <div className="w-4 h-4 rounded-full bg-yabuta-yellow mr-3"></div>
                                    <h3 className="font-bold text-lg">Deixe uma mensagem</h3>
                                </div>
                                <button type="submit" className="bg-yabuta-yellow text-yabuta-dark font-bold py-2 px-6 rounded-md uppercase tracking-wider text-sm hover:bg-yellow-300 transition-all duration-300">
                                    Enviar
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center border-b border-gray-300 py-2">
                                    <label htmlFor="name" className="text-yabuta-yellow font-bold w-20">Nome</label>
                                    <input type="text" id="name" name="name" placeholder="Seu nome" required className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none" />
                                </div>
                                <div className="flex items-center border-b border-gray-300 py-2">
                                    <label htmlFor="email" className="text-yabuta-yellow font-bold w-20">Email</label>
                                    <input type="email" id="email" name="email" placeholder="Endereço de e-mail" required className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none" />
                                </div>
                                <div>
                                     <label htmlFor="message" className="text-yabuta-yellow font-bold mb-2 block">Mensagem</label>
                                     <textarea id="message" name="message" rows={5} placeholder="..." required className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yabuta-yellow"></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-6 border-t border-yabuta-yellow border-opacity-50 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
                    <a
                        href="https://csapp.yabuta.com.br/apex/r/csdesenv/gestao-parceiro/verificacao-de-boleto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-yabuta-yellow text-white font-bold py-2 px-6 rounded-full uppercase tracking-wider text-sm hover:bg-yabuta-yellow hover:text-yabuta-dark transition-all duration-300"
                    >
                        Verificador de boletos
                    </a>
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-300">Siga-nos nas rede sociais</span>
                        <SocialIcon href="https://www.instagram.com/granjayabuta/" label="Instagram">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" /></svg>
                        </SocialIcon>
                        <SocialIcon href="https://www.facebook.com/pages/Granja-Yabuta/1050679568352843" label="Facebook">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        </SocialIcon>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
