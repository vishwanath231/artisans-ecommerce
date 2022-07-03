import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './reducers';


const authInfoFromStorage = localStorage.getItem('authInfo') ? JSON.parse(localStorage.getItem('authInfo')) : null;

const initialState = {
    authLogin: {
        authInfo: authInfoFromStorage
    }
};

const middleware = [thunk];

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;