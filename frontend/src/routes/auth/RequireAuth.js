import React,{ useState, useEffect  } from 'react';
import { connect } from 'react-redux';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

const RequireAuth = ({ authLogin, allowRoles }) => {


    const [role, setRole] = useState([{
        name: '',
    }]);

    const location = useLocation();

    const { authInfo } = authLogin;

    
    useEffect(() => {
      
        if (authInfo && authInfo.data) {
            setRole([{ name: authInfo.data.role }])
        }else{
            setRole([{ }])
        }
        
    }, [authInfo])


    return (
        role.find(val => allowRoles.includes(val.name))
        ? <Outlet />
        : authInfo?.data
        ? <Navigate to='/unAuth' state={{ from: location }} replace />
        : <Navigate to='/login' state={{ from: location }} replace />
    )
}


const mapStateToProps = (state) => ({
    authLogin: state.authLogin
})


export default connect(mapStateToProps, null)(RequireAuth);