import React from 'react';
import RequestForm from '../../../components/forms/RequestForm';
import Image from 'next/image';

const SolicitarPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 py-12">
            <div className="container mx-auto px-4">
                {/* Header con Logo */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <div className="relative w-48 h-16 animate-[float_3s_ease-in-out_infinite]">
                            <Image 
                                src="/images/dolunay-logo-optimized.svg" 
                                alt="Dolunay - Luna Llena" 
                                fill
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Solicita Cualquier Producto
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        ¿No encuentras lo que buscas? Déjanos saber y nosotros lo conseguimos por ti.
                        Trabajamos con Amazon, Shein, Temu y más.
                    </p>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                    <div className="bg-white rounded-xl p-6 shadow-md text-center">
                        <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-gray-900">Respuesta Rápida</h3>
                        <p className="text-sm text-gray-600">En 24 horas</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md text-center">
                        <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-gray-900">Mejor Precio</h3>
                        <p className="text-sm text-gray-600">Garantizado</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md text-center">
                        <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-gray-900">Compra Segura</h3>
                        <p className="text-sm text-gray-600">100% confiable</p>
                    </div>
                </div>

                {/* Form */}
                <div className="max-w-2xl mx-auto">
                    <RequestForm />
                </div>

                {/* Guía Completa - Estilo Dolunay (Fases de la Luna) */}
                <div className="mt-12 max-w-6xl mx-auto space-y-8">
                    {/* Título Principal */}
                    <div className="text-center mb-12">
                        <div className="text-6xl mb-4">✨🌙</div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Guía Completa de Compra
                        </h2>
                        <p className="text-xl text-gray-600">
                            Como las fases de la luna, tu compra tiene un proceso claro y brillante
                        </p>
                    </div>

                    {/* Luna Nueva - Cómo Solicitar */}
                    <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl shadow-2xl p-8 text-white">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-6xl">🌑</div>
                            <div>
                                <h3 className="text-3xl font-bold">¿Cómo solicitar una cotización?</h3>
                                <p className="text-purple-200">Luna Nueva - El inicio de tu compra</p>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <p className="text-xl leading-relaxed">
                                <span className="font-bold text-yellow-300">Simple:</span> comparte tu carrito con nosotros por WhatsApp.
                            </p>
                        </div>
                    </div>

                    {/* Cuarto Creciente - Precios */}
                    <div className="bg-gradient-to-br from-purple-800 to-indigo-800 rounded-3xl shadow-2xl p-8 text-white">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-6xl">🌓</div>
                            <div>
                                <h3 className="text-3xl font-bold">Precios</h3>
                                <p className="text-purple-200">Cuarto Creciente - Transparencia total</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <p className="text-lg leading-relaxed">
                                    Cotizamos según el precio publicado en la página <span className="text-yellow-300 font-semibold">(excepto ventas flash)</span>.
                                </p>
                            </div>
                            <div className="bg-yellow-400/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-yellow-400/40">
                                <p className="text-xl font-bold text-yellow-300 mb-2">💰 Margen Comercial</p>
                                <p className="text-lg">Se aplica un margen comercial del <span className="text-2xl font-bold text-yellow-300">1.3%</span> sobre el total.</p>
                            </div>
                        </div>
                    </div>

                    {/* Luna Gibosa Creciente - Factura */}
                    <div className="bg-gradient-to-br from-purple-700 to-pink-700 rounded-3xl shadow-2xl p-8 text-white">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-6xl">🌔</div>
                            <div>
                                <h3 className="text-3xl font-bold">Factura y total de la compra</h3>
                                <p className="text-purple-200">Luna Gibosa - Confirmación de tu pedido</p>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <p className="text-lg leading-relaxed mb-4">
                                Una vez finalices tu pedido, te enviamos la factura con el costo total ya incluyendo el margen comercial.
                            </p>
                            <div className="bg-pink-500/30 rounded-xl p-4 border-l-4 border-pink-300">
                                <p className="font-bold text-xl">Este pago deberá efectuarse al momento de la confirmación del pedido.</p>
                            </div>
                        </div>
                    </div>

                    {/* Luna Llena - Importante */}
                    <div className="bg-gradient-to-br from-yellow-500 via-yellow-400 to-orange-400 rounded-3xl shadow-2xl p-8 text-gray-900">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-6xl">🌕</div>
                            <div>
                                <h3 className="text-3xl font-bold">Importante</h3>
                                <p className="text-gray-800">Luna Llena - Máxima claridad</p>
                            </div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-orange-300">
                            <p className="text-xl leading-relaxed font-semibold">
                                Los precios estimados se basan exclusivamente en la información de nuestra cuenta de compra.
                            </p>
                        </div>
                    </div>

                    {/* Luna Gibosa Menguante - Envío y Peso */}
                    <div className="bg-gradient-to-br from-pink-700 to-rose-700 rounded-3xl shadow-2xl p-8 text-white">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-6xl">🌖</div>
                            <div>
                                <h3 className="text-3xl font-bold">Envío y pago por peso</h3>
                                <p className="text-pink-200">Luna Gibosa Menguante - En camino a ti</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <p className="text-lg leading-relaxed mb-4">
                                    Cuando tu compra llegue a nuestras oficinas en Cuba <span className="text-yellow-300 font-semibold">(aprox. 15–20 días)</span>:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-pink-500/30 rounded-xl p-4 border border-pink-400/50">
                                        <p className="font-bold text-lg mb-2">⚖️ Calculamos el peso total</p>
                                        <p className="text-pink-100">Pesaje exacto de tu pedido</p>
                                    </div>
                                    <div className="bg-pink-500/30 rounded-xl p-4 border border-pink-400/50">
                                        <p className="font-bold text-lg mb-2">💵 Costo de envío</p>
                                        <p className="text-2xl font-bold text-yellow-300">$7 USD por libra</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cuarto Menguante - Entrega */}
                    <div className="bg-gradient-to-br from-rose-700 to-purple-800 rounded-3xl shadow-2xl p-8 text-white">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-6xl">🌗</div>
                            <div>
                                <h3 className="text-3xl font-bold">Entrega a domicilio opcional</h3>
                                <p className="text-purple-200">Cuarto Menguante - Última fase</p>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <p className="text-lg leading-relaxed">
                                Este servicio <span className="text-yellow-300 font-bold">no está incluido</span> en los costos mencionados.
                            </p>
                        </div>
                    </div>

                    {/* Luna Nueva Final - Formas de Pago */}
                    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 rounded-3xl shadow-2xl p-8 text-white border-4 border-yellow-400/30">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-6xl">💫</div>
                            <div>
                                <h3 className="text-3xl font-bold">Formas de pago</h3>
                                <p className="text-purple-200">El ciclo se completa - Múltiples opciones</p>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <p className="text-xl mb-6 font-semibold text-yellow-300">Aceptamos pagos en:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border-2 border-green-400/40">
                                    <p className="text-2xl font-bold mb-3">💵 Efectivo</p>
                                    <ul className="space-y-2 text-lg">
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-300">✓</span> USD
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-300">✓</span> CUP
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-300">✓</span> Euros
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border-2 border-blue-400/40">
                                    <p className="text-2xl font-bold mb-3">💳 Transferencias</p>
                                    <p className="text-xl text-blue-200">en MLC</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action Final */}
                    <div className="text-center py-8">
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl">
                            <p className="text-3xl font-bold text-white mb-4">
                                🌙 ¿Listo para empezar tu compra?
                            </p>
                            <p className="text-xl text-purple-100 mb-6">
                                Completa el formulario arriba o contáctanos por WhatsApp
                            </p>
                            <a 
                                href="https://wa.me/573001234567?text=¡Hola!%20Quiero%20hacer%20una%20cotización%20🌙" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-all shadow-lg hover:shadow-xl"
                            >
                                💬 Chatear por WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolicitarPage;