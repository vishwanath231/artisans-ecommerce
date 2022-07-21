import React,{ useEffect } from 'react';
import { MdClear } from 'react-icons/md';
import { connect } from 'react-redux';
import { getMyOrder } from '../../redux/actions/OrderActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import Navbar from '../../components/navbar/Navbar';

const UserOrderListScreen = ({ myOrder, getMyOrder }) => {


    useEffect(() => {
        getMyOrder()
    },[getMyOrder])


    const { loading, orders, error } = myOrder;

    return (
        <div>
            <Navbar />
            <div className='container max-w-screen-xl mx-auto px-4 md:px-2 mb-28'>
                <div className='flex justify-center flex-col items-center mb-16'>
                    <h2 className='font-normal text-black text-3xl uppercase mb-1 mont-font'>Lasted Products</h2>
                </div>
                { loading ? <Loader /> : error ? <Message error msg={error} /> : (
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
                                {
                                    orders.map((order) => (
                                        <tr className="bg-white border border-gray-300 transition duration-300 ease-in-out hover:bg-gray-200 sen-font" key={order._id}>
                                            <td className="px-6 py-4 border border-gray-300">{order._id}</td>
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
                                                <div className=' flex justify-center items-center'>
                                                    <button className=' py-2 px-4 bg-gray-100 shadow-lg'>Details</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                ) }
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    myOrder: state.myOrder
})

export default connect(mapStateToProps, { getMyOrder })(UserOrderListScreen);
