import React,{ useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../../redux/actions/ProductActions';
import { connect } from 'react-redux';
// import Loader from '../../components/Loader';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer'

const CartScreen = ({ product, getAllProducts }) => {


    useEffect(() => {
       
        getAllProducts()

    }, [getAllProducts]);


    const{ products } = product;

    return (

        <>
            <Header />
            <Navbar />
            <div className='mt-28 container max-w-screen-xl mx-auto'>
                <div className='uppercase text-2xl my-6 text-black tracking-wider font-normal'>shopping cart</div>
                <div className='flex justify-between flex-col md:flex-row' >
                    <div className='p-4 w-full'>
                        {
                            products.map(item => (
                                <div key={item._id} className='mb-4'>
                                    <div className='grid gap-3 grid-cols-5'>
                                        <img src={item.image} alt={item.name} className='text-center w-20' />
                                        <Link to={`/product/${item._id}`} className='underline text-slate-500'>{item.name}</Link>
                                        
                                        <div className='text-slate-500 text-center'>${item.price}</div>
                                        
                                        <div className='text-slate-500 text-center'>
                                            <select value={item.qty} className=''>
                                                {
                                                    [...Array(item.countInStock).keys()].map((x) => (
                                                        <option key= {x + 1} value={x + 1} >{x + 1}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        
                                        <div className='text-center'>
                                            <button className='text-orange-800'><i className='fas fa-trash'></i></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='w-full md:w-1/2 my-0 mx-auto'>
                        <div className='border-2'>
                            <div className='p-3 border-b-2'>
                                <h2 className='text-2xl pb-3'>Subtotal  items</h2>
                                <div>₹</div>
                            </div>
                            <div className='p-3'>
                                <button
                                className='uppercase  text-sm tracking-wide bg-black w-full p-3 text-white'
                                >Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />  
        </>           
    )
}

const mapStateToProps = (state) => ({
    product: state.product
})


export default connect(mapStateToProps, { getAllProducts })(CartScreen);