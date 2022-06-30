import React from 'react';
import { Link } from 'react-router-dom';

const AdminModel = ({ profile }) => {
    return (
        <div className={ profile ? "z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow showModel__box" : "hidden" }>
            <div className="py-3 px-4 text-sm text-left">
                <span className="block">Admin</span>
                <span className="block font-medium truncate">admin@gmail.com</span>
            </div>
            <ul className="py-1 text-sm text-left">
                <li>
                    <Link to='/admin/dashboard' className="block py-2 px-4 hover:bg-gray-100">Dashboard</Link>
                </li>
                <li>
                    <button className="block py-2 px-4 hover:bg-gray-100 ">Sign out</button>
                </li>
            </ul>
        </div>
    )
}

export default AdminModel;