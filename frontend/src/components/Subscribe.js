import React from 'react';

const Subscribe = () => {
    return (
        <div className='container max-w-screen-xl mx-auto my-16 px-4 md:px-2'>
            <div className='flex justify-between items-center flex-col md:flex-row'>
                <div className='text-lg md:w-4/6'>
                    Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
                </div>
                <form className='flex w-full md:w-4/12 md:flex-row flex-col mt-3 md:mt-0'>
                    <input type='text' id='subscribeEmail' name='subscribeEmail' placeholder='Enter the Email' className='shadow-sm  border border-black text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full   p-2.5' />
                    <button type='submit' className='bg-black text-white mt-3 md:mt-0 md:ml-3 py-3 px-5'>Subscribe</button>
                </form>
            </div>
        </div>
        
    )
}

export default Subscribe;