import React,{ useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails, createRazorpayOrderAction, payOrder } from '../../redux/actions/OrderActions';
import SVGicon from '../../assets/svg/SVGicon';
import axios from 'axios';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { ORDER_PAY_RESET, ORDER_DELIVER_RESET } from '../../redux/constants/OrderConstants';


const OrderScreen = () => {

    const { orderId } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [razorpayErr, setRazorpayErr] = useState('')

    const orderDetails = useSelector((state) => state.orderDetails)
    const {loading, order, error } = orderDetails;

    const razorpayOrder = useSelector((state) => state.razorpayOrder)
    const {razorpayResult, error:razorpayOrderErr } = razorpayOrder;

    const orderPay = useSelector((state) => state.orderPay)
    const {loading: loadingPay, success:successPay } = orderPay;

    const authLogin = useSelector((state) => state.authLogin)
    const { info } = authLogin;

    const auth = useSelector((state) => state.auth)
    const { authInfo } = auth;

    
    useEffect(() => {

        if (!info) {
            navigate('/login')
        }
        
        
        if (!order || successPay || order._id !== orderId) {
            dispatch({ type: ORDER_PAY_RESET })
            dispatch({ type: ORDER_DELIVER_RESET })
            dispatch(getOrderDetails(orderId))
        }

       
        
    }, [orderId, order, authLogin, dispatch, navigate, info, successPay])




    if (!loading) {
        const addDecimals = (num) => {
            return (Math.round(num * 100) / 100).toFixed(2)
        }
      
        order.itemsPrice = addDecimals(
            order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
        )
    }



    function successPaymentHandler(){
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onerror = () => {
            setRazorpayErr('Razorpay SDK failed to load. Are you online?');
        };
        script.onload = async () => {
            try {

                dispatch(createRazorpayOrderAction({ amount: order.totalPrice }))
                
                const { data: { key: razorpayKey }, } = await axios.get('http://localhost:5000/get-razorpay-key');
    
                const options = {
                    key: razorpayKey,
                    amount: razorpayResult.amount.toString(),
                    currency: razorpayResult.currency,
                    name: 'CRAFTIS',
                    description: 'Transaction',
                    order_id: razorpayResult.id,
                    handler: async function (response) {
                        const razorpay = {
                            razorpayPaymentId: response.razorpay_payment_id,
                            razorpayOrderId: response.razorpay_order_id,
                            razorpaySignature: response.razorpay_signature,
                        };
                        dispatch(payOrder(orderId, razorpay))
                    },
                    prefill: {
                        name: authInfo.name,
                        email: authInfo.email,
                        contact: authInfo.phone,
                    },
                    notes: {
                        address: order.shippingAddress.address,
                    },
                    theme: {
                        color: '#80c0f0',
                    },
                };
    
                const paymentObject = new window.Razorpay(options);
                paymentObject.open();
            } catch (err) {
                console.log(err);
            }
        };

        document.body.appendChild(script);
    }


    
    const _successDeliverHandler = () => {}



    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='container max-w-screen-xl mx-auto px-4 md:px-2'>
                <div className='flex justify-center items-center mb-5'>
                    <Link to='/' className='text-center mt-5'>
                        <SVGicon logo />
                    </Link>
                </div>
                { razorpayErr && <Message error msg={razorpayErr} /> }
                { razorpayOrderErr && <Message error msg={razorpayOrderErr} /> }
                {
                    loading ? <Loader /> : error ? <Message error msg={error} /> : (
                        <>
                            <h2 className='mb-16 mt-10 text-xl font-extrabold mont-font tracking-wider uppercase text-center'>order <span className='text-2xl font-extrabold'>{order && order._id}</span> </h2>
                            <div className='flex justify-between flex-col md:flex-row'>
                                <div className='w-full md:mr-5'>
                                <div className='mb-5'>
                                        <h2 className='mb-3 sen-font text-xl uppercase font-bold ]'>Person Details</h2>
                                        <p>
                                            <span className='font-medium'>Name: </span>
                                            <span className='capitalize'>{ order && order.user.name}</span>
                                        </p>
                                        <p>
                                            <span className='font-medium'>Email: </span>
                                            <span>{order && order.user.email}</span>
                                        </p>
                                        <p>
                                            <span className='font-medium'>Phone: </span>
                                            <span className='capitalize'>{order && order.user.phone}</span>
                                        </p>
                                    </div>
                                    <hr className='my-5'/>
                                    <div className='mb-5'>
                                        <h2 className='mb-3 sen-font text-xl uppercase font-bold'>shipping address</h2>
                                        <p>
                                            <span className='font-medium'>Address: </span>
                                            <span className='capitalize'>{order && order.shippingAddress.address}</span>
                                        </p>
                                        <p>
                                            <span className='font-medium'>City: </span>
                                            <span className='capitalize'>{order && order.shippingAddress.city}</span>
                                        </p>
                                        <p>
                                            <span className='font-medium'>Landmark: </span>
                                            <span className='capitalize'>{order && order.shippingAddress.landmark}</span>
                                        </p>
                                        <p>
                                            <span className='font-medium'>Postal Code: </span>
                                            <span className='capitalize'>{order && order.shippingAddress.postalCode}</span>
                                        </p>
                                        <p>
                                            <span className='font-medium'>Country: </span>
                                            <span className='capitalize'>{order && order.shippingAddress.country}</span>
                                        </p>
                                    </div>
                                    {order && order.isDelivered ? (
                                        <Message success msg={`Delivered on ${order.deliveredAt}`} />
                                    ) : (
                                        <div className="p-3 my-4 text-sm my-2 text-red-700 bg-red-100 rounded" role="alert">
                                            <span className="font-medium ">Not Delivered</span> 
                                        </div>
                                    )}
                                    <hr className='my-5'/>

                                    <div>
                                        <h2 className='mb-3 sen-font text-xl uppercase font-bold'>Payment Method</h2>
                                        <span className='font-medium'>Method: </span>
                                        <span className='capitalize'>{order && order.paymentMethod}</span>
                                    </div>
                                    {order && order.isPaid ? (
                                        <Message success msg={`Paid on ${order.paidAt}`} />
                                    ) : (
                                        <div className="p-3 my-4 text-sm my-2 text-red-700 bg-red-100 rounded" role="alert">
                                            <span className="font-medium ">Not Paid</span> 
                                        </div>
                                    )}
                                    <hr className='my-5' />
                                    <div>
                                        <h2 className='mb-3 sen-font text-xl uppercase font-bold'>Order Items</h2>
                                        {
                                        order && order.orderItems.map(item => (
                                            <div key={item.product} className='mb-4 shadow p-4 rounded bg-white'>
                                                <div className='flex lg:flex-row flex-col lg:items-center'>
                                                    <div className='w-20'>
                                                        <img src={item.image} alt={item.name} className='w-20' />
                                                    </div>
                                                    <div  className='lg:w-96 lg:mx-5 lg:my-0 my-4 w-full'>
                                                        <Link to={`/product/${item.product}`} className='underline text-slate-500'>{item.name}</Link>
                                                    </div>
                                                        
                                                    <div className='text-slate-500 '>{item.qty} x ₹{item.price} = <span className='text-black font-medium'>₹{item.qty * item.price}</span></div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    </div>
                                </div>
                                <div className='w-full md:w-1/2 my-0 mx-auto md:ml-5'>
                                    <div className='border-2'>
                                        <h2 className='p-3 border-b-2 sen-font text-xl uppercase font-bold'>Order Summary</h2>
                                        <div className='flex p-3 justify-between items-center border-b-2' >
                                            <div className='font-medium'>Items</div>
                                            <div>₹{order && order.itemsPrice}</div>
                                        </div>
                                        <div className='flex p-3 justify-between items-center border-b-2' >
                                            <div className='font-medium'>Shipping</div>
                                            <div>₹{order && order.shippingPrice}</div>
                                        </div>
                                        <div className='flex p-3 justify-between items-center border-b-2' >
                                            <div className='font-medium'>Tax</div>
                                            <div>₹{order && order.taxPrice}</div>
                                        </div>
                                        <div className='flex p-3 justify-between items-center border-b-2' >
                                            <div className='font-medium'>Total</div>
                                            <div>₹{order && order.totalPrice}</div>
                                        </div>
                                        {
                                            order && !order.isPaid && (
                                                <div className='p-3'>
                                                    {loadingPay && <Loader />}
                                                    <button 
                                                        className='uppercase text-sm tracking-wide bg-black sen-font w-full p-3 text-white disabled:hidden' 
                                                        onClick={successPaymentHandler}
                                                    >
                                                    Pay Order</button>
                                                </div>
                                            )
                                        }
                                        { authInfo &&
                                            authInfo.role === 'admin' &&
                                            order.isPaid &&
                                            !order.isDelivered && (
                                                <div className='p-3'>
                                                    <button 
                                                        className='uppercase text-sm tracking-wide bg-black sen-font w-full p-3 text-white disabled:hidden' 
                                                        onClick={_successDeliverHandler}
                                                    >
                                                    Mark as Delivered</button>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        
                        </>
                    )
                }
            </div>
        </div>
    )
}


export default OrderScreen;