import axios from 'axios';
import * as Toastr from 'toastr';
import '../assets/css/toastr.min.css';
import { clearToken, getHeaderDetail } from './utility';

export default class HttpHelper {
    static httpRequest = async (
        url,
        methodType,
        headers,
        body
    ) => {
        headers = getHeaderDetail(headers);

        let config = {
            method: methodType,
            url: url,
            headers: headers,
            data: body,
            raxConfig: {
                retry: 3,
                noResponseRetries: 2,
                retryDelay: 100,
                httpMethodsToRetry: ['GET', 'HEAD', 'OPTIONS', 'DELETE', 'PUT'],
                statusCodesToRetry: [[100, 199], [429, 429], [500, 599]]
            }
        };

        return await axios(config)
            .then(function (response) {
                return HttpHelper.successHandler(response);
            })
            .catch(function (error) {
                HttpHelper.errorHandler(error);
            });
    };

    static successHandler = (response) => {
        if (response.status === 200 || response.status === 201) {
            return response.data;
        }
        else {
            Toastr.error('Something Went Wrong');
        }
    };

    static errorHandler = (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 400:
                    Toastr.error(error.response.data.message, "Error Information");
                    break;
                case 401:
                    Toastr.error('Session Expired, Please login again', 'Authorization');
                    clearToken();
                    document.location.href = process.env.PUBLIC_URL;
                    break;
                case 404:
                    Toastr.error('Requested resource does not exist', 'Not Found');
                    break;
                case 409:
                    Toastr.error('Version control conflit', 'Conflict');
                    break;
                case 500:
                    Toastr.error('Internal server error', 'Error');
                    break;
                default:
                    Toastr.error('Problem with response', 'Error Occured');
                    break;
            }
        }
        else if (error.request) {
            Toastr.error('Problem with request');
        }
        else {
            Toastr.error(error);
        }

        throw error;
    };
}
