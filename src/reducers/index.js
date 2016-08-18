import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import campaigns from './campaigns';
import balance from './balance';

const rootReducer = combineReducers({campaigns, balance, routing: routerReducer})

export default rootReducer;
