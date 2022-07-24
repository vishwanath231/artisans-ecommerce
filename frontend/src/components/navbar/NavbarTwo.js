import React,{ useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import SVGicon from '../../assets/svg/SVGicon';
import './Navbar.css';
import UserModel from './components/UserModel';
import AdminModel from './components/AdminModel';
import MakerModel from './components/MakerModel';
import { FaRegUser } from 'react-icons/fa';
import { connect } from 'react-redux';



const NavbarTwo = ({ auth }) => {

    const [ profile, setProfile] = useState(false);
    const [ scrolled, setScrolled ] = useState(false);
    

    const handleProfile = () => {
        setProfile(!profile)
    }
   


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


    const { authInfo } = auth

    return (
        <nav className="bg-white px-4 sm:px-4 py-4 shadow">
            <div className="flex flex-wrap justify-between items-center container max-w-screen-xl mx-auto">
                
                {/* logo */}
                <Link to='/' className="flex items-center">
                    <SVGicon logo />
                </Link>

                <div className="flex  items-center md:order-2">
                    
                    {
                        authInfo ? (
                            <div className='model__btn'>
                                <button type="button"   onClick={handleProfile}>
                                    <FaRegUser  className='text-2xl hover:text-[#DC143C]'/>
                                </button>

                                {/* user profile box  */}
                                {
                                    authInfo.role === 'user' ? <UserModel profile={profile} /> : null
                                }
                                
                                {
                                    authInfo.role === 'maker' ? <MakerModel profile={profile} /> : null 
                                }
                                {
                                    authInfo.role === 'admin' ? <AdminModel profile={profile} /> : null
                                }
                            </div>
                        ) : null
                    }

                </div>
            </div>
        </nav>
    )
}



const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(NavbarTwo);