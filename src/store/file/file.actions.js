import { action } from "typesafe-actions";
import { FileActionTypes } from "./file.model";

export const uploadAvatarRequest = (req) => action(FileActionTypes.UPLOAD_AVATAR_REQUEST, req);
export const uploadAvatarSuccess = (res) => action(FileActionTypes.UPLOAD_AVATAR_SUCCESS, res);
export const uploadAvatarFailure = (err) => action(FileActionTypes.UPLOAD_AVATAR_FAILURE, err);

export const uploadLivesRequest = (req) => action(FileActionTypes.UPLOAD_LIVES_REQUEST, req);
export const uploadLivesSuccess = (res) => action(FileActionTypes.UPLOAD_LIVES_SUCCESS, res);
export const uploadLivesFailure = (err) => action(FileActionTypes.UPLOAD_LIVES_FAILURE, err);

export const uploadProductsRequest = (req) => action(FileActionTypes.UPLOAD_PRODUCTS_REQUEST, req);
export const uploadProductsSuccess = (res) => action(FileActionTypes.UPLOAD_PRODUCTS_SUCCESS, res);
export const uploadProductsFailure = (err) => action(FileActionTypes.UPLOAD_PRODUCTS_FAILURE, err);

export const getConfigurationRequest = (req) => action(FileActionTypes.GET_CONFIGURATION_REQUEST, req);
export const getConfigurationSuccess = (res) => action(FileActionTypes.GET_CONFIGURATION_SUCCESS, res);
export const getConfigurationFailure = (err) => action(FileActionTypes.GET_CONFIGURATION_FAILURE, err);

export const uploadProfileImageRequest = (req) => action(FileActionTypes.UPLOAD_PROFILEIMAGE_REQUEST, req);
export const uploadProfileImageSuccess = (res) => action(FileActionTypes.UPLOAD_PROFILEIMAGE_SUCCESS, res);
export const uploadProfileImageFailure = (err) => action(FileActionTypes.UPLOAD_PROFILEIMAGE_FAILURE, err);

export const getAttachmentsRequest = (req) => action(FileActionTypes.GET_ATTACHMENTS_REQUEST, req);
export const getAttachmentsSuccess = (res) => action(FileActionTypes.GET_ATTACHMENTS_SUCCESS, res);
export const getAttachmentsFailure = (err) => action(FileActionTypes.GET_ATTACHMENTS_FAILURE, err);

