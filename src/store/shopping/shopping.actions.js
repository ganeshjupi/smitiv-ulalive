import { action } from "typesafe-actions";
import { ShoppingActionTypes } from "./shopping.model";

export const getCategoryRequest = (req) => action(ShoppingActionTypes.FETCH_CATEGORY_REQUEST, req);
export const getCategorySuccess = (res) => action(ShoppingActionTypes.FETCH_CATEGORY_SUCCESS, res);
export const getCategoryFailure = (err) => action(ShoppingActionTypes.FETCH_CATEGORY_FAILURE, err);

export const getCategoryByIDRequest = (req) => action(ShoppingActionTypes.FETCH_CATEGORY_ID_REQUEST, req);
export const getCategoryByIDSuccess = (res) => action(ShoppingActionTypes.FETCH_CATEGORY_ID_SUCCESS, res);
export const getCategoryByIDFailure = (err) => action(ShoppingActionTypes.FETCH_CATEGORY_ID_FAILURE, err);

export const addCategoryRequest = (req) => action(ShoppingActionTypes.CREATE_CATEGORY_REQUEST, req);
export const addCategorySuccess = (res) => action(ShoppingActionTypes.CREATE_CATEGORY_SUCCESS, res);
export const addCategoryFailure = (err) => action(ShoppingActionTypes.CREATE_CATEGORY_FAILURE, err);

export const updateCategoryRequest = (req) => action(ShoppingActionTypes.UPDATE_CATEGORY_REQUEST, req);
export const updateCategorySuccess = (res) => action(ShoppingActionTypes.UPDATE_CATEGORY_SUCCESS, res);
export const updateCategoryFailure = (err) => action(ShoppingActionTypes.UPDATE_CATEGORY_FAILURE, err);

export const deleteCategoryRequest = (req) => action(ShoppingActionTypes.DELETE_CATEGORY_REQUEST, req);
export const deleteCategorySuccess = (res) => action(ShoppingActionTypes.DELETE_CATEGORY_SUCCESS, res);
export const deleteCategoryFailure = (err) => action(ShoppingActionTypes.DELETE_CATEGORY_FAILURE, err);

export const getTransactionRequest = (req) => action(ShoppingActionTypes.FETCH_TRANSACTION_REQUEST, req);
export const getTransactionSuccess = (res) => action(ShoppingActionTypes.FETCH_TRANSACTION_SUCCESS, res);
export const getTransactionFailure = (err) => action(ShoppingActionTypes.FETCH_TRANSACTION_FAILURE, err);

export const getProductRequest = (req) => action(ShoppingActionTypes.FETCH_PRODUCT_REQUEST, req);
export const getProductSuccess = (res) => action(ShoppingActionTypes.FETCH_PRODUCT_SUCCESS, res);
export const getProductFailure = (err) => action(ShoppingActionTypes.FETCH_PRODUCT_FAILURE, err);

export const getProductByIDRequest = (req) => action(ShoppingActionTypes.FETCH_PRODUCT_ID_REQUEST, req);
export const getProductByIDSuccess = (res) => action(ShoppingActionTypes.FETCH_PRODUCT_ID_SUCCESS, res);
export const getProductByIDFailure = (err) => action(ShoppingActionTypes.FETCH_PRODUCT_ID_FAILURE, err);

export const getProductByIDSRequest = (req) => action(ShoppingActionTypes.FETCH_PRODUCT_IDS_REQUEST, req);
export const getProductByIDSSuccess = (res) => action(ShoppingActionTypes.FETCH_PRODUCT_IDS_SUCCESS, res);
export const getProductByIDSFailure = (err) => action(ShoppingActionTypes.FETCH_PRODUCT_IDS_FAILURE, err);

export const addProductRequest = (req) => action(ShoppingActionTypes.CREATE_PRODUCT_REQUEST, req);
export const addProductSuccess = (res) => action(ShoppingActionTypes.CREATE_PRODUCT_SUCCESS, res);
export const addProductFailure = (err) => action(ShoppingActionTypes.CREATE_PRODUCT_FAILURE, err);

export const updateProductRequest = (req) => action(ShoppingActionTypes.UPDATE_PRODUCT_REQUEST, req);
export const updateProductSuccess = (res) => action(ShoppingActionTypes.UPDATE_PRODUCT_SUCCESS, res);
export const updateProductFailure = (err) => action(ShoppingActionTypes.UPDATE_PRODUCT_FAILURE, err);

export const deleteProductRequest = (req) => action(ShoppingActionTypes.DELETE_PRODUCT_REQUEST, req);
export const deleteProductSuccess = (res) => action(ShoppingActionTypes.DELETE_PRODUCT_SUCCESS, res);
export const deleteProductFailure = (err) => action(ShoppingActionTypes.DELETE_PRODUCT_FAILURE, err);

export const updateProductStatusRequest = (req) => action(ShoppingActionTypes.UPDATE_PRODUCT_STATUS_REQUEST, req);
export const updateProductStatusSuccess = (res) => action(ShoppingActionTypes.UPDATE_PRODUCT_STATUS_SUCCESS, res);
export const updateProductStatusFailure = (err) => action(ShoppingActionTypes.UPDATE_PRODUCT_STATUS_FAILURE, err);

export const fetchPaymentConfigRequest = (req) => action(ShoppingActionTypes.FETCH_PAYMENT_CONFIG_REQUEST, req);
export const fetchPaymentConfigSuccess = (res) => action(ShoppingActionTypes.FETCH_PAYMENT_CONFIG_SUCCESS, res);
export const fetchPaymentConfigFailure = (err) => action(ShoppingActionTypes.FETCH_PAYMENT_CONFIG_FAILURE, err);

export const fetchPaymentPayoutRequest = (req) => action(ShoppingActionTypes.FETCH_PAYMENT_PAYOUT_REQUEST, req);
export const fetchPaymentPayoutSuccess = (res) => action(ShoppingActionTypes.FETCH_PAYMENT_PAYOUT_SUCCESS, res);
export const fetchPaymentPayoutFailure = (err) => action(ShoppingActionTypes.FETCH_PAYMENT_PAYOUT_FAILURE, err);

export const createSubscriptionRequest = (req) => action(ShoppingActionTypes.CREATE_SUBSCRIPTION_REQUEST, req);
export const createSubscriptionSuccess = (res) => action(ShoppingActionTypes.CREATE_SUBSCRIPTION_SUCCESS, res);
export const createSubscriptionFailure = (err) => action(ShoppingActionTypes.CREATE_SUBSCRIPTION_FAILURE, err);

export const upgradeAccountRequest = (req) => action(ShoppingActionTypes.UPGRADE_ACCOUNT_REQUEST, req);
export const upgradeAccountSuccess = (res) => action(ShoppingActionTypes.UPGRADE_ACCOUNT_SUCCESS, res);
export const upgradeAccountFailure = (err) => action(ShoppingActionTypes.UPGRADE_ACCOUNT_FAILURE, err);

export const fetchPlansRequest = (req) => action(ShoppingActionTypes.FETCH_PLANS_REQUEST, req);
export const fetchPlansSuccess = (res) => action(ShoppingActionTypes.FETCH_PLANS_SUCCESS, res);
export const fetchPlansFailure = (err) => action(ShoppingActionTypes.FETCH_PLANS_FAILURE, err);

export const createOrderGroupRequest = (req) => action(ShoppingActionTypes.CREATE_ORDERGROUP_REQUEST, req);
export const createOrderGroupSuccess = (res) => action(ShoppingActionTypes.CREATE_ORDERGROUP_SUCCESS, res);
export const createOrderGroupFailure = (err) => action(ShoppingActionTypes.CREATE_ORDERGROUP_FAILURE, err);

export const getOrderRequest = (req) => action(ShoppingActionTypes.FETCH_ORDER_REQUEST, req);
export const getOrderSuccess = (res) => action(ShoppingActionTypes.FETCH_ORDER_SUCCESS, res);
export const getOrderFailure = (err) => action(ShoppingActionTypes.FETCH_ORDER_FAILURE, err);

export const getOrderByIDRequest = (req) => action(ShoppingActionTypes.FETCH_ORDER_ID_REQUEST, req);
export const getOrderByIDSuccess = (res) => action(ShoppingActionTypes.FETCH_ORDER_ID_SUCCESS, res);
export const getOrderByIDFailure = (err) => action(ShoppingActionTypes.FETCH_ORDER_ID_FAILURE, err);

export const addOrderRequest = (req) => action(ShoppingActionTypes.CREATE_ORDER_REQUEST, req);
export const addOrderSuccess = (res) => action(ShoppingActionTypes.CREATE_ORDER_SUCCESS, res);
export const addOrderFailure = (err) => action(ShoppingActionTypes.CREATE_ORDER_FAILURE, err);

export const updateOrderRequest = (req) => action(ShoppingActionTypes.UPDATE_ORDER_REQUEST, req);
export const updateOrderSuccess = (res) => action(ShoppingActionTypes.UPDATE_ORDER_SUCCESS, res);
export const updateOrderFailure = (err) => action(ShoppingActionTypes.UPDATE_ORDER_FAILURE, err);

export const createProductSubscriptionRequest = (req) => action(ShoppingActionTypes.CREATE_PRODUCT_SUBSCRIPTION_REQUEST, req);
export const createProductSubscriptionSuccess = (res) => action(ShoppingActionTypes.CREATE_PRODUCT_SUBSCRIPTION_SUCCESS, res);
export const createProductSubscriptionFailure = (err) => action(ShoppingActionTypes.CREATE_PRODUCT_SUBSCRIPTION_FAILURE, err);

export const cancelProductSubscriptionRequest = (req) => action(ShoppingActionTypes.CANCEL_PRODUCT_SUBSCRIPTION_REQUEST, req);
export const cancelProductSubscriptionSuccess = (res) => action(ShoppingActionTypes.CANCEL_PRODUCT_SUBSCRIPTION_SUCCESS, res);
export const cancelProductSubscriptionFailure = (err) => action(ShoppingActionTypes.CANCEL_PRODUCT_SUBSCRIPTION_FAILURE, err);

export const createSubscriptionPriceRequest = (req) => action(ShoppingActionTypes.CREATE_SUBSCRIPTION_PRICE_REQUEST, req);
export const createSubscriptionPriceSuccess = (res) => action(ShoppingActionTypes.CREATE_SUBSCRIPTION_PRICE_SUCCESS, res);
export const createSubscriptionPriceFailure = (err) => action(ShoppingActionTypes.CREATE_SUBSCRIPTION_PRICE_FAILURE, err);

export const updateSubscriptionPriceRequest = (req) => action(ShoppingActionTypes.UPDATE_SUBSCRIPTION_PRICE_REQUEST, req);
export const updateSubscriptionPriceSuccess = (res) => action(ShoppingActionTypes.UPDATE_SUBSCRIPTION_PRICE_SUCCESS, res);
export const updateSubscriptionPriceFailure = (err) => action(ShoppingActionTypes.UPDATE_SUBSCRIPTION_PRICE_FAILURE, err);

export const cancelProductSubscriptionTimeRequest = (req) => action(ShoppingActionTypes.CANCEL_SUBSCRIPTION_TIME_REQUEST, req);
export const cancelProductSubscriptionTimeSuccess = (res) => action(ShoppingActionTypes.CANCEL_SUBSCRIPTION_TIME_SUCCESS, res);
export const cancelProductSubscriptionTimeFailure = (err) => action(ShoppingActionTypes.CANCEL_SUBSCRIPTION_TIME_FAILURE, err);

export const addTrialSubscriptionRequest = (req) => action(ShoppingActionTypes.ADD_TRIAL_SUBSCRIPTION_REQUEST, req);
export const addTrialSubscriptionSuccess = (res) => action(ShoppingActionTypes.ADD_TRIAL_SUBSCRIPTION_SUCCESS, res);
export const addTrialSubscriptionFailure = (err) => action(ShoppingActionTypes.ADD_TRIAL_SUBSCRIPTION_FAILURE, err);

export const addBasicSubscriptionRequest = (req) => action(ShoppingActionTypes.ADD_BASIC_SUBSCRIPTION_REQUEST, req);
export const addBasicSubscriptionSuccess = (res) => action(ShoppingActionTypes.ADD_BASIC_SUBSCRIPTION_SUCCESS, res);
export const addBasicSubscriptionFailure = (err) => action(ShoppingActionTypes.ADD_BASIC_SUBSCRIPTION_FAILURE, err);

export const addTrialBasicSubscriptionRequest = (req) => action(ShoppingActionTypes.ADD_TRIALBASIC_SUBSCRIPTION_REQUEST, req);
export const addTrialBasicSubscriptionSuccess = (res) => action(ShoppingActionTypes.ADD_TRIALBASIC_SUBSCRIPTION_SUCCESS, res);
export const addTrialBasicSubscriptionFailure = (err) => action(ShoppingActionTypes.ADD_TRIALBASIC_SUBSCRIPTION_FAILURE, err);

export const getCartRequest = (req) => action(ShoppingActionTypes.FETCH_CART_REQUEST, req);
export const getCartSuccess = (res) => action(ShoppingActionTypes.FETCH_CART_SUCCESS, res);
export const getCartFailure = (err) => action(ShoppingActionTypes.FETCH_CART_FAILURE, err);

export const addCartRequest = (req) => action(ShoppingActionTypes.CREATE_CART_REQUEST, req);
export const addCartSuccess = (res) => action(ShoppingActionTypes.CREATE_CART_SUCCESS, res);
export const addCartFailure = (err) => action(ShoppingActionTypes.CREATE_CART_FAILURE, err);

export const updateCartRequest = (req) => action(ShoppingActionTypes.UPDATE_CART_REQUEST, req);
export const updateCartSuccess = (res) => action(ShoppingActionTypes.UPDATE_CART_SUCCESS, res);
export const updateCartFailure = (err) => action(ShoppingActionTypes.UPDATE_CART_FAILURE, err);

export const clearShoppingRequest = () => action(ShoppingActionTypes.CLEAR_SHOPPING_REQUEST);
export const selectExistingProduct = (req) => action(ShoppingActionTypes.SELECT_EXISTING_PRODUCT, req);
