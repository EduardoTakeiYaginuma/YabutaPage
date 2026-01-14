
import React, { useState } from 'react';

const locationDetails = {
    SP: {
        name: 'São Paulo',
        cities: ['Bastos', 'Rancharia', 'Queiroz', 'Rinópolis'],
        partners: [
            { name: 'Distribuidor Parceiro Alpha', location: 'Grande São Paulo' },
            { name: 'Supermercados Associados SP', location: 'Interior' }
        ]
    },
    MT: {
        name: 'Mato Grosso',
        cities: ['Poxoréo', 'Sinop'],
        partners: [
            { name: 'Parceiro Logístico Centro-Oeste', location: 'Cuiabá e Região' },
            { name: 'Rede Varejista Boreal', location: 'Norte do Estado' }
        ]
    },
    MS: {
        name: 'Mato Grosso do Sul',
        cities: ['Ivinhema', 'Jateí'],
        partners: [
            { name: 'Cooperativa Agropecuária Sul-Mato-Grossense', location: 'Dourados' },
        ]
    },
    TO: {
        name: 'Tocantins',
        cities: ['Angico'],
        partners: [
            { name: 'Fornecedor Norte Premium', location: 'Palmas' },
            { name: 'Atacadista Tocantinense', location: 'Araguaína' }
        ]
    }
};

// FIX: Removed duplicate 'typeof' which was causing a syntax error.
type StateKey = keyof typeof locationDetails;

const allCities = [
    { name: 'Bastos', state: 'SP' },
    { name: 'Rancharia', state: 'SP' },
    { name: 'Queiroz', state: 'SP' },
    { name: 'Rinópolis', state: 'SP' },
    { name: 'Poxoréo', state: 'MT' },
    { name: 'Sinop', state: 'MT' },
    { name: 'Ivinhema', state: 'MS' },
    { name: 'Jateí', state: 'MS' },
    { name: 'Angico', state: 'TO' },
];

const YabutaLogoLightBg: React.FC = () => (
    <div className="flex items-center space-x-2">
        <div className="bg-yabuta-yellow p-1.5 rounded-md">
            <span className="text-yabuta-dark font-bold text-xl font-serif">yb</span>
        </div>
        <div>
           <span className="text-xl font-bold tracking-wider text-yabuta-dark">YABUTA</span>
           <p className="text-xs text-gray-500 -mt-1 ml-px">desde 1947</p>
        </div>
    </div>
);

const BrazilMap: React.FC<{ onStateClick: (state: StateKey) => void; selectedState: StateKey | null }> = ({ onStateClick, selectedState }) => {
    const states: { id: StateKey, d: string, textPos: {x: number, y: number} }[] = [
        { id: 'MT', d: "M174.6,223.3 C173.8,247.9 176.9,286.4 176.9,286.4 L278.9,293.4 L282.7,222.6 C243.3,223.3 175,222.9 174.6,223.3Z", textPos: { x: 225, y: 260 } },
        { id: 'MS', d: "M176.9,289.4 L280.9,296.4 L295,373.4 L179.9,363.4 Z", textPos: { x: 230, y: 330 } },
        { id: 'SP', d: "M282.9,298.4 L350.9,322.4 L325.9,380.4 L297,375.4 Z", textPos: { x: 310, y: 350 } },
        { id: 'TO', d: "M284,152.1 L338,153 L342.3,219.8 C342.3,219.8 284.7,220.1 284,152.1Z", textPos: { x: 310, y: 190 } }
    ];

    const fillerShapes = [
      "M 173 221 C 120 180, 160 100, 200 80 L 280 90 L 282 150 L 174 218 Z",
      "M 284 90 L 350 90 L 348 150 L 284 149 Z",
      "M 283 225 L 340 222 L 348 295 L 283 294 Z",
      "M 297 377 L 325 382 L 310 430 L 260 420 Z"
    ];

    return (
        <svg viewBox="100 60 300 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-md mx-auto" aria-label="Mapa do Brasil com estados de atuação da Yabuta em destaque">
            <g>
                {fillerShapes.map((d, i) => (
                    <path key={i} d={d} className="fill-gray-200" />
                ))}
                {states.map(state => (
                    <path
                        key={state.id}
                        d={state.d}
                        onClick={() => onStateClick(state.id)}
                        className={`fill-yabuta-brown cursor-pointer transition-all duration-300 hover:opacity-80 ${selectedState === state.id ? 'stroke-yabuta-yellow stroke-2' : 'stroke-white stroke-1'}`}
                    />
                ))}
            </g>
             {states.map(state => (
                <text key={state.id} x={state.textPos.x} y={state.textPos.y} fontFamily="Montserrat" fontSize="12" fill="white" className="font-bold pointer-events-none">{state.id}</text>
             ))}
        </svg>
    );
};

const InitialContent: React.FC = () => (
    <div className="w-full">
        <div className="bg-yabuta-yellow p-4 text-center">
            <h3 className="font-bold text-yabuta-dark tracking-wider">ESCOLHA UM ESTADO</h3>
        </div>
        <div className="p-6">
            <p className="text-yabuta-dark mb-4 text-sm leading-relaxed">Clique em um estado do mapa e veja mais informações sobre nossas unidades.</p>
            <h4 className="font-bold text-yabuta-yellow tracking-wider mb-4">ESTAMOS PRESENTES EM:</h4>
            
            <div className="grid grid-cols-3 gap-4 my-4">
                <div className="col-span-1 space-y-4">
                    <div className="bg-gray-100 p-4 text-center rounded-lg">
                        <p className="text-3xl font-serif text-yabuta-yellow">4</p>
                        <p className="text-xs text-gray-600">estados</p>
                    </div>
                    <div className="bg-gray-100 p-4 text-center rounded-lg">
                        <p className="text-3xl font-serif text-yabuta-yellow">9</p>
                        <p className="text-xs text-gray-600">cidades</p>
                    </div>
                </div>
                <div className="col-span-2 bg-gray-100 p-4 rounded-lg text-sm">
                    <ul>
                        {allCities.map(city => (
                            <li key={city.name} className="text-yabuta-dark mb-1">
                                {city.name} - <span className="font-semibold text-yabuta-yellow">{city.state}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="bg-gray-100 p-4 mt-4 flex justify-center items-center rounded-lg">
                <YabutaLogoLightBg />
            </div>
        </div>
    </div>
);

const StateDetails: React.FC<{ stateKey: StateKey; onBack: () => void }> = ({ stateKey, onBack }) => {
    const data = locationDetails[stateKey];
    return (
        <div className="w-full">
            <div className="bg-yabuta-yellow p-4 text-center">
                <h3 className="font-bold text-yabuta-dark tracking-wider uppercase">{data.name}</h3>
            </div>
            <div className="p-6">
                <div className="space-y-6">
                    <div>
                        <h4 className="text-lg font-bold text-yabuta-dark mb-2">Cidades com Unidades:</h4>
                        <p className="text-gray-700 bg-gray-100 p-3 rounded-lg">{data.cities.join(', ')}</p>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                        <h4 className="text-lg font-bold text-yabuta-dark mb-3">Parceiros e Distribuidores (Exemplos):</h4>
                        <div className="space-y-3">
                            {data.partners.map(partner => (
                                <div key={partner.name} className="bg-gray-100 p-3 rounded-lg">
                                    <p className="font-semibold text-yabuta-dark">{partner.name}</p>
                                    <p className="text-sm text-gray-500">{partner.location}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button onClick={onBack} className="mt-6 text-yabuta-dark font-bold hover:text-yabuta-yellow transition-colors">
                    &larr; Voltar ao mapa
                </button>
            </div>
        </div>
    );
};


const Locations: React.FC = () => {
    const [selectedState, setSelectedState] = useState<StateKey | null>(null);

  return (
    <section 
      id="locations" 
      className="py-20 relative bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599921867828-6395b37645dd?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-yabuta-dark bg-opacity-80"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white">Unidades</h2>
          <div className="w-24 h-1 bg-yabuta-yellow mt-4"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 bg-white p-4 sm:p-8 rounded-lg shadow-2xl">
                <BrazilMap onStateClick={setSelectedState} selectedState={selectedState} />
            </div>
            <div className="md:col-span-2 bg-white rounded-lg shadow-2xl min-h-[400px] flex items-center transition-all duration-500 ease-in-out">
                {!selectedState ? (
                    <InitialContent />
                ) : (
                    <StateDetails stateKey={selectedState} onBack={() => setSelectedState(null)} />
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
