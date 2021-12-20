import { PrivateLoungeActionTypes } from "./privatelounge.model";
require('dotenv').config();

export const initialState = {
    privateLounge: {},
    userPrivateLounge: {},
    isLoading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PrivateLoungeActionTypes.FETCH_PRIVATE_LOUNGE_REQUEST:
        case PrivateLoungeActionTypes.FETCH_PRIVATE_LOUNGE_USER_REQUEST:
        case PrivateLoungeActionTypes.UPDATE_PRIVATE_LOUNGE_REQUEST: {
            return Object.assign({}, state, {
                isLoading: true
            });
        }

        case PrivateLoungeActionTypes.FETCH_PRIVATE_LOUNGE_USER_SUCCESS: {
            return Object.assign({}, state, {
                isLoading: false,
                userPrivateLounge: action.payload.data,
            });
        }

        case PrivateLoungeActionTypes.UPDATE_PRIVATE_LOUNGE_SUCCESS:
        case PrivateLoungeActionTypes.FETCH_PRIVATE_LOUNGE_SUCCESS: {
            return Object.assign({}, state, {
                isLoading: false,
                privateLounge: action.payload.data,
            });
        }

        case PrivateLoungeActionTypes.UPDATE_PRIVATE_LOUNGE_FAILURE:
        case PrivateLoungeActionTypes.FETCH_PRIVATE_LOUNGE_USER_FAILURE:
        case PrivateLoungeActionTypes.FETCH_PRIVATE_LOUNGE_FAILURE: {
            return Object.assign({}, state, {
                isLoading: false
            });
        }

        default: {
            return state;
        }
    }
};

export { reducer as PrivateLoungeReducer };
