import React from 'react';
import { BiCopyright } from 'react-icons/bi';

const CopyRights = () => {
    return (
        <div className='flex justify-center my-1 items-center font-medium'> 
            <BiCopyright /> 
            <span>2022 craftis. All Rights Reserved</span>
        </div>
    )
}

export default CopyRights;