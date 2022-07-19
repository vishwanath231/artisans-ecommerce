import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { BiUser } from 'react-icons/bi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { BsExclamationCircle } from 'react-icons/bs';
import { IoLanguageOutline } from 'react-icons/io5';
import { connect } from 'react-redux';

const Header = ({ authLogin, auth }) => {

    const [ language, setLanguage ] = useState(false);
    const language_dropDown = () => setLanguage(!language)

    const { authInfo } = auth; 




    return (
        <div className='px-2 sm:px-4 py-2.5'>
            <div className='flex flex-wrap justify-center flex-col lg:flex-row  lg:justify-between items-center container max-w-screen-xl mx-auto'>
            <div className="ticker-wrapper-h">
                <ul className="news-ticker-h font font-medium">
                    <li><Link to=''>Special Offer 👉🏼 <span className='text-red-500'>40%</span> Offer</Link></li>
                    <li><Link to=''>New Products Offer 👉🏼 <span className='text-red-500'>10%</span> Offer</Link></li>
                    <li><Link to=''>Top Products Offer 👉🏼 <span className='text-red-500'>20%</span> Offer</Link></li>
                    <li><Link to=''>Big Sales</Link></li>
                </ul>
            </div>
            <div className='info__container'>
                <ul className='flex items-center font-medium tracking-wide font'>
                        <li className='language__container '>
                            <button onClick={language_dropDown} className='language__btn flex items-center justify-between font-medium font'>
                                <IoLanguageOutline className='language__icon text-lg mr-1'/>
                                <span>English</span>
                                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                            </button>
                            <div className={ language ? " language z-10 bg-white divide-y divide-gray-100 rounded shadow w-40" : "z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44" }>
                                <ul className="py-1 text-sm text-gray-500">
                                    <li>
                                        <Link to='' className="block px-4 py-2 hover:bg-gray-100">தமிழ் - TA </Link>
                                    </li>
                                    <li>
                                        <Link to='' className="block px-4 py-2 hover:bg-gray-100">English - EN</Link>
                                    </li>
                                    <li>
                                        <Link to='' className="block px-4 py-2 hover:bg-gray-100">हिन्दी - HI</Link>
                                    </li>
                                    <li>
                                        <Link to='' className="block px-4 py-2 hover:bg-gray-100">ಕನ್ನಡ - KN</Link>
                                    </li>
                                    <li>
                                        <Link to='' className="block px-4 py-2 hover:bg-gray-100">తెలుగు - TE</Link>
                                    </li>
                                    <li>
                                        <Link to='' className="block px-4 py-2 hover:bg-gray-100">മലയാളം - ML</Link>
                                    </li>
                                    <li>
                                        <Link to='' className="block px-4 py-2 hover:bg-gray-100">বাংলা - BN</Link>
                                    </li>
                                    <li>
                                        <Link to='' className="block px-4 py-2 hover:bg-gray-100">मराठी - MR</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='text-slate-400 md:mx-5 symbol'> | </li>
                        <li>
                            <Link to='/' className='location__btn flex items-center justify-between'>
                               <MdOutlineLocationOn className='location__icon text-lg'/>
                                <span>Location</span>
                            </Link>
                        </li>
                        <li className='mx-5'>
                            <Link to='/contact' className='info__btn btn flex items-center justify-between'>
                                <BsExclamationCircle className='info__icon text-lg mr-1' />
                                <span>Contact</span>
                            </Link>
                        </li>
                        {
                            !authInfo ? (<li className='user__btn  flex items-center'>
                            <BiUser className='user__icon text-lg mr-1'/>
                            <Link to='/login' className='flex items-center hover:md:text-[#DC143C] justify-between'>
                                <span>Login</span>
                            </Link> <span className='mx-2'>/</span>
                            <Link to='/register' className='flex items-center hover:md:text-[#DC143C] justify-between'>
                                <span>Register</span>
                            </Link>
                        </li>): null
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    authLogin: state.authLogin,
    auth: state.auth
})

export default connect(mapStateToProps, null)(Header);