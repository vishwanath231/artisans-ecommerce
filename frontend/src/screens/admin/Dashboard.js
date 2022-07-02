import React from 'react';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import SideBar from './components/SideBar';
import { Link } from 'react-router-dom';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { RiTeamLine } from 'react-icons/ri';
import { GoPackage } from 'react-icons/go';
import { BsBag, BsBagCheck } from 'react-icons/bs';
import { TbReportSearch } from 'react-icons/tb';


const Dashboard = () => {
    return (
        <>
            <SideBar />
            <MobileNav />
            <Header />
            <div className='md:ml-72 px-4'>
                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                    <Link to='/admin/userList' className='flex items-center shadow p-4 rounded hover:shadow-xl'>
                        <div className='bg-[#E98F46] p-2 rounded mr-6'>
                            <HiOutlineUserGroup className='text-5xl' />
                        </div>
                        <div>
                            <p className='text-xl font-semibold mont-font'>Users</p>
                            <div className='mt-1 text-md font-medium'>+87867</div>
                        </div>
                    </Link>
                    <Link to='/admin/makerList' className='flex items-center shadow p-4 rounded hover:shadow-xl'>
                        <div className='bg-[#E98F46] p-2 rounded mr-6'>
                            <RiTeamLine className='text-5xl' />
                        </div>
                        <div>
                        <p className='text-xl font-semibold mont-font'>Maker Products</p>
                            <div className='mt-1 text-md font-medium'>+67</div>
                        </div>
                    </Link>
                    <Link to='/admin/productList' className='flex items-center shadow p-4 rounded hover:shadow-xl'>
                        <div className='bg-[#E98F46] p-2 rounded mr-6'>
                            <GoPackage className='text-5xl' />
                        </div>
                        <div>
                        <p className='text-xl font-semibold mont-font'>Products</p>
                            <div className='mt-1 text-md font-medium'>+87</div>
                        </div>
                    </Link>
                    <Link to='' className='flex items-center shadow p-4 rounded hover:shadow-xl'>
                        <div className='bg-[#E98F46] p-2 rounded mr-6'>
                            <BsBag className='text-5xl' />
                        </div>
                        <div>
                        <p className='text-xl font-semibold mont-font'>Orders</p>
                            <div className='mt-1 text-md font-medium'>+867</div>
                        </div>
                    </Link>
                    <Link to='' className='flex items-center shadow p-4 rounded hover:shadow-xl'>
                        <div className='bg-[#E98F46] p-2 rounded mr-6'>
                            <BsBagCheck className='text-5xl' />
                        </div>
                        <div>
                        <p className='text-xl font-semibold mont-font'>Order Success</p>
                            <div className='mt-1 text-md font-medium'>+7867</div>
                        </div>
                    </Link>
                    <Link to='' className='flex items-center shadow p-4 rounded hover:shadow-xl'>
                        <div className='bg-[#E98F46] p-2 rounded mr-6'>
                            <TbReportSearch className='text-5xl' />
                        </div>
                        <div>
                        <p className='text-xl font-semibold mont-font'>Reports</p>
                            <div className='mt-1 text-md font-medium'>+97867</div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}


export default Dashboard;