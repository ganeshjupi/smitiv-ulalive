
import HttpHelper from "../../helpers/httpHelper";
require('dotenv').config();

const SOCIAL_API_URL = process.env.REACT_APP_SOCIAL_API_URL;

class SocialAPI {
    //#region BookMark

    static GetBookMarks(req) {
        let url = `${SOCIAL_API_URL}/bookmark`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static CreateBookMark(req) {
        let url = `${SOCIAL_API_URL}/bookmark`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static DeleteBookMark(req) {
        let url = `${SOCIAL_API_URL}/bookmark/delete-by-list-id`;
        return HttpHelper.httpRequest(url, "DELETE", {}, req)
    }
    //#endregion

    //#region Category
    static GetCategories(req) {
        let url = `${SOCIAL_API_URL}/category`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    //#endregion

    //#region Event
    static GetEvents(req) {
        let url = `${SOCIAL_API_URL}/event` + req;
        return HttpHelper.httpRequest(url, "GET", {})
    }

    static ForceEndEvent(req) {
        let url = `${SOCIAL_API_URL}/event/force-end/` + req.id;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static GetEventsByTimeline(req) {
        let url = `${SOCIAL_API_URL}/event/list-by-time/` + req.livestreamId;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    //#endregion

    //#region livestream

    
    static GetTopRecommendHome(req) {
        let url = `${SOCIAL_API_URL}/livestream/top-recommend/home`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static GetTopRecommend(req) {
        let url = `${SOCIAL_API_URL}/livestream/top-recommend`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static GetLiveStreamList(req) {
        let url = `${SOCIAL_API_URL}/livestream` + req;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static getSearchedLiveStream(req) {
        let url = `${SOCIAL_API_URL}/livestream/home-search`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static GetFollowingLiveStream(req) {
        let url = `${SOCIAL_API_URL}/livestream/following`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static GetLiveStreamById(id) {
        let url = `${SOCIAL_API_URL}/livestream/` + id;
        return HttpHelper.httpRequest(url, "GET", {})
    }

    static GetWatchFollowingLiveStreamById(req) {
        let url = `${SOCIAL_API_URL}/livestream/watch/` + req.id;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static GetPushFollowingLiveStreamById(req) {
        let url = `${SOCIAL_API_URL}/livestream/push/` + req.id;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static GetLiveStreamByGuest(req) {
        let url = `${SOCIAL_API_URL}/livestream/watch/${req.id}/guest/` + req.guestId;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static CreateLiveStream(req) {
        let url = `${SOCIAL_API_URL}/livestream`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static CreateSubLiveStream(req) {
        let url = `${SOCIAL_API_URL}/livestream/sub`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static UpdateLiveStreamProduct(req) {
        let url = `${SOCIAL_API_URL}/livestream/${req.id}/change-current-product`;
        return HttpHelper.httpRequest(url, "PATCH", {}, req)
    }

    //#endregion   

    //#region Privacy Setting

    static UpdatePrivacySetting(req) {
        let url = `${SOCIAL_API_URL}/privacy-setting`;
        return HttpHelper.httpRequest(url, "PUT", {}, req)
    }

    static GetPrivacySettingByUser(req) {
        let url = `${SOCIAL_API_URL}/privacy-setting`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }
    //#endregion

    //#region reaction

    static GetReactionList() {
        let url = `${SOCIAL_API_URL}/reaction`;
        return HttpHelper.httpRequest(url, "GET", {})
    }

    static GetReactionById(req) {
        let url = `${SOCIAL_API_URL}/reaction` + req.id;
        return HttpHelper.httpRequest(url, "PUT", {}, req)
    }

    static UpdateReaction(req) {
        let url = `${SOCIAL_API_URL}/reaction` + req.id;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static DeleteReaction(req) {
        let url = `${SOCIAL_API_URL}/reaction` + req.id;
        return HttpHelper.httpRequest(url, "DELETE", {}, req)
    }
    //#endregion

    //#region sharing

    static GetSharingLink(req) {
        let url = `${SOCIAL_API_URL}//sharing/live/` + req.id;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static GetIOSConfig(req) {
        let url = `${SOCIAL_API_URL}/.well-known/apple-app-site-association`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }
    //#endregion

    //#region test

    static GetTestList(req) {
        let url = `${SOCIAL_API_URL}/test`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static GetTestById(req) {
        let url = `${SOCIAL_API_URL}/test` + req.id;
        return HttpHelper.httpRequest(url, "PUT", {}, req)
    }

    static UpdateTest(req) {
        let url = `${SOCIAL_API_URL}/test` + req.id;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static DeleteTest(req) {
        let url = `${SOCIAL_API_URL}/test` + req.id;
        return HttpHelper.httpRequest(url, "DELETE", {}, req)
    }

    //#endregion

    //#region wowza

    static GetWowzaList(req) {
        let url = `${SOCIAL_API_URL}/wowza`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static CreateWowza(req) {
        let url = `${SOCIAL_API_URL}/wowza`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static CreateWowzaAuthen(req) {
        let url = `${SOCIAL_API_URL}/wowza/authen`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static WowzaVerifyStream(req) {
        let url = `${SOCIAL_API_URL}/wowza/verify-stream`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static WowzaVerifyToken(req) {
        let url = `${SOCIAL_API_URL}/wowza/verify-token`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static WowzaCreateEvent(req) {
        let url = `${SOCIAL_API_URL}/wowza/event`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static GetWowzaById(req) {
        let url = `${SOCIAL_API_URL}/wowza` + req.id;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static UpdateWowza(req) {
        let url = `${SOCIAL_API_URL}/wowza` + req.id;
        return HttpHelper.httpRequest(url, "PUT", {}, req)
    }

    static DeleteWowza(req) {
        let url = `${SOCIAL_API_URL}/wowza` + req.id;
        return HttpHelper.httpRequest(url, "DELETE", {}, req)
    }
    //#endregion
}

export default SocialAPI;