import { DeliveryAddressActionTypes } from "./deliveryaddress.model";
require('dotenv').config();

export const initialState = {
    deliveryAddresses: [],
    deliveryAddress: {},
    isLoading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DeliveryAddressActionTypes.FETCH_DELIVERY_ADDRESS_REQUEST:
        case DeliveryAddressActionTypes.FETCH_DELIVERY_ADDRESS_ID_REQUEST:
        case DeliveryAddressActionTypes.CREATE_DELIVERY_ADDRESS_REQUEST:
        case DeliveryAddressActionTypes.DELETE_DELIVERY_ADDRESS_REQUEST:
        case DeliveryAddressActionTypes.UPDATE_DELIVERY_ADDRESS_REQUEST: {
            return Object.assign({}, state, {
                isLoading: true
            });
        }

        case DeliveryAddressActionTypes.FETCH_DELIVERY_ADDRESS_SUCCESS: {
            return Object.assign({}, state, {
                isLoading: false,
                deliveryAddresses: action.payload.data,
            });
        }

        case DeliveryAddressActionTypes.FETCH_DELIVERY_ADDRESS_ID_SUCCESS: {
            return Object.assign({}, state, {
                isLoading: false,
                deliveryAddress: action.payload.data,
            });
        }

        case DeliveryAddressActionTypes.CREATE_DELIVERY_ADDRESS_SUCCESS: {
            let add = state.deliveryAddresses;
            add.push(action.payload.data)
            return Object.assign({}, state, {
                isLoading: false,
                deliveryAddresses: add
            });
        }

        case DeliveryAddressActionTypes.UPDATE_DELIVERY_ADDRESS_SUCCESS: {
            let adds = state.deliveryAddresses;
            adds = adds.map((x) => {
                if (x._id === action.payload.data._id) {
                    x = action.payload.data;
                }
                return x;
            })
            return Object.assign({}, state, {
                isLoading: false,
                deliveryAddresses: adds
            });
        }

        case DeliveryAddressActionTypes.DELETE_DELIVERY_ADDRESS_SUCCESS: {
            let adds = state.deliveryAddresses;
            adds = adds.filter((x) => {
                return x._id !== action.payload.data._id
            })
            return Object.assign({}, state, {
                isLoading: false,
                deliveryAddresses: adds
            });
        }

        case DeliveryAddressActionTypes.UPDATE_DELIVERY_ADDRESS_FAILURE:
        case DeliveryAddressActionTypes.FETCH_DELIVERY_ADDRESS_ID_FAILURE:
        case DeliveryAddressActionTypes.CREATE_DELIVERY_ADDRESS_FAILURE:
        case DeliveryAddressActionTypes.DELETE_DELIVERY_ADDRESS_FAILURE:
        case DeliveryAddressActionTypes.FETCH_DELIVERY_ADDRESS_FAILURE: {
            return Object.assign({}, state, {
                isLoading: false
            });
        }

        default: {
            return state;
        }
    }
};

export { reducer as DeliveryAddressReducer };
