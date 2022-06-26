import {
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL
} from '../constants/ProductConstants';
import product from '../../products.json';


export const getAllProducts = () => async (dispatch) => {

    try {
        dispatch({
            type: PRODUCT_REQUEST
        })

        dispatch({
            type: PRODUCT_SUCCESS,
            payload: product.products
        })


    } catch (err) {
        dispatch({
            type: PRODUCT_FAIL,
            error: err 
        })
    }
}


export const getProductLists = (id) => async (dispatch) => {

    try {
        
        dispatch({
            type: PRODUCT_LIST_REQUEST
        })

        const productList = product.products.find(val => val._id === id) 


        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: productList
        })

    } catch (err) {
        
        dispatch({
            type: PRODUCT_LIST_FAIL,
            error: err
        })
    }
}