import { call, put, takeEvery } from 'redux-saga/effects';
import * as DeliveryAddressActions from './deliveryaddress.actions';
import DeliveryAddressAPI from './deliveryaddress.api';
import { DeliveryAddressActionTypes } from './deliveryaddress.model';
import toastr from "toastr";

export function* handleFetchDeliveryAddress(action) {
  try {
    const response = yield call(DeliveryAddressAPI.GetDeliveryAddress, action.payload);
    yield put(DeliveryAddressActions.getDeliveryAddressSuccess(response));
  } catch (e) {
    yield put(DeliveryAddressActions.getDeliveryAddressFailure(e));
  }
}

export function* handleFetchDeliveryAddressByID(action) {
  try {
    const response = yield call(DeliveryAddressAPI.GetDeliveryAddressById, action.payload);
    yield put(DeliveryAddressActions.getDeliveryAddressByIDSuccess(response));
  } catch (e) {
    yield put(DeliveryAddressActions.getDeliveryAddressByIDFailure(e));
  }
}

export function* handleCreateDeliveryAddress(action) {
  try {
    const response = yield call(DeliveryAddressAPI.CreateDeliveryAddress, action.payload);
    yield put(DeliveryAddressActions.createDeliveryAddressSuccess(response));
    toastr.success("Delivery Address Added Successfully", "Delivery Address");
  } catch (e) {
    yield put(DeliveryAddressActions.createDeliveryAddressFailure(e));
  }
}

export function* handleDeleteDeliveryAddress(action) {
  try {
    const response = yield call(DeliveryAddressAPI.DeleteDeliveryAddressById, action.payload);
    yield put(DeliveryAddressActions.deleteDeliveryAddressSuccess(response));
    toastr.success("Delivery Address Deleted Successfully", "Delivery Address");
  } catch (e) {
    yield put(DeliveryAddressActions.deleteDeliveryAddressFailure(e));
  }
}

export function* handleUpdateDeliveryAddress(action) {
  try {
    const response = yield call(DeliveryAddressAPI.UpdateDeliveryAddressById, action.payload);
    yield put(DeliveryAddressActions.updateDeliveryAddressSuccess(response));
    toastr.success("Delivery Address Updated Successfully", "Delivery Address");
  } catch (e) {
    yield put(DeliveryAddressActions.updateDeliveryAddressFailure(e));
  }
}

export function* DeliveryAddressSaga() {
  yield takeEvery(DeliveryAddressActionTypes.FETCH_DELIVERY_ADDRESS_REQUEST, handleFetchDeliveryAddress);
  yield takeEvery(DeliveryAddressActionTypes.FETCH_DELIVERY_ADDRESS_ID_REQUEST, handleFetchDeliveryAddressByID);
  yield takeEvery(DeliveryAddressActionTypes.CREATE_DELIVERY_ADDRESS_REQUEST, handleCreateDeliveryAddress);
  yield takeEvery(DeliveryAddressActionTypes.DELETE_DELIVERY_ADDRESS_REQUEST, handleDeleteDeliveryAddress);
  yield takeEvery(DeliveryAddressActionTypes.UPDATE_DELIVERY_ADDRESS_REQUEST, handleUpdateDeliveryAddress);
}

