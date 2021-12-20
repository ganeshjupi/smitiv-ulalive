import ProfilePic from "../../assets/images/profilepic.jpg";
require('dotenv').config();

const IMAGE_PATH = process.env.REACT_APP_IMAGE_PATH;

export function getAccessToken(state) {
    return state.UserReducer.loginPasswordResponse.accessToken;
}

export function getUserProfile(state) {
    return state.UserReducer.userProfile;
}

export function getOtherUserProfile(state) {
    return state.UserReducer.otherUserProfile;
}

export function getPreSignupPhone(state) {
    return state.UserReducer.PreSignUpPhoneResponse;
}

export function getSignupPhoneAccessToken(state) {
    return state.UserReducer.SignUpPhoneResponse.accessToken;
}

export function getPreSignupEmail(state) {
    return state.UserReducer.PreSignUpEmailResponse;
}

export function getSignupEmailAccessToken(state) {
    return state.UserReducer.SignUpEmailResponse.accessToken;
}

export function getSendOTPResponse(state) {
    return state.UserReducer.SendOTPResponse.isSentOtp;
}

export function getSearchedUsers(state) {
    return state.UserReducer.users
}

export function getFollowingUsers(state) {
    return state.UserReducer.followingUsers
}

export function getSubscriberList(state) {
    return state.UserReducer.subscriberList
}

export function getProfileImage(state) {
    if (state.UserReducer.userProfile.avatar && state.UserReducer.userProfile.avatar.attachments && state.UserReducer.userProfile.avatar.attachments.key) {
        return IMAGE_PATH + state.UserReducer.userProfile.avatar.attachments.key
    } else {
        return ProfilePic;
    }
}

export function getImage(attachment) {
    if (attachment && attachment.key) {
        return  `https://${attachment.bucket}.s3.ap-southeast-1.amazonaws.com/${attachment.key}`
    } else {
        return ProfilePic;
    }
}