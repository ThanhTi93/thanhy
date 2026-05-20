import React from 'react';
import Dashboard from '../pages/admin/dashboard/Dashboard';
import CategoryType from '../pages/admin/category_type/CategoryType';
import Features from '../pages/admin/features/Features';
import Products from '../pages/admin/products/Products';
import Accounts from '../pages/admin/accounts/Accounts';
import { Route, Routes } from 'react-router-dom';

function AdminRouters(props) {
    const routers = [
        {
            path: "/",
            element: <Dashboard />
        },
        {
            path: "/category_type",
            element: <CategoryType />
        },
        {
            path: "/features",
            element: <Features />
        },
        {
            path: "/products",
            element: <Products />
        },
        {
            path: "/accounts",
            element: <Accounts />
        }
    ]
    return (
        <div>
            <Routes>
                {routers.map((e, i) =>
                    <Route key={i} path={e.path} element={e.element} />
                )}
            </Routes>
        </div>
    );
}

export default AdminRouters;