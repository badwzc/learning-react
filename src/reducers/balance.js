import {GET_BALANCE} from '../constants/index';
function balance(state = '', action) {
    switch (action.type) {
        case GET_BALANCE:
            return action.balance
        default:
            return state;

    }
}
export default balance;