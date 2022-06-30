import React,{ useEffect } from 'react';
import { Link } from 'react-router-dom';
import './main.css';

const MenuItem = () => {

    useEffect(() => {

        const dropdownHeader = document.querySelectorAll('.dropdown__header');
        const dropdownBody = document.querySelectorAll('.dropdown__body');
    
        for (let i = 0; i < dropdownHeader.length; i++) {
            
            dropdownHeader[i].onclick = function(){
        
                if (this.nextElementSibling.style.maxHeight) {
                    hidePanels()
                }else{
                    showPanel(this)
                }
            }
        }
    
        function showPanel(elem){
            hidePanels();
            elem.classList.add('active');
            elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + 'px';
        }
          
        function hidePanels(){
            for (let i = 0; i <dropdownBody.length; i++) {
              dropdownBody[i].style.maxHeight = null;
              dropdownHeader[i].classList.remove('active');
            }
        }
    
    }, []);


    return (
        <div className='mt-7 md:mt-0'>

            <div className='mb-3 '>
                <Link to='/' className="block py-2 px-4 hover:bg-gray-100">Home</Link>
            </div>

            <div className='mb-3'>
                <Link to='/admin/dashboard' className="block py-2 px-4 hover:bg-gray-100">Dashboard</Link>
            </div>

            <div className='mb-3'>
                <Link to='/admin/productList' className="block py-2 px-4 hover:bg-gray-100">Products</Link>
            </div>

            <div className="dropdown__header py-2 px-4 hover:bg-gray-100">User</div>
            <div className="dropdown__body mb-3">
                <div className="px-4">
                    <ul>
                        <li>
                            <Link to='' className="block py-2 px-4 hover:bg-gray-100">User Details</Link>
                        </li>
                        <li >
                            <Link to='' className="block py-2 px-4 hover:bg-gray-100">Order</Link>
                        </li>
                    </ul>
                </div>            
            </div>

            <div className="dropdown__header py-2 px-4 hover:bg-gray-100">Owner</div>
            <div className="dropdown__body mb-3 ">
                <div className="px-4">
                    <ul>
                        <li>
                            <Link to='' className="block py-2 px-4 hover:bg-gray-100">Owner Details</Link>
                        </li>
                        <li>
                            <Link to='' className="block py-2 px-4 hover:bg-gray-100">Products</Link>
                        </li>
                    </ul>
                </div>            
            </div>

            <div className='mb-3'>
                <Link to='/setting' className="block py-2 px-4 hover:bg-gray-100">Setting</Link>
            </div>

            <div className='mb-3'>
                <Link to='/setting' className="block py-2 px-4 hover:bg-gray-100">Logout</Link>
            </div>
        </div>
    )
}

export default MenuItem;