
import React, { useState, useEffect } from 'react';
import historiaImg from './images/historiaYabuta/historia.png';


const historyImages = [historiaImg];


// Componente de ovo com número dentro
const EggNumber: React.FC<{ number: number }> = ({ number }) => (
  <div className="relative flex-shrink-0" style={{ width: '48px', height: '56px' }}>
    {/* Egg shape - camada externa amarela */}
    <div
      className="absolute inset-0 bg-gradient-to-br from-yabuta-yellow to-amber-400 shadow-md"
      style={{
        width: '42px',
        height: '48px',
        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
      }}
    />
    {/* Número dentro do ovo */}
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-yabuta-dark font-bold text-2xl">{number}</span>
    </div>
    {/* Brilho do ovo */}
    <div
      className="absolute bg-white/40"
      style={{
        width: '11px',
        height: '14px',
        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
        top: '8px',
        left: '12px',
      }}
    />
  </div>
);

const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yabuta-yellow">
    <h3 className="text-lg font-serif text-yabuta-yellow mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{children}</p>
  </div>
);

const About: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % historyImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-yabuta-yellow animate-pulse"></div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-yabuta-dark">Nossa História</h2>
              <div className="w-2 h-2 rounded-full bg-yabuta-yellow animate-pulse"></div>
            </div>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yabuta-yellow to-transparent mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">Uma trajetória de 79 anos dedicada à produção de ovos de qualidade</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-7xl mx-auto">
          <div className="space-y-6 md:space-y-8">
            <div className="group">
              <div className="flex items-start gap-4 p-5 md:p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yabuta-yellow/30">
                <EggNumber  />
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-serif text-yabuta-dark mb-2 flex items-center">
                    Histórico
                    <svg className="w-5 h-5 ml-2 text-yabuta-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">A Yabuta é uma empresa produtora de ovos de qualidade desde <span className="font-bold text-yabuta-yellow">1947</span>. Nossa história é marcada por uma trajetória de pioneirismo e muito trabalho, que se inicia com a criação de 300 aves poedeiras alojadas em um barracão com cobertura de sapé em um rudimentar sistema de produção.</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4 p-5 md:p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yabuta-yellow/30">
                <EggNumber  />
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-serif text-yabuta-dark mb-2 flex items-center">
                    Atualidade
                    <svg className="w-5 h-5 ml-2 text-yabuta-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                    </svg>
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Hoje a empresa possui modernas unidades de produção nos municípios de <span className="font-semibold">Bastos-SP, Rancharia-SP, Queiroz-SP, Rinópolis-SP, Poxoréu-MT, Sinop-MT, Jutiema-MS, Jateí-MS e Angico-TO</span>. Todas elas independentes, cada uma possui a própria Fábrica de Ração e Central de Processamento de Ovos.</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4 p-5 md:p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yabuta-yellow/30">
                <EggNumber  />
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-serif text-yabuta-dark mb-2 flex items-center">
                    Qualidade
                    <svg className="w-5 h-5 ml-2 text-yabuta-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Através dessas unidades conseguimos fornecer a nossos clientes uma linha completa de produtos que atendem os mais exigentes mercados, desde ovos de galinha, ovos "especiais" com alto teor de ômega 3 e vitamina E, ovos de galinha caipira e até ovos de codorna. Todos nossos produtos são produzidos atendendo as mais rigorosas normas de inspeção sanitárias e auditados <span className="font-semibold">Serviço de Inspeção Federal-S.I.F.</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img
                src={historiaImg}
                alt="História Yabuta"
                className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-semibold">Desde 1947</p>
                  <p className="text-2xl font-serif">Tradição e Qualidade</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gradient-to-br from-white to-gray-50 p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-yabuta-yellow group">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-serif text-yabuta-dark mb-2">
                      Visão
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Ser a principal empresa produtora de ovos de qualidade do Brasil, reconhecida pela excelência em seus processos.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-yabuta-yellow group">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-serif text-yabuta-dark mb-2">
                      Missão
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Gerar empregos, renda e ter o compromisso de fornecer alimentos de qualidade e custos acessíveis.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-yabuta-yellow group">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-serif text-yabuta-dark mb-2">
                      Valores
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Ética, honestidade, respeito à Legislação Nacional e responsabilidade socioambiental.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
