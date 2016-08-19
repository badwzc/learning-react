import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import campaigns from './campaigns';
import balance from './balance';
import {selectedReddit, postsByReddit } from './post';

const rootReducer = combineReducers({
    selectedReddit,
    postsByReddit,
    campaigns,
    balance,
    routing: routerReducer
})

export default rootReducer;
