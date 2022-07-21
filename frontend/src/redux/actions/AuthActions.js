import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_LOADED_REQUEST,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL
} from '../constants/AuthConstants';
import axios from 'axios';

export const userLoaded = () => async (dispatch, getState) => {
    try{

        dispatch({
            type: USER_LOADED_REQUEST
        })
          
        const { authLogin: { info } } = getState();


        const config = {
            headers: {
                Authorization : `Bearer ${info.token}`
            }
         }

        if (config) {
            const { data } = await axios.get(`http://localhost:5000/api/auth/profile`, config)
            
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: data
            })
        }

    } catch(error){

        const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
 
        dispatch({
            type: USER_LOADED_FAIL,
            payload: message
        })
   
    }
}




export const login = (loginData) => async (dispatch, getState) => {


    try {

        dispatch({
            type: USER_LOGIN_REQUEST
        })

        

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const { data }= await axios.post(`http://localhost:5000/api/auth/login`,loginData, config) 

        const authData = {
             token: data.token,
             role: data.data.role
       }

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: authData
        })

        
        localStorage.setItem('authInfo', JSON.stringify(authData));
        
        dispatch(userLoaded())

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

        const authData = {
             token: data.token,
             role:  data.data.role
       }

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: authData
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: authData
        })

        
        localStorage.setItem('authInfo', JSON.stringify(authData));
        
        dispatch(userLoaded())

    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message
        
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: resErr
        })
    }
}



export const logout = () => (dispatch) => {
    dispatch({ type:USER_LOGOUT })
    localStorage.removeItem('authInfo')
    localStorage.removeItem('cartItems')
    localStorage.removeItem('shippingAddress')
    localStorage.removeItem('paymentMethod')
    document.location.href = '/login'
}



export const getAuthList = () => async (dispatch, getState) => {

    try {
        
        dispatch({
            type: USER_LIST_REQUEST
        })

        const { authLogin: { info } } = getState();


        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${info.token}`
            }
        }

        const { data } = await axios.get(`http://localhost:5000/api/auth/users`, config)

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        })



    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message
        

        dispatch({
            type: USER_LIST_FAIL,
            payload: resErr
        })
        
    }
}