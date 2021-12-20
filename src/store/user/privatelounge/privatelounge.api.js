
import HttpHelper from "../../../helpers/httpHelper";
require('dotenv').config();

const USER_API_URL = process.env.REACT_APP_USER_API_URL;

class PrivateLoungeAPI {
    static UpdatePrivateLoungeByUser(req) {
        let url = `${USER_API_URL}/private-lounge`;
        return HttpHelper.httpRequest(url, "PUT", {}, req)
    }

    static GetPrivateLoungeByUser(req) {
        let url = `${USER_API_URL}/private-lounge`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static GetPrivateLoungeDetailByUser(req) {
        let url = `${USER_API_URL}/private-lounge/${req.userId}/get-by-user`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }
}

export default PrivateLoungeAPI;