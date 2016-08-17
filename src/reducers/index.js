import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import campaigns from './campaigns';


const rootReducer = combineReducers({campaigns, routing: routerReducer})

export default rootReducer;
