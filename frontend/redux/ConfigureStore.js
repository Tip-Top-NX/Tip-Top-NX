import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import user from './reducers/user';
import addresses from './reducers/addresses';

export const ConfigureStore = () => {
    const store = createStore(combineReducers({user,addresses}),applyMiddleware(thunk));
    return store;
}