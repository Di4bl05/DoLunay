import React from 'react';
import Link from 'next/link';
import ProductGrid from '../components/products/ProductGrid';
import { Product } from '@/types';

const HomePage = () => {
  // TODO: Fetch products from API
  const featuredProducts: Product[] = [];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-rose-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Compra <span className="text-pink-600">Lo Que Necesites</span> con Nosotros
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Descubre productos seleccionados o envíanos el link de lo que quieras.
              Nosotros nos encargamos de conseguirlo por ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/productos" className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-all shadow-lg hover:shadow-xl text-lg">
                Ver Productos
              </Link>
              <Link href="/solicitar" className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-lg border-2 border-pink-600 text-lg">
                Solicitar Producto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">¿Cómo funciona?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Dos formas fáciles de comprar con nosotros
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Option 1 */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 border-2 border-pink-200">
              <div className="bg-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Productos Publicados</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Explora nuestro catálogo de productos seleccionados. Cuando encuentres algo que te guste, contáctanos para hacer tu pedido.
              </p>
              <div className="flex items-start space-x-3 text-sm text-gray-600">
                <svg className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Productos verificados y seleccionados</span>
              </div>
            </div>

            {/* Option 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Solicita lo que Quieras</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                ¿Viste algo en Amazon, Shein, Temu o cualquier tienda? Envíanos el link y nosotros te lo conseguimos al mejor precio.
              </p>
              <div className="flex items-start space-x-3 text-sm text-gray-600">
                <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>De cualquier tienda internacional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="productos" className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Productos Destacados</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Productos seleccionados especialmente para ti. Contacta para hacer tu pedido.
            </p>
          </div>

          {featuredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-white rounded-2xl shadow-lg p-12 max-w-2xl mx-auto">
                <svg className="w-24 h-24 mx-auto mb-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Próximamente</h3>
                <p className="text-gray-600 text-lg mb-8">
                  Estamos preparando productos increíbles para ti.
                  Mientras tanto, puedes solicitarnos cualquier producto que necesites.
                </p>
                <Link href="/solicitar" className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-all shadow-md hover:shadow-lg inline-block">
                  Solicitar Producto
                </Link>
              </div>
            </div>
          ) : (
            <>
              <ProductGrid products={featuredProducts} />
              <div className="text-center mt-8">
                <Link href="/productos" className="text-pink-600 font-semibold hover:text-pink-700 inline-flex items-center">
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">¿Por qué comprar con nosotros?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Mejores Precios</h3>
              <p className="text-gray-600">Conseguimos los productos al mejor precio del mercado</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Envío Seguro</h3>
              <p className="text-gray-600">Nos encargamos de toda la logística y entrega</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Atención Personalizada</h3>
              <p className="text-gray-600">Te asesoramos en todo el proceso de compra</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para hacer tu pedido?</h2>
          <p className="text-xl mb-8 opacity-90">Contáctanos por WhatsApp o solicita tu producto ahora</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-xl text-lg inline-flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
            <Link href="/solicitar" className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 hover:text-pink-700 transition-all shadow-lg hover:shadow-xl text-lg inline-block">
              Solicitar Producto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;