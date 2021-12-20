import '../../assets/css/toastr.min.css';
import { UserActionTypes } from "./user.model";
import moment from "moment";
require('dotenv').config();

export const initialState = {
    PreSignUpPhoneResponse: {
        isAllowSignup: false,
        isSentOtp: false,
    },
    SignUpPhoneResponse: {
        accessToken: ""
    },
    SendOTPResponse: {
        isSentOtp: false
    },
    PreSignUpEmailResponse: {
        isAllowSignup: false,
        isSentOtp: false,
    },
    SignUpEmailResponse: {
        accessToken: ""
    },
    loginPasswordResponse: {
        accessToken: ""
    },
    users: [],
    followingUsers: [],
    subscriberList: [],
    userProfile: {
        "fullName": "",
        "userName": "",
        "role": "",
        "avatar": "",
        "descriptions": "",
        "refCode": "",
        "phone": "",
        "email": "",
        "countFollower": 0,
        "countFollowing": 0,
        "countSubscriber": 0,
        "website": "",
        "_id": "",
        "allowUseRefCode": true,
        "roleTimeExpired": moment().format(),
        "refCodeTimeExpired": moment().format(),
        "previousRole": "",
        "dateCreated": moment().format(),
        "dateUpdated": moment().format(),
        "account": {
            "type": "",
            "_id": "",
            "userName": ""
        },
        "accessToken": "",
        "country": "",
        "isReadNotificationPage": false,
        "isExitPassword": true
    },
    otherUserProfile: {},
    isLoading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.PRESIGNUP_PHONE_REQUEST:
        case UserActionTypes.ADD_REFER_CODE_REQUEST:
        case UserActionTypes.FETCH_OTHER_PROFILE_REQUEST:
        case UserActionTypes.SIGNUP_PHONE_REQUEST:
        case UserActionTypes.PRESIGNUP_EMAIL_REQUEST:
        case UserActionTypes.SEND_OTP_REQUEST:
        case UserActionTypes.SIGNUP_EMAIL_REQUEST:
        case UserActionTypes.LOGIN_GOOGLE_REQUEST:
        case UserActionTypes.LOGIN_PASSWORD_REQUEST:
        case UserActionTypes.FETCH_USER_PROFILE_REQUEST:
        case UserActionTypes.UPDATE_USER_PROFILE_REQUEST:
        case UserActionTypes.FOLLOW_USER_REQUEST:
        case UserActionTypes.UNFOLLOW_USER_REQUEST:
        case UserActionTypes.FETCH_FOLLOWING_USER_REQUEST:
        case UserActionTypes.FETCH_SUBSCRIBER_LIST_REQUEST:
        case UserActionTypes.FORGOT_PASSWORD_REQUEST:
        case UserActionTypes.SEARCH_USER_REQUEST:
            {
                return Object.assign({}, state, {
                    isLoading: true
                });
            }

        case UserActionTypes.PRESIGNUP_PHONE_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                    PreSignUpPhoneResponse: action.payload.data,
                });
            }

        case UserActionTypes.SIGNUP_PHONE_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                    SignUpPhoneResponse: action.payload.data,
                });
            }

        case UserActionTypes.PRESIGNUP_EMAIL_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                    PreSignUpEmailResponse: action.payload.data,
                });
            }

        case UserActionTypes.SIGNUP_EMAIL_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                    SignUpEmailResponse: action.payload.data,
                });
            }

        case UserActionTypes.LOGIN_GOOGLE_SUCCESS:
        case UserActionTypes.LOGIN_PASSWORD_SUCCESS:
            {
                sessionStorage.setItem(process.env.REACT_APP_AUTH_TOKEN, action.payload.data.accessToken);
                return Object.assign({}, state, {
                    isLoading: false,
                    loginPasswordResponse: action.payload.data,
                });
            }

        case UserActionTypes.UPDATE_USER_PROFILE_SUCCESS:
            {
                let existing = state.userProfile;
                let resp = Object.keys(action.payload.data).forEach((x) => {
                    existing[x] = action.payload.data[x];
                })
                return Object.assign({}, state, {
                    isLoading: false,
                    userProfile: existing
                });
            }

        case UserActionTypes.FETCH_USER_PROFILE_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                    userProfile: action.payload.data,
                });
            }

        case UserActionTypes.SEND_OTP_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                    SendOTPResponse: action.payload.data,
                });
            }

        case UserActionTypes.SEARCH_USER_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                    users: action.payload.data.data,
                });
            }
        case UserActionTypes.FETCH_SUBSCRIBER_LIST_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                    subscriberList: action.payload.data.data,
                });
            }

        case UserActionTypes.FETCH_OTHER_PROFILE_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                    otherUserProfile: action.payload.data,
                });
            }

        case UserActionTypes.FETCH_FOLLOWING_USER_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                    followingUsers: action.payload.data.data,
                });
            }

        case UserActionTypes.ADD_REFER_CODE_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                });
            }


        case UserActionTypes.RESET_USER:
            {
                return Object.assign({}, state, {
                    isLoading: false,
                    PreSignUpPhoneResponse: {
                        isAllowSignup: false,
                        isSentOtp: false,
                    },
                    PreSignUpEmailResponse: {
                        isAllowSignup: false,
                        isSentOtp: false,
                    },
                    SignUpPhoneResponse: {
                        accessToken: ""
                    },
                    SignUpEmailResponse: {
                        accessToken: ""
                    },
                    loginPasswordResponse: {
                        accessToken: ""
                    },
                    SendOTPResponse: {
                        isSentOtp: false
                    }
                });
            }

        case UserActionTypes.FORGOT_PASSWORD_FAILURE:
        case UserActionTypes.PRESIGNUP_PHONE_FAILURE:
        case UserActionTypes.ADD_REFER_CODE_FAILURE:
        case UserActionTypes.FETCH_OTHER_PROFILE_FAILURE:
        case UserActionTypes.SIGNUP_PHONE_FAILURE:
        case UserActionTypes.PRESIGNUP_EMAIL_FAILURE:
        case UserActionTypes.SEND_OTP_FAILURE:
        case UserActionTypes.SIGNUP_EMAIL_FAILURE:
        case UserActionTypes.LOGIN_GOOGLE_FAILURE:
        case UserActionTypes.LOGIN_PASSWORD_FAILURE:
        case UserActionTypes.FETCH_USER_PROFILE_FAILURE:
        case UserActionTypes.UPDATE_USER_PROFILE_FAILURE:
        case UserActionTypes.FOLLOW_USER_FAILURE:
        case UserActionTypes.UNFOLLOW_USER_FAILURE:
        case UserActionTypes.SEARCH_USER_FAILURE:
        case UserActionTypes.FETCH_FOLLOWING_USER_FAILURE:
        case UserActionTypes.FETCH_SUBSCRIBER_LIST_FAILURE:
            {
                return Object.assign({}, state, {
                    isLoading: false
                });
            }

        default:
            {
                return state;
            }
    }
};

export { reducer as UserReducer };