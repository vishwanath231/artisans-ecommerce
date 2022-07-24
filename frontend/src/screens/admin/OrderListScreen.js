import React,{ useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllOrders } from '../../redux/actions/OrderActions';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import SideBar from './components/SideBar';
import { InputLabel, MenuItem, FormControl, Select  } from '@mui/material';
import { MdClear } from 'react-icons/md';
import Loader from '../../components/Loader';
import Message from '../../components/Message';


const OrderListScreen = ({ orderList, getAllOrders }) => {
    
    useEffect(() => {
        getAllOrders()
    },[getAllOrders])
    
    const {loading, orderLists, error } = orderList;
    
    const [orderData, setOrderData] = useState([]);
    const [status, setStatus] = useState('Status')
    
    

    const searchHandler = (e) => {
        if (e.target.value !== '') {
            const filter = orderLists.filter(item => {
                return Object.values(item.user).join('').toLowerCase().includes(e.target.value.toLowerCase()) 
            })
            setOrderData(filter)
        }else{
            setOrderData(orderLists)
        }
    }



    const checkStatus = (e) => {

        const { value } = e.target;

        if (value === 'Pending-Paid') {
            const pendingPaid = orderLists.filter((val) => !val.isPaid)
            setOrderData(pendingPaid);
        }
        if (value === 'Paid') {
            const paid = orderLists.filter((val) => val.isPaid)
            setOrderData(paid);
        }
        if (value === 'Pending-Delivered') {
            const pendingDelivered = orderLists.filter((val) => !val.isDelivered)
            setOrderData(pendingDelivered);
        }
        if (value === 'Delivered') {
            const delivered = orderLists.filter((val) => val.isDelivered)
            setOrderData(delivered);
        }
        if (value === 'Success') {
            const orderSuccess = orderLists.filter((val) => val.isPaid && val.isDelivered)
            setOrderData(orderSuccess)
        }
        if (value === 'Status') {
            setOrderData(orderLists)
        }

        setStatus(value)
    }

    

    
    return (
        <>
            <SideBar />
            <MobileNav />
            <Header />
            <div className='md:ml-72 px-4 md:px-2'>
                <div className='my-6 text-3xl font-bold tracking-wide uppercase md:text-center'>
                    orders
                </div>

                <div className='flex justify-between md:items-center flex-col md:flex-row'>
                    <div className='mb-1'>
                        <FormControl >
                            <InputLabel id='row-label'>Status</InputLabel>
                            <Select
                                labelId='row-label'
                                id='row'
                                label='Row'
                                value={status}
                                onChange={checkStatus}
                                className='w-full h-10 md:w-full'
                            >
                                <MenuItem value='Status'>Status</MenuItem>
                                <MenuItem value='Pending-Paid'>Pending Paid</MenuItem>
                                <MenuItem value='Paid'>Paid</MenuItem>
                                <MenuItem value='Pending-Delivered'>Pending Delivered</MenuItem>
                                <MenuItem value='Delivered'>Delivered</MenuItem>
                                <MenuItem value='Success'>Success</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='w-full md:w-72 '>
                        <input
                            name='search'
                            type='search'
                            onChange={searchHandler}
                            placeholder='search...'
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-[#edf2f4] focus:ring-[#83c5be] focus:border-[#83c5be] w-full p-2.5"
                        />
                    </div>
                </div>

                { loading ? <Loader /> : error ? <Message error msg={error} /> : (
                    <div className="relative overflow-x-auto my-10">
                        <table className="w-full text-sm text-left text-black">
                            <thead className="text-xs text-black mont-font text-white uppercase bg-[#0b2545]">
                                <tr className='border border-gray-300'>
                                    <th className="px-6 py-3 border border-gray-300">ID</th>
                                    <th className="px-6 py-3 border border-gray-300">Name</th>
                                    <th className="px-6 py-3 border border-gray-300">Email</th>
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

                                {
                                    orderData.length ? (
                                        <>
                                                                            {
                                    orderData.map((order) => (
                                        <tr className="bg-white border border-gray-300 transition duration-300 ease-in-out hover:bg-gray-200 sen-font" key={order._id}>
                                            <td className="px-6 py-4 border border-gray-300">{order._id}</td>
                                            <td className="px-6 py-4 border border-gray-300">{order.user.name}</td>
                                            <td className="px-6 py-4 border border-gray-300">{order.user.email}</td>
                                            <td className="px-6 py-4 border border-gray-300">{order.createdAt.substring(0, 10)}</td>
                                            <td className="px-6 py-4 border border-gray-300">₹{order.totalPrice}</td>
                                            <td className="px-6 py-4 border border-gray-300">
                                                { loading ? <Loader /> : order.isPaid ? (
                                                    order.paidAt.substring(0, 10)
                                                    ) : (
                                                        <div className=' flex justify-center items-center'>
                                                            <MdClear className='text-red-600 text-lg' /> 
                                                        </div>
                                                    )
                                                }
                                            </td>
                                            <td className="px-6 py-4 border border-gray-300">
                                                {loading ? <Loader /> : order.isDelivered ? (
                                                    order.deliveredAt.substring(0, 10)
                                                    ) : (
                                                        <div className=' flex justify-center items-center'>
                                                            <MdClear className='text-red-600 text-lg' /> 
                                                        </div>
                                                    )
                                                }   
                                            </td>
                                            <td className="border border-gray-300">
                                                <Link to={`/order/${order._id}`} className=' flex justify-center items-center'>
                                                    <button className=' py-2 px-4 bg-gray-100 shadow-lg'>Details</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                                        </>
                                    ) : (
                                        <>
                                            {
                                    orderLists.map((order) => (
                                        <tr className="bg-white border border-gray-300 transition duration-300 ease-in-out hover:bg-gray-200 sen-font" key={order._id}>
                                            <td className="px-6 py-4 border border-gray-300">{order._id}</td>
                                            <td className="px-6 py-4 border border-gray-300">{order.user.name}</td>
                                            <td className="px-6 py-4 border border-gray-300">{order.user.email}</td>
                                            <td className="px-6 py-4 border border-gray-300">{order.createdAt.substring(0, 10)}</td>
                                            <td className="px-6 py-4 border border-gray-300">₹{order.totalPrice}</td>
                                            <td className="px-6 py-4 border border-gray-300">
                                                { loading ? <Loader /> : order.isPaid ? (
                                                    order.paidAt.substring(0, 10)
                                                    ) : (
                                                        <div className=' flex justify-center items-center'>
                                                            <MdClear className='text-red-600 text-lg' /> 
                                                        </div>
                                                    )
                                                }
                                            </td>
                                            <td className="px-6 py-4 border border-gray-300">
                                                {loading ? <Loader /> : order.isDelivered ? (
                                                    order.deliveredAt.substring(0, 10)
                                                    ) : (
                                                        <div className=' flex justify-center items-center'>
                                                            <MdClear className='text-red-600 text-lg' /> 
                                                        </div>
                                                    )
                                                }   
                                            </td>
                                            <td className="border border-gray-300">
                                                <Link to={`/order/${order._id}`} className=' flex justify-center items-center'>
                                                    <button className=' py-2 px-4 bg-gray-100 shadow-lg'>Details</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                                        
                                        </>
                                    )
                                }
                                
                            </tbody>
                        </table>
                    </div>
                ) }
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    orderList: state.orderList
})

export default connect(mapStateToProps, { getAllOrders })(OrderListScreen)