'use client';

import React, { useState, useEffect } from 'react';
import ProductGrid from '@/components/products/ProductGrid';
import FloatingWhatsApp from '@/components/lunar/FloatingWhatsApp';
import MoonPhase from '@/components/lunar/MoonPhase';
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

    const moonProgress = (products.length / 20) * 100;

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            <FloatingWhatsApp />
            
            {/* Hero Section con tema lunar */}
            <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white py-16 px-4 relative overflow-hidden">
                {/* Estrellas decorativas */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 text-yellow-300 animate-pulse">✨</div>
                    <div className="absolute top-20 right-20 text-yellow-200 animate-pulse delay-75">⭐</div>
                    <div className="absolute bottom-10 left-1/4 text-yellow-300 animate-pulse delay-150">🌟</div>
                    <div className="absolute bottom-20 right-1/3 text-yellow-200 animate-pulse">✨</div>
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="flex justify-center mb-6">
                        <div className="animate-[float_6s_ease-in-out_infinite]">
                            <MoonPhase phase={moonProgress} size="lg" />
                        </div>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-200 via-yellow-100 to-white bg-clip-text text-transparent">
                        🌙 Catálogo Dolunay
                    </h1>
                    <p className="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto">
                        Descubre nuestra colección iluminada por la luna llena. 
                        ¿No encuentras lo que buscas? ¡Pídenoslo! ✨
                    </p>
                    
                    {products.length > 0 && (
                        <div className="mt-6 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                            <span className="text-yellow-300 font-semibold">
                                {products.length} productos iluminando tu camino
                            </span>
                            <span className="text-2xl">🌟</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Category Filter */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">🎯</span>
                        <h2 className="text-xl font-bold text-gray-900">Filtrar por Categoría</h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg ${
                                    selectedCategory === category
                                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white scale-105'
                                        : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-purple-300'
                                }`}
                            >
                                {category === 'all' ? '🌕 Todos' : `✨ ${category}`}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                {loading ? (
                    <div className="flex flex-col justify-center items-center py-20">
                        <div className="relative mb-4">
                            <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-purple-600"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-3xl">🌙</span>
                            </div>
                        </div>
                        <p className="text-gray-600 font-medium">Cargando productos desde la luna...</p>
                    </div>
                ) : filteredProducts.length > 0 ? (
                    <>
                        <ProductGrid products={filteredProducts} />
                        <div className="mt-12 text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
                            <p className="text-gray-700 text-lg mb-4">
                                💡 <strong>Consejo:</strong> Todos nuestros productos incluyen atención personalizada
                            </p>
                            <a
                                href="https://wa.me/573001234567?text=¡Hola!%20Necesito%20ayuda%20para%20elegir%20un%20producto%20🌕"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                ¿Necesitas ayuda? Chatea con nosotros
                            </a>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-20">
                        <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md mx-auto">
                            <div className="text-6xl mb-6 animate-pulse">🌑</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {selectedCategory === 'all' 
                                    ? 'No hay productos aún' 
                                    : `No hay productos en ${selectedCategory}`
                                }
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {selectedCategory === 'all'
                                    ? 'Como la luna nueva espera crecer, estamos preparando productos increíbles para ti.'
                                    : 'Prueba con otra categoría o solicita un producto específico.'
                                }
                            </p>
                            <div className="flex flex-col gap-3">
                                {selectedCategory !== 'all' && (
                                    <button
                                        onClick={() => setSelectedCategory('all')}
                                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg"
                                    >
                                        Ver Todos los Productos
                                    </button>
                                )}
                                <a
                                    href="/solicitar"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg"
                                >
                                    ✨ Solicitar Producto
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 px-4 mt-16">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="text-5xl mb-4">🌟</div>
                    <h2 className="text-3xl font-bold mb-3">¿Buscas algo específico?</h2>
                    <p className="text-xl text-purple-100 mb-6">
                        Si no encuentras lo que necesitas, háznoslo saber. 
                        Traemos productos de Amazon, Shein, Temu y más.
                    </p>
                    <a
                        href="/solicitar"
                        className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-all shadow-xl hover:shadow-2xl text-lg"
                    >
                        <span>Solicitar Producto Personalizado</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
