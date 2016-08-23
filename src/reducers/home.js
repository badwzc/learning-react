import {
    GET_BALANCE,
    GET_CAMPAIGNS,
    SET_RANGE,
    SELECT_CAMPAIGN,
    GET_INDEX_RPT
} from '../constants/index';

export function balance(state = '', action) {
    switch (action.type) {
        case GET_BALANCE:
            return action.balance
        default:
            return state;

    }
}

export function campaigns(state = [], action) {
    // console.log(state, action)
    switch (action.type) {
        case GET_CAMPAIGNS:
            return action.campaigns
        default:
            return state;

    }
}

export function range(state = 7, action) {
    switch (action.type) {
        case SET_RANGE:
            return action.range
        default:
            return state;

    }
}
export function selectCampaignId(state = -1, action) {
    switch (action.type) {
        case SELECT_CAMPAIGN:
            return action.campaign_id
        default:
            return state;

    }
}
export function indexRpt(state = [], action) {
    switch (action.type) {
        case GET_INDEX_RPT:
            return action.indexRpt
        default:
            return state;

    }
}