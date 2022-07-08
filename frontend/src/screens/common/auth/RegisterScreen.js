import React,{ useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SVGicon from '../../../assets/svg/SVGicon';
import { register } from '../../../redux/actions/AuthActions';
import { connect } from 'react-redux';
import Message from  '../../../components/Message';
import Loader from  '../../../components/Loader';


const UserRegisterScreen = ({ authRegister, register, auth }) => {

    const navigate = useNavigate();
    const location = useLocation();

    // const redirect = location.search ? location.search.split("=")[1] : '/'; => if conditional statement
    const redirect = location.search?.location?.search?.split("=")[1] || '/' // => optional chaining

    
    const [userRegisterData, setUserRegisterData] = useState({
        name:'',
        email: '',
        phone: '',
        password: '',
        repeatPassword: ''
    });


    const { loading, error } = authRegister;
    
    const {  authInfo } = auth

    useEffect(() => {
      
        if (authInfo) {
            navigate(redirect)
        }
        
    }, [authInfo, navigate, redirect])


    const handleChange = e => {
        const { name, value } = e.target;

        setUserRegisterData({
            ...userRegisterData,
            [name]: value
        })
    }


    const handleSubmit = e => {
        e.preventDefault()

        register(userRegisterData);
    }

    

    return (
        <main className=' mb-14'>
            <div className='px-4 max-w-3xl my-9 mx-auto'>
                <div className='flex justify-center items-center mb-14'>
                    <Link to='/' className='text-center'>
                        <SVGicon logo />
                    </Link>
                </div>
                {loading && <Loader />}
                <h2 className='text-4xl font-light uppercase mb-4'>Register</h2>
                {error && <Message error msg={error} />}
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor='username' className="block mb-2 text-sm font-medium text-gray-900 ">Username <span className='text-red-500 text-base'>*</span></label>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                            onChange={handleChange}
                            value={userRegisterData.name} 
                            placeholder="name"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email <span className='text-red-500 text-base'>*</span></label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            onChange={handleChange} 
                            value={userRegisterData.email}
                            placeholder="example@support.com" 
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone No <span className='text-red-500 text-base'>*</span></label>
                        <input 
                            type="number" 
                            id="phone"
                            name="phone"
                            onChange={handleChange} 
                            value={userRegisterData.phone} 
                            placeholder="112456789" 
                            className="no__arrow shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password <span className='text-red-500 text-base'>*</span></label>
                        <input 
                            type="password"
                            id="password" 
                            name="password"
                            onChange={handleChange} 
                            value={userRegisterData.password} 
                            placeholder="****"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="repeatPassword" className="block mb-2 text-sm font-medium text-gray-900 ">Repeat password <span className='text-red-500 text-base'>*</span></label>
                        <input 
                            type="password" 
                            id="repeatPassword" 
                            name="repeatPassword"
                            onChange={handleChange} 
                            value={userRegisterData.repeatPassword}
                            placeholder="****" 
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register for account</button>
                </form>
                <div className='mt-3'>
                    You have an account! <Link to={ redirect ? `/login?redirect=${redirect}` :'/login'} className='text-blue-700 underline'>Login Here.</Link>
                </div>
            </div>
        </main>
    )
}


const mapStateToProps = (state) => ({
    authRegister: state.authRegister,
    auth: state.auth
})


export default connect(mapStateToProps, { register })(UserRegisterScreen);