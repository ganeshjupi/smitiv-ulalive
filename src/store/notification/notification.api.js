
import HttpHelper from "../../helpers/httpHelper";
require('dotenv').config();

const NOTIFICATION_API_URL = process.env.REACT_APP_NOTIFICATION_API_URL;

class NotificationAPI {
    static getPushNotifications() {
        let url = `${NOTIFICATION_API_URL}/push`;
        return HttpHelper.httpRequest(url, "GET", {})
    }

    static updatePushNotification(req) {
        let url = `${NOTIFICATION_API_URL}/push/${req.id}/read`;
        return HttpHelper.httpRequest(url, "PATCH", {}, req)
    }

    static updatePushNotifications(req) {
        let url = `${NOTIFICATION_API_URL}/push/read-all`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    //#region Setting

    static GetAllSettings(req) {
        let url = `${NOTIFICATION_API_URL}/setting`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static CreateSetting(req) {
        let url = `${NOTIFICATION_API_URL}/setting`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static UpdateSetting(req) {
        let url = `${NOTIFICATION_API_URL}/setting` + req.id;
        return HttpHelper.httpRequest(url, "PUT", {}, req)
    }

    static GetSettingById(req) {
        let url = `${NOTIFICATION_API_URL}/setting` + req.id;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static DeleteSetting(req) {
        let url = `${NOTIFICATION_API_URL}/setting` + req.id;
        return HttpHelper.httpRequest(url, "DELETE", {}, req)
    }
    //#endregion
}

export default NotificationAPI;