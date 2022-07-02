import React from 'react';
import { Link } from 'react-router-dom';
import { GoLocation } from  'react-icons/go';
import { FiMail } from 'react-icons/fi';
import { BsTwitter, BsInstagram, BsFacebook }  from 'react-icons/bs'




const Footer = () => {
    return (
        <div className='container max-w-screen-xl mx-auto p-4 bg-gray-200'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sen-font my-8'>
                <div>
                    <div className='mb-3'>
                        <svg className="w-24" viewBox="0 0 340 74.84353957616604">
                            <defs id="SvgjsDefs3060"></defs>
                            <g id="SvgjsG3061" featurekey="monogramFeature-0" transform="matrix(6.328914057584658,0,0,6.328914057584658,-10.566990366503573,-53.005907765464364)" fill="#dc143c">
                                <path d="M17.43 17.65 l0.040136 2.3242 l-1.1621 0.02002 c-0.015039 0.0002539 -1.0275 0.017129 -3.0076 0.017129 c-1.0032 0 -2.2546 -0.0044532 -3.7506 -0.017402 c-2.4132 -0.021054 -4.3428 -0.54212 -5.7348 -1.549 c-1.3835 -1.0007 -2.1454 -2.4562 -2.1454 -4.0986 c0 -1.6413 0.76854 -3.1002 2.164 -4.1074 c1.383 -0.99846 3.3616 -1.531 5.7218 -1.5402 c4.441 -0.017129 6.719 0.00027344 6.7416 0.00041016 l1.1622 0.0091602 l-0.01832 2.3246 l-1.1622 -0.0091602 c-0.022364 -0.0002539 -2.2892 -0.01752 -6.7144 -0.00039062 c-3.4358 0.01334 -5.5702 1.2866 -5.5702 3.3232 c0 0.90194 0.39812 1.6473 1.1831 2.215 c0.97936 0.70836 2.4984 1.0916 4.3926 1.1081 c4.4144 0.038574 6.6758 0.00089844 6.698 0.00050782 z">
                                </path>
                            </g>
                            <g id="SvgjsG3062" featurekey="jxYttZ-0" transform="matrix(4.859969620807851,0,0,4.859969620807851,114.16803738199621,-23.327852789429222)" fill="#dc143c">
                                <path d="M7.14 10.24 l-0.44 1.62 c-0.14 -0.08 -0.58 -0.22 -0.94 -0.22 c-1.7 0 -2.5 1.62 -2.5 3.62 l0 4.74 l-2.06 0 l0 -9.88 l2.06 0 l0 1.4 c0.24 -0.92 1.3 -1.58 2.48 -1.58 c0.54 0 1.12 0.14 1.4 0.3 z M12.56 9.92 c2.84 0 3.98 1.72 3.98 3.18 l0 6.9 l-2.06 0 l0 -1.08 c-0.72 0.98 -2 1.26 -2.8 1.26 c-2.26 0 -3.74 -1.32 -3.74 -3.08 c0 -2.46 1.84 -3.34 3.74 -3.34 l2.8 0 l0 -0.66 c0 -0.62 -0.24 -1.48 -1.92 -1.48 c-0.94 0 -1.8 0.5 -2.36 1.28 l-1.42 -1.28 c0.94 -1.04 2.28 -1.7 3.78 -1.7 z M14.48 16.92 l0 -1.48 l-2.52 0 c-1.22 0 -2.08 0.62 -1.94 1.74 c0.12 0.94 0.88 1.32 1.94 1.32 c1.9 0 2.52 -0.9 2.52 -1.58 z M24.66 6.699999999999999 c-0.3 -0.14 -0.8 -0.32 -1.44 -0.06 c-0.98 0.44 -1.14 0.84 -1.14 2.48 l0 1 l2.58 0 l0 1.68 l-2.58 0 l0 8.2 l-2.06 0 l0 -8.2 l-1.2 0 l0 -1.68 l1.2 0 l0 -1 c0 -1.56 0 -1.92 0.6 -2.9 c0.64 -1.06 1.68 -1.42 2.86 -1.42 c0.54 0 0.92 0.14 1.18 0.3 l0 1.6 z M30.26 18.36 c0.64 0.26 1.14 0.08 1.44 -0.06 l0 1.6 c-0.26 0.16 -0.64 0.3 -1.18 0.3 c-1.18 0 -2.22 -0.38 -2.86 -1.42 c-0.6 -1 -0.6 -1.54 -0.6 -3.1 l0 -3.88 l-1.2 0 l0 -1.68 l1.2 0 l0 -3.12 l2.06 0 l0 3.12 l2.58 0 l0 1.68 l-2.58 0 l0 3.88 c0 1.64 0.16 2.24 1.14 2.68 z M36.46000000000001 10.12 l0 9.88 l-2.06 0 l0 -9.88 l2.06 0 z M36.56 6.5 c0 0.64 -0.5 1.14 -1.14 1.14 c-0.62 0 -1.12 -0.5 -1.12 -1.14 c0 -0.62 0.5 -1.12 1.12 -1.12 c0.64 0 1.14 0.5 1.14 1.12 z M46.300000000000004 16.16 c0.04 0.12 0.38 1.1 -0.04 2.1 c-0.52 1.18 -1.9 1.94 -3.62 1.94 l-0.02 0 c-1.38 0 -2.64 -0.58 -3.58 -1.5 l1.34 -1.34 c0.56 0.72 1.36 1.08 2.24 1.08 c0.98 0 1.8 -0.36 2.02 -0.88 c0.14 -0.36 0.02 -0.74 0.02 -0.78 c-0.24 -0.6 -1.12 -0.72 -2.12 -0.94 c-1.34 -0.3 -2.68 -0.64 -3.2 -2.04 c-0.26 -0.72 -0.18 -1.56 0.18 -2.26 c0.82 -1.54 2.86 -1.6 3.1 -1.6 c1.38 0 2.68 0.52 3.6 1.46 l-1.34 1.34 c-0.56 -0.72 -1.38 -1.04 -2.26 -1.04 c-0.02 0 -1.2 0.02 -1.54 0.68 c-0.12 0.2 -0.18 0.54 -0.08 0.82 c0.2 0.56 1.1 0.74 2.06 0.96 c1.3 0.3 2.72 0.6 3.24 2 z">
                                </path>
                            </g>
                        </svg>
                    </div>
                    <div>We're translation marketplace for companies and individuals searching for a translator as well as for freelance translators or translator agencies who are looking for a job.</div>
                </div>
                <div className='lg:mx-12'>
                    <h2 className='mb-3 text-lg font-semibold mont-font'>More</h2>
                    <ul>
                        <li className='mb-1'><Link to=''>Terms & Condition</Link></li>
                        <li className='mb-1'><Link to=''>Privacy Policy</Link></li>
                        <li className='mb-1'><Link to=''>About</Link></li>
                        <li className='mb-1'><Link to=''>Product</Link></li>
                        <li className='mb-1'><Link to=''>Blog</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className='mb-3 text-lg font-semibold mont-font'>Contact</h2>
                    <div className='flex items-center mb-3'>
                        <GoLocation className='mr-3 text-lg text-gray-600' />
                        <div>vadavalli, coimbatore <br />621345</div>
                    </div>
                    <div className='flex items-center'>
                        <FiMail className='mr-3 text-lg text-gray-600' />
                        <div>support@craftis.com</div>
                    </div>
                </div>
                <div>
                    <h2 className='mb-3 text-lg font-semibold mont-font'>Follow us on social media</h2>
                    <div className='mb-3'>Get the latest trends and updates right at your inbox.</div>
                    <div className='flex text-lg text-gray-600'>
                        <BsTwitter  />
                        <BsInstagram className='mx-5' />
                        <BsFacebook />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;