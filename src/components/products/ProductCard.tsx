'use client';

import React from 'react';
import { Product } from '@/types';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, imageUrl, name, price, description, available } = product;
  
  const handleWhatsAppContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = `¡Hola! 🌕 Me interesa este producto:\n\n` +
      `📦 *${name}*\n` +
      `🆔 ID: ${id}\n` +
      `💰 Precio: $${price}\n\n` +
      `¿Está disponible?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/573001234567?text=${encodedMessage}`, '_blank');
  };
  
  return (
    <div className="bg-white border-2 border-purple-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:border-purple-300 transition-all duration-300 group">
      <div className="relative h-64 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        {/* Badge de disponibilidad */}
        <div className="absolute top-3 right-3">
          {available ? (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Disponible
            </span>
          ) : (
            <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              Agotado
            </span>
          )}
        </div>

        {/* Luna decorativa */}
        <div className="absolute top-3 left-3 text-2xl animate-pulse">
          🌙
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
          {name}
        </h2>
        
        {description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {description}
          </p>
        )}
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ${price.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500">Precio final</p>
          </div>
          <div className="text-4xl animate-bounce">
            ✨
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link 
            href={`/productos/${id}`}
            className="block w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all text-center font-semibold text-sm shadow-md hover:shadow-lg"
          >
            👁️ Ver Detalles
          </Link>
          
          <button
            onClick={handleWhatsAppContact}
            disabled={!available}
            className={`w-full py-3 rounded-lg transition-all text-center font-semibold text-sm shadow-md flex items-center justify-center gap-1 ${
              available
                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 hover:shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            {available ? 'WhatsApp' : 'Agotado'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;