import React,{ useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Rating from '../../components/Rating';
import { connect } from 'react-redux';
import { getProductLists } from  '../../redux/actions/ProductActions';
import Loader from '../../components/Loader';


const ProductScreen = ({ productList, getProductLists }) => {

    const [qty, setQty] = useState(1);

    const { id } = useParams();

    useEffect(() => {

        getProductLists(Number(id))
        
    },[getProductLists, id])


    const { loading, product } = productList;


    return (
        <div className='container max-w-screen-xl mx-auto p-4 mt-20  mb-4'>
            <Link to='/' className='px-5 py-3 hover:bg-gray-200 rounded text-sm font-medium tracking-wider'>GO BACK</Link>
            {
                loading ? <Loader /> : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-9'>
                        <div>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div>
                            <div className='text-2xl tracking-wide font-normal mb-3 uppercase'>{product.name}</div>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                            <div className='product_desc text-base mt-3 md:h-56 md:overflow-auto md:overscroll-auto'><span className='font-medium'>Description:</span> {product.description}</div>
                        </div>
                        <div className='border-2 h-fit'>
                            <div className='flex p-3 justify-between items-center border-b-2' >
                                <div>Price:</div>
                                <div>${product.price}</div>
                            </div>
                            <div className='flex p-3 justify-between items-center border-b-2'>
                                <div>Status:</div>
                                <div>{product.countInStock > 0 ? 'In stock' : 'Out Of Stock'}</div>
                            </div>

                            {product.countInStock > 0 && (
                                <div className='flex p-3 justify-between border-b-2 items-center'>
                                    <div>Qty</div>
                                    <select value={qty} className='px-4 py-1' onChange={(e) => setQty(e.target.value)}>
                                    {
                                        [...Array(product.countInStock).keys()].map((x) => (
                                            <option key= {x + 1} value={x + 1} >{x + 1}</option>
                                        ))
                                    }
                                    </select>
                                </div>
                            )}

                            <div className='p-3'>
                                <button 
                                    className='uppercase text-sm sen-font tracking-wide bg-black w-full p-3 text-white disabled:bg-gray-300 disabled:text-black' 
                                    disabled={product.countInStock === 0}
                                >
                                Add to cart</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}


const mapStateToProps = (state) => ({
    productList: state.productList
})

export default connect(mapStateToProps, { getProductLists } )(ProductScreen);