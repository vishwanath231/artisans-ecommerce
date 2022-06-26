import React from 'react';
import { useNavigate } from 'react-router-dom';


const CodeVerificationScreen = () => {

    const navigate = useNavigate();

    const submitHandle = () => {
        navigate('/artisan/form')
    }

    return (
        <div className='px-4 py-6 max-w-3xl mt-28 mb-9 mx-auto '>
        <h2 className='text-4xl font-light uppercase mb-4' >Verification</h2>
        <form onSubmit={submitHandle}>
            <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Code <span className='text-red-500 text-base'>*</span></label>
                <input type="number" id="email" className="no-arrow shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="******" required />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
        </form>
    </div>
    )
}

export default CodeVerificationScreen;