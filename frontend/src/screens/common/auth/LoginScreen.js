import React,{ useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SVGicon from '../../../assets/svg/SVGicon';
import { login } from '../../../redux/actions/AuthActions';
import { connect } from 'react-redux';
import Message from  '../../../components/Message';
import Loader from  '../../../components/Loader';


const LoginScreen = ({ authLogin, login, auth }) => {

    const [loginData, setLoginData] = useState({
        phoneOrEmail: '',
        password: '',
    });
    

    const location = useLocation();
    const navigate = useNavigate();

    // const redirect = location.search ? location.search.split("=")[1] : '/'; => if conditional statement
    const redirect = location.search? location.search.split("=")[1] : '/'; // => optional chaining

    
    const {loading,  error } = authLogin;
    
    const { authInfo } = auth;


    const handleChange = e => {
        const { name, value } = e.target;

        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    useEffect(() => {
      
        if (authInfo) {
            navigate(redirect)
        }
        
    }, [authInfo, navigate, redirect])
    


    const handleSubmit = (e) => {
        e.preventDefault();

        login(loginData);
    }


    return (
        <main className='screen__height'>
            <div className='px-4 max-w-3xl my-9 mx-auto'>
                <div className='flex justify-center items-center mb-14'>
                    <Link to='/' className='text-center'>
                        <SVGicon logo />
                    </Link>
                </div>
                {loading && <Loader />}
                <h2 className='text-4xl font-light uppercase mb-4'>Login</h2> 
                {error && <Message error msg={error} />}
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="phoneOrEmail" className="block mb-2 text-sm font-medium text-gray-900">Phone or Email <span className='text-red-500 text-base'>*</span></label>
                        <input 
                            type="text" 
                            id="phoneOrEmail" 
                            name='phoneOrEmail' 
                            onChange={handleChange}
                            value={loginData.phoneOrEmail}
                            placeholder="example@support.com"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password <span className='text-red-500 text-base'>*</span></label>
                        <input 
                            type="password" 
                            id="password" 
                            name='password' 
                            onChange={handleChange}
                            value={loginData.password}
                            placeholder="*****"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                        />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login account</button>
                </form>
                <div className='mt-3'>
                    You don't have an account! <Link to={redirect ? `/register?redirect=${redirect}` : '/register'} className='text-blue-700 underline'>SignUp Here.</Link>
                </div>
            </div>
        </main>
        
    )
}


const mapStateToProps = (state) => ({
    authLogin: state.authLogin,
    auth: state.auth
})


export default connect(mapStateToProps, { login })(LoginScreen);