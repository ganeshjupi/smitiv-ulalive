import { call, put, takeEvery } from 'redux-saga/effects';
import * as PrivateLoungeActions from './privatelounge.actions';
import PrivateLoungeAPI from './privatelounge.api';
import { PrivateLoungeActionTypes } from './privatelounge.model';
import toastr from "toastr";

export function* handleFetchPrivateLounge(action) {
  try {
    const response = yield call(PrivateLoungeAPI.GetPrivateLoungeByUser, action.payload);
    yield put(PrivateLoungeActions.getPrivateLoungeSuccess(response));
  } catch (e) {
    yield put(PrivateLoungeActions.getPrivateLoungeFailure(e));
  }
}

export function* handleFetchUserPrivateLounge(action) {
  try {
    const response = yield call(PrivateLoungeAPI.GetPrivateLoungeDetailByUser, action.payload);
    yield put(PrivateLoungeActions.getPrivateLoungeUserSuccess(response));
  } catch (e) {
    yield put(PrivateLoungeActions.getPrivateLoungeUserFailure(e));
  }
}

export function* handleUpdatePrivateLounge(action) {
  try {
    const response = yield call(PrivateLoungeAPI.UpdatePrivateLoungeByUser, action.payload);
    yield put(PrivateLoungeActions.updatePrivateLoungeSuccess(response));
    toastr.success("Setting Updated Successfully", "Private Lounge");
  } catch (e) {
    yield put(PrivateLoungeActions.updatePrivateLoungeFailure(e));
  }
}

export function* PrivateLoungeSaga() {
  yield takeEvery(PrivateLoungeActionTypes.FETCH_PRIVATE_LOUNGE_REQUEST, handleFetchPrivateLounge);
  yield takeEvery(PrivateLoungeActionTypes.UPDATE_PRIVATE_LOUNGE_REQUEST, handleUpdatePrivateLounge);
  yield takeEvery(PrivateLoungeActionTypes.FETCH_PRIVATE_LOUNGE_USER_REQUEST, handleFetchUserPrivateLounge);
}

