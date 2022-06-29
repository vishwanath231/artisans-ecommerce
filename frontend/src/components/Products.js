import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


const Products = ({ val }) => {
    return (
        <div className='bg-white shadow-md rounded-lg hi'>
            <Link to={`/product/${val._id}`}>
                <img src={val.image} alt={val.name} className='w-full cursor-pointer rounded-t-lg' />
            </Link>
            <div className='p-4'>
                <Link to={`/product/${val._id}`} className='hover:underline product__name cursor-pointer mont-font'>{val.name}</Link>
                <Rating value={val.rating} text={`${val.numReviews} reviews`} />
                <div className='font-semibold text-xl'>₹{val.price}</div>
            </div>
        </div>
    )
}



export default Products