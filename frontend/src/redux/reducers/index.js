import { combineReducers } from 'redux';
import { authLoginReducer, authRegisterReducer,authInfoReducer } from './AuthReducer';
import { cartReducer } from './CartReducer';
import { productListReducer, productDetailsReducer } from './ProductReducer';

export const reducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    auth: authInfoReducer,
    authLogin: authLoginReducer,
    authRegister: authRegisterReducer,
    cart: cartReducer
})