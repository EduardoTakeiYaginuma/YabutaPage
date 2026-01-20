
import React, { useState, useEffect } from 'react';
import historiaImg from './images/historiaYabuta/historia.png';


const historyImages = [historiaImg];


const EggIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center ${className}`}>
    {/* Egg shape */}
    <div className="relative" style={{ width: '16px', height: '20px', flexShrink: 0 }}>
      {/* Yellow egg background */}
      <span
        className="absolute inset-0 bg-yabuta-yellow"
        style={{
          width: '16px',
          height: '22px',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
        }}
      />
      {/* White egg front (smaller) */}
      <span
        className="absolute bg-white"
        style={{
          width: '10px',
          height: '14px',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          top: '4px',
          left: '3px',
        }}
      />
    </div>
    {/* Yellow connecting line */}
    <div className="bg-yabuta-yellow" style={{ width: '24px', height: '2px' }} />
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
    <section id="about" className="py-12 bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-serif text-yabuta-dark">Nossa História</h2>
          <div className="w-24 h-1.5 bg-yabuta-yellow mx-auto mt-3 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <span className="flex items-center justify-center h-7 w-7 rounded-full bg-yabuta-yellow text-yabuta-dark font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-xl font-serif text-yabuta-dark mb-1">Histórico</h3>
                <p className="text-gray-600 text-sm leading-relaxed">A Yabuta é uma empresa produtora de ovos de qualidade desde 1947. Nossa história é marcada por uma trajetória de pioneirismo e muito trabalho, que se inicia com a criação de 300 aves poedeiras alojadas em um barracão com cobertura de sapé em um rudimentar sistema de produção.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <span className="flex items-center justify-center h-7 w-7 rounded-full bg-yabuta-yellow text-yabuta-dark font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-xl font-serif text-yabuta-dark mb-1">Atualidade</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Hoje a empresa possui modernas unidades de produção nos municípios de Bastos-SP, Rancharia-SP, Queiroz-SP, Rinópolis-SP, Poxoréu-MT, Sinop-MT, Jutiema-MS, Jateí-MS e Angico-TO. Todas elas independentes, cada uma possui a própria Fábrica de Ração e Central de Processamento de Ovos.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <span className="flex items-center justify-center h-7 w-7 rounded-full bg-yabuta-yellow text-yabuta-dark font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-xl font-serif text-yabuta-dark mb-1">Qualidade</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Através dessas unidades conseguimos fornecer a nossos clientes uma linha completa de produtos que atendem os mais exigentes mercados, desde ovos de galinha, ovos "especiais" com alto teor de ômega 3 e vitamina E, ovos de galinha caipira e até ovos de codorna. Todos nossos produtos são produzidos atendendo as mais rigorosas normas de inspeção sanitárias e auditados Serviço de Inspeção Federal-S.I.F.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-yabuta-yellow">
              <h3 className="text-lg font-serif text-yabuta-dark mb-2">Visão</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Ser a principal empresa produtora de ovos de qualidade do Brasil, reconhecida pela excelência em seus processos.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-yabuta-yellow">
              <h3 className="text-lg font-serif text-yabuta-dark mb-2">Missão</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Gerar empregos, renda e ter o compromisso de fornecer alimentos de qualidade e custos acessíveis.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-yabuta-yellow">
              <h3 className="text-lg font-serif text-yabuta-dark mb-2">Valores</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Ética, honestidade, respeito à Legislação Nacional e responsabilidade socioambiental.</p>
            </div>
            <div className="mt-2">
              <img
                src={historiaImg}
                alt="História Yabuta"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
