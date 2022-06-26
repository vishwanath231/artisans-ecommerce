import {
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL
} from '../constants/ProductConstants';


export const productReducer = (state = { products: [] }, {type, payload}) => {
    
    switch (type) {
        case PRODUCT_REQUEST:
            return{
                loading: true,
                products: []
            }
        case PRODUCT_SUCCESS:
            return {
                loading: false,
                products: payload
            }
        case PRODUCT_FAIL: 
            return {
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}



export const productListReducer = (state = { product: {} }, {type, payload}) => {
    
    switch (type) {
        case PRODUCT_LIST_REQUEST:
            return{
                loading: true,
                product: {}
            }
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                product: payload
            }
        case PRODUCT_LIST_FAIL: 
            return {
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}