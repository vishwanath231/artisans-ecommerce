import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    ORDER_CREATE_RESET,
    LOGGED_USER_ORDER_REQUEST,
    LOGGED_USER_ORDER_SUCCESS,
    LOGGED_USER_ORDER_FAIL
} from '../constants/OrderConstants';

export const orderCreateReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case ORDER_CREATE_REQUEST:
            return {
                loading: true
            }

        case ORDER_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                order: payload
            }

        case ORDER_CREATE_FAIL:
            return {
                loading: false,
                error: payload
            }
        
        case ORDER_CREATE_RESET:
            return {}
    
        default:
            return state;
    }
}


export const loggedUserOrderReducer = (state = { orders: [] }, { type, payload }) => {

    switch (type) {
        case LOGGED_USER_ORDER_REQUEST:
            return {
                loading: true
            }
            
        case LOGGED_USER_ORDER_SUCCESS:
            return {
                loading: false,
                orders: payload
            }
 
        case LOGGED_USER_ORDER_FAIL:
            return {
                loading: false,
                error: payload
            }

        default:
            return state;
    }
}