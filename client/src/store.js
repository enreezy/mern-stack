import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const InitialState = {};
const middleware = [thunk];

const store = createStore(rootReducer,InitialState, compose(
    applyMiddleware(...middleware),
));

export default store;