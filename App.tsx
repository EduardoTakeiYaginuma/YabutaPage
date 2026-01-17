
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
import SideNav from './components/SideNav';
import backgroundImage from './components/images/background/background.png';

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
    <div className="relative min-h-screen text-yabuta-dark font-sans">
      {/* Background image */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
      <Header variant={selectedProduct ? 'product-detail' : 'default'} />
      {!selectedProduct && <SideNav />}
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
    </div>
  );
};

export default App;