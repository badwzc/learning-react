
/*
 *   fetch参考下面的API
 *   https://github.com/matthew-andrews/isomorphic-fetch
 *
 */
import fetch from 'isomorphic-fetch'
// 获取首页余额
import {
    GET_CAMPAIGNS,
    GET_BALANCE,
    SET_RANGE,
    SELECT_CAMPAIGN,
    GET_INDEX_RPT
} from '../constants';

//range

export function setRange(range) {
    return (dispatch, getState) => {
        const { selectCampaignId } = getState()
        dispatch(ajaxPostData(`rpt_${selectCampaignId}_${range}`, GET_INDEX_RPT))
        return {
            type: SET_RANGE,
            range
        }
    }
}
export function selectCampaign(campaign_id) {
    return (dispatch, getState) => {
        const { range } = getState()
        dispatch(ajaxPostData(`rpt_${campaign_id}_${range}`, GET_INDEX_RPT))
        return {
            type: SELECT_CAMPAIGN,
            campaign_id
        }
    }
}

/*
//单个ajax请求

function receiveBalance(balance) {
    return {
        type: GET_BALANCE,
        balance
    }
}

function fetchBalance() {
    return dispatch => {
        return fetch('../data/account_balance.json')
            .then(response => response.json())
            .then(json => dispatch(receiveBalance(json.data)))
    }
}

export function getBalance() {
    return (dispatch) => {
        return dispatch(fetchBalance())
    }
}

*/

// ajax

const actionList = {
    GET_BALANCE: function(data) {
        return {
            type: GET_BALANCE,
            balance: data.data
        }
    },
    GET_CAMPAIGNS: function (campaigns) {
        return {
            type: GET_CAMPAIGNS,
            campaigns
        }
    },
    GET_INDEX_RPT: function(indexRpt) {
        return {
            type: GET_INDEX_RPT,
            indexRpt
        }
    }
}

function fetchData(url, action) {
    return (dispatch) => {
        let callback = actionList[action];
        return fetch(`../data/${url}.json`)
            .then(response => {
                //简单错误处理
                if(response.status >= 400) {
                    throw new Error(`code：${response.status}请求失败啦!!!`);
                }
                return response.json()
            })
            .then(json => dispatch(callback(json)))
    }
}

//请求的链接，暂时用data目录的数据
export function ajaxPostData(url, action) {
    return (dispatch) => {
        return dispatch(fetchData(url, action))
    }
}