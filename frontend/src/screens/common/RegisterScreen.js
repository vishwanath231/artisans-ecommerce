import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import SVGicon from '../../components/svg/SVGicon';


const UserRegisterScreen = () => {

    const [userRegisterData, setUserRegisterData] = useState({
        username:'',
        email: '',
        phone: '',
        password: '',
        repeatPassword: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;

        setUserRegisterData({
            ...userRegisterData,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        console.log(userRegisterData);
        setUserRegisterData({
            username:'',
            email: '',
            phone: '',
            password: '',
            repeatPassword: ''
        })
    }

    return (
        <div className=' mb-14'>
            <div className='px-4 max-w-3xl my-9 mx-auto'>
                <div className='flex justify-center items-center mb-14'>
                    <Link to='/' className='text-center'>
                        <SVGicon logo />
                    </Link>
                </div>
                <h2 className='text-4xl font-light uppercase mb-4'>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor='username' className="block mb-2 text-sm font-medium text-gray-900 ">Username <span className='text-red-500 text-base'>*</span></label>
                        <input 
                            type="text" 
                            id="username"
                            name="username"
                            onChange={handleChange}
                            value={userRegisterData.username} 
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
                            value={userRegisterData.email}
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
                            value={userRegisterData.phone} 
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
                            value={userRegisterData.password} 
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
                            value={userRegisterData.repeatPassword}
                            placeholder="****" 
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    {/* <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input 
                                id="terms" 
                                type="checkbox" 
                                value="" 
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                            />
                        </div>
                        <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900">I agree with the <a href='https://www.termsfeed.com/live/bdb176ea-cb5e-49e5-8332-1686fc4e8baa' target='_blank' rel="noopener noreferrer" className="text-blue-600 hover:underline">terms and conditions</a></label>
                    </div> */}
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register for account</button>
                </form>
            </div>
        </div>
    )
}



export default UserRegisterScreen;