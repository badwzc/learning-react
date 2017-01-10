
/*
 *   fetch参考下面的API
 *   https://github.com/matthew-andrews/isomorphic-fetch
 *
 */

const DATA_URL = '../data/'
import fetch from 'isomorphic-fetch'
// 获取首页余额
import {
    GET_CAMPAIGNS,
    GET_BALANCE,
    SET_RANGE,
    SELECT_CAMPAIGN,
    GET_INDEX_RPT,
    GET_ADGROUPS,
    SET_ONLONE_STATUS,
    SET_CHART,
    SET_ROUTE
} from '../constants';

export const changeOnlineStatus = index => ({
    type: SET_ONLONE_STATUS,
    index
})

export const setChart = key => ({
    type: SET_CHART,
    key
})

export const setRoute = route => ({
    type: SET_ROUTE,
    route
})

//range
export const setRange = range => (dispatch, getState) => {
    const { selectCampaignId } = getState();
    dispatch(fetchData(`rpt_${selectCampaignId}_${range}`, GET_INDEX_RPT));
    return {
        type: SET_RANGE,
        range
    }
}
export const selectCampaign = campaign_id => (dispatch, getState) => {
    const { range } = getState()
    dispatch(fetchData(`rpt_${campaign_id}_${range}`, GET_INDEX_RPT))
    return {
        type: SELECT_CAMPAIGN,
        campaign_id
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
//可以改成switch结构 function返回
/*
*
const actionList = (type, data) => {
    switch(type) {
        case GET_BALANCE:
            return {
                type: GET_BALANCE,
                balance: data.data
            }
    }
}
 */
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
    },
    GET_ADGROUPS: function(adgroups) {
        return {
            type: GET_ADGROUPS,
            adgroups
        }
    }

}

const fetchData = (url, action) => (dispatch) => {
    fetch(`${DATA_URL}${url}.json`)
    .then(response => {
        //简单错误处理
        if(response.status >= 400) {
            throw new Error(`code：${response.status}请求失败啦!!!`);
        }
        return response.json()
    })
    .then(json => dispatch(actionList[action](json)))
}

//请求的链接，暂时用data目录的数据
export const ajaxPostData = (url, action) => (dispatch) => dispatch(fetchData(url, action));
