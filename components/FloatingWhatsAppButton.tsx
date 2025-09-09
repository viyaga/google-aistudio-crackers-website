import React from 'react';
import type { Product } from '../types';
import WhatsAppIcon from './icons/WhatsAppIcon';

interface FloatingWhatsAppButtonProps {
  cart: Map<number, number>;
  products: Product[];
  whatsappNumber: string;
}

const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({ cart, products, whatsappNumber }) => {
  // Fix: Explicitly typed the parameters of the reduce function to resolve a TypeScript type inference issue.
  const totalItems = Array.from(cart.values()).reduce((sum: number, quantity: number) => sum + quantity, 0);

  const handleOrder = () => {
    if (cart.size === 0) return;

    let message = "Hello Sparkle Crackers! I would like to place an order for the following items:\n\n";
    let totalAmount = 0;

    cart.forEach((quantity, productId) => {
      const product = products.find(p => p.id === productId);
      if (product) {
        const itemTotal = product.price * quantity;
        totalAmount += itemTotal;
        message += `*${product.name}*\n`;
        message += `  - Quantity: ${quantity}\n`;
        message += `  - Price: ₹${product.price} x ${quantity} = ₹${itemTotal}\n\n`;
      }
    });

    message += `*Total Amount: ₹${totalAmount}*\n\n`;
    message += "Please confirm the availability and provide payment details.";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  if (totalItems === 0) {
    return null;
  }

  return (
    <button
      onClick={handleOrder}
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-green-500 z-50 flex items-center gap-3"
    >
      <WhatsAppIcon />
      <div className="flex flex-col items-start">
        <span className="font-bold text-lg leading-tight">Order on WhatsApp</span>
        <span className="text-sm leading-tight">{totalItems} items in cart</span>
      </div>
    </button>
  );
};

export default FloatingWhatsAppButton;