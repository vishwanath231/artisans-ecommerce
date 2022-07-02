import React,{ useEffect } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import { FiHome, FiPackage, FiUsers } from 'react-icons/fi';
import { TbDashboard } from 'react-icons/tb';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { BiLogOutCircle, BiChevronsRight } from 'react-icons/bi';
import { RiUser2Line } from 'react-icons/ri';


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
                <Link to='/' className="block py-2 px-4 hover:bg-gray-100">
                    <div className='flex items-center'>
                        <FiHome className='text-xl text-[#DC143C] mr-1' />
                        <p>Home</p>
                    </div>
                </Link>
            </div>

            <div className='mb-3'>
                <Link to='/admin/dashboard' className="block py-2 px-4 hover:bg-gray-100">
                    <div className='flex items-center'>
                        <TbDashboard className='text-xl text-[#DC143C] mr-1' />
                        <p>Dashboard</p>
                    </div>
                </Link>
            </div>

            <div className='mb-3'>
                <Link to='/admin/productList' className="block py-2 px-4 hover:bg-gray-100">
                    <div className='flex items-center'>
                        <FiPackage className='text-xl text-[#DC143C] mr-1' />
                        <p>Products</p>
                    </div>
                </Link>
            </div>

            <div className='mb-3'>
                <Link to='/admin/orderList' className="block py-2 px-4 hover:bg-gray-100">
                    <div className='flex items-center'>
                        <MdOutlineDeliveryDining className='text-xl text-[#DC143C] mr-1' />
                        <p>Orders</p>
                    </div>
                </Link>
            </div>

            <div className="dropdown__header py-2 px-4 hover:bg-gray-100">
                <div className='flex items-center'>
                    <FiUsers className='text-xl text-[#DC143C] mr-1' />
                    <p>User</p>
                </div>
            </div>
            <div className="dropdown__body mb-3">
                <div className="px-4">
                    <ul>
                        <li>
                            <Link to='/admin/userList' className="block py-2 px-4 hover:bg-gray-100">
                                <div className='flex items-center'>
                                    <BiChevronsRight className='text-xl text-[#DC143C] mr-1' />
                                    <p>Details</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>            
            </div>

            <div className="dropdown__header py-2 px-4 hover:bg-gray-100">
                <div className='flex items-center'>
                    <RiUser2Line className='text-xl text-[#DC143C] mr-1' />
                    <p>Makers</p>
                </div>
            </div>
            <div className="dropdown__body mb-3 ">
                <div className="px-4">
                    <ul>
                        <li>
                            <Link to='/admin/makerList' className="block py-2 px-4 hover:bg-gray-100">
                                <div className='flex items-center'>
                                    <BiChevronsRight className='text-xl text-[#DC143C] mr-1' />
                                    <p>Details</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='' className="block py-2 px-4 hover:bg-gray-100">
                                <div className='flex items-center'>
                                    <BiChevronsRight className='text-xl text-[#DC143C] mr-1' />
                                    <p>Products</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>            
            </div>


            <div className='mb-3'>
                <Link to='/setting' className="block py-2 px-4 hover:bg-gray-100">
                    <div className='flex items-center'>
                        <BiLogOutCircle className='text-xl text-[#DC143C] mr-1' />
                        <p>Logout</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MenuItem;