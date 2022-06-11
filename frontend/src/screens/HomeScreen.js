import React from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';
import product from '../products.json';



const HomeScreen = () => {

    return (
        <>
            <Banner />
            <div className='container max-w-screen-xl mx-auto px-4 md:px-2 mb-4'>
                <h2 className='font-bold text-black text-2xl uppercase mb-4' style={{ fontFamily:'"Montserrat",sans-serif'}}>Lasted Products</h2>
                <div className=' grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 gap-y-7 my-5 '>
                    {
                        product.products.map((val) => (
                            <div key={val._id} >
                                <Products val={val} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default HomeScreen