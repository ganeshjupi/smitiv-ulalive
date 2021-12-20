import '../../assets/css/toastr.min.css';
import { FileActionTypes } from "./file.model";
import moment from "moment";
require('dotenv').config();

export const initialState = {
    uploadLivesResponse: {},
    uploadProductResponse: {},
    uploadAvatarResponse: {},
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FileActionTypes.UPLOAD_AVATAR_REQUEST:
        case FileActionTypes.UPLOAD_LIVES_REQUEST:
        case FileActionTypes.UPLOAD_PRODUCTS_REQUEST:
        case FileActionTypes.GET_CONFIGURATION_REQUEST:
        case FileActionTypes.UPLOAD_PROFILEIMAGE_REQUEST:
        case FileActionTypes.GET_ATTACHMENTS_REQUEST:
            {
                return Object.assign({}, state, {
                    isLoading: true
                });
            }

        case FileActionTypes.UPLOAD_AVATAR_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: true,
                    uploadAvatarResponse: action.payload.body.data
                });
            }
        case FileActionTypes.UPLOAD_LIVES_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: true,
                    uploadLivesResponse: action.payload.body.data
                });
            }
        case FileActionTypes.UPLOAD_PRODUCTS_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: true,
                    uploadProductResponse: action.payload.body.data
                });
            }
        case FileActionTypes.GET_CONFIGURATION_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: true
                });
            }
        case FileActionTypes.UPLOAD_PROFILEIMAGE_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: true
                });
            }
        case FileActionTypes.GET_ATTACHMENTS_SUCCESS:
            {
                return Object.assign({}, state, {
                    isLoading: true
                });
            }

        case FileActionTypes.UPLOAD_AVATAR_FAILURE:
        case FileActionTypes.UPLOAD_LIVES_FAILURE:
        case FileActionTypes.UPLOAD_PRODUCTS_FAILURE:
        case FileActionTypes.GET_CONFIGURATION_FAILURE:
        case FileActionTypes.UPLOAD_PROFILEIMAGE_FAILURE:
        case FileActionTypes.GET_ATTACHMENTS_FAILURE:
            {
                return Object.assign({}, state, {
                    isLoading: false
                });
            }

        default:
            {
                return state;
            }
    }
}

export { reducer as FileReducer };