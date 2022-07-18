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


export const authInfoReducer = (state = {}, { type, payload}) => {

    switch (type) {
        case USER_LOADED_REQUEST:
            return {
                loading: true
            }
        case USER_LOADED_SUCCESS:
            return {
                loading: false,
                authInfo: payload
            }
        case USER_LOADED_FAIL: 
            return {
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}



export const authLoginReducer = (state = {}, { type, payload}) => {

    switch (type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                info: payload,
               
            }
        case USER_LOGIN_FAIL: 
            return {
                loading: false,
                error: payload
            }
        case USER_LOGOUT:
            return {}

        default:
            return state;
    }
}



export const authRegisterReducer = (state = {}, { type, payload}) => {

    switch (type) {
        case USER_REGISTER_REQUEST:
            return {
                loading: true,
            }
        case USER_REGISTER_SUCCESS:
            return {
                loading: false,
                info: payload
            }
        case USER_REGISTER_FAIL: 
            return {
                loading: false,
                error: payload
            }
        case USER_LOGOUT:
            return {}
            
        default:
            return state;
    }
}


export const authListReducer = (state = { users: [] }, { type, payload }) => {

    switch (type) {
        case USER_LIST_REQUEST:
            return {
                loading: true,
                users: []
            }
        
        case USER_LIST_SUCCESS:
            return {
                loading: false,
                users: payload
            }

        case USER_LIST_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}