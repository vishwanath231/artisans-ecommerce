import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ hamburger }) => {
    return (
        <div className={!hamburger ? "hidden" : "justify-between items-center w-full"}  id="mobile-menu-2">
            <ul className="flex flex-col mt-4">
                <li>
                    <Link to='/' className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded">Home</Link>
                </li>
                <li>
                    <Link to='' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50">Product</Link>
                </li>
                <li>
                    <Link to='' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 ">wishlist</Link>
                </li>
                <li>
                    <Link to='/contact' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50">Cart</Link>
                </li>
                <li>
                    <Link to='' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50">Blog</Link>
                </li>
            </ul>
        </div> 
    )
}

export default MobileMenu