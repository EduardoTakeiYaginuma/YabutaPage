
import React from 'react';

const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yabuta-yellow">
    <h3 className="text-2xl font-serif text-yabuta-yellow mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{children}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-yabuta-dark">Nossa História, Nosso Orgulho</h2>
          <div className="w-24 h-1 bg-yabuta-yellow mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-yabuta-dark flex items-center">
                <span className="bg-yabuta-yellow h-3 w-3 rounded-full mr-3"></span>
                Histórico
              </h3>
              <p className="text-gray-700 leading-relaxed">A Yabuta é uma empresa produtora de ovos de qualidade desde 1947. Nossa história é marcada por uma trajetória de pioneirismo e muito trabalho, que se inicia com a criação de 300 aves poedeiras alojadas em um barracão com cobertura de sapé em um rudimentar sistema de produção.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-yabuta-dark flex items-center">
                <span className="bg-yabuta-yellow h-3 w-3 rounded-full mr-3"></span>
                Atualidade
              </h3>
              <p className="text-gray-700 leading-relaxed">Hoje a empresa possui modernas unidades de produção nos municípios de Bastos-SP, Rancharia-SP, Queiroz-SP, Rinópolis-SP, Poxoréu-MT, Sinop-MT, Jutiema-MS, Jateí-MS e Angico-TO. Todas elas independentes, cada uma possui a própria Fábrica de Ração e Central de Processamento de Ovos.</p>
            </div>
             <div>
              <h3 className="text-2xl font-bold mb-2 text-yabuta-dark flex items-center">
                <span className="bg-yabuta-yellow h-3 w-3 rounded-full mr-3"></span>
                Qualidade
              </h3>
              <p className="text-gray-700 leading-relaxed">Através dessas unidades conseguimos fornecer a nossos clientes uma linha completa de produtos que atendem os mais exigentes mercados, desde ovos de galinha, ovos "especiais" com alto teor de ômega 3 e vitamina E, ovos de galinha caipira e até ovos de codorna. Todos nossos produtos são produzidos atendendo as mais rigorosas normas de inspeção sanitárias e auditados Serviço de Inspeção Federal-S.I.F.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="w-full h-64 rounded-lg shadow-xl overflow-hidden">
                <img src="https://www.yabuta.com.br/wp-content/uploads/2016/11/historia_yabuta.jpg" alt="História Yabuta" className="w-full h-full object-cover" />
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
