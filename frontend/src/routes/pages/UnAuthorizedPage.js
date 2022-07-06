import React from 'react';
import { Link } from 'react-router-dom';
import IMAGE from '../../assets/svg/401.svg';
import { Link } from 'react-router-dom';

const UnAuthorizedPage = () => {
    return (
        <div className='container w-full min-h-screen bg-gray-50'>
            <div className='flex justify-center mx-auto'>
                <img src={ IMAGE } width='400' alt='401 UnAuthorized' />
            </div>
            <div className='text-center tracking-wide mont-font'>
                <div className='text-7xl font-black text-[#c91237] mb-4'>401</div>
                <div className='text-3xl font-bold'>UnAuthorized</div>
            </div>
<<<<<<< HEAD
            <p className='text-center font-medium'>Something Missing</p>
            <div className='mt-7 text-center'>
                <Link to='/' className='mt-3 py-2 text-base mont-font px-5 rounded bg-[#c91237] text-white shadow-md'>Go Back</Link>
=======
            <div className='text-center>
               <Link to='/' className='text-base font-medium py-2 px-4 mont-font rounded shadow'>Go Back</Link>
>>>>>>> a53b5c5f983f601aacf6f8b827bdbfae6f9ed4cf
            </div>
        </div>
    )
}

export default UnAuthorizedPage;
