export function getUploadedProductImage(state) {
    return state.FileReducer.uploadProductResponse;
}

export function getUploadedLiveImage(state) {
    return state.FileReducer.uploadLivesResponse;
}

export function getUploadedAvatarImage(state) {
    return state.FileReducer.uploadAvatarResponse;
}