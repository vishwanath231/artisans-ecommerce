import React from 'react';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import SideBar from './components/SideBar';

const AdminProfileUpdateScreen = () => {
    return (
        <>
            <SideBar />
            <MobileNav />
            <Header />
            <div className='md:ml-72 px-4'>AdminProfileUpdateScreen</div>
        </>
    )
}

export default AdminProfileUpdateScreen;