import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listProducts } from '../../redux/actions/ProductActions';
import { connect } from 'react-redux';
import Banner from '../../components/Banner';
import Loader from '../../components/Loader';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer';
import Message from '../../components/Message';
import Rating from '../../components/Rating';


const HomeScreen = ({ productList, listProducts }) => {


    useEffect(() => {

        window.scrollTo(0,0)       
        listProducts()


    }, [listProducts]);


    const{ loading, products, error } = productList;

    l
    return (
        <>
            <Header />
            <Navbar />
            <Banner />
            <div className='container max-w-screen-xl mx-auto px-4 md:px-2 mb-28'>
                <div className='flex justify-center flex-col items-center mb-16'>
                    <h2 className='font-normal text-black text-3xl uppercase mb-1 mont-font'>Lasted Products</h2>
                    <div className='w-28 bg__color' style={{ height: '.2rem' }}></div>
                </div>
                {
                    loading ? <Loader /> : error ? <Message error msg={error} /> : (
                        <div className=' grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 gap-y-7 my-5 '>
                            {
                                products.map((val) => (
                                    <div key={val._id} >
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
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
            <Footer />
        </>
    )
}

const mapStateToProps = (state) => ({
    productList: state.productList
})

export default connect(mapStateToProps, { listProducts })(HomeScreen);