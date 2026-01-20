
import React, { memo, useCallback } from 'react';
import type { Product, ProductVariation } from '../types';

// Imagens dos produtos
import granelImg from './images/products/Granel.png';
import embaladosImg from './images/products/Embalados.png';
import filmadosImg from './images/products/Filmados.png';
import especiaisImg from './images/products/especiais.png';

// Componente em formato de ovo (branco por fora, amarelo por dentro)
const EggIconWhite: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center ${className}`}>
    {/* Egg shape */}
    <div className="relative" style={{ width: '16px', height: '22px', flexShrink: 0 }}>
      {/* White egg background */}
      <span
        className="absolute inset-0 bg-white"
        style={{
          width: '16px',
          height: '22px',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
        }}
      />
      {/* Yellow egg center */}
      <span
        className="absolute bg-yabuta-yellow"
        style={{
          width: '10px',
          height: '14px',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          top: '4px',
          left: '3px',
        }}
      />
    </div>
    {/* White connecting line */}
    <div className="bg-white" style={{ width: '24px', height: '2px' }} />
  </div>
);

const products: Product[] = [
  {
    id: 'granel',
    name: 'Granel',
    image: granelImg,
    generalDescription: 'Os ovos Yabuta são produzidos com o mais alto teor de qualidade para levar saúde à sua família. As embalagens da Yabuta podem ser facilmente recicladas após o consumo dos ovos, colaborando com a preservação do meio ambiente.',
    variations: [
      {
        photo: granelImg,
        primaryPackaging: 'Caixa',
        quantity: '15 dúzias',
        availableTypes: 'Jumbo 2, Jumbão, Jumbo, Extra, Grande, Médio e Pequeno',
        colors: ['branco', 'vermelho'],
      },
      {
        photo: granelImg,
        primaryPackaging: 'Caixa',
        quantity: '30 dúzias',
        availableTypes: 'Jumbo 2, Jumbão, Jumbo, Extra, Grande, Médio e Pequeno',
        colors: ['branco', 'vermelho'],
      },
      {
        photo: granelImg,
        primaryPackaging: 'Cinta',
        quantity: '5 dúzias',
        availableTypes: 'Extra, Grande e Médio',
        colors: ['branco', 'vermelho'],
      }
    ],
  },
  {
    id: 'embalados',
    name: 'Embalados',
    image: embaladosImg,
    generalDescription: 'Nossas embalagens práticas e seguras garantem a integridade e a qualidade dos ovos, ideais para o consumidor final.',
    variations: [
        { photo: embaladosImg, primaryPackaging: 'Estojo', quantity: '6 ovos', availableTypes: 'Grande, Extra', colors: ['branco', 'vermelho'] },
        { photo: embaladosImg, primaryPackaging: 'Estojo Polpa', quantity: '12 ovos', availableTypes: 'Grande, Extra, Jumbo', colors: ['branco', 'vermelho'] },
        { photo: embaladosImg, primaryPackaging: 'Estojo Polpa', quantity: '10 ovos', availableTypes: 'Grande, Extra', colors: ['branco', 'vermelho'] },
        { photo: embaladosImg, primaryPackaging: 'Estojo Isopor', quantity: '12 ovos', availableTypes: 'Grande, Extra', colors: ['branco', 'vermelho'] },
        { photo: embaladosImg, primaryPackaging: 'Estojo PET', quantity: '30 ovos', availableTypes: 'Médio, Pequeno', colors: ['branco', 'vermelho'] },
    ],
  },
  {
    id: 'filmados',
    name: 'Filmados',
    image: filmadosImg,
    generalDescription: 'As opções filmadas oferecem proteção e visibilidade, mantendo o frescor e a qualidade que são a marca da Yabuta.',
    variations: [
        { photo: filmadosImg, primaryPackaging: 'Filmado com tampa', quantity: '30, 20 e 12 ovos', availableTypes: 'Extra, Grande, Médio', colors: ['branco', 'vermelho'] },
        { photo: filmadosImg, primaryPackaging: 'Filmado sem tampa', quantity: '30, 20 e 12 ovos', availableTypes: 'Extra, Grande, Médio', colors: ['branco', 'vermelho'] },
    ],
  },
  {
    id: 'caipira',
    name: 'Caipira',
    image: granelImg,
    generalDescription: 'Produzidos por galinhas criadas livres, nossos ovos caipiras possuem um sabor autêntico e qualidade superior.',
    variations: [
        { photo: granelImg, primaryPackaging: 'Estojo PET', quantity: '10 ovos', availableTypes: 'Caipira', colors: ['vermelho'] },
    ],
  },
  {
    id: 'codorna',
    name: 'Codorna',
    image: embaladosImg,
    generalDescription: 'Pequenos no tamanho mas grandes no sabor e em nutrientes, os ovos de codorna Yabuta são perfeitos para diversas receitas.',
    variations: [
        { photo: embaladosImg, primaryPackaging: 'Estojo PET', quantity: '15 ovos', availableTypes: 'Codorna', colors: ['branco'] },
        { photo: embaladosImg, primaryPackaging: 'Estojo PET', quantity: '30 ovos', availableTypes: 'Codorna', colors: ['branco'] },
    ],
  },
  {
    id: 'especiais',
    name: 'Especiais',
    image: especiaisImg,
    generalDescription: 'Ovos especiais enriquecidos para uma dieta mais saudável e nutritiva, como os com Omega 3.',
    variations: [
        { photo: especiaisImg, primaryPackaging: 'Estojo PET', quantity: '10 ovos', availableTypes: 'Omega 3', colors: ['branco'] },
    ],
  },
];

const ProductCard: React.FC<{ product: Product; onSelect: () => void }> = memo(({ product, onSelect }) => {
  return (
    <div className="group cursor-pointer rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-yabuta-yellow" onClick={onSelect}>
      <div className="overflow-hidden rounded-t-lg relative">
        <div className="absolute top-2 right-2 bg-yabuta-yellow text-yabuta-dark px-3 py-1 rounded-full text-xs font-bold z-10">YABUTA</div>
        <img src={product.image} alt={product.name} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-serif text-yabuta-dark mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 min-h-[60px]">{product.generalDescription.substring(0, 100)}...</p>
        <span className="inline-flex items-center font-bold text-yabuta-yellow group-hover:text-orange-500 transition-colors">
            Ver detalhes
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </span>
      </div>
    </div>
  );
});

const Products: React.FC<{ onProductSelect: (product: Product) => void }> = ({ onProductSelect }) => {
  return (
    <section id="products" className="py-12 md:py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-yabuta-dark px-2">Nossos Produtos</h2>
          <div className="w-24 md:w-32 h-1.5 md:h-2 bg-gradient-to-r from-yabuta-yellow via-orange-400 to-yabuta-yellow mx-auto mt-3 md:mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={() => onProductSelect(product)} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Products;
