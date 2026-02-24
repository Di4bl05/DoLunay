import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductGrid from '../components/products/ProductGrid';

const HomePage = () => {
  const products = [
    {
      id: '1',
      title: 'Producto de ejemplo 1',
      price: 29.99,
      image: '/images/product-placeholder.jpg'
    },
    {
      id: '2',
      title: 'Producto de ejemplo 2',
      price: 39.99,
      image: '/images/product-placeholder.jpg'
    }
  ];

  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to Dolunay</h1>
        <p>Explore our featured products!</p>
        <ProductGrid products={products} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;