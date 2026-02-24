'use client';

import React, { useState, useEffect } from 'react';
import ProductGrid from '@/components/products/ProductGrid';
import { Product } from '@/types';

export default function ProductosPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/productos');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const categories = ['all', ...Array.from(new Set(products.map(p => p.category).filter((c): c is string => Boolean(c))))];
    const filteredProducts = selectedCategory === 'all' 
        ? products 
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Nuestro Catálogo
                    </h1>
                    <p className="text-lg md:text-xl text-pink-100 max-w-2xl mx-auto">
                        Descubre nuestra selección curada de productos. ¿No encuentras lo que buscas? ¡Solicítalo!
                    </p>
                </div>
            </div>

            {/* Category Filter */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-wrap gap-3 justify-center mb-8">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${
                                selectedCategory === category
                                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                            }`}
                        >
                            {category === 'all' ? 'Todos' : category}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-pink-500"></div>
                    </div>
                ) : filteredProducts.length > 0 ? (
                    <ProductGrid products={filteredProducts} />
                ) : (
                    <div className="text-center py-20">
                        <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
                            <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                No hay productos aún
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Estamos actualizando nuestro catálogo. Regresa pronto o solicita un producto específico.
                            </p>
                            <a
                                href="/solicitar"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg"
                            >
                                Solicitar Producto
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-16 px-4 mt-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        ¿No encontraste lo que buscabas?
                    </h2>
                    <p className="text-lg md:text-xl text-pink-100 mb-8">
                        Podemos conseguir cualquier producto de Amazon, Shein, Temu y más
                    </p>
                    <a
                        href="/solicitar"
                        className="inline-flex items-center px-8 py-4 bg-white text-pink-600 font-bold rounded-lg hover:bg-gray-50 transition-all shadow-xl text-lg"
                    >
                        Solicitar Producto Personalizado
                        <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
