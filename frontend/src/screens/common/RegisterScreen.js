import React from 'react';
import { useNavigate } from 'react-router-dom';


const RegisterScreen = () => {

    const navigate = useNavigate()

    const registerType = e => {

        if (e.target.value === "user") {
            navigate('/user/register')
        }else if(e.target.value === "artisan"){
            navigate('/artisan/register')
        }else{
            navigate('/register')
        }

    }


    return (
        <div className='px-4 py-6 max-w-3xl mt-28 mb-9 md:mx-auto'>
            <h2 className='text-4xl font-light uppercase mb-4'>Choose Your Register</h2>
            <form>
                <select onChange={registerType}  id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="">Choose Your Register</option>
                    <option value="user">User Register</option>
                    <option value="artisan">Artisan Register</option>
                </select>
            </form>
        </div>
    )
}

export default RegisterScreen;