import React,{ useState } from 'react'
import { Link } from 'react-router-dom';

const DesktopMenu = () => {

    const [ categories, setCategories ] = useState(false);
    const [ products, setProducts ] = useState(false);

    const categories_dropDown = () => setCategories(!categories)
    const products_dropDown = () => setProducts(!products)

    return (
        <div className="justify-between items-center w-full md:flex md:w-auto md:order-1 hidden-link" id="mobile-menu-2">
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 font md:font-medium">
            <li>
                <Link to='/' className="hover:text-pink-600">Home</Link>
            </li>
            <li className='category__container'>
                <button onClick={categories_dropDown} className=" flex items-center justify-between font-medium md:hover:bg-transparent  md:border-0 md:hover:text-pink-600 md:p-0 md:w-auto">Category
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                </button>
                <div className={ categories ? "category z-10 bg-white divide-y divide-gray-100 rounded shadow w-44" : "z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44" }>
                        <ul className="py-1 text-sm ">
                        <li>
                            <Link to='' className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
                        </li>
                        <li>
                            <Link to='' className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
                        </li>
                        <li>
                            <Link to='' className="block px-4 py-2 hover:bg-gray-100">Earnings</Link>
                        </li>
                        </ul>
                        <div className="py-1">
                        <Link  to='' className="block px-4 py-2 text-sm hover:bg-gray-100 ">Sign out</Link>
                        </div>
                    </div>
                </li>
            <li className='product__container'>
                <button onClick={products_dropDown} className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-pink-600 md:p-0 md:w-auto ">Products 
                {/* <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg> */}
                </button>
            {/* <div className={products ? "products z-10 bg-white divide-y divide-gray-100 rounded shadow w-44" : "z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44" }>
            <ul className="py-1 text-sm">
                    <li>
                        <Link to='' className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
                    </li>
                    <li>
                        <Link to='' className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
                    </li>
                    <li>
                        <Link to='' className="block px-4 py-2 hover:bg-gray-100">Earnings</Link>
                    </li>
                    </ul>
                    <div className="py-1">
                    <Link  to='' className="block px-4 py-2 text-sm hover:bg-gray-100">Sign out</Link>
                    </div>
                </div> */}
            </li>
            <li>
                <Link to='' className="hover:text-pink-600" >Blog</Link>
            </li>
        </ul>
    </div>

    )
}

export default DesktopMenu