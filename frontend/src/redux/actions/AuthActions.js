import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT
} from '../constants/AuthConstants';
import axios from 'axios';

export const userLoaded = () => (dispatch, getState) => {

    // const { authLogin: { token } } = getState();

    console.log(getState().authLogin.token);

    // const config = {
    //     headers: {
    //         Authorization : `Bearer ${

    //         }`
    //     }
    // }

    // const { data } = await

}

// userLoaded()


export const login = (loginData) => async (dispatch) => {


    try {

        dispatch({
            type: USER_LOGIN_REQUEST
        })

        // const { authLogin: { token } } = getState();
        

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const { data }= await axios.post(`http://localhost:5000/api/auth/login`,loginData, config) 


        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
            token: data.token
        })

        localStorage.setItem('token', data.token);

        localStorage.setItem('authInfo', JSON.stringify(data))

    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message

        dispatch({
            type: USER_LOGIN_FAIL,
            payload: resErr
        })
    }
}


export const register = (registerData) => async (dispatch) => {

    try {
        
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-Tpye': 'application/json'
            }
        }

        const { data } = await axios.post(`http://localhost:5000/api/auth/register`, registerData, config)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
            token: data.token
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
            token: data.token
        })

        localStorage.setItem('token', data.token);
        localStorage.setItem('authInfo', JSON.stringify(data))

    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message
        
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: resErr
        })
    }
}



export const logout = () => (dispatch) => {
    localStorage.removeItem('authInfo')
    localStorage.removeItem('token');
    localStorage.removeItem('cartItems')
    dispatch({ type:USER_LOGOUT })
    document.location.href = '/login'
}