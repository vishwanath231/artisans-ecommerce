import React from 'react';
import IMAGE from '../../assets/svg/404.svg';

const NotFoundPage = () => {
    return (
        <div className='container w-full min-h-screen bg-gray-50'>
            <div className='flex justify-center mx-auto'>
                <img src={ IMAGE } width='400' alt='401 UnAuthorized' />
            </div>
            <div className='text-center tracking-wide mont-font'>
                <div className='text-7xl font-black text-[#c91237] mb-4'>401</div>
                <div className='text-3xl font-bold'>Page Not Found</div>
            </div>
        </div>
    )
}

export default NotFoundPage;