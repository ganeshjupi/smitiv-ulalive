import { call, put, takeEvery } from 'redux-saga/effects';
import * as FileActions from './file.actions';
import FileAPI from './file.api';
import { FileActionTypes } from './file.model';
import toastr from "toastr";

export function* handleUploadAvatar(action) {
    try {
        const response = yield call(FileAPI.UploadAvatars, action.payload);
        yield put(FileActions.uploadAvatarSuccess(response));
        toastr.success("Avatar Uploaded Successfully", "Upload Success");
    } catch (e) {
        yield put(FileActions.uploadAvatarFailure(e));
    }
}

export function* handleUploadLives(action) {
    try {
        const response = yield call(FileAPI.UploadLives, action.payload);
        yield put(FileActions.uploadLivesSuccess(response));
        toastr.success("Lives Uploaded Successfully", "Upload Success");
    } catch (e) {
        yield put(FileActions.uploadLivesFailure(e));
    }
}

export function* handleUploadProducts(action) {
    try {
        const response = yield call(FileAPI.UploadProducts, action.payload);
        yield put(FileActions.uploadProductsSuccess(response));
        toastr.success("Products Uploaded Successfully", "Upload Success");
    } catch (e) {
        yield put(FileActions.uploadProductsFailure(e));
    }
}

export function* handleGetConfiguration(action) {
    try {
        const response = yield call(FileAPI.GetConfiguration, action.payload);
        yield put(FileActions.getConfigurationSuccess(response));
    } catch (e) {
        yield put(FileActions.getConfigurationFailure(e));
    }
}

export function* handleUploadProfileImage(action) {
    try {
        const response = yield call(FileAPI.UpdateProfileImage, action.payload);
        yield put(FileActions.uploadProfileImageSuccess(response));
        toastr.success("Avatar Uploaded Successfully", "Upload Success");
    } catch (e) {
        yield put(FileActions.uploadProfileImageFailure(e));
    }
}

export function* handleGetAttachments(action) {
    try {
        const response = yield call(FileAPI.GetListOfAttachments, action.payload);
        yield put(FileActions.getAttachmentsSuccess(response));
    } catch (e) {
        yield put(FileActions.getAttachmentsFailure(e));
    }
}

export function* FileSaga() {
    yield takeEvery(FileActionTypes.UPLOAD_AVATAR_REQUEST, handleUploadAvatar);
    yield takeEvery(FileActionTypes.UPLOAD_LIVES_REQUEST, handleUploadLives);
    yield takeEvery(FileActionTypes.UPLOAD_PRODUCTS_REQUEST, handleUploadProducts);
    yield takeEvery(FileActionTypes.GET_CONFIGURATION_REQUEST, handleGetConfiguration);
    yield takeEvery(FileActionTypes.UPLOAD_PROFILEIMAGE_REQUEST, handleUploadProfileImage);
    yield takeEvery(FileActionTypes.GET_ATTACHMENTS_REQUEST, handleGetAttachments);
}