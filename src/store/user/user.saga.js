import { call, put, takeEvery } from 'redux-saga/effects';
import * as UserActions from './user.actions';
import UserAPI from './user.api';
import { UserActionTypes } from './user.model';
import toastr from "toastr";

export function* handlePreSignUpPhone(action) {
    try {
        const response = yield call(UserAPI.PreSignUpPhone, action.payload);
        yield put(UserActions.preSignUpPhoneSuccess(response));
        toastr.success("OTP Sent Successfully", "OTP Verfication");
    } catch (e) {
        yield put(UserActions.preSignUpPhoneFailure(e));
    }
}

export function* handleSignUpPhone(action) {
    try {
        const response = yield call(UserAPI.SignUpPhone, action.payload);
        yield put(UserActions.signUpPhoneSuccess(response));
        toastr.success("User Registered Succesfully", "Registration");
    } catch (e) {
        yield put(UserActions.signUpPhoneFailure(e));
    }
}

export function* handlePreSignUpEmail(action) {
    try {
        const response = yield call(UserAPI.PreSignUpEmail, action.payload);
        yield put(UserActions.preSignUpEmailSuccess(response));
        toastr.success("OTP Sent Successfully", "OTP Verfication");
    } catch (e) {
        yield put(UserActions.preSignUpEmailFailure(e));
    }
}

export function* handleSignUpEmail(action) {
    try {
        const response = yield call(UserAPI.SignUp, action.payload);
        yield put(UserActions.signUpEmailSuccess(response));
        toastr.success("User Registered Succesfully", "Registration");
    } catch (e) {
        yield put(UserActions.signUpEmailFailure(e));
    }
}

export function* handleGoogleLogin(action) {
    try {
        const response = yield call(UserAPI.SignInGoogle, action.payload);
        yield put(UserActions.loginGoogleSuccess(response));
        yield put(UserActions.fetchUserProfileRequest({}))
    } catch (e) {
        yield put(UserActions.loginGoogleFailure(e));
    }
}

export function* handleloginPassword(action) {
    try {
        const response = yield call(UserAPI.SignInPassword, action.payload);
        yield put(UserActions.loginPasswordSuccess(response));
        yield put(UserActions.fetchUserProfileRequest({}))
    } catch (e) {
        yield put(UserActions.loginPasswordFailure(e));
    }
}

export function* handleFetchUserProfile(action) {
    try {
        const response = yield call(UserAPI.GetUserProfile, action.payload);
        yield put(UserActions.fetchUserProfileSuccess(response));
    } catch (e) {
        yield put(UserActions.fetchUserProfileFailure(e));
    }
}

export function* handleUpdateUserProfile(action) {
    try {
        const response = yield call(UserAPI.UpdateUserProfile, action.payload.req);
        yield put(UserActions.updateUserProfileSuccess(response));
        action.payload.history.push('profile');
        toastr.success("Profile Updated Succesfully", "Profile");
        yield put(UserActions.fetchUserProfileRequest())
    } catch (e) {
        yield put(UserActions.updateUserProfileFailure(e));
    }
}

export function* handleSendOTP(action) {
    try {
        const response = yield call(UserAPI.SendOTP, action.payload);
        yield put(UserActions.sendOTPSuccess(response));
        toastr.success("OTP Sent Succesfully", "OTP Verfication");
    } catch (e) {
        yield put(UserActions.sendOTPFailure(e));
    }
}

export function* handleSearchUser(action) {
    try {
        const response = yield call(UserAPI.SearchUser, action.payload);
        yield put(UserActions.searchUserSuccess(response));
    } catch (e) {
        yield put(UserActions.searchUserFailure(e));
    }
}

export function* handleFollowUser(action) {
    try {
        const response = yield call(UserAPI.FollowUser, action.payload);
        yield put(UserActions.followUserSuccess(response));
        toastr.success("User Followed Successfully", "Follow User");
        yield put(UserActions.searchUserRequest());
        yield put(UserActions.fetchUserProfileRequest());
    } catch (e) {
        yield put(UserActions.followUserFailure(e));
    }
}

export function* handleUnFollowUser(action) {
    try {
        const response = yield call(UserAPI.UnFollowUser, action.payload);
        yield put(UserActions.unfollowUserSuccess(response));
        yield put(UserActions.fetchUserProfileRequest());
        yield put(UserActions.searchUserRequest());
    } catch (e) {
        yield put(UserActions.unfollowUserFailure(e));
    }
}

export function* handlefollowinguser(action) {
    try {
        const response = yield call(UserAPI.GetFollowersList, action.payload);
        yield put(UserActions.fetchFollowingUserSuccess(response));
    } catch (e) {
        yield put(UserActions.fetchFollowingUserFailure(e));
    }
}

export function* handlesubscriberlist(action) {
    try {
        const response = yield call(UserAPI.ListSubscriber, action.payload);
        yield put(UserActions.fetchSubscriberListSuccess(response));
    } catch (e) {
        yield put(UserActions.fetchSubscriberListFailure(e));
    }
}

export function* handleChangePassword(action) {
    try {
        const response = yield call(UserAPI.ChangePassword, action.payload);        
        yield put(UserActions.changePasswordSuccess(response));
        toastr.success("Password Changed Successfully", "Change Password");
    } catch (e) {
        toastr.error("Unable to Change Password. Please try again", "Change Password");
        yield put(UserActions.changePasswordFailure(e));
    }
}

export function* handleForgotPassword(action) {
    try {
        const response = yield call(UserAPI.ForgotPasword, action.payload);
        yield put(UserActions.forgotPasswordSuccess(response));
        document.location.href = process.env.PUBLIC_URL + "/log_in";
        toastr.success("Password Changed Successfully", "Change Password");
    } catch (e) {
        toastr.error("Unable to Change Password. Please try again", "Change Password");
        yield put(UserActions.forgotPasswordFailure(e));
    }
}

export function* handleFetchOtherProfile(action) {
    try {
        const response = yield call(UserAPI.GetOtherProfileById, action.payload);
        response.data.id = action.payload;
        yield put(UserActions.fetchOtherUserProfileSuccess(response));
    } catch (e) {
        yield put(UserActions.fetchOtherUserProfileFailure(e));
    }
}

export function* handleAddRefer(action) {
    try {
        const response = yield call(UserAPI.AddReferralCode, action.payload);
        yield put(UserActions.addReferralCodeSuccess(response));
        toastr.success("Account Updated to PRO Successfully", "Referral");
    } catch (e) {
        yield put(UserActions.addReferralCodeFailure(e));
    }
}

export function* UserSaga() {
    yield takeEvery(UserActionTypes.PRESIGNUP_PHONE_REQUEST, handlePreSignUpPhone);
    yield takeEvery(UserActionTypes.SIGNUP_PHONE_REQUEST, handleSignUpPhone);
    yield takeEvery(UserActionTypes.PRESIGNUP_EMAIL_REQUEST, handlePreSignUpEmail);
    yield takeEvery(UserActionTypes.SIGNUP_EMAIL_REQUEST, handleSignUpEmail);
    yield takeEvery(UserActionTypes.LOGIN_GOOGLE_REQUEST, handleGoogleLogin);
    yield takeEvery(UserActionTypes.LOGIN_PASSWORD_REQUEST, handleloginPassword);
    yield takeEvery(UserActionTypes.CHANGE_PASSWORD_REQUEST, handleChangePassword);
    yield takeEvery(UserActionTypes.FORGOT_PASSWORD_REQUEST, handleForgotPassword);
    yield takeEvery(UserActionTypes.FETCH_USER_PROFILE_REQUEST, handleFetchUserProfile);
    yield takeEvery(UserActionTypes.UPDATE_USER_PROFILE_REQUEST, handleUpdateUserProfile);
    yield takeEvery(UserActionTypes.SEND_OTP_REQUEST, handleSendOTP);
    yield takeEvery(UserActionTypes.SEARCH_USER_REQUEST, handleSearchUser);
    yield takeEvery(UserActionTypes.FOLLOW_USER_REQUEST, handleFollowUser);
    yield takeEvery(UserActionTypes.UNFOLLOW_USER_REQUEST, handleUnFollowUser);
    yield takeEvery(UserActionTypes.FETCH_FOLLOWING_USER_REQUEST, handlefollowinguser);
    yield takeEvery(UserActionTypes.FETCH_SUBSCRIBER_LIST_REQUEST, handlesubscriberlist);
    yield takeEvery(UserActionTypes.FETCH_OTHER_PROFILE_REQUEST, handleFetchOtherProfile);
    yield takeEvery(UserActionTypes.ADD_REFER_CODE_REQUEST, handleAddRefer);
}