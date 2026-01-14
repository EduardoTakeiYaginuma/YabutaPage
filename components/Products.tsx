
import React from 'react';
import type { Product, ProductVariation } from '../types';

const products: Product[] = [
  {
    id: 'granel',
    name: 'Granel',
    image: 'https://www.yabuta.com.br/wp-content/uploads/2016/11/granel.jpg',
    generalDescription: 'Os ovos Yabuta são produzidos com o mais alto teor de qualidade para levar saúde à sua família. As embalagens da Yabuta podem ser facilmente recicladas após o consumo dos ovos, colaborando com a preservação do meio ambiente.',
    variations: [
      {
        photo: 'https://via.placeholder.com/300x200/F5F5F5/3A3A3A?text=Caixa+15+dúzias',
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
    image: 'https://www.yabuta.com.br/wp-content/uploads/2016/11/embalados.jpg',
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
    image: 'https://www.yabuta.com.br/wp-content/uploads/2016/11/filmados.jpg',
    generalDescription: 'As opções filmadas oferecem proteção e visibilidade, mantendo o frescor e a qualidade que são a marca da Yabuta.',
    variations: [
        { photo: 'https://via.placeholder.com/300x200/F5F5F5/3A3A3A?text=Filmado+com+tampa', primaryPackaging: 'Filmado com tampa', quantity: '30, 20 e 12 ovos', availableTypes: 'Extra, Grande, Médio', colors: ['branco', 'vermelho'] },
        { photo: 'https://via.placeholder.com/300x200/F5F5F5/3A3A3A?text=Filmado+sem+tampa', primaryPackaging: 'Filmado sem tampa', quantity: '30, 20 e 12 ovos', availableTypes: 'Extra, Grande, Médio', colors: ['branco', 'vermelho'] },
    ],
  },
  {
    id: 'caipira',
    name: 'Caipira',
    image: 'https://www.yabuta.com.br/wp-content/uploads/2016/11/caipira.jpg',
    generalDescription: 'Produzidos por galinhas criadas livres, nossos ovos caipiras possuem um sabor autêntico e qualidade superior.',
    variations: [
        { photo: 'https://via.placeholder.com/300x200/F5F5F5/3A3A3A?text=Estojo+PET+10', primaryPackaging: 'Estojo PET', quantity: '10 ovos', availableTypes: 'Caipira', colors: ['vermelho'] },
    ],
  },
  {
    id: 'codorna',
    name: 'Codorna',
    image: 'https://www.yabuta.com.br/wp-content/uploads/2016/11/codorna.jpg',
    generalDescription: 'Pequenos no tamanho mas grandes no sabor e em nutrientes, os ovos de codorna Yabuta são perfeitos para diversas receitas.',
    variations: [
        { photo: 'https://via.placeholder.com/300x200/F5F5F5/3A3A3A?text=Estojo+PET+15', primaryPackaging: 'Estojo PET', quantity: '15 ovos', availableTypes: 'Codorna', colors: ['branco'] },
        { photo: 'https://via.placeholder.com/300x200/F5F5F5/3A3A3A?text=Estojo+PET+30', primaryPackaging: 'Estojo PET', quantity: '30 ovos', availableTypes: 'Codorna', colors: ['branco'] },
    ],
  },
];

const ProductCard: React.FC<{ product: Product; onSelect: () => void }> = ({ product, onSelect }) => {
  const getVariationDescription = (variation: ProductVariation) => {
    if (product.id === 'granel') {
        return variation.primaryPackaging === 'Caixa' 
            ? `Caixa de ${variation.quantity}` 
            : `${variation.primaryPackaging} ${variation.quantity}`;
    }
    return `${variation.primaryPackaging} (${variation.quantity})`;
  };

  return (
    <div className="group cursor-pointer" onClick={onSelect}>
      <div className="bg-white p-1.5 rounded-lg shadow-lg mb-6 overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      </div>

      <div className="px-1 text-left">
        <div className="flex items-center mb-3">
            <div className="flex items-center">
                <div className="w-6 h-6 rounded-full border-2 border-white"></div>
                <div className="w-4 h-px bg-white -ml-1"></div>
            </div>
            <h3 className="text-xl font-semibold uppercase tracking-widest text-white ml-3">{product.name}</h3>
        </div>
        
        <div className="pl-10">
          <ul className="space-y-1 text-yabuta-dark min-h-[100px]">
              {product.variations.length > 0 ? (
                  product.variations.slice(0, 4).map((v, i) => (
                      <li key={i}>
                          &middot; {getVariationDescription(v)}
                      </li>
                  ))
              ) : (
                  <li className="text-gray-100 italic">&middot; Detalhes em breve.</li>
              )}
          </ul>

          <p className="mt-3 font-bold text-yabuta-dark group-hover:underline">
              veja mais
          </p>
        </div>
      </div>
    </div>
  );
};

const Products: React.FC<{ onProductSelect: (product: Product) => void }> = ({ onProductSelect }) => {
  return (
    <section id="products" className="py-20 bg-yabuta-yellow">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white">Produtos</h2>
          <div className="w-24 h-1 bg-white opacity-50 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-8 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={() => onProductSelect(product)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
