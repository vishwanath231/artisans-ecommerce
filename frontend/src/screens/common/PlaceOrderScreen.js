import React,{ useEffect } from 'react';
import CheckoutSteps from '../../components/CheckoutStep';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import SVGicon from '../../assets/svg/SVGicon';
import { createOrder } from '../../redux/actions/OrderActions';
import { CART_CLEAR_ITEMS } from '../../redux/constants/CartConstants';


const PlaceOrderScreen = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cart = useSelector((state) => state.cart)

    if (!cart.shippingAddress.address) {
        navigate('/')
    }else if (!cart.paymentMethod) {
        navigate('/payment')
    }

    

    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }

    cart.itemsPrice = addDecimals(cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0))
    cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100)
    cart.taxPrice = addDecimals(Number((cart.itemsPrice /100) * 5).toFixed(2))  // india tax price
    // cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2))) 
    cart.totalPrice = (
        Number(cart.itemsPrice) + 
        Number(cart.shippingPrice) + 
        Number(cart.taxPrice)).toFixed(2)


    const orderCreate = useSelector((state) => state.orderCreate)
    const { order, success, error } = orderCreate;
    
    const auth = useSelector((state) => state.auth)
    const { authInfo } = auth;

    useEffect(() => {
        if (success) {
            navigate(`/order/${order._id}`)
            dispatch({
                type: CART_CLEAR_ITEMS
            })
        }
    }, [success, navigate, order, dispatch]);


    const placeOrderHandler = () => {

        dispatch(
            createOrder({
              orderItems: cart.cartItems,
              shippingAddress: cart.shippingAddress,
              paymentMethod: cart.paymentMethod,
              itemsPrice: cart.itemsPrice,
              shippingPrice: cart.shippingPrice,
              taxPrice: cart.taxPrice,
              totalPrice: cart.totalPrice,
            })
        )
    }


    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='container max-w-screen-xl mx-auto px-4 md:px-2'>
                <div className='flex justify-center items-center mb-5'>
                    <Link to='/' className='text-center mt-5'>
                        <SVGicon logo />
                    </Link>
                </div>
                <div className='px-4 max-w-3xl my-9 mx-auto'>
                    <CheckoutSteps step1 step2 step3 step4 />
                </div>
                <div className='flex justify-between flex-col md:flex-row'>
                    <div className='w-full md:mr-5'>
                    <div className='mb-5'>
                            <h2 className='mb-3 sen-font text-xl uppercase font-bold'>Person Details</h2>
                            <p>
                                <span className='font-medium'>Name: </span>
                                <span className='capitalize'>{ authInfo && authInfo.name}</span>
                            </p>
                            <p>
                                <span className='font-medium'>Email: </span>
                                <span>{authInfo && authInfo.email}</span>
                            </p>
                            <p>
                                <span className='font-medium'>Phone: </span>
                                <span className='capitalize'>{authInfo && authInfo.phone}</span>
                            </p>
                        </div>
                        <hr className='my-5'/>
                        <div className='mb-5'>
                            <h2 className='mb-3 sen-font text-xl uppercase font-bold'>shipping address</h2>
                            <p>
                                <span className='font-medium'>Address: </span>
                                <span className='capitalize'>{cart && cart.shippingAddress.address}</span>
                            </p>
                            <p>
                                <span className='font-medium'>City: </span>
                                <span className='capitalize'>{cart && cart.shippingAddress.city}</span>
                            </p>
                            <p>
                                <span className='font-medium'>Landmark: </span>
                                <span className='capitalize'>{cart && cart.shippingAddress.landmark}</span>
                            </p>
                            <p>
                                <span className='font-medium'>Postal Code: </span>
                                <span className='capitalize'>{cart && cart.shippingAddress.postalCode}</span>
                            </p>
                            <p>
                                <span className='font-medium'>Country: </span>
                                <span className='capitalize'>{cart && cart.shippingAddress.country}</span>
                            </p>
                        </div>
                        <hr className='my-5'/>
                        <div>
                            <h2 className='mb-3 sen-font text-xl uppercase font-bold'>Payment Method</h2>
                            <span className='font-medium'>Method: </span>
                            <span className='capitalize'>{cart && cart.paymentMethod}</span>
                        </div>
                        <hr className='my-5' />
                        <div>
                            <h2 className='mb-3 sen-font text-xl uppercase font-bold'>Order Items</h2>
                            {
                            cart && cart.cartItems.map(item => (
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
                                <div>₹{cart && cart.itemsPrice}</div>
                            </div>
                            <div className='flex p-3 justify-between items-center border-b-2' >
                                <div className='font-medium'>Shipping</div>
                                <div>₹{cart && cart.shippingPrice}</div>
                            </div>
                            <div className='flex p-3 justify-between items-center border-b-2' >
                                <div className='font-medium'>Tax</div>
                                <div>₹{cart && cart.taxPrice}</div>
                            </div>
                            <div className='flex p-3 justify-between items-center border-b-2' >
                                <div className='font-medium'>Total</div>
                                <div>₹{cart && cart.totalPrice}</div>
                            </div>
                            {
                                error && (
                                    <div className='p-3 border-b-2 text-red'>
                                        <div className='text-red-600 text-base'>{error}</div>
                                    </div>
                                )
                            }
                            <div className='p-3'>
                                <button 
                                    className='uppercase text-sm tracking-wide bg-black w-full p-3 hover:bg-green-500 rounded duration-300 sen-font text-white disabled:hidden' 
                                    disabled={cart && cart.cartItems === 0}
                                    onClick={placeOrderHandler}
                                >
                                Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrderScreen;