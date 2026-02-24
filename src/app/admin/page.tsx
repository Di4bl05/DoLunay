import React from 'react';

const AdminPage = () => {
    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <p>Welcome to the Dolunay admin area. Here you can manage products and orders.</p>
            <div className="admin-links">
                <a href="/admin/productos">Manage Products</a>
                <a href="/admin/pedidos">Manage Orders</a>
            </div>
        </div>
    );
};

export default AdminPage;