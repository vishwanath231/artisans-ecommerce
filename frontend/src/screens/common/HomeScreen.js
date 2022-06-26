import React,{ useEffect } from 'react';
import Banner from '../../components/Banner';
import Products from '../../components/Products';
import { getAllProducts } from '../../redux/actions/ProductActions';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';


const HomeScreen = ({ product, getAllProducts }) => {

    useEffect(() => {
       
        getAllProducts()

    }, [getAllProducts]);


    const{  loading, products } = product;

    
    return (
        <>
            <Banner />
            <div className='container max-w-screen-xl mx-auto px-4 md:px-2 mb-4'>
                <h2 className='font-bold text-black text-2xl uppercase mb-4' style={{ fontFamily:'"Montserrat",sans-serif'}}>Lasted Products</h2>
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
        </>
    )
}

const mapStateToProps = (state) => ({
    product: state.product
})

export default connect(mapStateToProps, { getAllProducts })(HomeScreen);