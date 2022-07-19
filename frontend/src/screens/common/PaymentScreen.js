import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SVGicon from '../../assets/svg/SVGicon';
import CheckoutStep from '../../components/CheckoutStep';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePaymentMethod } from '../../redux/actions/CartActions';

const PaymentScreen = ({ cart, savePaymentMethod }) => {

   const navigate = useNavigate()

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

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
        <main className='min-screen-h'>
                <div className='px-4 max-w-3xl my-9 mx-auto'>
                    <div className='flex justify-center items-center mb-5'>
                        <Link to='/' className='text-center'>
                            <SVGicon logo />
                        </Link>
                    </div>
                    <CheckoutStep step1 step2 step3 />
                    <h2 className='text-4xl font-light uppercase mb-4'>Payment Method</h2> 
                    
                    <form onSubmit={_submitHandler} className='mt-10'>
                        <div className="flex items-center mb-7">
                            <input 
                                id="PayPal" 
                                type="radio" 
                                value="PayPal" 
                                name="paymentMethod"
                                onChange={e => setPaymentMethod(e.target.value)} 
                                className="w-4 h-4" 
                                required 
                            />
                            <label htmlFor="PayPal" className="ml-2 text-base font-medium text-gray-900">PayPal or Credit Card</label>
                        </div>
                        <button type="submit" className="text-white text-xs tracking-wide bg-blue-700 uppercase hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-3.5 text-center mont-font">continue</button>
                    </form>
                </div>

            </main>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps, { savePaymentMethod })(PaymentScreen);