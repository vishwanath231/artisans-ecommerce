import React from 'react';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import SideBar from './components/SideBar';
import { MdCheck, MdClear  } from 'react-icons/md';

const AdminOrderListScreen = () => {
    return (
        <>
            <SideBar />
            <MobileNav />
            <Header />
            <div className='md:ml-72 px-4 my-10'>
                <h2 className='text-4xl font-light uppercase mb-4'>orders</h2>
                <div className="relative overflow-x-auto my-10">
                    <table className="w-full text-sm text-left text-black">
                        <thead className="text-xs text-black mont-font text-white uppercase bg-[#0b2545]">
                            <tr className='border border-gray-300'>
                                <th className="px-6 py-3 border border-gray-300">ID</th>
                                <th className="px-6 py-3 border border-gray-300">DATE</th>
                                <th className="px-6 py-3 border border-gray-300">TOTAL</th>
                                <th className="px-6 py-3 border border-gray-300">PAID</th>
                                <th className="px-6 py-3 border border-gray-300">DELIVERED</th>
                                <th className="px-6 py-3 border border-gray-300">
                                    <span className="sr-only">ACTION</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border border-gray-300 transition duration-300 ease-in-out hover:bg-gray-200 sen-font">
                                <td className="px-6 py-4 border border-gray-300">621e5279e900e959d902ddb1</td>
                                <td className="px-6 py-4 border border-gray-300">{new Date().toLocaleDateString()}</td>
                                <td className="px-6 py-4 border border-gray-300">₹6050</td>
                                <td className="px-6 py-4 border border-gray-300">
                                    <div className=' flex justify-center items-center'>
                                        <MdCheck className='text-green-600 text-lg' /> 
                                    </div>
                                </td>
                                <td className="px-6 py-4 border border-gray-300">
                                    <div className=' flex justify-center items-center'>
                                        <MdClear className='text-red-600 text-lg' /> 
                                    </div>
                                </td>
                                <td className="border border-gray-300">
                                    <div className=' flex justify-center items-center'>
                                        <button className=' py-2 px-4 bg-gray-100 shadow-lg'>Details</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AdminOrderListScreen;