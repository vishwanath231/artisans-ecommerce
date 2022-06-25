import { combineReducers } from 'redux';
import { registerTypeReducer } from './registerReducer';

export const reducers = combineReducers({
    registerType: registerTypeReducer,
})