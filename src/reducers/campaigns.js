import {GET_CAMPAIGNS} from '../constants/index';
function campaigns(state = [], action) {
    // console.log(state, action)
    switch (action.type) {
        case GET_CAMPAIGNS:
            return action.campaigns
        default:
            return state;

    }
}
export default campaigns;