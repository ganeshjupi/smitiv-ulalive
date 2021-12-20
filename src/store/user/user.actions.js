import { action } from "typesafe-actions";
import { UserActionTypes } from "./user.model";

export const preSignUpPhoneRequest = (req) => action(UserActionTypes.PRESIGNUP_PHONE_REQUEST, req);
export const preSignUpPhoneSuccess = (res) => action(UserActionTypes.PRESIGNUP_PHONE_SUCCESS, res);
export const preSignUpPhoneFailure = (err) => action(UserActionTypes.PRESIGNUP_PHONE_FAILURE, err);

export const signUpPhoneRequest = (req) => action(UserActionTypes.SIGNUP_PHONE_REQUEST, req);
export const signUpPhoneSuccess = (res) => action(UserActionTypes.SIGNUP_PHONE_SUCCESS, res);
export const signUpPhoneFailure = (err) => action(UserActionTypes.SIGNUP_PHONE_FAILURE, err);

export const preSignUpEmailRequest = (req) => action(UserActionTypes.PRESIGNUP_EMAIL_REQUEST, req);
export const preSignUpEmailSuccess = (res) => action(UserActionTypes.PRESIGNUP_EMAIL_SUCCESS, res);
export const preSignUpEmailFailure = (err) => action(UserActionTypes.PRESIGNUP_EMAIL_FAILURE, err);

export const signUpEmailRequest = (req) => action(UserActionTypes.SIGNUP_EMAIL_REQUEST, req);
export const signUpEmailSuccess = (res) => action(UserActionTypes.SIGNUP_EMAIL_SUCCESS, res);
export const signUpEmailFailure = (err) => action(UserActionTypes.SIGNUP_EMAIL_FAILURE, err);

export const loginGoogleRequest = (req) => action(UserActionTypes.LOGIN_GOOGLE_REQUEST, req);
export const loginGoogleSuccess = (res) => action(UserActionTypes.LOGIN_GOOGLE_SUCCESS, res);
export const loginGoogleFailure = (err) => action(UserActionTypes.LOGIN_GOOGLE_FAILURE, err);

export const loginPasswordRequest = (req) => action(UserActionTypes.LOGIN_PASSWORD_REQUEST, req);
export const loginPasswordSuccess = (res) => action(UserActionTypes.LOGIN_PASSWORD_SUCCESS, res);
export const loginPasswordFailure = (err) => action(UserActionTypes.LOGIN_PASSWORD_FAILURE, err);

export const changePasswordRequest = (req) => action(UserActionTypes.CHANGE_PASSWORD_REQUEST, req);
export const changePasswordSuccess = (res) => action(UserActionTypes.CHANGE_PASSWORD_SUCCESS, res);
export const changePasswordFailure = (err) => action(UserActionTypes.CHANGE_PASSWORD_FAILURE, err);

export const fetchUserProfileRequest = (req) => action(UserActionTypes.FETCH_USER_PROFILE_REQUEST, req);
export const fetchUserProfileSuccess = (res) => action(UserActionTypes.FETCH_USER_PROFILE_SUCCESS, res);
export const fetchUserProfileFailure = (err) => action(UserActionTypes.FETCH_USER_PROFILE_FAILURE, err);

export const updateUserProfileRequest = (req, history) => action(UserActionTypes.UPDATE_USER_PROFILE_REQUEST, { req: req, history: history });
export const updateUserProfileSuccess = (res) => action(UserActionTypes.UPDATE_USER_PROFILE_SUCCESS, res);
export const updateUserProfileFailure = (err) => action(UserActionTypes.UPDATE_USER_PROFILE_FAILURE, err);

export const sendOTPRequest = (req) => action(UserActionTypes.SEND_OTP_REQUEST, req);
export const sendOTPSuccess = (res) => action(UserActionTypes.SEND_OTP_SUCCESS, res);
export const sendOTPFailure = (err) => action(UserActionTypes.SEND_OTP_FAILURE, err);

export const logoutFromApplication = () => action(UserActionTypes.USER_LOGOUT);
export const resetUserState = () => action(UserActionTypes.RESET_USER);

export const searchUserRequest = (req) => action(UserActionTypes.SEARCH_USER_REQUEST, req);
export const searchUserSuccess = (res) => action(UserActionTypes.SEARCH_USER_SUCCESS, res);
export const searchUserFailure = (err) => action(UserActionTypes.SEARCH_USER_FAILURE, err);

export const followUserRequest = (req) => action(UserActionTypes.FOLLOW_USER_REQUEST, req);
export const followUserSuccess = (res) => action(UserActionTypes.FOLLOW_USER_SUCCESS, res);
export const followUserFailure = (err) => action(UserActionTypes.FOLLOWs_USER_FAILURE, err);

export const unfollowUserRequest = (req) => action(UserActionTypes.UNFOLLOW_USER_REQUEST, req);
export const unfollowUserSuccess = (res) => action(UserActionTypes.UNFOLLOW_USER_SUCCESS, res);
export const unfollowUserFailure = (err) => action(UserActionTypes.UNFOLLOWs_USER_FAILURE, err);

export const fetchFollowingUserRequest = (req) => action(UserActionTypes.FETCH_FOLLOWING_USER_REQUEST, req);
export const fetchFollowingUserSuccess = (res) => action(UserActionTypes.FETCH_FOLLOWING_USER_SUCCESS, res);
export const fetchFollowingUserFailure = (err) => action(UserActionTypes.FETCH_FOLLOWING_USER_FAILURE, err);

export const fetchSubscriberListRequest = (req) => action(UserActionTypes.FETCH_SUBSCRIBER_LIST_REQUEST, req);
export const fetchSubscriberListSuccess = (res) => action(UserActionTypes.FETCH_SUBSCRIBER_LIST_SUCCESS, res);
export const fetchSubscriberListFailure = (err) => action(UserActionTypes.FETCH_SUBSCRIBER_LIST_FAILURE, err);

export const fetchOtherUserProfileRequest = (req) => action(UserActionTypes.FETCH_OTHER_PROFILE_REQUEST, req);
export const fetchOtherUserProfileSuccess = (res) => action(UserActionTypes.FETCH_OTHER_PROFILE_SUCCESS, res);
export const fetchOtherUserProfileFailure = (err) => action(UserActionTypes.FETCH_OTHER_PROFILE_FAILURE, err);

export const addReferralCodeRequest = (req) => action(UserActionTypes.ADD_REFER_CODE_REQUEST, req);
export const addReferralCodeSuccess = (res) => action(UserActionTypes.ADD_REFER_CODE_SUCCESS, res);
export const addReferralCodeFailure = (err) => action(UserActionTypes.ADD_REFER_CODE_FAILURE, err);

export const forgotPasswordRequest = (req) => action(UserActionTypes.FORGOT_PASSWORD_REQUEST, req);
export const forgotPasswordSuccess = (res) => action(UserActionTypes.FORGOT_PASSWORD_SUCCESS, res);
export const forgotPasswordFailure = (err) => action(UserActionTypes.FORGOT_PASSWORD_FAILURE, err);
