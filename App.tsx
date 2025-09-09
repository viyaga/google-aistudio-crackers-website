
import React, { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import Footer from './components/Footer';
import { PRODUCTS, WHATSAPP_NUMBER } from './constants';
import type { Product } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<Map<number, number>>(new Map());

  const handleQuantityChange = (productId: number, quantity: number) => {
    setCart(prevCart => {
      const newCart = new Map(prevCart);
      if (quantity > 0) {
        newCart.set(productId, quantity);
      } else {
        newCart.delete(productId);
      }
      return newCart;
    });
  };
  
  return (
    <div className="min-h-screen bg-brand-dark text-brand-light font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-secondary mb-8 animate-fade-in">Our Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product: Product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              quantity={cart.get(product.id) || 0}
              onQuantityChange={handleQuantityChange} 
            />
          ))}
        </div>
      </main>
      <FloatingWhatsAppButton 
        cart={cart}
        products={PRODUCTS}
        whatsappNumber={WHATSAPP_NUMBER}
      />
      <Footer />
    </div>
  );
};

export default App;
