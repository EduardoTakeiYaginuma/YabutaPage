
import React, { useState } from 'react';
import type { Product, ProductVariation } from '../types';

const EggColor: React.FC<{ color: 'branco' | 'vermelho' }> = ({ color }) => (
  <div className="flex items-center space-x-2 min-w-0">
    <div className="relative flex-shrink-0">
      <span 
        className={`block h-6 w-6 rounded-full border-2 shadow-sm ${color === 'branco' ? 'bg-white border-gray-300' : 'border-[#D89553]'}`}
        style={color === 'vermelho' ? { background: 'linear-gradient(to bottom right, #F2A763, #D89553)' } : {}}
      ></span>
      {color === 'branco' && (
        <span className="absolute inset-0 h-6 w-6 rounded-full bg-gradient-to-br from-white to-gray-100 pointer-events-none"></span>
      )}
    </div>
    <span className="capitalize text-sm font-medium text-gray-700 whitespace-nowrap">{color}</span>
  </div>
);

const VariationCard: React.FC<{ variation: ProductVariation; index: number }> = ({ variation, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-yabuta-yellow/30">
      {/* Header com gradiente */}
      <div className="bg-gradient-to-r from-yabuta-yellow to-amber-400 p-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full -translate-y-10 translate-x-10"></div>
        </div>
        <div className="relative z-10 flex items-center justify-between">
          <h3 className="font-bold text-xl text-yabuta-dark">{variation.primaryPackaging}</h3>
          <div className="bg-yabuta-dark/20 rounded-full px-3 py-1">
            <span className="text-yabuta-dark font-bold text-sm">#{index + 1}</span>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6 space-y-4">
        {/* Quantidade com ícone */}
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="bg-yabuta-yellow/20 p-2 rounded-lg">
              <svg className="w-5 h-6" viewBox="0 0 20 24" fill="none">
                <ellipse cx="10" cy="12" rx="8" ry="11" fill="#FFC72C" stroke="#3A3A3A" strokeWidth="1.5"/>
                <ellipse cx="10" cy="10" rx="4" ry="5" fill="white" opacity="0.4"/>
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Quantidade</p>
              <p className="text-base text-yabuta-dark font-bold">{variation.quantity}</p>
            </div>
          </div>
        </div>

        {/* Tipos disponíveis */}
        <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
          <div className="flex items-start space-x-2 mb-2">
            <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <div className="flex-1">
              <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide mb-1">Tipos disponíveis</p>
              <p className="text-sm text-gray-700 leading-relaxed">{variation.availableTypes}</p>
            </div>
          </div>
        </div>

        {/* Cores disponíveis */}
        <div className="pt-4 border-t-2 border-dashed border-gray-200">
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-3">Cores disponíveis</p>
          <div className="flex flex-wrap gap-3">
            {variation.colors.map(color => (
              <div key={color} className="flex-shrink-0 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-yabuta-yellow transition-colors">
                <EggColor color={color} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer com badge */}
      <div className="px-6 pb-4">
        <div className="flex items-center justify-center text-xs text-gray-500 space-x-2">
          <svg className="w-4 h-4 text-yabuta-yellow" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span className="font-medium">Produto Yabuta</span>
        </div>
      </div>
    </div>
  );
};

const ProductDetail: React.FC<{ product: Product; onBack: () => void }> = ({ product, onBack }) => {
  return (
    <section className="py-12 md:py-20 pt-24 md:pt-32 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Botão voltar melhorado */}
        <button
          onClick={onBack}
          className="mb-8 group inline-flex items-center bg-gradient-to-r from-yabuta-yellow to-amber-400 text-yabuta-dark font-bold px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Voltar para todos os produtos
        </button>

        {/* Header do produto melhorado */}
        <header className="mb-12 md:mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-2 border-yabuta-yellow/20">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              {/* Imagem do produto */}
              <div className="md:w-1/3 w-full p-8 md:p-12 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-yabuta-yellow/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="relative rounded-2xl shadow-xl object-cover w-full max-w-sm transform group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>

              {/* Informações do produto */}
              <div className="md:w-2/3 w-full p-8 md:p-12">
                <div className="inline-block mb-4">
                  <div className="bg-yabuta-yellow/20 text-yabuta-dark px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                    Linha {product.name}
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-yabuta-dark mb-6 leading-tight">
                  {product.name}
                </h1>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                  {product.generalDescription}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-1 w-16 bg-gradient-to-r from-yabuta-yellow to-amber-400 rounded-full"></div>
                  <span className="text-sm text-gray-500 font-semibold">Qualidade Yabuta desde 1947</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Título da seção de variações */}
        {product.variations.length > 0 && (
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-yabuta-dark mb-3">Variações Disponíveis</h2>
            <p className="text-gray-600">Escolha a embalagem ideal para suas necessidades</p>
          </div>
        )}

        {/* Grid de variações */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {product.variations.length > 0 ? (
                product.variations.map((variation, index) => (
                    <VariationCard key={index} variation={variation} index={index} />
                ))
            ) : (
                <div className="md:col-span-2 lg:col-span-3 text-center py-20 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-dashed border-gray-300">
                    <div className="max-w-md mx-auto">
                        <div className="bg-yabuta-yellow/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-10 h-10 text-yabuta-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p className="text-gray-600 text-lg font-semibold">Mais detalhes sobre este produto em breve.</p>
                        <p className="text-gray-500 text-sm mt-2">Estamos preparando informações completas para você.</p>
                    </div>
                </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
