import React from 'react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-gray-900 text-white py-4 px-6 shadow-lg">
                <div className="container mx-auto">
                    <h1 className="text-2xl font-bold">Panel de Administración</h1>
                </div>
            </div>
            <main className="container mx-auto py-8 px-4">{children}</main>
        </div>
    );
};

export default AdminLayout;