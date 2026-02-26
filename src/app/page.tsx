'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProductGrid from '../components/products/ProductGrid';
import FloatingWhatsApp from '@/components/lunar/FloatingWhatsApp';
import MoonPhase from '@/components/lunar/MoonPhase';
import { Product } from '@/types';

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/productos');
        const data = await response.json();
        setFeaturedProducts(data.slice(0, 6)); // Mostrar solo 6 productos destacados
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {/* WhatsApp Flotante */}
      <FloatingWhatsApp />

      {/* Hero Section con tema lunar */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 py-20 overflow-hidden">
        {/* Estrellas de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo y Luna animada combinados */}
            <div className="mb-8 flex justify-center items-center gap-6">
              <div className="relative w-32 h-32 md:w-40 md:h-40 animate-[float_6s_ease-in-out_infinite]">
                <Image 
                  src="/images/dolunay-icon.svg" 
                  alt="Dolunay Logo" 
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
              <div className="animate-[float_6s_ease-in-out_infinite] animation-delay-300">
                <MoonPhase phase={50} size="xl" />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-100 to-white">Dolunay Store</span>
            </h1>
            <p className="text-2xl mb-4 text-purple-200 font-semibold">
              Luna Llena de Oportunidades ✨
            </p>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Como la luna llena que ilumina la noche, nosotros iluminamos tu camino de compras.
              <br />Descubre productos únicos o pide lo que quieras de cualquier tienda del mundo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/productos" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg hover:shadow-xl text-lg">
                🌟 Ver Productos
              </Link>
              <Link href="/solicitar" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all shadow-lg text-lg">
                ✨ Solicitar Producto
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* How it Works Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            🌙 Como las Fases de la Luna
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Tu compra crece como la luna, desde la idea hasta tenerla en tus manos
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Fase 1 - Nueva */}
            <div className="bg-white rounded-2xl p-6 border-2 border-indigo-200 shadow-lg hover:shadow-xl transition-all">
              <div className="text-center mb-4">
                <div className="text-5xl mb-2">🌑</div>
                <h3 className="text-lg font-bold text-gray-900">Luna Nueva</h3>
                <p className="text-sm text-indigo-600">Fase 1</p>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Descubres el producto que quieres en nuestro catálogo o nos envías el link
              </p>
            </div>

            {/* Fase 2 - Creciente */}
            <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all">
              <div className="text-center mb-4">
                <div className="text-5xl mb-2">🌓</div>
                <h3 className="text-lg font-bold text-gray-900">Cuarto Creciente</h3>
                <p className="text-sm text-purple-600">Fase 2</p>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Nos contactas por WhatsApp y te damos el mejor precio
              </p>
            </div>

            {/* Fase 3 - Gibosa */}
            <div className="bg-white rounded-2xl p-6 border-2 border-pink-200 shadow-lg hover:shadow-xl transition-all">
              <div className="text-center mb-4">
                <div className="text-5xl mb-2">🌔</div>
                <h3 className="text-lg font-bold text-gray-900">Gibosa Creciente</h3>
                <p className="text-sm text-pink-600">Fase 3</p>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Procesamos tu pedido y lo traemos hasta tu puerta
              </p>
            </div>

            {/* Fase 4 - Llena */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 border-2 border-yellow-400 shadow-lg hover:shadow-xl transition-all">
              <div className="text-center mb-4">
                <div className="text-5xl mb-2">🌕</div>
                <h3 className="text-lg font-bold text-gray-900">Luna Llena</h3>
                <p className="text-sm text-yellow-700">Fase 4</p>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed font-semibold">
                ¡Tu producto llega y brillas de felicidad! ✨
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="productos" className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MoonPhase phase={25} size="sm" />
              <h2 className="text-3xl font-bold text-gray-900">Productos Destacados</h2>
              <MoonPhase phase={75} size="sm" />
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Productos seleccionados especialmente para ti bajo la luz de la luna 🌙
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="relative">
                <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-purple-600"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl">🌙</span>
                </div>
              </div>
            </div>
          ) : featuredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-white rounded-2xl shadow-lg p-12 max-w-2xl mx-auto">
                <div className="text-6xl mb-4 animate-pulse">🌑</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Próximamente</h3>
                <p className="text-gray-600 text-lg mb-8">
                  Como la luna nueva espera crecer, estamos preparando productos increíbles para ti.
                  Mientras tanto, puedes solicitarnos cualquier producto que necesites.
                </p>
                <Link href="/solicitar" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg inline-block">
                  ✨ Solicitar Producto
                </Link>
              </div>
            </div>
          ) : (
            <>
              <ProductGrid products={featuredProducts} />
              <div className="text-center mt-8">
                <Link href="/productos" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg">
                  Ver todos los productos
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            ✨ ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 transition-all">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Mejores Precios</h3>
              <p className="text-gray-600">Como la luna llena que ilumina, nosotros iluminamos tus ahorros con los mejores precios</p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 transition-all">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Envío Rápido y Seguro</h3>
              <p className="text-gray-600">Tu producto viaja seguro, como la luna que siempre vuelve cada noche</p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 transition-all">
              <div className="bg-gradient-to-br from-pink-500 to-rose-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Atención 24/7</h3>
              <p className="text-gray-600">Como la luna que siempre está ahí, nosotros siempre estamos para ayudarte</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white relative overflow-hidden">
        {/* Estrellas de fondo */}
        <div className="absolute inset-0 opacity-30">
          <div className="stars"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <MoonPhase phase={100} size="lg" />
          </div>
          <h2 className="text-4xl font-bold mb-4">🌕 ¿Lista para Llenar tu Luna?</h2>
          <p className="text-xl mb-8 text-purple-200">
            Contáctanos por WhatsApp y empieza tu viaje de compras
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/573001234567?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20Dolunay%20Store%20🌕" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-4 rounded-full font-bold hover:from-green-500 hover:to-green-700 transition-all shadow-lg hover:shadow-xl text-lg inline-flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chatea en WhatsApp
            </a>
            <Link href="/solicitar" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg hover:shadow-xl text-lg inline-block">
              Solicitar Producto ✨
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;