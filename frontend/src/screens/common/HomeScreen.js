import React,{ useEffect } from 'react';
import Banner from '../../components/Banner';
import Products from '../../components/Products';
import { getAllProducts } from '../../redux/actions/ProductActions';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer'


const HomeScreen = ({ product, getAllProducts }) => {

    useEffect(() => {
       
        getAllProducts()

    }, [getAllProducts]);


    const{ loading, products } = product;

    
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
                    loading ? <Loader /> : (
                        <div className=' grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 gap-y-7 my-5 '>
                            {
                                products.map((val) => (
                                    <div key={val._id} >
                                        <Products val={val} />
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
    product: state.product
})

export default connect(mapStateToProps, { getAllProducts })(HomeScreen);