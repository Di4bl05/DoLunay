'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import MoonPhase from '@/components/lunar/MoonPhase';

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        totalProducts: 0,
        totalOrders: 0,
        totalRequests: 0,
    });

    useEffect(() => {
        // Cargar estadísticas
        const loadStats = async () => {
            try {
                const productsRes = await fetch('/api/productos');
                const products = await productsRes.json();
                
                setStats({
                    totalProducts: products.length,
                    totalOrders: 0, // Implementar después
                    totalRequests: 0, // Implementar después
                });
            } catch (error) {
                console.error('Error loading stats:', error);
            }
        };

        loadStats();
    }, []);

    const moonProgress = (stats.totalProducts / 20) * 100;

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-12 px-4 border-b border-purple-700">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between flex-wrap gap-6">
                        <div>
                            <h1 className="text-4xl font-bold mb-2">🌙 Dolunay Admin</h1>
                            <p className="text-xl text-purple-200">Panel de Control - Llena tu Luna 🌕</p>
                        </div>
                        <div className="text-center">
                            <MoonPhase phase={moonProgress} size="xl" showLabel />
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Productos */}
                    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white shadow-xl">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-5xl">📦</div>
                            <div className="text-right">
                                <p className="text-3xl font-bold">{stats.totalProducts}</p>
                                <p className="text-purple-100">Productos</p>
                            </div>
                        </div>
                        <div className="bg-white/20 h-2 rounded-full overflow-hidden">
                            <div 
                                className="bg-yellow-300 h-full transition-all duration-1000"
                                style={{ width: `${Math.min(moonProgress, 100)}%` }}
                            />
                        </div>
                        <p className="text-sm text-purple-100 mt-2">
                            {20 - stats.totalProducts} para luna llena
                        </p>
                    </div>

                    {/* Pedidos */}
                    <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-6 text-white shadow-xl">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-5xl">🛍️</div>
                            <div className="text-right">
                                <p className="text-3xl font-bold">{stats.totalOrders}</p>
                                <p className="text-pink-100">Pedidos</p>
                            </div>
                        </div>
                        <p className="text-sm text-pink-100">Pedidos activos</p>
                    </div>

                    {/* Solicitudes */}
                    <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-white shadow-xl">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-5xl">✨</div>
                            <div className="text-right">
                                <p className="text-3xl font-bold">{stats.totalRequests}</p>
                                <p className="text-yellow-100">Solicitudes</p>
                            </div>
                        </div>
                        <p className="text-sm text-yellow-100">Pendientes de revisar</p>
                    </div>
                </div>

                {/* Opciones de Gestión */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Gestionar Productos */}
                    <Link href="/admin/productos">
                        <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-4 rounded-xl text-white text-3xl group-hover:scale-110 transition-transform">
                                    🏪
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Gestionar Productos</h2>
                                    <p className="text-gray-600">Agregar, editar y eliminar productos</p>
                                </div>
                            </div>
                            <div className="flex items-center text-purple-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                                Ir al catálogo
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    {/* Ver Pedidos */}
                    <Link href="/admin/pedidos">
                        <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-4 rounded-xl text-white text-3xl group-hover:scale-110 transition-transform">
                                    📋
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Ver Pedidos</h2>
                                    <p className="text-gray-600">Administrar pedidos de clientes</p>
                                </div>
                            </div>
                            <div className="flex items-center text-pink-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                                Ver todos los pedidos
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Tips */}
                <div className="mt-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-6 text-gray-900">
                    <div className="flex items-start gap-4">
                        <div className="text-3xl">💡</div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Tips para llenar tu Luna</h3>
                            <ul className="space-y-2 text-sm">
                                <li>✨ Agrega productos con imágenes de buena calidad</li>
                                <li>🎯 Usa descripciones detalladas para atraer más clientes</li>
                                <li>💬 Responde rápido a las solicitudes por WhatsApp</li>
                                <li>🌟 Mantén tus productos actualizados con stock disponible</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}