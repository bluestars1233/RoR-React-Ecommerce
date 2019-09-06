import { RECEIVE_SHOP, RECEIVE_ERRORS } from '../actions/shops_actions';

const shopErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SHOP:
            return [];
        case RECEIVE_ERRORS:
            return action.errors;  
        default:
            return [];
    }
};

export default shopErrorsReducer;