import React,{ useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Rating from '../../components/Rating';
import product from '../../products.json';

const ProductScreen = () => {

    const [qty, setQty] = useState(1);

    const { id } = useParams();

    const products = product.products.find(val => val._id === Number(id))



    return (
        <div className='container max-w-screen-xl mx-auto p-4 mt-28 mb-4'>
            <Link to='/' className='px-5 py-3 hover:bg-gray-200 rounded text-sm font-medium tracking-wider'>GO BACK</Link>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-9'>
                <div>
                    <img src={products.image} alt={products.name} />
                </div>
                <div>
                    <div className='text-2xl tracking-wide font-normal mb-3 uppercase'>{products.name}</div>
                    <Rating value={products.rating} text={`${products.numReviews} reviews`} />
                    <div className='product_desc text-base mt-3 h-56 overflow-auto overscroll-auto'><span className='font-medium'>Description:</span> {products.description}</div>
                </div>
                <div className='border-2 h-fit'>
                    <div className='flex p-3 justify-between items-center border-b-2' >
                        <div>Price:</div>
                        <div>${products.price}</div>
                    </div>
                    <div className='flex p-3 justify-between items-center border-b-2'>
                        <div>Status:</div>
                        <div>{products.countInStock > 0 ? 'In stock' : 'Out Of Stock'}</div>
                    </div>

                    {products.countInStock > 0 && (
                        <div className='flex p-3 justify-between border-b-2 items-center'>
                            <div>Qty</div>
                            <select value={qty} className='px-4 py-1' onChange={(e) => setQty(e.target.value)}>
                            {
                                [...Array(products.countInStock).keys()].map((x) => (
                                    <option key= {x + 1} value={x + 1} >{x + 1}</option>
                                ))
                            }
                            </select>
                        </div>
                    )}

                    <div className='p-3'>
                        <button 
                            className='uppercase text-sm sen-font tracking-wide bg-black w-full p-3 text-white disabled:bg-gray-300 disabled:text-black' 
                            disabled={products.countInStock === 0}
                        >
                        Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen;