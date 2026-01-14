
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import type { Product } from './types';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-yabuta-light text-yabuta-dark font-sans">
      <Header />
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} onBack={handleBackToProducts} />
      ) : (
        <main>
          <Hero />
          <About />
          <Products onProductSelect={handleProductSelect} />
          <Locations />
          <Contact />
        </main>
      )}
      <Footer />
    </div>
  );
};

export default App;