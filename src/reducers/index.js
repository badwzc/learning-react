import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {campaigns, balance, range, selectCampaignId, indexRpt } from './home';

const rootReducer = combineReducers({
    campaigns,
    balance,
    range,
    selectCampaignId,
    indexRpt,
    routing: routerReducer
})

export default rootReducer;
