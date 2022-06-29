import React from 'react';
import { Link } from 'react-router-dom';

const OwnerModel = ({ profile }) => {
    return (
        <div className={ profile ? "z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow show__box" : "hidden my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow " }>
            <div className="py-3 px-4">
                <span className="block text-sm ">akash</span>
                <span className="block text-sm font-medium truncate">akash@yahoo.com</span>
            </div>
            <ul className="py-1" aria-labelledby="dropdown">
                <li>
                    <Link to='/' className="block py-2 px-4 text-sm hover:bg-gray-100">Dashboard</Link>
                </li>
                <li>
                    <Link to='/' className="block py-2 px-4 text-sm  hover:bg-gray-100 ">Sign out</Link>
                </li>
            </ul>
        </div>
    )
}

export default OwnerModel;