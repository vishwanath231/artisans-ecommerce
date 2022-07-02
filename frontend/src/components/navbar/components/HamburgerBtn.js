import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

const HamburgerBtn = ({ hamburger, handleHamburger }) => {
    return (
        <button type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100" onClick={handleHamburger}>
            <BsThreeDotsVertical className={!hamburger ? "text-2xl text-black" : "hidden" } />
            <IoClose className={!hamburger ? "hidden" : "text-2xl text-black" } />
        </button>
    )
}

export default HamburgerBtn;