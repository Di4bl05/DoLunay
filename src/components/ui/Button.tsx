'use client';

import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '', variant = 'primary' }) => {
  const baseStyles = 'py-2 px-4 rounded focus:outline-none';
  const variantStyles = variant === 'primary' 
    ? 'bg-pink-500 text-white hover:bg-pink-600' 
    : 'bg-white text-black border border-pink-500 hover:bg-pink-100';

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </button>
  );
};

export default Button;