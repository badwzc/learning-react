// 获取首页余额
import {GET_CAMPAIGNS, GET_BALANCE, REQUEST_POSTS, RECEIVE_POSTS } from '../constants/index';

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


//异步获取ajax信息
function requestPosts(campaignId) {
    return {
        type: REQUEST_POSTS,
        campaignId
    }
}

function receivePosts(campaignId, json) {
    return {
        type: RECEIVE_POSTS,
        campaignId,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

function fetchPosts(campaignId) {
    return dispatch => {
        dispatch(requestPosts(campaignId))
        return fetch(`https://www.reddit.com/r/${campaignId}.json`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(campaignId, json)))
    }
}

function shouldFetchPosts(state, campaignId) {
    const posts = state.postsBycampaignId[campaignId]
    if (!posts) {
        return true
    }
    if (posts.isFetching) {
        return false
    }
    return posts.didInvalidate
}

export function fetchPostsIfNeeded(campaignId) {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), campaignId)) {
            return dispatch(fetchPosts(campaignId))
        }
    }
}
