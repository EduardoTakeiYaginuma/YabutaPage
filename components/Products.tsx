
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
        photo: 'https://via.placeholder.com/300x200/F5F5F5/3A3A3A?text=Caixa+30+dúzias',
        primaryPackaging: 'Caixa',
        quantity: '30 dúzias',
        availableTypes: 'Jumbo 2, Jumbão, Jumbo, Extra, Grande, Médio e Pequeno',
        colors: ['branco', 'vermelho'],
      },
      {
        photo: 'https://via.placeholder.com/300x200/F5F5F5/3A3A3A?text=Cinta+5+dúzias',
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
        { photo: 'https://via.placeholder.com/300x200/F5F5F5/3A3A3A?text=Estojo+6+ovos', primaryPackaging: 'Estojo', quantity: '6 ovos', availableTypes: 'Grande, Extra', colors: ['branco', 'vermelho'] },
        { photo: 'https://via.placeholder.com/300x200/F5F5F5/3A3A3A?text=Estojo+Polpa+12', primaryPackaging: 'Estojo Polpa', quantity: '12 ovos', availableTypes: 'Grande, Extra, Jumbo', colors: ['branco', 'vermelho'] },
        { photo: 'https://via.placeholder.com/300x200/F5F5F5/3A3A3A?text=Estojo+Polpa+10', primaryPackaging: 'Estojo Polpa', quantity: '10 ovos', availableTypes: 'Grande, Extra', colors: ['branco', 'vermelho'] },
        { photo: 'https://via.placeholder.com/300x200/F5F5F5/3A3A3A?text=Estojo+Isopor+12', primaryPackaging: 'Estojo Isopor', quantity: '12 ovos', availableTypes: 'Grande, Extra', colors: ['branco', 'vermelho'] },
        { photo: 'https://via.placeholder.com/300x200/F5F5F5/3A3A3A?text=Estojo+PET+30', primaryPackaging: 'Estojo PET', quantity: '30 ovos', availableTypes: 'Médio, Pequeno', colors: ['branco', 'vermelho'] },
    ],
  },
  {
    id: 'filmados',
    name: 'Filmados',
    image: filmadosImg,
    generalDescription: 'As opções filmadas oferecem proteção e visibilidade, mantendo o frescor e a qualidade que são a marca da Yabuta.',
    variations: [
        { photo: 'https://via.placeholder.com/300x200/F5F5F5/3A3A3A?text=Filmado+com+tampa', primaryPackaging: 'Filmado com tampa', quantity: '30, 20 e 12 ovos', availableTypes: 'Extra, Grande, Médio', colors: ['branco', 'vermelho'] },
        { photo: 'https://via.placeholder.com/300x200/F5F5F5/3A3A3A?text=Filmado+sem+tampa', primaryPackaging: 'Filmado sem tampa', quantity: '30, 20 e 12 ovos', availableTypes: 'Extra, Grande, Médio', colors: ['branco', 'vermelho'] },
    ],
  },
  {
    id: 'caipira',
    name: 'Caipira',
    image: granelImg,
    generalDescription: 'Produzidos por galinhas criadas livres, nossos ovos caipiras possuem um sabor autêntico e qualidade superior.',
    variations: [
        { photo: 'https://via.placeholder.com/300x200/F5F5F5/3A3A3A?text=Estojo+PET+10', primaryPackaging: 'Estojo PET', quantity: '10 ovos', availableTypes: 'Caipira', colors: ['vermelho'] },
    ],
  },
  {
    id: 'codorna',
    name: 'Codorna',
    image: embaladosImg,
    generalDescription: 'Pequenos no tamanho mas grandes no sabor e em nutrientes, os ovos de codorna Yabuta são perfeitos para diversas receitas.',
    variations: [
        { photo: 'https://via.placeholder.com/300x200/F5F5F5/3A3A3A?text=Estojo+PET+15', primaryPackaging: 'Estojo PET', quantity: '15 ovos', availableTypes: 'Codorna', colors: ['branco'] },
        { photo: 'https://via.placeholder.com/300x200/F5F5F5/3A3A3A?text=Estojo+PET+30', primaryPackaging: 'Estojo PET', quantity: '30 ovos', availableTypes: 'Codorna', colors: ['branco'] },
    ],
  },
  {
    id: 'especiais',
    name: 'Especiais',
    image: filmadosImg,
    generalDescription: 'Ovos especiais enriquecidos para uma dieta mais saudável e nutritiva, como os com Omega 3.',
    variations: [
        { photo: 'https://via.placeholder.com/300x200/E5E5E5/3A3A3A?text=Omega+3+Ovo', primaryPackaging: 'Estojo PET', quantity: '10 ovos', availableTypes: 'Omega 3', colors: ['branco'] },
    ],
  },
];

const ProductCard: React.FC<{ product: Product; onSelect: () => void }> = memo(({ product, onSelect }) => {
  const getVariationDescription = useCallback((variation: ProductVariation) => {
    if (product.id === 'granel') {
        return variation.primaryPackaging === 'Caixa'
            ? `Caixa de ${variation.quantity}`
            : `${variation.primaryPackaging} ${variation.quantity}`;
    }
    return `${variation.primaryPackaging} (${variation.quantity})`;
  }, [product.id]);

  return (
    <div className="group cursor-pointer" onClick={onSelect}>
      <div className="bg-white p-1.5 rounded-lg shadow-lg mb-6 overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      </div>

      <div className="px-1 text-left">
        <div className="flex items-center mb-3">
            <EggIconWhite className="mr-4" />
            <h3 className="text-xl font-semibold uppercase tracking-widest text-white">{product.name}</h3>
        </div>
        
        <div className="pl-10">
          <div className="space-y-1 text-yabuta-dark min-h-[100px]">
              {product.variations.length > 0 ? (
                  <p>
                      &middot; {product.variations.slice(0, 4).map(v => getVariationDescription(v)).join(', ')}
                  </p>
              ) : (
                  <p className="text-gray-100 italic">&middot; Detalhes em breve.</p>
              )}
          </div>

          <p className="mt-3 font-bold text-yabuta-dark group-hover:underline">
              veja mais
          </p>
        </div>
      </div>
    </div>
  );
});

const Products: React.FC<{ onProductSelect: (product: Product) => void }> = ({ onProductSelect }) => {
  return (
    <section id="products" className="py-20 bg-yabuta-yellow">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white">Produtos</h2>
          <div className="w-24 h-1 bg-white opacity-50 mx-auto mt-4"></div>
        </div>

        <div className="flex gap-8 overflow-x-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={() => onProductSelect(product)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
