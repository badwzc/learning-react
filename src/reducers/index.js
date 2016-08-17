import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import campaigns from './campaigns';


const rootReducer = combineReducers({campaigns, router: routerReducer})

export default rootReducer;
