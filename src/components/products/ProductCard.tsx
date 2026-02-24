import React from 'react';

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { image, title, price } = product;
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-lg font-semibold text-black mt-2">{title}</h2>
      <p className="text-xl font-bold text-pink-600 mt-1">${price.toFixed(2)}</p>
      <button 
        className="mt-4 w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition"
      >
        Ordenar Ahora
      </button>
    </div>
  );
};

export default ProductCard;