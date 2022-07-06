import { combineReducers } from 'redux';
import { authLoginReducer, authRegisterReducer } from './AuthReducer';
import { cartReducer } from './CartReducer';
import { productListReducer, productDetailsReducer } from './ProductReducer';

export const reducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    authLogin: authLoginReducer,
    authRegister: authRegisterReducer,
    cart: cartReducer
})