import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import './main.css';
import { connect } from 'react-redux';
import { logout } from '../../../redux/actions/AuthActions';


const ModelBox = ({ auth, logout  }) => {

    const [ profile, setProfile] = useState(false);

    const handleProfile = () => {
        setProfile(!profile)
    }

    const logoutHandler = () => {
        logout()
    }

    const { authInfo } = auth;

    return (
        <div className='adminModel__btn'>
            <button type="button"  onClick={handleProfile}>
                <FaRegUser className='text-2xl' /> 
            </button>
            <div className={ profile ? "z-50 my-4 w-40 text-base list-none bg-gray-100 rounded divide-y divide-gray-100 shadow  adminDashboard__model" : "hidden my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow " }>
            <div className="py-3 px-4 text-sm text-left">
                <span className="block">{authInfo && authInfo.name }</span>
                <span className="block font-medium truncate">{authInfo && authInfo.email}</span>
            </div>
                <ul className="py-1 text-sm text-left">
                    <li>
                        <Link to='/admin/profile' className="block py-2 px-4 hover:bg-gray-300 ">Profile</Link>
                    </li>
                    <li>
                        <Link to='/admin/order' className="block py-2 px-4 hover:bg-gray-300 ">My Order</Link>
                    </li>
                    <li>
                        <button onClick={logoutHandler} className="block py-2 text-left w-full px-4 hover:text-white hover:bg-red-500 ">Sign out</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(ModelBox);