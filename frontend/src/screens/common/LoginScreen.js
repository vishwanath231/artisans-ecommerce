import React,{ useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SVGicon from '../../components/svg/SVGicon';


const LoginScreen = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const redirect = location.search ? location.search.split('=')[1] : '/'
    console.log(redirect);

    const sampleTest = {
        email: 'vishwanathvishwabai@gmail.com',
        phone: 6785435678
    }

    const [loginData, setLoginData] = useState({
        phoneOrEmail: '',
        password: '',
    });
    
    const handleChange = e => {
        const { name, value } = e.target;

        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const userInfo = false

    useEffect(() => {
    
        
        if (userInfo) {
            navigate(redirect)
        }
        
    }, [navigate, redirect, userInfo]);


    const handleSubmit = e => {
        e.preventDefault();

        if (loginData.phoneOrEmail === sampleTest.email || Number(loginData.phoneOrEmail) === sampleTest.phone) {
            
            navigate('/')
            setLoginData({
                phoneOrEmail: '',
                password: '',
            })
        }else{
            console.log('Invalid Email or Phone No');
        }
    }


    

    return (
        <main className='screen__height'>
            <div className='px-4 max-w-3xl my-9 mx-auto'>
            <div className='flex justify-center items-center mb-14'>
                <Link to='/' className='text-center'>
                    <SVGicon logo />
                </Link>
            </div>
            <h2 className='text-4xl font-light uppercase mb-4'>Login</h2>
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
                You don't have an account! <Link to='/register' className='text-blue-700 underline'>SignUp Here.</Link>
            </div>
        </div>
        </main>
        
    )
}

export default LoginScreen;