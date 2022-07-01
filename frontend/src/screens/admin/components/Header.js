import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import ModelBox from './ModelBox';


const Header = () => {

    

    return (
        <div className='md:ml-72 dashboard__header md:mr-2 shadow md:my-4 p-4'>
            <div className='flex justify-between items-center'>
                <Link to='/admin/dashboard' className='text-2xl font-semibold mont-font tracking-wide'>Dashboard</Link>
                <ModelBox />
            </div>
        </div>
    )
}

export default Header;