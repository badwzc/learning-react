import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {campaigns, balance, range, selectCampaignId, indexRpt, adgroups, chartKey } from './home';

const rootReducer = combineReducers({
    campaigns,
    balance,
    range,
    selectCampaignId,
    indexRpt,
    adgroups,
    chartKey,
    routing: routerReducer
})

export default rootReducer;
