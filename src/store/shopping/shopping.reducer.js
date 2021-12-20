import { ShoppingActionTypes } from "./shopping.model";
require('dotenv').config();

export const initialState = {
    categories: [],
    products: [],
    productList: [],
    cartProducts: [],
    isLoading: false,
    cart: [],
    orders: [],
    orderGroup: {},
    plans: [],
    paymentConfig: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ShoppingActionTypes.FETCH_CART_REQUEST:
        case ShoppingActionTypes.UPDATE_PRODUCT_STATUS_REQUEST:
        case ShoppingActionTypes.FETCH_PRODUCT_REQUEST:
        case ShoppingActionTypes.FETCH_PAYMENT_CONFIG_REQUEST:
        case ShoppingActionTypes.FETCH_PLANS_REQUEST:
        case ShoppingActionTypes.CREATE_ORDERGROUP_REQUEST:
        case ShoppingActionTypes.FETCH_ORDER_REQUEST:
        case ShoppingActionTypes.UPDATE_CART_REQUEST:
        case ShoppingActionTypes.CREATE_CART_REQUEST:
        case ShoppingActionTypes.FETCH_PRODUCT_IDS_REQUEST:
        case ShoppingActionTypes.FETCH_CATEGORY_REQUEST:
        case ShoppingActionTypes.CREATE_PRODUCT_REQUEST:
        case ShoppingActionTypes.UPDATE_PRODUCT_REQUEST: {
            return Object.assign({}, state, {
                isLoading: true
            });
        }


        case ShoppingActionTypes.FETCH_CATEGORY_SUCCESS: {
            return Object.assign({}, state, {
                isLoading: false,
                categories: action.payload.data.data,
            });
        }

        case ShoppingActionTypes.FETCH_PRODUCT_SUCCESS: {
            return Object.assign({}, state, {
                isLoading: false,
                productList: action.payload.data,
            });
        }

        case ShoppingActionTypes.SELECT_EXISTING_PRODUCT: {
            return Object.assign({}, state, {
                isLoading: false,
                products: [...state.products, action.payload]
            });
        }

        case ShoppingActionTypes.FETCH_PLANS_SUCCESS: {
            return Object.assign({}, state, {
                isLoading: false,
                plans: action.payload.data,
            });
        }

        case ShoppingActionTypes.UPDATE_CART_SUCCESS: {
            return Object.assign({}, state, {
                isLoading: false,
            });
        }

        case ShoppingActionTypes.CREATE_PRODUCT_SUCCESS: {
            return Object.assign({}, state, {
                isLoading: false,
                products: [...state.products, action.payload.data],
                productList: [...state.productList, action.payload.data]
            });
        }

        case ShoppingActionTypes.FETCH_CART_SUCCESS: {
            return Object.assign({}, state, {
                isLoading: false,
                cart: action.payload.data,
            });
        }

        case ShoppingActionTypes.FETCH_PRODUCT_IDS_SUCCESS: {
            return Object.assign({}, state, {
                isLoading: false,
                cartProducts: action.payload.data.listProduct,
            });
        }

        case ShoppingActionTypes.UPDATE_PRODUCT_SUCCESS: {
            let new_array = state.products.map(element => element._id == action.payload.data._id ? action.payload.data : element);
            return Object.assign({}, state, {
                isLoading: false,
                products: new_array,
            });
        }

        case ShoppingActionTypes.UPDATE_PRODUCT_STATUS_SUCCESS: {
            let new_array = state.products.map(element => element._id == action.payload.data._id ? action.payload.data : element);
            return Object.assign({}, state, {
                isLoading: false,
                products: new_array,
            });
        }

        case ShoppingActionTypes.CREATE_CART_SUCCESS: {
            return Object.assign({}, state, {
                isLoading: false,
            });
        }

        case ShoppingActionTypes.FETCH_ORDER_SUCCESS: {
            return Object.assign({}, state, {
                isLoading: false,
                orders: action.payload.data
            });
        }

        case ShoppingActionTypes.CREATE_ORDERGROUP_SUCCESS: {
            return Object.assign({}, state, {
                isLoading: false,
                orderGroup: action.payload.data
            });
        }

        case ShoppingActionTypes.FETCH_PAYMENT_CONFIG_SUCCESS: {
            return Object.assign({}, state, {
                isLoading: false,
                paymentConfig: action.payload.data
            });
        }

        case ShoppingActionTypes.CREATE_CART_FAILURE:
        case ShoppingActionTypes.FETCH_PRODUCT_FAILURE:
        case ShoppingActionTypes.UPDATE_PRODUCT_STATUS_FAILURE:
        case ShoppingActionTypes.FETCH_PAYMENT_CONFIG_FAILURE:
        case ShoppingActionTypes.FETCH_PLANS_FAILURE:
        case ShoppingActionTypes.CREATE_ORDERGROUP_FAILURE:
        case ShoppingActionTypes.FETCH_ORDER_FAILURE:
        case ShoppingActionTypes.UPDATE_CART_FAILURE:
        case ShoppingActionTypes.FETCH_CART_FAILURE:
        case ShoppingActionTypes.FETCH_PRODUCT_IDS_FAILURE:
        case ShoppingActionTypes.CREATE_PRODUCT_FAILURE:
        case ShoppingActionTypes.FETCH_CATEGORY_FAILURE:
        case ShoppingActionTypes.UPDATE_PRODUCT_FAILURE: {
            return Object.assign({}, state, {
                isLoading: false
            });
        }

        case ShoppingActionTypes.CLEAR_SHOPPING_REQUEST: {
            return Object.assign({}, state, {
                categories: [],
                products: [],
                productList: [],
                isLoading: false,
            });
        }

        default: {
            return state;
        }
    }
};

export { reducer as ShoppingReducer };
