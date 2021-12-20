import { call, put, takeEvery } from 'redux-saga/effects';
import * as NotificationActions from './notification.actions';
import NotificationAPI from './notification.api';
import { NotificationActionTypes } from './notification.model';
import toastr from "toastr";

export function* handleCreateNotificationSetting(action) {
    try {
        const response = yield call(NotificationAPI.CreateSetting, action.payload);
        yield put(NotificationActions.createNotificationSettingSuccess(response));
        toastr.success("Notification Enabled Successfully", "Notification");
    } catch (e) {
        yield put(NotificationActions.createNotificationSettingFailure(e));
    }
}

export function* handleFetchNotifications(action) {
    try {
        const response = yield call(NotificationAPI.getPushNotifications, action.payload);
        yield put(NotificationActions.fetchNotificationSuccess(response));
    } catch (e) {
        yield put(NotificationActions.fetchNotificationFailure(e));
    }
}

export function* handleReadNotification(action) {
    try {
        const response = yield call(NotificationAPI.updatePushNotification, action.payload);
        yield put(NotificationActions.readNotificationSuccess(response));
    } catch (e) {
        yield put(NotificationActions.readNotificationFailure(e));
    }
}

export function* handleReadAllNotification(action) {
    try {
        const response = yield call(NotificationAPI.updatePushNotifications, action.payload);
        yield put(NotificationActions.readAllNotificationSuccess(response));
    } catch (e) {
        yield put(NotificationActions.readAllNotificationFailure(e));
    }
}

export function* NotificationSaga() {
    yield takeEvery(NotificationActionTypes.CREATE_SETTING_REQUEST, handleCreateNotificationSetting);
    yield takeEvery(NotificationActionTypes.FETCH_PUSH_REQUEST, handleFetchNotifications);
    yield takeEvery(NotificationActionTypes.READ_PUSH_REQUEST, handleReadNotification);
    yield takeEvery(NotificationActionTypes.READ_ALL_PUSH_REQUEST, handleReadAllNotification);
}