import React from 'react';
import RequestForm from '../../../components/forms/RequestForm';

const SolicitarPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Solicitar Producto</h1>
            <p className="text-center mb-6">Si no encuentras un producto disponible, puedes solicitarlo aquí.</p>
            <RequestForm />
        </div>
    );
};

export default SolicitarPage;