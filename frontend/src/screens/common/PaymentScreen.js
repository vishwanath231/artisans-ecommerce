import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SVGicon from '../../assets/svg/SVGicon';
import CheckoutStep from '../../components/CheckoutStep';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePaymentMethod } from '../../redux/actions/CartActions';
import NavbarTwo from '../../components/navbar/NavbarTwo';

const PaymentScreen = ({ cart, savePaymentMethod }) => {

   const navigate = useNavigate()

    const [paymentMethod, setPaymentMethod] = useState('Razorpay')

    const { shippingAddress } = cart;

    if (!shippingAddress.address) {
        navigate('/shipping')
    }

    const _submitHandler = e => {
        e.preventDefault()

        savePaymentMethod(paymentMethod)
        navigate('/placeorder')
    }


    return (
        <div className='min-h-screen bg-gray-100'>
            <NavbarTwo />
            <main className='my-5'>
                <div className='px-4 max-w-3xl my-9 mx-auto'>
                    <CheckoutStep step1 step2 step3 />
                    <Link to='/shipping' className='px-5 py-3 hover:bg-gray-200 rounded text-sm font-medium tracking-wider'>GO BACK</Link>
                    <h2 className='text-4xl font-light uppercase mb-4 mt-6'>Payment Method</h2> 
                    <form onSubmit={_submitHandler} className='mt-10'>
                        <div className="flex items-center mb-7">
                            <input 
                                id="Razorpay" 
                                type="radio" 
                                value="Razorpay" 
                                name="paymentMethod"
                                onChange={e => setPaymentMethod(e.target.value)} 
                                className="w-4 h-4" 
                                required 
                            />
                            <label htmlFor="Razorpay" className="ml-2 text-base font-medium text-gray-900">Razorpay or Credit Card</label>
                        </div>
                        <button type="submit" className="text-white text-xs tracking-wide bg-blue-700 uppercase hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-3.5 text-center mont-font">continue</button>
                    </form>
                </div>
            </main>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps, { savePaymentMethod })(PaymentScreen);