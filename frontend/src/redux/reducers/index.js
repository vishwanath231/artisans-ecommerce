import { combineReducers } from 'redux';
import { authLoginReducer, authRegisterReducer,authInfoReducer, authListReducer } from './AuthReducer';
import { cartReducer } from './CartReducer';
import { productListReducer, productDetailsReducer } from './ProductReducer';
import { loggedUserOrderReducer, orderCreateReducer } from './OrderReducer';

export const reducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    auth: authInfoReducer,
    authLogin: authLoginReducer,
    authRegister: authRegisterReducer,
    authList: authListReducer,
    cart: cartReducer,
    orderCreate: orderCreateReducer,
    myOrder: loggedUserOrderReducer
})