
import React from 'react';
import type { Product, ProductVariation } from '../types';

const EggColor: React.FC<{ color: 'branco' | 'vermelho' }> = ({ color }) => (
  <div className="flex items-center space-x-2">
    <span className={`h-4 w-4 rounded-full border border-gray-300 ${color === 'branco' ? 'bg-white' : 'bg-yabuta-brown'}`}></span>
    <span className="capitalize text-sm">{color}</span>
  </div>
);

const VariationCard: React.FC<{ variation: ProductVariation }> = ({ variation }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-yabuta-yellow">
    <div className="p-6">
      <h3 className="font-bold text-lg text-yabuta-dark mb-4">{variation.primaryPackaging}</h3>
      <dl>
        <div className="flex justify-between py-2 border-b">
          <dt className="font-semibold text-gray-700">Embalagem</dt>
          <dd className="text-gray-900 text-right">{variation.primaryPackaging}</dd>
        </div>
        <div className="flex justify-between py-2 border-b">
          <dt className="font-semibold text-gray-700">Quantidade</dt>
          <dd className="text-gray-900 text-right">{variation.quantity}</dd>
        </div>
        <div className="py-2 border-b">
          <dt className="font-semibold text-gray-700 mb-1">Tipos disponíveis</dt>
          <dd className="text-gray-900 text-sm">{variation.availableTypes}</dd>
        </div>
        <div className="flex justify-between items-center py-2">
          <dt className="font-semibold text-gray-700">Cores</dt>
          <dd className="flex space-x-4">
            {variation.colors.map(color => <EggColor key={color} color={color} />)}
          </dd>
        </div>
      </dl>
    </div>
  </div>
);

const ProductDetail: React.FC<{ product: Product; onBack: () => void }> = ({ product, onBack }) => {
  return (
    <section className="py-20 pt-32 bg-yabuta-light min-h-screen">
      <div className="container mx-auto px-6">
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center bg-yabuta-yellow text-white font-bold px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Voltar para todos os produtos
        </button>

        <header className="mb-16 flex flex-col md:flex-row items-center md:space-x-12 bg-yabuta-yellow/10 p-8 rounded-lg">
          <div className="md:w-1/4 w-full mb-8 md:mb-0">
            <img src={product.image} alt={product.name} className="rounded-lg shadow-lg object-cover w-full" />
          </div>
          <div className="md:w-3/4 w-full text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-serif text-yabuta-dark">{product.name}</h1>
            <p className="text-lg text-gray-600 mt-4">{product.generalDescription}</p>
            <div className="w-24 h-1 bg-yabuta-yellow mt-6 mx-auto md:mx-0"></div>
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.variations.length > 0 ? (
                product.variations.map((variation, index) => (
                    <VariationCard key={index} variation={variation} />
                ))
            ) : (
                <div className="md:col-span-2 lg:col-span-3 text-center py-16 bg-white rounded-lg shadow-md">
                    <p className="text-gray-600 text-lg">Mais detalhes sobre este produto em breve.</p>
                </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
