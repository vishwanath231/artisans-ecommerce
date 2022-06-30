import React from 'react'

const HamburgerBtn = ({ hamburger, handleHamburger }) => {
    return (
        <button type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100" onClick={handleHamburger}>
            <svg className={!hamburger ? " w-7 h-7" : "hidden" } fill="#000" viewBox="0 0 20 20"><path  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
            <svg className={!hamburger ? "hidden" : "w-7 h-7" } fill="#000" viewBox="0 0 20 20"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
        </button>
    )
}

export default HamburgerBtn;