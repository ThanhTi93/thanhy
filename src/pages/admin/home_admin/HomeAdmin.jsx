import React from 'react';
import NavBarAdmin from '../../../components/admin/NavBarAdmin';
import HeaderAdmin from '../../../components/admin/HeaderAdmin';
import AdminRouters from '../../../routers/AdminRouters';

function HomeAdmin(props) {
    return (
        <div className='md:flex'>
            <NavBarAdmin />
            <div className='flex-1'>
                <HeaderAdmin />
                <div className='p-3 h-[calc(100vh-64px)] md:overflow-y-auto'>
                    <AdminRouters />
                </div>
            </div>
        </div>
    );
}

export default HomeAdmin;