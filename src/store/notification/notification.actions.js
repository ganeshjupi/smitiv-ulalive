import { action } from "typesafe-actions";
import { NotificationActionTypes } from "./notification.model";

export const createNotificationSettingRequest = (req) => action(NotificationActionTypes.CREATE_SETTING_REQUEST, req);
export const createNotificationSettingSuccess = (res) => action(NotificationActionTypes.CREATE_SETTING_SUCCESS, res);
export const createNotificationSettingFailure = (err) => action(NotificationActionTypes.CREATE_SETTING_FAILURE, err);

export const fetchNotificationRequest = (req) => action(NotificationActionTypes.FETCH_PUSH_REQUEST, req);
export const fetchNotificationSuccess = (res) => action(NotificationActionTypes.FETCH_PUSH_SUCCESS, res);
export const fetchNotificationFailure = (err) => action(NotificationActionTypes.FETCH_PUSH_FAILURE, err);

export const readNotificationRequest = (req) => action(NotificationActionTypes.READ_PUSH_REQUEST, req);
export const readNotificationSuccess = (res) => action(NotificationActionTypes.READ_PUSH_SUCCESS, res);
export const readNotificationFailure = (err) => action(NotificationActionTypes.READ_PUSH_FAILURE, err);

export const readAllNotificationRequest = (req) => action(NotificationActionTypes.READ_ALL_PUSH_REQUEST, req);
export const readAllNotificationSuccess = (res) => action(NotificationActionTypes.READ_ALL_PUSH_SUCCESS, res);
export const readAllNotificationFailure = (err) => action(NotificationActionTypes.READ_ALL_PUSH_FAILURE, err);