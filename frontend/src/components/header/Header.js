import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import SVGicon from '../svg/SVGicon';
import './Header.css';


const Header = () => {

    const [ language, setLanguage ] = useState(false);
    const language_dropDown = () => setLanguage(!language)


    return (
        <div className='px-2 sm:px-4 py-2.5'>
            <div className='flex flex-wrap justify-center flex-col lg:flex-row  lg:justify-between items-center container max-w-screen-xl mx-auto'>
            <div className="ticker-wrapper-h">
                <ul className="news-ticker-h">
                    <li><Link to='' className='text-black font-medium'>What is Lorem Ipsum?</Link></li>
                    <li><Link to='' className='text-black font-medium'>Why do we use it?</Link></li>
                    <li><Link to='' className='text-black font-medium'> Where does it come from?</Link></li>
                    <li><Link to='' className='text-black font-medium'>Where can I get some?</Link></li>
                </ul>
            </div>
            <div className='info__container'>
                <ul className='flex items-center'>
                        <li className='language__container '>
                            <button onClick={language_dropDown} className='language__btn flex items-center justify-between font-medium'>
                                <SVGicon languageIcon />
                                <span>EN</span>
                                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                            </button>
                            <div className={ language ? " language z-10 bg-white divide-y divide-gray-100 rounded shadow w-30" : "z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44" }>
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-400">
                                    <li>
                                        <Link to='' className="block px-4 py-2 hover:bg-gray-100">தமிழ்</Link>
                                    </li>
                                    <li>
                                        <Link to='' className="block px-4 py-2 hover:bg-gray-100">Hindi</Link>
                                    </li>
                                    <li>
                                        <Link to='' className="block px-4 py-2 hover:bg-gray-100">Telugu</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='text-slate-400 md:mx-5 symbol'> | </li>
                        <li>
                            <button className='location__btn flex items-center justify-between font-medium'>
                               <SVGicon locationIcon />
                                <span>Location</span>
                            </button>
                        </li>
                        <li className='mx-5'>
                            <Link to='/contact' className='info__btn btn flex items-center justify-between font-medium'>
                                <SVGicon infoIcon />
                                <span>Contact</span>
                            </Link>
                        </li>
                        <li className='user__btn  flex items-center'>
                            <SVGicon headerUserIcon />
                            <Link to='/login' className='flex items-center hover:md:text-pink-600 justify-between font-medium'>
                                <span>Login</span>
                            </Link> <span className='mx-2'>/</span>
                            <Link to='/register' className='flex items-center hover:md:text-pink-600 justify-between font-medium'>
                                <span>Register</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;