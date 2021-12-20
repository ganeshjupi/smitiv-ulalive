import { action } from "typesafe-actions";
import { PrivacySettingActionTypes } from "./privacysetting.model";

export const getPrivacySettingRequest = (req) => action(PrivacySettingActionTypes.FETCH_PRIVACY_SETTING_REQUEST, req);
export const getPrivacySettingSuccess = (res) => action(PrivacySettingActionTypes.FETCH_PRIVACY_SETTING_SUCCESS, res);
export const getPrivacySettingFailure = (err) => action(PrivacySettingActionTypes.FETCH_PRIVACY_SETTING_FAILURE, err);

export const updatePrivacySettingRequest = (req) => action(PrivacySettingActionTypes.UPDATE_PRIVACY_SETTING_REQUEST, req);
export const updatePrivacySettingSuccess = (res) => action(PrivacySettingActionTypes.UPDATE_PRIVACY_SETTING_SUCCESS, res);
export const updatePrivacySettingFailure = (err) => action(PrivacySettingActionTypes.UPDATE_PRIVACY_SETTING_FAILURE, err);