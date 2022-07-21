import React,{ useEffect } from 'react';
import CheckoutSteps from '../../components/CheckoutStep';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import SVGicon from '../../assets/svg/SVGicon';
import { createOrder } from '../../redux/actions/OrderActions';


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


    useEffect(() => {
        if (success) {
            navigate(`/order/${order._id}`)
        }
    }, [success, navigate, order, ]);


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
                    <div className='p-4 w-full'>
                        <div className='mb-5'>
                            <h2 className='mb-3 sen-font text-xl uppercase font-bold'>shipping address</h2>
                            <p>
                                <span className='font-medium'>Address: </span>
                                <span className='capitalize'>{cart.shippingAddress.address}</span>
                            </p>
                            <p>
                                <span className='font-medium'>City: </span>
                                <span className='capitalize'>{cart.shippingAddress.city}</span>
                            </p>
                            <p>
                                <span className='font-medium'>Landmark: </span>
                                <span className='capitalize'>{cart.shippingAddress.landmark}</span>
                            </p>
                            <p>
                                <span className='font-medium'>Postal Code: </span>
                                <span className='capitalize'>{cart.shippingAddress.postalCode}</span>
                            </p>
                            <p>
                                <span className='font-medium'>Country: </span>
                                <span className='capitalize'>{cart.shippingAddress.country}</span>
                            </p>
                        </div>
                        <hr className='my-5'/>
                        <div>
                            <h2 className='mb-3 sen-font text-xl uppercase font-bold'>Payment Method</h2>
                            <span className='font-medium'>Method: </span>
                            <span className='capitalize'>{cart.paymentMethod}</span>
                        </div>
                        <hr className='my-5' />
                        <div>
                            <h2 className='mb-3 sen-font text-xl uppercase font-bold'>Order Items</h2>
                            {
                            cart.cartItems.map(item => (
                                <div key={item.product} className='mb-4'>
                                    <div className='grid gap-3 grid-cols-2'>
                                        <div className='flex items-center'>
                                            <img src={item.image} alt={item.name} className=' w-20' />
                                            <Link to={`/product/${item.product}`} className='underline ml-4 text-slate-500'>{item.name}</Link>
                                        </div>
                                        <div className='text-slate-500 flex items-center'>₹{item.qty} x ₹{item.price} = ₹{item.qty * item.price}</div>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 my-0 mx-auto'>
                        <div className='border-2'>
                            <h2 className='p-3 border-b-2 sen-font text-xl uppercase font-bold'>Order Summary</h2>
                            <div className='flex p-3 justify-between items-center border-b-2' >
                                <div className='font-medium'>Items</div>
                                <div>₹{cart.itemsPrice}</div>
                            </div>
                            <div className='flex p-3 justify-between items-center border-b-2' >
                                <div className='font-medium'>Shipping</div>
                                <div>₹{cart.shippingPrice}</div>
                            </div>
                            <div className='flex p-3 justify-between items-center border-b-2' >
                                <div className='font-medium'>Tax</div>
                                <div>₹{cart.taxPrice}</div>
                            </div>
                            <div className='flex p-3 justify-between items-center border-b-2' >
                                <div className='font-medium'>Total</div>
                                <div>₹{cart.totalPrice}</div>
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
                                    disabled={cart.cartItems === 0}
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