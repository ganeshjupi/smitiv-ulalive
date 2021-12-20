
import HttpHelper from "../../helpers/httpHelper";
require('dotenv').config();

const USER_API_URL = process.env.REACT_APP_USER_API_URL;

class UserAPI {

    //#region User

    static SignInGoogle(req) {
        let url = `${USER_API_URL}/account/login/google`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static SignInApple(req) {
        let url = `${USER_API_URL}/account/login/apple`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static PreSignUpPhone(req) {
        let url = `${USER_API_URL}/account/pre-signup/phone`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static SignUpPhone(req) {
        let url = `${USER_API_URL}/account/signup/phone`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static SendOTP(req) {
        let url = `${USER_API_URL}/account/otp/send`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static VerifyOTP(req) {
        let url = `${USER_API_URL}/account/otp/verify`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static SignInPassword(req) {
        let url = `${USER_API_URL}/account/login/password`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static SignInPhone(req) {
        let url = `${USER_API_URL}/account/login/sms`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static ForgotPasword(req) {
        let url = `${USER_API_URL}/account/forget-password`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static UserLogout(req) {
        let url = `${USER_API_URL}/account/logout`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static PreSignUpReferral(req) {
        let url = `${USER_API_URL}/account/pre-signup/referral-code`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static PreSignUpEmail(req) {
        let url = `${USER_API_URL}/account/pre-signup/email`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static SignUp(req) {
        let url = `${USER_API_URL}/account/signup`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static ChangePassword(req) {
        let url = `${USER_API_URL}/account/change-password`;
        return HttpHelper.httpRequest(url, "PATCH", {}, req)
    }

    //#endregion

    //#region FollowUser

    static GetFollowersList(req) {
        let url = `${USER_API_URL}/follow-user/follower`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static GetFollowingList(req) {
        let url = `${USER_API_URL}/follow-user/following`;
        return HttpHelper.httpRequest(url, "GET", {})
    }

    static GetGuestList(id) {
        let url = `${USER_API_URL}/follow-user/guest`;
        return HttpHelper.httpRequest(url, "GET", {})
    }

    static FollowUser(req) {
        let url = `${USER_API_URL}/follow-user/follow`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static UnFollowUser(req) {
        let url = `${USER_API_URL}/follow-user/unfollow`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    //#endregion

    //#region user

    static SearchUser(req) {
        let url = `${USER_API_URL}/users`;
        return HttpHelper.httpRequest(url, "GET", {})
    }

    static GetOtherProfileById(id) {
        let url = `${USER_API_URL}/users/other-profile/${id}`;
        return HttpHelper.httpRequest(url, "GET", {})
    }

    static GetUserProfile(req) {
        let url = `${USER_API_URL}/users/profile`;
        return HttpHelper.httpRequest(url, "GET", {})
    }

    static UpdateUserProfile(req) {
        let url = `${USER_API_URL}/users/profile`;
        return HttpHelper.httpRequest(url, "PUT", {}, req)
    }

    static AddReferralCode(req) {
        let url = `${USER_API_URL}/users/referral-code`;
        return HttpHelper.httpRequest(url, "POST", {}, {
            refCode: req
        })
    }

    static MarkARead(req) {
        let url = `${USER_API_URL}/users/read-notification-page`;
        return HttpHelper.httpRequest(url, "PATCH", {}, req)
    }

    //#endregion

    //#region Subscribe

    static UnsubscribeUser(req) {
        let url = `${USER_API_URL}/subscribe-user/unsubscribe`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static ListSubscriber(req) {
        let url = `${USER_API_URL}/subscribe-user/list-subscribers`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static ConfirmSubscribeUpgrade(req) {
        let url = `${USER_API_URL}/subscribe-user/confirm-upgrade`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }
    //#endregion

}

export default UserAPI;