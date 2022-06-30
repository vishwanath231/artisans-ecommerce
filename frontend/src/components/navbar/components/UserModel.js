import React from 'react';
import { Link } from 'react-router-dom';


const UserModel = ({ profile }) => {
    return (
        <div className={ profile ? "z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow showModel__box" : "hidden" }>
            <div className="py-3 px-4 text-sm text-left">
                <span className="block">vishwanath</span>
                <span className="block font-medium truncate">vishwanathvishwabai@gmail.com</span>
            </div>
            <ul className="py-1 text-sm text-left">
                <li>
                    <Link to='/profile' className="block py-2 px-4 text-sm  hover:bg-gray-100 ">Profile</Link>
                </li>
                <li>
                    <Link to='' className="block py-2 px-4 hover:bg-gray-100">Your Order</Link>
                </li>
                <li>
                    <Link to='' className="block py-2 px-4 hover:bg-gray-100 ">WishList</Link>
                </li>
                <li>
                    <Link to='' className="block py-2 px-4 hover:bg-gray-100 ">Sign out</Link>
                </li>
            </ul>
        </div>
    )
}

export default UserModel;