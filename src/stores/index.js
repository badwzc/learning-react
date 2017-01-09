import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import midddleware
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

// import the root reducer
import rootReducer from '../reducers/index';

// import posts from './data/posts';

// create an object for the default data
// let balance = '', campaigns = []
// const defaultState = {
//     balance,
//     campaigns
// }
const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, createLogger())
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
