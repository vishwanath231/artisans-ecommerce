import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const MakerDashboard = ({ authLogin }) => {

    const navigate = useNavigate();

    const { authInfo } = authLogin;

    useEffect(() => {
      
        if (authInfo && authInfo.data.role === 'maker') {
            navigate('/maker/dashboard');
        }else{
            navigate('/login')
        }

    }, [authInfo, navigate])

    return (
        <div>MakerDashboard</div>
    )
}
const mapStateToProps = state => ({
    authLogin: state.authLogin
})

export default connect(mapStateToProps, null)(MakerDashboard);