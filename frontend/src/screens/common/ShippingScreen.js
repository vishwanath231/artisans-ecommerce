import React, { useState } from 'react';
import SVGicon from '../../assets/svg/SVGicon';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutStep from '../../components/CheckoutStep';
import { connect } from 'react-redux';
import { saveShippingAddress } from '../../redux/actions/CartActions';
import NavbarTwo from '../../components/navbar/NavbarTwo';


const ShippingScreen = ({ saveShippingAddress, cart }) => {

    const { shippingAddress } = cart;

    const [data, setData] = useState({
        address: shippingAddress && shippingAddress.address,
        city: shippingAddress && shippingAddress.city,
        landmark: shippingAddress && shippingAddress.landmark,
        postalCode: shippingAddress && shippingAddress.postalCode,
        country: shippingAddress && shippingAddress.country
    })


    const changeHandler = (e) => {
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value
        })
    }

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault()
        saveShippingAddress(data)
        navigate('/payment')
    }


    return (
        <div className='min-h-screen bg-gray-100'>
            <NavbarTwo />
            <main className='my-5'>
                <div className='px-4 max-w-3xl mx-auto'>
                    <CheckoutStep step1 step2 />
                    <h2 className='text-4xl font-light uppercase mb-4'>shipping</h2> 
                    <form onSubmit={submitHandler}>
                        <div className="mb-6">
                            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address<span className='text-red-500 text-base'>*</span></label>
                            <input 
                                type="text" 
                                id="address" 
                                name='address' 
                                onChange={changeHandler}
                                value={data.address}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required  
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">City<span className='text-red-500 text-base'>*</span></label>
                            <input 
                                type="text" 
                                id="city" 
                                name='city' 
                                onChange={changeHandler}
                                value={data.city}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required  
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="landmark" className="block mb-2 text-sm font-medium text-gray-900">Landmark<span className='text-red-500 text-base'>*</span></label>
                            <input 
                                type="text" 
                                id="landmark" 
                                name='landmark' 
                                onChange={changeHandler}
                                value={data.landmark}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required  
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="postalCode" className="block mb-2 text-sm font-medium text-gray-900">Postal Code<span className='text-red-500 text-base'>*</span></label>
                            <input 
                                type="text" 
                                id="postalCode" 
                                name='postalCode' 
                                onChange={changeHandler}
                                value={data.postalCode}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required  
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">Country<span className='text-red-500 text-base'>*</span></label>
                            <input 
                                type="text" 
                                id="country" 
                                name='country' 
                                onChange={changeHandler}
                                value={data.country}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required  
                            />
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs uppercase tracking-wide px-5 py-3.5 text-center mont-font">save and continue</button>
                    </form>
                </div>
            </main>

        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps, { saveShippingAddress })(ShippingScreen);