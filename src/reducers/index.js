import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as reducers from './home';

const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
})

export default rootReducer;
