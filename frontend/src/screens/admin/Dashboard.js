import React from 'react';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import SideBar from './components/SideBar';


const Dashboard = () => {
    return (
        <>
            <SideBar />
            <MobileNav />
            <Header />
            <div className='md:ml-72'>
                <div>Dashboard</div>
            </div>
        </>
    )
}


export default Dashboard;