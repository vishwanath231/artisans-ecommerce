import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiPackage } from 'react-icons/fi';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { BiLogOutCircle, BiBookAlt } from 'react-icons/bi';


const MobileMenu = ({ hamburger }) => {
    return (
        <div className={!hamburger ? "hidden" : "justify-between items-center w-full "} >
            <div className='mt-7 md:mt-0'>
                <div className='mb-3 '>
                    <Link to='/' className="block py-2 px-4 hover:bg-gray-200">
                        <div className='flex items-center'>
                            <FiHome className='text-xl text-[#DC143C] mr-1' />
                            <p>Home</p>
                        </div>
                    </Link>
                </div>

                <div className='mb-3'>
                    <Link to='' className="block py-2 px-4 hover:bg-gray-200">
                        <div className='flex items-center'>
                            <FiPackage className='text-xl text-[#DC143C] mr-1' />
                            <p>Products</p>
                        </div>
                    </Link>
                </div>

                <div className='mb-3'>
                    <Link to='' className="block py-2 px-4 hover:bg-gray-200">
                        <div className='flex items-center'>
                            <MdOutlineDeliveryDining className='text-xl text-[#DC143C] mr-1' />
                            <p>Cart</p>
                        </div>
                    </Link>
                </div>

                <div className='mb-3'>
                    <Link to='' className="block py-2 px-4 hover:bg-gray-200">
                        <div className='flex items-center'>
                            <BiBookAlt className='text-xl text-[#DC143C] mr-1' />
                            <p>Blog</p>
                        </div>
                    </Link>
                </div>


                <div className='mb-3'>
                    <Link to='' className="block py-2 px-4 hover:bg-gray-200">
                        <div className='flex items-center'>
                            <BiLogOutCircle className='text-xl text-[#DC143C] mr-1' />
                            <p>Logout</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div> 
    )
}

export default MobileMenu