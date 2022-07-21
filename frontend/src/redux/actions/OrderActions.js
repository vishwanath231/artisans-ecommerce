import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    LOGGED_USER_ORDER_REQUEST,
    LOGGED_USER_ORDER_SUCCESS,
    LOGGED_USER_ORDER_FAIL,
} from '../constants/OrderConstants';
import { logout } from '../actions/AuthActions';
import axios from 'axios';



export const createOrder = (orderData) => async (dispatch, getState) => {

    try {
        
        dispatch({
            type: ORDER_CREATE_REQUEST
        })

        const { authLogin: { info } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${info.token}`
            }
        }

        const { data } = await axios.post('http://localhost:5000/api/orders', orderData, config)
        
        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data
        })

        localStorage.removeItem('cartItems')
        localStorage.removeItem('paymentMethod')

    } catch (error) {
        
        const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message

        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }

        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: message
        })
    }
} 


export const getMyOrder = () => async (dispatch, getState) => {

    try {
        
        dispatch({
            type: LOGGED_USER_ORDER_REQUEST
        })

        const { authLogin: { info } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${info.token}`
            }
        }

        const { data } = await axios.get('http://localhost:5000/api/orders/myorders', config)

        dispatch({
            type: LOGGED_USER_ORDER_SUCCESS,
            payload: data
        })

    } catch (error) {
        
        const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message

        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }

        dispatch({
            type: LOGGED_USER_ORDER_FAIL,
            payload: message
        })
    }
}