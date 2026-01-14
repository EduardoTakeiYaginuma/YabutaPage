
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
  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yabuta-yellow">
    <h3 className="text-2xl font-serif text-yabuta-yellow mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{children}</p>
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-yabuta-dark">Nossa História</h2>
          <div className="w-24 h-1 bg-yabuta-yellow mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-yabuta-dark flex items-center">
                <EggIcon className="mr-4" />
                Histórico
              </h3>
              <p className="text-gray-700 leading-relaxed">A Yabuta é uma empresa produtora de ovos de qualidade desde 1947. Nossa história é marcada por uma trajetória de pioneirismo e muito trabalho, que se inicia com a criação de 300 aves poedeiras alojadas em um barracão com cobertura de sapé em um rudimentar sistema de produção.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-yabuta-dark flex items-center">
                <EggIcon className="mr-4" />
                Atualidade
              </h3>
              <p className="text-gray-700 leading-relaxed">Hoje a empresa possui modernas unidades de produção nos municípios de Bastos-SP, Rancharia-SP, Queiroz-SP, Rinópolis-SP, Poxoréu-MT, Sinop-MT, Jutiema-MS, Jateí-MS e Angico-TO. Todas elas independentes, cada uma possui a própria Fábrica de Ração e Central de Processamento de Ovos.</p>
            </div>
             <div>
              <h3 className="text-2xl font-bold mb-2 text-yabuta-dark flex items-center">
                <EggIcon className="mr-4" />
                Qualidade
              </h3>
              <p className="text-gray-700 leading-relaxed">Através dessas unidades conseguimos fornecer a nossos clientes uma linha completa de produtos que atendem os mais exigentes mercados, desde ovos de galinha, ovos "especiais" com alto teor de ômega 3 e vitamina E, ovos de galinha caipira e até ovos de codorna. Todos nossos produtos são produzidos atendendo as mais rigorosas normas de inspeção sanitárias e auditados Serviço de Inspeção Federal-S.I.F.</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Image Slider */}
            <div className="relative w-full h-64 rounded-lg shadow-xl overflow-hidden">
              {historyImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`História Yabuta ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              {/* Slider indicators */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {historyImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-yabuta-yellow scale-110' : 'bg-white/60 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>
            <InfoCard title="Visão">
              Ser a principal empresa produtora de ovos de qualidade do Brasil. Ser reconhecida pela excelência em seus processos, sempre atenta as inovações tecnológicas e primando pela qualidade no atendimento ao cliente.
            </InfoCard>
            <InfoCard title="Missão">
              Gerar empregos, renda, colaborar com o desenvolvimento do país e ter o compromisso de fornecer alimentos de qualidade e custos acessíveis à população.
            </InfoCard>
            <InfoCard title="Valores">
              Ética, honestidade, respeito à Legislação Nacional e responsabilidade socioambiental.
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
