import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
    campaigns,
    balance,
    range,
    selectCampaignId,
    indexRpt,
    adgroups,
    chartKey,
    currentPage
} from './home';

const rootReducer = combineReducers({
    campaigns,
    balance,
    range,
    selectCampaignId,
    indexRpt,
    adgroups,
    chartKey,
    currentPage,
    routing: routerReducer
})

export default rootReducer;
