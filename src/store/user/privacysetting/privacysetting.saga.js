import { call, put, takeEvery } from 'redux-saga/effects';
import * as PrivacySettingActions from './privacysetting.actions';
import PrivacySettingAPI from './privacysetting.api';
import { PrivacySettingActionTypes } from './privacysetting.model';
import toastr from "toastr";

export function* handleFetchPrivacySetting(action){
  try {
    const response = yield call(PrivacySettingAPI.GetPrivacyByUser, action.payload);
    yield put(PrivacySettingActions.getPrivacySettingSuccess(response));
  } catch (e) {
    yield put(PrivacySettingActions.getPrivacySettingFailure(e));
  }
}

export function* handleUpdatePrivacySetting(action){
  try {
    const response = yield call(PrivacySettingAPI.UpdatePrivacyByUser, action.payload);
    yield put(PrivacySettingActions.updatePrivacySettingSuccess(response));
    toastr.success("Setting Updated Successfully", "Privacty Setting");
  } catch (e) {
    yield put(PrivacySettingActions.updatePrivacySettingFailure(e));
  }
}

export function* PrivacySettingSaga() {
  yield takeEvery(PrivacySettingActionTypes.FETCH_PRIVACY_SETTING_REQUEST, handleFetchPrivacySetting);
  yield takeEvery(PrivacySettingActionTypes.UPDATE_PRIVACY_SETTING_REQUEST, handleUpdatePrivacySetting);
}

