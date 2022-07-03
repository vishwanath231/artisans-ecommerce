import { combineReducers } from 'redux';
import { authLoginReducer, authRegisterReducer } from './AuthReducer';
import { productListReducer, productReducer } from './ProductReducer';

export const reducers = combineReducers({
    product: productReducer,
    productList: productListReducer,
    authLogin: authLoginReducer,
    authRegister: authRegisterReducer
})