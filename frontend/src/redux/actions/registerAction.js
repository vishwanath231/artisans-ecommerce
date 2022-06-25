import {
    REGISTER_TYPE
} from '../constants/registerConstant';

export const registerTypeAction = (val) => (dispatch) => {
    dispatch({
        type: REGISTER_TYPE,
        payload: val
    })
}