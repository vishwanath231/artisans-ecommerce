import { combineReducers } from 'redux';
import { productListReducer, productReducer } from './ProductReducer';

export const reducers = combineReducers({
    product: productReducer,
    productList: productListReducer
})