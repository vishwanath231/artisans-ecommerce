import React,{ useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom';
import SVGicon from '../svg/SVGicon';
import './Navbar.css';
import Logo from './Logo';

const Navbar = () => {

    const [ profile, setProfile] = useState(false);
    const [ hamburger, setHamburger ] = useState(false);
    const [ categories, setCategories ] = useState(false);
    const [ products, setProducts ] = useState(false);
    const [ scrolled, setScrolled ] = useState(false);
    const [ cart, setCart ] = useState(false);
    

    const handleProfile = () => {
        setProfile(!profile)
        // window.screenTop({
        //     top: 0
        // })
    }
    const handleHamburger = () => setHamburger(!hamburger)
    const categories_dropDown = () => setCategories(!categories)
    const products_dropDown = () => setProducts(!products)
    const handleCart = () => setCart(!cart)


    const handleScroll = () => {
        
        const offset = window.pageYOffset;

        if (offset > 7) {
            setScrolled(true)
        }else {
            setScrolled(false)
        }
    }


    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && profile) {
            setProfile(false);
            }
        },[setProfile, profile]
    );


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    

    useEffect(() => {
        
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    },[keyPress]);



    return (
        <nav className={scrolled ? "nav-scroll shadow-md bg-white px-4 sm:px-4 py-4" : "bg-white px-4 sm:px-4 py-4 nav-container "}>
            <div className="flex flex-wrap justify-between items-center container max-w-screen-xl mx-auto ">
                <Link to='/' className="flex items-center">
                    <Logo />
                </Link>

                <div className="flex  items-center md:order-2">
                    
                    <Link to='/search' className="mr-3 text-sm rounded-full " >
                        <SVGicon searchIcon />
                    </Link>
                    <Link to='/wishlist' onClick={handleCart} className="mr-3 text-sm rounded-full" >
                        <SVGicon wishlistIcon />
                    </Link>
                    <Link to='/cart' className="cart_box mr-3 text-sm ">
                        <SVGicon cartIcon />
                        <div className='cart_num'>0</div>
                    </Link>
                    <button type="button"  onClick={handleProfile}>
                        <SVGicon NavbarUserIcon />
                    </button>

                    <div className={ profile ? "z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow show__box" : "hidden my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow " }>
                        <div className="py-3 px-4">
                            <span className="block text-sm ">Bonnie Green</span>
                            <span className="block text-sm font-medium truncate">name@flowbite.com</span>
                        </div>
                        <ul className="py-1" aria-labelledby="dropdown">
                            <li>
                                <Link to='/profile' className="block py-2 px-4 text-sm  hover:bg-gray-100 ">Profile</Link>
                            </li>
                            <li>
                                <Link to='' className="block py-2 px-4 text-sm hover:bg-gray-100">Your Order</Link>
                            </li>
                            <li>
                                <Link to='' className="block py-2 px-4 text-sm hover:bg-gray-100 ">WishList</Link>
                            </li>
                            <li>
                                <Link to='' className="block py-2 px-4 text-sm  hover:bg-gray-100 ">Sign out</Link>
                            </li>
                        </ul>
                    </div>
                        
                    <button type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={handleHamburger}>
                        <svg className={!hamburger ? " w-7 h-7" : "hidden" } fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
                        <svg className={!hamburger ? "hidden" : "w-7 h-7" } fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                    </button>
                </div>
                <div className="justify-between items-center w-full md:flex md:w-auto md:order-1 hidden-link" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link to='/' className="hover:text-pink-600">Home</Link>
                        </li>
                        <li className='category__container'>
            <button onClick={categories_dropDown} className=" flex items-center justify-between font-medium md:hover:bg-transparent  md:border-0 md:hover:text-pink-600 md:p-0 md:w-auto">Categories 
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
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
            </button>
          <div className={products ? "products z-10 bg-white divide-y divide-gray-100 rounded shadow w-44" : "z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44" }>
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
            </div>
        </li>
        <li>
                            <Link to='' className="hover:text-pink-600">New Arrvial</Link>
                        </li>
                        <li>
                            <Link to='' className="hover:text-pink-600" >Blog</Link>
                        </li>
                    </ul>
                </div>
                <div className={!hamburger ? "hidden" : "justify-between items-center w-full"}  id="mobile-menu-2">
                    <ul className="flex flex-col mt-4">
                        <li>
                            <Link to='' className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded" >Home</Link>
                        </li>
                        <li>
                            <Link to='' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50">About</Link>
                        </li>
                        <li>
                            <Link to='' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 ">Services</Link>
                        </li>
                        <li>
                            <Link to='' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50">Pricing</Link>
                        </li>
                        <li>
                            <Link to='' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50">Contact</Link>
                        </li>
                    </ul>
                </div> 
            </div>
        </nav>
    )
}

export default Navbar