'use client';

import React, { useState } from 'react';

const RequestForm = () => {
    const [productName, setProductName] = useState('');
    const [productLink, setProductLink] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/solicitudes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productName, productLink, description, email }),
            });

            if (response.ok) {
                setSuccessMessage('¡Tu solicitud ha sido enviada exitosamente! Te contactaremos pronto.');
                setProductName('');
                setProductLink('');
                setDescription('');
                setEmail('');
            } else {
                throw new Error('Failed to submit request');
            }
        } catch {
            setErrorMessage('Hubo un error al enviar tu solicitud. Por favor intenta de nuevo.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Formulario de Solicitud</h2>
                <p className="text-gray-600">Completa los datos y te responderemos en menos de 24 horas</p>
            </div>

            {successMessage && (
                <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-r-lg">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{successMessage}</span>
                    </div>
                </div>
            )}

            {errorMessage && (
                <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-r-lg">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span>{errorMessage}</span>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="productName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nombre del Producto *
                    </label>
                    <input
                        type="text"
                        id="productName"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                        placeholder="Ej: iPhone 15 Pro Max, Vestido floral..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all outline-none"
                    />
                </div>

                <div>
                    <label htmlFor="productLink" className="block text-sm font-semibold text-gray-700 mb-2">
                        Link del Producto (Opcional)
                    </label>
                    <input
                        type="url"
                        id="productLink"
                        value={productLink}
                        onChange={(e) => setProductLink(e.target.value)}
                        placeholder="https://www.amazon.com/... o https://shein.com/..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all outline-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        Si encontraste el producto en Amazon, Shein, Temu u otra tienda, pega el link aquí
                    </p>
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                        Descripción y Detalles *
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        rows={4}
                        placeholder="Incluye color, talla, marca, cantidad, o cualquier detalle importante..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all outline-none resize-none"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Tu Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all outline-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold py-4 rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Enviando...
                        </>
                    ) : (
                        <>
                            Enviar Solicitud
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </>
                    )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                    Al enviar este formulario, aceptas que procesemos tu información para responderte.
                </p>
            </form>
        </div>
    );
};

export default RequestForm;