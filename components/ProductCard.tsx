
import React from 'react';
import type { Product } from '../types';
import PlusIcon from './icons/PlusIcon';
import MinusIcon from './icons/MinusIcon';

interface ProductCardProps {
  product: Product;
  quantity: number;
  onQuantityChange: (productId: number, newQuantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, quantity, onQuantityChange }) => {
  const handleIncrement = () => {
    onQuantityChange(product.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      onQuantityChange(product.id, quantity - 1);
    }
  };

  return (
    <div className="bg-gray-800/50 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-700 animate-fade-in">
      <img className="w-full h-48 object-cover" src={product.imageUrl} alt={product.name} />
      <div className="p-4">
        <h3 className="text-xl font-bold text-brand-secondary">{product.name}</h3>
        <p className="text-gray-400 mt-2 text-sm h-10">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-semibold text-white">₹{product.price}</span>
          <div className="flex items-center">
            <button onClick={handleDecrement} className="bg-brand-primary text-white p-2 rounded-l-md hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={quantity === 0}>
              <MinusIcon />
            </button>
            <span className="bg-brand-light text-brand-dark font-bold w-12 text-center py-2">{quantity}</span>
            <button onClick={handleIncrement} className="bg-brand-primary text-white p-2 rounded-r-md hover:bg-orange-700 transition-colors">
              <PlusIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
