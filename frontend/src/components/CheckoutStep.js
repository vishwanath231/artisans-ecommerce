import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutStep = ({ step1, step2, step3, step4 }) => {

    return (
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center my-10 mont-font'>
            <div className='mb-2 sm:mb-0'>
                { step1  ? 
                    <div>
                        <span className='text-[#DC143C]' >1.</span>
                        <Link to='/login'>Sign In</Link>
                    </div> : 
                    <div className='flex text-gray-400'>
                        <span className=''>1.</span>
                        <p>Sign In</p>
                    </div>
                }
            </div>
            <div className='mb-2 sm:mb-0'>
                { step2 ? 
                    <div>
                        <span className='text-[#DC143C]'>2.</span>
                        <Link to='/shipping'>Shipping</Link>
                    </div> : 
                    <div className='flex text-gray-400'>
                        <span className=''>2.</span>
                        <p>Shipping</p>
                    </div>
                }
            </div>
            <div className='mb-2 sm:mb-0'>
                { step3 ? 
                    <div>
                        <span className='text-[#DC143C]'>3.</span>
                        <Link to='/payment'>Payment</Link>
                    </div> : 
                    <div className='flex text-gray-400'>
                        <span className=''>3.</span>
                        <p>Payment</p>
                    </div>
                }
            </div>
            <div className=''>
                { step4 ? 
                    <div>
                        <span className='text-[#DC143C]'>4.</span>
                        <Link to='/placeorder'>Place Order</Link>
                    </div> : 
                    <div className='flex text-gray-400'>
                        <span className=''>4.</span>
                        <p>Place Order</p>
                    </div>
                }
            </div>  
        </div>
    )
}

export default CheckoutStep;