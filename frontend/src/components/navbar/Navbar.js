import React,{ useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom';
import SVGicon from '../svg/SVGicon';
import './Navbar.css';
import MobileMenu from './components/MobileMenu';
import DesktopMenu from './components/DesktopMenu';
import HamburgerBtn from './components/HamburgerBtn';
import UserModel from './components/UserModel';
import AdminModel from './components/AdminModel';
import OwnerModel from './components/OwnerModel';

const Navbar = () => {

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

    const role = "admin";
    const login = true;


    return (
        <nav className={scrolled ? "nav-scroll shadow-md bg-white px-4 sm:px-4 py-4" : "bg-white px-4 sm:px-4 py-4 nav-container "}>
            <div className="flex flex-wrap justify-between items-center container max-w-screen-xl mx-auto ">
                
                {/* logo */}
                <Link to='/' className="flex items-center">
                    <SVGicon logo />
                </Link>

                <div className="flex  items-center md:order-2">
                    
                    {/* <Link to='/search' className="mr-3 text-sm rounded-full " >
                        <SVGicon searchIcon />
                    </Link> */}
                    <Link to='/wishlist' className="mr-3 text-sm rounded-full" >
                        <SVGicon wishlistIcon />
                    </Link>
                    <Link to='/cart' className="cart_box mr-3 text-sm ">
                        <SVGicon cartIcon />
                        <div className='cart_num'>0</div>
                    </Link>

                    {
                        login ? (
                            <button type="button"  onClick={handleProfile}>
                                <SVGicon NavbarUserIcon />
                            </button>
                        ) : null
                    }

                    {/* user profile box  */}
                    {
                        role === 'user' ? <UserModel profile={profile} /> : null
                    }
                    {
                        role === 'admin' ? <AdminModel profile={profile} /> : null
                    }
                    {
                        role === 'owner' ? <OwnerModel profile={profile} /> : null 
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

export default Navbar