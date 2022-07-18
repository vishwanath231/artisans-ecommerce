import React from 'react';
import { FiEye, FiTrash2, FiEdit} from 'react-icons/fi';

const Products = ({ val, productDeleteHandler, productUpdateHandler }) => {
    return (
        <tr className="bg-white border border-gray-300 transition duration-300 ease-in-out hover:bg-gray-200 sen-font" key={val._id}>
            <td className="p-4 border border-gray-300">{val._id}</td>
            <td className="p-4 border border-gray-300">
                <img src={val.image} className='w-10 h-10' alt={val.name} />
            </td>
            <td className="p-4 border border-gray-300">{val.name}</td>
            <td className="p-4 border border-gray-300">{val.price}</td>
            <td className="p-4 border border-gray-300">{val.category}</td>
            <td className="p-4 border border-gray-300">{val.brand}</td>
            <td className='p-4 border border-gray-300'>
                <button className='px-3 py-1' >
                    <FiEye className='text-blue-800 text-base' />
                </button>
                <button className='px-3 py-1 mr-1' onClick={() => productUpdateHandler(val._id)}>
                    <FiEdit className='text-green-600 text-base' />
                </button>
                <button className='px-3 py-1' onClick={() => productDeleteHandler(val._id)}>
                    <FiTrash2 className='text-red-700 text-base'/> 
                </button>
            </td>
        </tr>
    )
}

export default Products