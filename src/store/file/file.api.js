import HttpHelper from "../../helpers/httpHelper";
import { getToken } from "../../helpers/utility";
const superagent = require('superagent');
require('dotenv').config();

const FILE_API_URL = process.env.REACT_APP_FILE_API_URL;

class FileAPI {
    static UploadAvatars(req) {

        let url = `${FILE_API_URL}/attachment/avatar`;
        return superagent.post(url)
            .set('Authorization', "Bearer " + getToken())
            .attach('avatars', req);
    }

    static UploadLives(req) {
        let url = `${FILE_API_URL}/attachment/lives`;
        return superagent.post(url)
            .set('Authorization', "Bearer " + getToken())
            .attach('lives', req);
    }

    static UploadProducts(req) {
        let url = `${FILE_API_URL}/attachment/products`;
        return superagent.post(url)
            .set('Authorization', "Bearer " + getToken())
            .attach('products', req);
    }

    static GetConfiguration(req) {
        let url = `${FILE_API_URL}/attachment/configs`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }
}

export default FileAPI;