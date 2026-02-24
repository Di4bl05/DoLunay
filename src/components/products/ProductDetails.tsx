'use client';

import React from 'react';

interface ProductDetailsProps {
  product: {
    id: string;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    available: boolean;
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="product-details">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <img src={product.imageUrl} alt={product.title} className="w-full h-auto" />
      <p className="mt-4">{product.description}</p>
      <p className="mt-2 text-lg font-semibold">${product.price.toFixed(2)}</p>
      <button 
        className={`mt-4 px-4 py-2 text-white ${product.available ? 'bg-pink-500' : 'bg-gray-500 cursor-not-allowed'}`} 
        disabled={!product.available}
      >
        {product.available ? 'Order Now' : 'Out of Stock'}
      </button>
    </div>
  );
};

export default ProductDetails;