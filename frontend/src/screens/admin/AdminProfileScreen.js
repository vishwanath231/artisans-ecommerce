import React,{ useState } from 'react';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import SideBar from './components/SideBar';


const AdminProfileScreen = () => {
    
    const [data, setData] = useState({
        name:'',
        email: '',
        phone: '',
        password: '',
        repeatPassword: ''
    });


    const changeHandler = e => {
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value
        })
    }

    const submitHandler = e => {
        e.preventDefault()


        console.log(data);
        setData({
            name:'',
            email: '',
            phone: '',
            password: '',
            repeatPassword: ''
        })
    }

    return (
        <>
            <SideBar />
            <MobileNav />
            <Header />
            <div className='md:ml-72 px-4'>
                <div className='flex justify-between flex-col lg:flex-row my-10'>
                    <div className='w-full lg:mr-5 order-2 lg:order-none'>
                        <h2 className='text-4xl font-light uppercase mb-4'>update</h2>
                        <form onSubmit={submitHandler}>
                            <div className="mb-6">
                                <label htmlFor='name' className="block mb-2 text-sm font-medium text-gray-900 ">Username <span className='text-red-500 text-base'>*</span></label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name"
                                    onChange={changeHandler}
                                    value={data.name} 
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
                                    onChange={changeHandler} 
                                    value={data.email}
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
                                    onChange={changeHandler} 
                                    value={data.phone} 
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
                                    onChange={changeHandler} 
                                    value={data.password} 
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
                                    onChange={changeHandler} 
                                    value={data.repeatPassword}
                                    placeholder="****" 
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update</button>
                        </form>
                    </div>
                    <div className='w-full lg:ml-5'>
                        <h2 className='text-4xl font-light uppercase mb-4'>profile</h2>
                        <div className="relative overflow-x-auto my-10">
                            <table className="w-full text-sm text-left text-black">
                                <thead className="text-xs text-black mont-font text-white uppercase bg-[#0b2545]">
                                    <tr className='border border-gray-300'>
                                        <th className="px-6 py-3 border border-gray-300">NAME</th>
                                        <th className="px-6 py-3 border border-gray-300">EMAIL</th>
                                        <th className="px-6 py-3 border border-gray-300">PHONE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border border-gray-300 transition duration-300 ease-in-out hover:bg-gray-200 sen-font">
                                        <td className="px-6 py-4 border border-gray-300">vishwanath</td>
                                        <td className="px-6 py-4 border border-gray-300">vishwanathvishwabai@gmail.com</td>
                                        <td className="px-6 py-4 border border-gray-300">6356789034</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default AdminProfileScreen;