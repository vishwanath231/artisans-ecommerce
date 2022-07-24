import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    ORDER_CREATE_RESET,
    LOGGED_USER_ORDER_REQUEST,
    LOGGED_USER_ORDER_SUCCESS,
    LOGGED_USER_ORDER_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_FAIL,
    ORDER_PAY_RESET,
    ORDER_DELIVER_REQUEST,
    ORDER_DELIVER_SUCCESS,
    ORDER_DELIVER_FAIL,
    ORDER_DELIVER_RESET,
    CREATE_RAZORPAY_ORDER_SUCCESS,
    CREATE_RAZORPAY_ORDER_FAIL,
    CREATE_RAZORPAY_ORDER_REQUEST,
    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAIL
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


export const orderDetailsReducer = (state = { loading: true, orderItems: [], shippingAddress: {} }, { type, payload }) => {

    switch (type) {
        case ORDER_DETAILS_REQUEST:
            
            return {
                ...state,
                loading: true
            }

        case ORDER_DETAILS_SUCCESS:
            return {
                loading: false,
                order: payload
            }
        
        case ORDER_DETAILS_FAIL:

            return{
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}


export const createRazorpayOrderReducer = (state= { razorpayResult:{} }, { type, payload }) => {
    
    switch (type) {
        case CREATE_RAZORPAY_ORDER_REQUEST:
            return {
                loading: true
            }
    
        case CREATE_RAZORPAY_ORDER_SUCCESS:
            return {
                loading: false,
                razorpayResult: payload
            }

        case CREATE_RAZORPAY_ORDER_FAIL:
            return {
                loading: false,
                error: payload
            }

        default:
            return state
    }
}



export const orderPayReducer = (state= {}, { type, payload }) => {
    
    switch (type) {
        case ORDER_PAY_REQUEST:
            
            return {
                loading: true
            }
    
        case ORDER_PAY_SUCCESS:
            return {
                loading: false,
                success: true
            }

        case ORDER_PAY_FAIL:
            return {
                loading: false,
                error: payload
            }

        case ORDER_PAY_RESET:
            return {}

        default:
            return state
    }
}




export const orderDeliverReducer = (state= {}, { type, payload }) => {
    
    switch (type) {
        case ORDER_DELIVER_REQUEST:
            
            return {
                loading: true
            }
    
        case ORDER_DELIVER_SUCCESS:
            return {
                loading: false,
                success: true
            }

        case ORDER_DELIVER_FAIL:
            return {
                loading: false,
                error: payload
            }

        case ORDER_DELIVER_RESET:
            return {}

        default:
            return state
    }
}



export const orderListReducer = (state = { orderLists: [] }, { type, payload }) => {

    switch (type) {
        case ORDER_LIST_REQUEST:
            return {
                loading: true
            }

        case ORDER_LIST_SUCCESS:
            return {
                loading: false,
                orderLists: payload
            }

        case ORDER_LIST_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}