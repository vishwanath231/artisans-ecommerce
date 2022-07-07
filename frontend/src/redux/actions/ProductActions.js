import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from '../constants/ProductConstants';
import axios from 'axios';


export const listProducts = () => async (dispatch) => {

    try {
        dispatch({
            type: PRODUCT_LIST_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get(`http://localhost:5000/api/products`, config)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        
        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message
        
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: resErr
        })
    }
}


export const getProductDetails = (id) => async (dispatch) => {

    try {
        
        dispatch({
            type: PRODUCT_DETAILS_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get(`http://localhost:5000/api/products/${id}`, config)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
       
        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message
        
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: resErr
        })
    }
}