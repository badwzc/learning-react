import {
    GET_BALANCE,
    GET_CAMPAIGNS,
    SET_RANGE,
    SELECT_CAMPAIGN,
    GET_INDEX_RPT,
    GET_ADGROUPS,
    SET_ONLONE_STATUS
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

export function adgroups(state = [], action) {
    switch (action.type) {
        case GET_ADGROUPS:
            return action.adgroups
        case SET_ONLONE_STATUS:
            const {index} = action;
            return [
                ...state.slice(0,index), // before the one we are updating
                {...state[index], online_status: state[index].online_status === 'online' ? 'offline' : 'online'},
                ...state.slice(index + 1) // after the one we are updating
              ]
        default:
            return state;

    }
}
