import React from 'react';
import SVGicon from '../../assets/svg/SVGicon';
import { Link } from 'react-router-dom';
import CheckoutStep from '../../components/CheckoutStep';

const ShippingScreen = () => {


    const changeHandler = () => {}

    const submitHandler = () => {

    }

    return (
        <>
            <main className='min-screen-h'>
                <div className='px-4 max-w-3xl my-9 mx-auto'>
                    <div className='flex justify-center items-center mb-5'>
                        <Link to='/' className='text-center'>
                            <SVGicon logo />
                        </Link>
                    </div>
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
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required  
                            />
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mont-font">submit</button>
                    </form>
                </div>
            </main>

        </>
    )
}

export default ShippingScreen;