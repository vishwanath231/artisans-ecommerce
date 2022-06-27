import React,{ useState } from 'react';


const LoginScreen = () => {

    const sampleTest = {
        email: 'vishwanathvishwabai@gmail.com',
        phone: '6785435678'
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



    const handleSubmit = e => {
        e.preventDefault()

        if (loginData.phoneOrEmail === sampleTest.email || loginData.phoneOrEmail === sampleTest.phone) {
            
            console.log(loginData);
            setLoginData({
                phoneOrEmail: '',
                password: '',
            })
        }


    }

    return (
        <div className='px-4 max-w-3xl mt-28 mb-9 md:mx-auto'>
            <h2 className='text-4xl font-light uppercase mb-4' >Login</h2>
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
            
        </div>
    )
}

export default LoginScreen;