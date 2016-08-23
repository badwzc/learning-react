import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {campaigns, balance, range, selectCampaignId, indexRpt, adgroups } from './home';

const rootReducer = combineReducers({
    campaigns,
    balance,
    range,
    selectCampaignId,
    indexRpt,
    adgroups,
    routing: routerReducer
})

export default rootReducer;
