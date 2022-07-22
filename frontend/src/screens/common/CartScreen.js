import React,{ useEffect } from 'react';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/actions/CartActions';
import { connect } from 'react-redux';
import Message from '../../components/Message';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer';


const CartScreen = ({ cart, addToCart, removeFromCart }) => {

    const { productId } = useParams()

    const location = useLocation()
    const navigate = useNavigate()

    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const{ cartItems } = cart;


    useEffect(() => {
        window.scrollTo(0,0)  
        if (productId) {
            addToCart(productId, qty)
        }
    }, [addToCart, productId, qty])
    


    const removeFromcartHandler = (id) => {
        removeFromCart(id)
    }

    const checkOutHandler = () => {
        navigate('/login?redirect=/shipping')
    }

    return (

        <>
            <Header />
            <Navbar />
            <div className='mt-28 container max-w-screen-xl mx-auto mb-16'>
                <Link to='/' className='px-5 py-3 hover:bg-gray-200 rounded text-sm font-medium tracking-wider'>GO BACK</Link>
                <div className='uppercase text-2xl my-6 text-black tracking-wider font-normal'>shopping cart</div>
                {cartItems.length === 0 ? <Message error msg={`Your cart is empty! Go Back`} /> : (
                    <div className='flex justify-between flex-col md:flex-row'>
                        <div className='p-4 w-full'>
                            {
                                cartItems.map(item => (
                                    <div key={item.product} className='mb-4'>
                                        <div className='grid gap-3 grid-cols-5'>
                                            <img src={item.image} alt={item.name} className='text-center w-20' />
                                            <Link to={`/product/${item.product}`} className='underline text-slate-500'>{item.name}</Link>
                                            
                                            <div className='text-slate-500 text-center'>₹{item.price}</div>
                                            
                                            <div className='text-slate-500 text-center'>
                                                <select value={item.qty} className='' onChange={(e) => addToCart(item.product, Number(e.target.value))}>
                                                    {
                                                        [...Array(item.countInStock).keys()].map((x) => (
                                                            <option key= {x + 1} value={x + 1} >{x + 1}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                            <div className='text-center'>
                                                <button onClick={() => removeFromcartHandler(item.product)} className='text-red-500 duration-300 hover:bg-gray-100 px-3 py-2'><i className='fas fa-trash'></i></button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='w-full md:w-1/2 my-0 mx-auto'>
                            <div className='border-2'>
                                <div className='p-3 border-b-2'>
                                    <h2 className='text-2xl pb-3'>Subtotal  items ({ cartItems.reduce((acc, item) => acc + item.qty, 0) })</h2>
                                    <div>₹{ cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2) }</div>
                                </div>
                                <div className='p-3'>
                                    <button
                                    className='uppercase  text-sm tracking-wide bg-black w-full hover:bg-green-500 rounded duration-300 sen-font p-3 text-white'
                                    onClick={checkOutHandler}
                                    >Proceed To Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) }
            </div>
            <Footer />  
        </>           
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps, { addToCart, removeFromCart })(CartScreen);