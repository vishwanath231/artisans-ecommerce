import React,{ useState, useEffect } from 'react';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import SideBar from './components/SideBar';
import { BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { listProducts } from '../../redux/actions/ProductActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { connect } from 'react-redux';
import Products from './components/Products';
import TableFilter from './components/TableFilter';


const ProductsListScreen = ({ productList, listProducts }) => {

    const{ loading, products, error } = productList;
    const [productData, setProductData] = useState([])

    useEffect(() => {
       
        listProducts()

    }, [listProducts]);


    const [rowLimit , setRowLimit] = useState(5)
    const [currentPage, setCurrentPage] = useState(1);

    const rowHandler = (e) => {
        const { value } = e.target;
        setRowLimit(value)
    }

    const indexOfLastData = currentPage * rowLimit;
    const indexOfFirstData = indexOfLastData - rowLimit;
    const currentData = products.slice(indexOfFirstData, indexOfLastData)
    const currentProductData = productData.slice(indexOfFirstData, indexOfLastData)


    const searchHandler = (e) => {
 
        const { value } = e.target;
 
        if(value){
            const filter =  products.filter((val) => {
                return Object.values(val).join('').toLowerCase().includes(value.toLowerCase())
            })
            setProductData(filter)
        }else{
            setProductData(products)
        }
    }


    const productUpdateHandler = (id) => { 
        console.log(id);
    }
    
    const productDeleteHandler = (id) => {
        if (window.confirm(`Are you sure, you want delete ${id}!`)) {
            
            console.log(id);
        }
    }


    return (
        <>
            <SideBar />
            <MobileNav />
            <Header />
            <div className='md:ml-72 px-4 md:px-2'>
                <div className='my-6 text-3xl font-bold tracking-wide uppercase md:text-center'>
                    Products
                </div>

                <div className='flex justify-between items-center flex-col md:flex-row'>
                    <Link to='' className='py-2 w-full mb-4 md:mb-0 md:w-fit px-4 sen-font bg-[#83c5be] rounded shadow flex items-center'>
                        <BiPlus /> <span>Create Product</span>
                    </Link>
                    <div className='w-full md:w-72 '>
                        <input
                            name='search'
                            type='search'
                            onChange={searchHandler}
                            placeholder='search...'
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-[#edf2f4] focus:ring-[#83c5be] focus:border-[#83c5be] w-full p-2.5"
                        />
                    </div>
                </div>
                
                {loading ? <Loader /> : error ? <Message error msg={error} /> : (
                    <>
                        <div className="relative overflow-x-auto mt-10" style={{ height: '410px'}}>
                            <table className="w-full text-sm text-left text-black">
                                <thead className="text-xs text-black mont-font text-white uppercase bg-[#0b2545]">
                                    <tr className='border border-gray-300'>
                                        <th className="px-4 py-3 border border-gray-300">ID</th>
                                        <th className="px-4 py-3 border border-gray-300">IMAGE</th>
                                        <th className="px-4 py-3 border border-gray-300">NAME</th>
                                        <th className="px-4 py-3 border border-gray-300">PRICE</th>
                                        <th className="px-4 py-3 border border-gray-300">CATEGORY</th>
                                        <th className="px-4 py-3 border border-gray-300">BRAND</th>
                                        <th className="px-4 py-3 border border-gray-300">
                                            <span className="sr-only">ACTION</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productData.length ? (
                                        <>
                                            {
                                                currentProductData.map((val) => (
                                                    <React.Fragment key={val._id}>
                                                        <Products val={val} productUpdateHandler={productUpdateHandler} productDeleteHandler={productDeleteHandler} />
                                                    </React.Fragment>
                                                ))
                                            }

                                        </>
                                    ) : (
                                        <>

                                            {
                                                currentData.map((val) => (
                                                    <React.Fragment key={val._id}>
                                                        <Products val={val} productUpdateHandler={productUpdateHandler} productDeleteHandler={productDeleteHandler} />
                                                    </React.Fragment>
                                                ))
                                            }
                                        </>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <TableFilter rowHandler={rowHandler} rowLimit={rowLimit} data={products} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    </>
                ) }
            </div>
        </>
    )
}
const mapStateToProps = (state) => ({
    productList: state.productList
})

export default connect(mapStateToProps, { listProducts })(ProductsListScreen);

