import React from 'react';
import { Link } from 'react-router-dom';
import SVGicon from './svg/SVGicon';




const Footer = () => {
    return (
        <div className='container max-w-screen-xl mx-auto p-4 bg-gray-100'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                <div>
                    <h2 className='text-2xl mb-5'>About Company</h2>
                    <ul>
                        <li className='mb-1'>
                            <Link to=''>About Us</Link>
                        </li>
                        <li className='mb-1'>
                            <Link to=''>Reviews</Link>
                        </li>
                        <li className='mb-1'>
                            <Link to=''>FAQs</Link>
                        </li>
                        <li className='mb-1'>
                            <Link to=''>Careers</Link>
                        </li>
                        <li className='mb-1'>
                            <Link to=''>Blog</Link>
                        </li>
                        <li className='mb-1'>
                            <Link to=''>Coupons</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl  mb-5'>Customer Service</h2>
                    <ul >
                        <li className='mb-1'>
                            <Link to=''>Contact Us</Link>
                        </li>
                        <li className='mb-1'>
                            <Link to=''>Privacy Policy</Link>
                        </li>
                        <li className='mb-1'>
                            <Link to=''>Shipping & Returns</Link>
                        </li>
                        <li className='mb-1'>
                            <Link to=''>Bulk Orders</Link>
                        </li>
                        <li className='mb-1'>
                            <Link to=''>Partner with us</Link>
                        </li>
                        <li className='mb-1'>
                            <Link to=''>Terms & conditions</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl mb-5'>Get in touch</h2>
                    <div>
                        <a href='tel:8844222165' className='flex'><SVGicon phoneIcon /> <span className='ml-2'>8844222165</span></a>
                    </div>
                    <div className=' my-5 md:my-0'>
                        <h2 className='text-2xl mb-5 md:mt-5'>Follow Us</h2>
                        <ul className='flex'>
                            <li>
                                <Link to=''><SVGicon facebookIcon /></Link>
                            </li>
                            <li className='mx-2'>
                                <Link to=''><SVGicon instagramIcon /></Link>
                            </li>
                            <li>
                                <Link to=''><SVGicon twitterIcon /></Link>
                            </li>
                            <li className='mx-2'>
                                <Link to=''><SVGicon pinterestIcon /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl mb-5'>We Accept</h2>
                    <ul className='grid grid-cols-4 gap-3'>
                        <li><SVGicon airtelIcon /></li>
                        <li><SVGicon americanExpressIcon /></li>
                        <li><SVGicon googlePayIcon /></li>
                        <li><SVGicon masterIcon /></li>
                        <li><SVGicon paytmIcon /></li>
                        <li><SVGicon payzappIcon /></li>
                        <li><SVGicon rupayIcon /></li>
                        <li><SVGicon visaIcon /></li>
                    </ul>
                </div>
            </div>
            <Copyright />
        </div>
    )
}

export default Footer;


const Copyright = () => {
    return(
        <div className='text-center'>
            <h2>&copy;2022 craftis</h2>
        </div>
    )
}