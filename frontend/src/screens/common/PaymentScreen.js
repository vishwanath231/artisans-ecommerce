import React from 'react'
import { Link } from 'react-router-dom'
import SVGicon from '../../assets/svg/SVGicon'
import CheckoutStep from '../../components/CheckoutStep'

const PaymentScreen = () => {
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
                </div>
            </main>
    )
}

export default PaymentScreen;