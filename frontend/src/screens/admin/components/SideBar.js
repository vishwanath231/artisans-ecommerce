import React from 'react';
import { Link } from 'react-router-dom';
import SVGIcon from '../../../components/svg/SVGicon';
import MenuItem from './MenuItem';
import './main.css';

const SideBar = () => {


    return (
        <div className='sideBar__scroll sideBar__nav w-64 h-full fixed z-10 top-0 left-0 overflow-x-hidden bg-white shadow-lg'>
            
            <div className='flex justify-center items-center my-10'>
                <Link to='/admin/dashboard'><SVGIcon logo/></Link>
            </div>

            <div className='p-4 text-base font-medium'>
                <MenuItem />
            </div>
        </div>
    )
}

export default SideBar;