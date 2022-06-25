import {
    REGISTER_TYPE
} from '../constants/registerConstant'

export const registerTypeReducer = (state = { register: '' }, { type, payload }) => {
    
    switch (type) {
        case REGISTER_TYPE:
            return {
                ...state,
                register: payload
            }
        default:
            return state
    }
}