import { call, put, takeEvery } from 'redux-saga/effects';
import * as ShoppingActions from './shopping.actions';
import ShoppingAPI from './shopping.api';
import SocialAPI from '../social/social.api';
import { ShoppingActionTypes } from './shopping.model';

export function* handleFetchCategories(action) {
    try {
        const response = yield call(SocialAPI.GetCategories, action.payload);
        yield put(ShoppingActions.getCategorySuccess(response));
    } catch (e) {
        yield put(ShoppingActions.getCategoryFailure(e));
    }
}

export function* handleCreateProduct(action) {
    try {
        const response = yield call(ShoppingAPI.CreateProduct, action.payload);
        yield put(ShoppingActions.addProductSuccess(response));
    } catch (e) {
        yield put(ShoppingActions.addProductFailure(e));
    }
}

export function* handleUpdateProduct(action) {
    try {
        const response = yield call(ShoppingAPI.UpdateProduct, action.payload);
        yield put(ShoppingActions.updateProductSuccess(response));
    } catch (e) {
        yield put(ShoppingActions.updateProductFailure(e));
    }
}

export function* handleUpdateProductStatus(action) {
    try {
        const response = yield call(ShoppingAPI.UpdateProductStatus, action.payload);
        yield put(ShoppingActions.updateProductStatusSuccess(response));
    } catch (e) {
        yield put(ShoppingActions.updateProductStatusFailure(e));
    }
}

export function* handleFetchCart(action) {
    try {
        const response = yield call(ShoppingAPI.GetCart, action.payload);
        yield put(ShoppingActions.getCartSuccess(response));
    } catch (e) {
        yield put(ShoppingActions.getCartFailure(e));
    }
}

export function* handleFetchProductIDs(action) {
    try {
        const response = yield call(ShoppingAPI.GetProductByIds, action.payload);
        yield put(ShoppingActions.getProductByIDSSuccess(response));
    } catch (e) {
        yield put(ShoppingActions.getProductByIDSFailure(e));
    }
}

export function* handleFetchProduct(action) {
    try {
        const response = yield call(ShoppingAPI.GetProducts, action.payload);
        yield put(ShoppingActions.getProductSuccess(response));
    } catch (e) {
        yield put(ShoppingActions.getProductFailure(e));
    }
}
export function* handleAddCart(action) {
    try {
        const response = yield call(ShoppingAPI.AddItemToCart, action.payload);
        yield put(ShoppingActions.addCartSuccess(response));
        yield put(ShoppingActions.getCartRequest());
    } catch (e) {
        yield put(ShoppingActions.addCartFailure(e));
    }
}

export function* handleUpdateCart(action) {
    try {
        const response = yield call(ShoppingAPI.UpdateCart, action.payload);
        yield put(ShoppingActions.updateCartSuccess(response));
        yield put(ShoppingActions.getCartRequest());
    } catch (e) {
        yield put(ShoppingActions.updateCartFailure(e));
    }
}

export function* handleAddOrder(action) {
    try {
        const response = yield call(ShoppingAPI.CreateOrder, action.payload);
        yield put(ShoppingActions.addOrderSuccess(response));
    } catch (e) {
        yield put(ShoppingActions.addProductFailure(e));
    }
}

export function* handleFetchOrder(action) {
    try {
        const response = yield call(ShoppingAPI.GetOrderList, action.payload);
        yield put(ShoppingActions.getOrderSuccess(response));
    } catch (e) {
        yield put(ShoppingActions.getOrderFailure(e));
    }
}

export function* handleCreateOrderGroup(action) {
    try {
        const response = yield call(ShoppingAPI.CreateOrderGroup, action.payload);
        yield put(ShoppingActions.createOrderGroupSuccess(response));
    } catch (e) {
        yield put(ShoppingActions.createOrderGroupFailure(e));
    }
}

export function* handleFetchPlans(action) {
    try {
        const response = yield call(ShoppingAPI.GetPlanDetails, action.payload);
        yield put(ShoppingActions.fetchPlansSuccess(response));
    } catch (e) {
        yield put(ShoppingActions.fetchPlansFailure(e));
    }
}

export function* handlePaymentConfig(action) {
    try {
        const response = yield call(ShoppingAPI.GetPaymentConfig, action.payload);
        yield put(ShoppingActions.fetchPaymentConfigSuccess(response));
    } catch (e) {
        yield put(ShoppingActions.fetchPaymentConfigFailure(e));
    }
}

export function* handleCreateSubscription(action) {
    try {
        const response = yield call(ShoppingAPI.CreateSubscription, action.payload);
        yield put(ShoppingActions.createSubscriptionSuccess(response));
    } catch (e) {
        yield put(ShoppingActions.createSubscriptionFailure(e));
    }
}

export function* ShoppingSaga() {
    yield takeEvery(ShoppingActionTypes.FETCH_CATEGORY_REQUEST, handleFetchCategories);
    yield takeEvery(ShoppingActionTypes.CREATE_PRODUCT_REQUEST, handleCreateProduct);
    yield takeEvery(ShoppingActionTypes.UPDATE_PRODUCT_REQUEST, handleUpdateProduct);
    yield takeEvery(ShoppingActionTypes.UPDATE_PRODUCT_STATUS_REQUEST, handleUpdateProductStatus);
    yield takeEvery(ShoppingActionTypes.FETCH_PRODUCT_REQUEST, handleFetchProduct);
    yield takeEvery(ShoppingActionTypes.FETCH_PRODUCT_IDS_REQUEST, handleFetchProductIDs);
    yield takeEvery(ShoppingActionTypes.FETCH_CART_REQUEST, handleFetchCart);
    yield takeEvery(ShoppingActionTypes.CREATE_CART_REQUEST, handleAddCart);
    yield takeEvery(ShoppingActionTypes.UPDATE_CART_REQUEST, handleUpdateCart);
    yield takeEvery(ShoppingActionTypes.CREATE_ORDER_REQUEST, handleAddOrder);
    yield takeEvery(ShoppingActionTypes.FETCH_ORDER_REQUEST, handleFetchOrder);
    yield takeEvery(ShoppingActionTypes.CREATE_ORDERGROUP_REQUEST, handleCreateOrderGroup);
    yield takeEvery(ShoppingActionTypes.FETCH_PLANS_REQUEST, handleFetchPlans);
    yield takeEvery(ShoppingActionTypes.FETCH_PAYMENT_CONFIG_REQUEST, handlePaymentConfig);
    yield takeEvery(ShoppingActionTypes.CREATE_SUBSCRIPTION_REQUEST, handleCreateSubscription);
}