import { REQUEST_POSTS, RECEIVE_POSTS } from '../constants/index';

function postsByReddit(state = { }, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.reddit]: posts(state[action.reddit], action)
      })
    default:
      return state
  }
}
