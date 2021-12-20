
import HttpHelper from "../../../helpers/httpHelper";
require('dotenv').config();

const USER_API_URL = process.env.REACT_APP_USER_API_URL;

class DeliveryAddressAPI {
    static CreateDeliveryAddress(req) {
        let url = `${USER_API_URL}/delivery-address`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static GetDeliveryAddress(req) {
        let url = `${USER_API_URL}/delivery-address`;
        return HttpHelper.httpRequest(url, "GET", {})
    }

    static GetDeliveryAddressById(id) {
        let url = `${USER_API_URL}/delivery-address/${id}`;
        return HttpHelper.httpRequest(url, "GET", {})
    }

    static UpdateDeliveryAddressById(req) {
        let url = `${USER_API_URL}/delivery-address/${req.id}`;
        return HttpHelper.httpRequest(url, "PUT", {}, req)
    }

    static DeleteDeliveryAddressById(req) {
        let url = `${USER_API_URL}/delivery-address/${req.id}`;
        return HttpHelper.httpRequest(url, "DELETE", {}, req)
    }
}

export default DeliveryAddressAPI;