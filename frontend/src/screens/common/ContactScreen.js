import React from 'react'
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer';

const ContactScreen = () => {
    return (
        <>
            <Header />
            <Navbar />
            <div className='px-4 py-6 max-w-3xl mt-28 mb-9 mx-auto '>
                <h2 className='text-4xl font-light uppercase mb-4' >Contact</h2>
                <form>
                    <div className="mb-6">
                        <label htmlFor='username' className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                        <input type="text" id="username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Your Message</label>
                        <textarea type="text" id="message" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></textarea>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                </form>
            </div>
            <Footer />
        
        </>
    )
}

export default ContactScreen