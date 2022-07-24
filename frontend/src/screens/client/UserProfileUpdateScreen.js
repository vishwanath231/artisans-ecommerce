import React, { useState } from 'react';
import NavbarTwo from '../../components/navbar/NavbarTwo';

const UserProfileUpdateScreen = () => {

    const [userUpdateProfile, setUserUpdateProfile] = useState({
        name:'',
        email: '',
        phone: '',
        password: '',
        repeatPassword: ''
    });


    const handleChange = e => {
        const { name, value } = e.target;

        setUserUpdateProfile({
            ...userUpdateProfile,
            [name]: value
        })
    }


    const handleSubmit = e => {
        e.preventDefault()

        console.log(userUpdateProfile);
    }

    return (
        <>
            <NavbarTwo />
            <div className='px-4 max-w-3xl my-9 mx-auto'>
                <div className='uppercase text-2xl my-6 text-black tracking-wider font-normal'>update profile</div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor='username' className="block mb-2 text-sm font-medium text-gray-900 ">Username <span className='text-red-500 text-base'>*</span></label>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                            onChange={handleChange}
                            value={userUpdateProfile.name} 
                            placeholder="name"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email <span className='text-red-500 text-base'>*</span></label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            onChange={handleChange} 
                            value={userUpdateProfile.email}
                            placeholder="example@support.com" 
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone No <span className='text-red-500 text-base'>*</span></label>
                        <input 
                            type="number" 
                            id="phone"
                            name="phone"
                            onChange={handleChange} 
                            value={userUpdateProfile.phone} 
                            placeholder="112456789" 
                            className="no__arrow shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password <span className='text-red-500 text-base'>*</span></label>
                        <input 
                            type="password"
                            id="password" 
                            name="password"
                            onChange={handleChange} 
                            value={userUpdateProfile.password} 
                            placeholder="****"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="repeatPassword" className="block mb-2 text-sm font-medium text-gray-900 ">Repeat password <span className='text-red-500 text-base'>*</span></label>
                        <input 
                            type="password" 
                            id="repeatPassword" 
                            name="repeatPassword"
                            onChange={handleChange} 
                            value={userUpdateProfile.repeatPassword}
                            placeholder="****" 
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register for account</button>
                </form>
            </div>
        </>
    )
}

export default UserProfileUpdateScreen;