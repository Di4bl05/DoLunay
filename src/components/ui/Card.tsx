'use client';

import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price, onClick }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={onClick}>
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-black">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <p className="text-lg font-semibold text-gold">{price}</p>
      </div>
    </div>
  );
};

export default Card;