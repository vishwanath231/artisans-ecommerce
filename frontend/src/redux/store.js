import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './reducers';


const authInfoFromStroage = localStorage.getItem('authInfo') ? JSON.parse(localStorage.getItem('authInfo')) : null;
const cartItemsFromStroage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const shippingAddressFromStroage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}

const initialState = {
    authLogin: {
        info: authInfoFromStroage,
    },
    cart:{
        cartItems: cartItemsFromStroage,
        shippingAddress: shippingAddressFromStroage 
    },

};

const middleware = [thunk];

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;