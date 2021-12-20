import { PrivacySettingActionTypes } from "./privacysetting.model";
require('dotenv').config();

export const initialState = {
    privacySetting: {},
    isLoading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PrivacySettingActionTypes.FETCH_PRIVACY_SETTING_REQUEST:
        case PrivacySettingActionTypes.UPDATE_PRIVACY_SETTING_REQUEST: {
            return Object.assign({}, state, {
                isLoading: true
            });
        }

        case PrivacySettingActionTypes.UPDATE_PRIVACY_SETTING_SUCCESS:
        case PrivacySettingActionTypes.FETCH_PRIVACY_SETTING_SUCCESS: {
            return Object.assign({}, state, {
                isLoading: false,
                privacySetting: action.payload.data,
            });
        }

        case PrivacySettingActionTypes.UPDATE_PRIVACY_SETTING_FAILURE:
        case PrivacySettingActionTypes.FETCH_PRIVACY_SETTING_FAILURE: {
            return Object.assign({}, state, {
                isLoading: false
            });
        }

        default: {
            return state;
        }
    }
};

export { reducer as PrivacySettingReducer };
