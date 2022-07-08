import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../redux/actions/AuthActions';


const AdminModel = ({ profile, auth, logout  }) => {

    const logoutHandler = () => {
        logout()
    }

    const { authInfo } = auth;

    return (
        <div className={ profile ? "z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow showModel__box" : "hidden" }>
            <div className="py-3 px-4 text-sm text-left">
                <span className="block">{authInfo && authInfo.name }</span>
                <span className="block font-medium truncate">{authInfo && authInfo.email}</span>
            </div>
            <ul className="py-1 text-sm text-left">
                <li>
                    <Link to='/admin/dashboard' className="block py-2 px-4 hover:bg-gray-200">Dashboard</Link>
                </li>
                <li>
                    <button onClick={logoutHandler} className="block py-2 px-4 w-full text-left hover:bg-rose-600">Sign out</button>
                </li>
            </ul>
        </div>
    )
}


const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(AdminModel);