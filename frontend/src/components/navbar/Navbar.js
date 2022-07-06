import React,{ useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import SVGicon from '../../assets/svg/SVGicon';
import './Navbar.css';
import MobileMenu from './components/MobileMenu';
import DesktopMenu from './components/DesktopMenu';
import HamburgerBtn from './components/HamburgerBtn';
import UserModel from './components/UserModel';
import AdminModel from './components/AdminModel';
import MakerModel from './components/MakerModel';
import { FaRegUser, FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { connect } from 'react-redux';



const Navbar = ({ authLogin, cart }) => {

    const [ profile, setProfile] = useState(false);
    const [ hamburger, setHamburger ] = useState(false);
    const [ scrolled, setScrolled ] = useState(false);
    

    const handleProfile = () => {
        setProfile(!profile)
    }
    const handleHamburger = () => setHamburger(!hamburger)
   


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


    const { authInfo } = authLogin

    const { cartItems } = cart;


    return (
        <nav className={scrolled ? "nav-scroll shadow-md bg-white px-4 sm:px-4 py-4" : "bg-white px-4 sm:px-4 py-4 nav-container "}>
            <div className="flex flex-wrap justify-between items-center container max-w-screen-xl mx-auto">
                
                {/* logo */}
                <Link to='/' className="flex items-center">
                    <SVGicon logo />
                </Link>

                <div className="flex  items-center md:order-2">
                    
                    {/* <Link to='/search' className="mr-3 text-sm rounded-full " >
                        <SVGicon searchIcon />
                    </Link> */}
                    <Link to='/wishlist' className="mr-3 text-sm rounded-full" >
                        <FaRegHeart className='text-2xl hover:text-[#DC143C]' />
                    </Link>
                    <Link to='/cart' className="cart_box mr-3 text-sm ">
                        <FiShoppingCart className='text-2xl hover:text-[#DC143C]' />
                        <div className='cart_num'>{cartItems.length}</div>
                    </Link>

                    {
                        authInfo ? (
                            <div className='model__btn'>
                                <button type="button"   onClick={handleProfile}>
                                    <FaRegUser  className='text-2xl hover:text-[#DC143C]'/>
                                </button>

                                {/* user profile box  */}
                                {
                                    authInfo.data.role === 'user' ? <UserModel profile={profile} /> : null
                                }
                                
                                {
                                    authInfo.data.role === 'maker' ? <MakerModel profile={profile} /> : null 
                                }
                                {
                                    authInfo.data.role === 'admin' ? <AdminModel profile={profile} /> : null
                                }
                            </div>
                        ) : null
                    }

                    {/* hamburger button */}
                    <HamburgerBtn hamburger={hamburger} handleHamburger={handleHamburger} />
                </div>

                {/* Desktop link */}
                <DesktopMenu />

                {/* Mobile link */}
                <MobileMenu hamburger={hamburger} />

            </div>
        </nav>
    )
}



const mapStateToProps = (state) => ({
    authLogin: state.authLogin,
    cart: state.cart
})

export default connect(mapStateToProps, null)(Navbar);