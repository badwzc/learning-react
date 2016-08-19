// 获取首页余额
import {GET_CAMPAIGNS, GET_BALANCE } from '../constants/index';

export function getBalance(balance) {
    return {
        type: GET_BALANCE,
        balance
    }
}
export function getCampaigns(campaigns) {
    return {
        type: GET_CAMPAIGNS,
        campaigns
    }
}


