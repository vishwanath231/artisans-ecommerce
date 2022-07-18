import React from 'react';
import { FiEye, FiTrash2, FiEdit } from 'react-icons/fi';


const UsersList = ({ val, userUpdateHandler, userDeleteHandler }) => {
    return (
        <tr className="bg-white border border-gray-300 transition duration-300 ease-in-out hover:bg-gray-200 sen-font">
            <td className="px-6 py-4 border border-gray-300">{val._id}</td>
            <td className="px-6 py-4 border border-gray-300">{val.name}</td>
            <td className="px-6 py-4 border border-gray-300"><a href={`mailto:${val.email}`} className='hover:underline'>{val.email}</a></td>
            <td className="px-6 py-4 border border-gray-300">{val.phone}</td>
            <td className='px-4 py-2 border border-gray-300'>
                <button className='px-3 py-1' >
                    <FiEye className='text-blue-800 text-base' />
                </button>
                <button className='px-3 py-1 mr-1' onClick={() => userUpdateHandler(val._id)}>
                    <FiEdit className='text-green-600 text-base' />
                </button>
                <button className='px-3 py-1' onClick={() => userDeleteHandler(val._id)}>
                    <FiTrash2 className='text-red-700 text-base'/> 
                </button>
            </td>
        </tr>
    )
}

export default UsersList