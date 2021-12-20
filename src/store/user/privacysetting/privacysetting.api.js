
import HttpHelper from "../../../helpers/httpHelper";
require('dotenv').config();

const USER_API_URL = process.env.REACT_APP_USER_API_URL;

class PrivacySettingAPI {

    //#region Privacy Setting

    static UpdatePrivacyByUser(req) {
        let url = `${USER_API_URL}/privacy-setting`;
        return HttpHelper.httpRequest(url, "PUT", {}, req)
    }

    static GetPrivacyByUser(req) {
        let url = `${USER_API_URL}/privacy-setting`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static CreatePrivacySetting(req) {
        let url = `${USER_API_URL}/privacy-setting`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static ListPrivacySetting(req) {
        let url = `${USER_API_URL}/privacy-setting`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }
    //#endregion
}

export default PrivacySettingAPI;