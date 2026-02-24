'use client';

import React from 'react';
import { Product } from '@/types';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, imageUrl, name, price, description } = product;
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48 bg-gray-100">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">{name}</h2>
        {description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
        )}
        <p className="text-2xl font-bold text-pink-600 mb-4">${price.toFixed(2)}</p>
        <Link 
          href={`/productos/${id}`}
          className="block w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2.5 rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all text-center font-semibold"
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;