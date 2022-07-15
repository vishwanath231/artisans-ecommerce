import React,{ useState, useEffect } from 'react';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import SideBar from './components/SideBar';
import { BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { FiEye, FiTrash2, FiEdit, FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { listProducts } from '../../redux/actions/ProductActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { connect } from 'react-redux';
import { InputLabel, MenuItem, FormControl, Select  } from '@mui/material';


const ProductsListScreen = ({ productList, listProducts }) => {

    const{ loading, products, error } = productList;
    const [productData, setProductData] = useState([])

    useEffect(() => {
       
        listProducts()

    }, [listProducts]);


    const [rowLimit , setRowLimit] = useState(3)
    const [currentPage, setCurrentPage] = useState(1);

    const rowHandler = (e) => {
        const { value } = e.target;
        setRowLimit(value)
    }

    const indexOfLastData = currentPage * rowLimit;
    const indexOfFirstData = indexOfLastData - rowLimit;
    const currentData = products.slice(indexOfFirstData, indexOfLastData)
    const currentProductData = productData.slice(indexOfFirstData, indexOfLastData)

    
    const pageNumbers = [];  

    for (let i = 1; i<= Math.ceil(productData.length / rowLimit); i++){
        pageNumbers.push(i)
    }

    // const paginate = (val) => setCurrentPage(val);

    const searchHandler = (e) => {
 
        const { value} =e.target;
 
        if(value){
            const filter =  products.filter((val) => {
                return Object.values(val).join('').toLowerCase().includes(value.toLowerCase())
            })
            setProductData(filter)
        }else{
            setProductData(products)
        }
    }

   console.log(productData)


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
                            { 
                               productData.length ? (
                                   <>
                                          {
                                currentProductData.map((val) => (
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
                                ))
                            }

                                    </>
                               ) : (

                                    <>

{
                                currentData.map((val) => (
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
                                ))
                            }
                                    </>

                                  )

                             }
                            </tbody>
                        </table>

                    </div>
<div className='flex items-center justify-between my-10 shadow p-4 md:flex-row flex-col'>
                 <div className='md:w-20 w-full h-8 mb-1'>
               
                        <FormControl sx={{width:100}} >
                            <InputLabel id='row-label'>Row</InputLabel>
                            <Select
                                labelId='row-label'
                                id='row'
                                value={rowLimit}
                                label='Row'
                                onChange={rowHandler}
sx={{height:35}}
                            >
                                <MenuItem value='3'>3</MenuItem>
                                <MenuItem value='5'>5</MenuItem>
                                <MenuItem value='10'>10</MenuItem>
                                <MenuItem value='15'>15</MenuItem>
                                <MenuItem value='20'>20</MenuItem>
                                <MenuItem value={productData.length}>All</MenuItem>
                            </Select>
                        </FormControl>
                </div>
<div className='flex items-center justify-around md:w-40 w-full'>
                    <button className={ pageNumbers.length >= currentPage ? currentPage === 1 ? 'text-red-400 text-lg' : 'text-green-500 text-lg' : 'text-red-500 text-lg'} onClick={pageNumbers.length >= currentPage ?  () => currentPage !== 1 ?  setCurrentPage(currentPage -1) : setCurrentPage(currentPage) :  () => setCurrentPage(currentPage) }><FiChevronLeft /> </button>
                    <div className='text-lg'>{currentPage}</div>
                    <button className={currentPage >= pageNumbers.length ? 'text-red-400 text-lg' : 'text-green-500 text-lg'} onClick={currentPage >= pageNumbers.length ? () => setCurrentPage(currentPage) : () => setCurrentPage(currentPage + 1)}><FiChevronRight /> </button>
                </div>
</div>
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