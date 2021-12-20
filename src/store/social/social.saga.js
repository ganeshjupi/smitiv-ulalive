import { call, put, takeEvery, select } from 'redux-saga/effects';
import { clearShoppingRequest } from '../shopping/shopping.actions';
import * as SocialActions from './social.actions';
import SocialAPI from './social.api';
import { SocialActionTypes } from './social.model';
import toastr from 'toastr';
import { getUserProfile } from '../user/user.selector';

export function* handleCreateLiveStream(action) {
    try {
        const response = yield call(SocialAPI.CreateLiveStream, action.payload.data);
        yield put(SocialActions.fetchLiveStreamByIdRequest({
            id: response.data._id,
            history: action.payload.history
        }));
        yield put(clearShoppingRequest());
    } catch (e) {
        yield put(SocialActions.createLiveStreamFailure(e));
    }
}

export function* handleTopLiveStream(action) {
    try {
        const response = yield call(SocialAPI.GetTopRecommend, action.payload);
        yield put(SocialActions.getTopLiveStreamSuccess(response));
    } catch (e) {
        yield put(SocialActions.getTopLiveStreamFailure(e));
    }
}

export function* handleHomeTopLiveStream(action) {
    try {
        const response = yield call(SocialAPI.GetTopRecommendHome, action.payload);
        yield put(SocialActions.getTopHomeLiveStreamSuccess(response));
    } catch (e) {
        yield put(SocialActions.getTopHomeLiveStreamFailure(e));
    }
}

export function* handleRecentLiveStream(action) {
    try {
        const response = yield call(SocialAPI.GetLiveStreamList, "?where=streamingStatus:Ended");
        yield put(SocialActions.getRecentStreamSuccess(response));
    } catch (e) {
        yield put(SocialActions.getRecentStreamFailure(e));
    }
}

export function* handleJustLiveStream(action) {
    try {
        const response = yield call(SocialAPI.GetLiveStreamList, "?where=streamingStatus:streaming");
        yield put(SocialActions.getJustStreamSuccess(response));
    } catch (e) {
        yield put(SocialActions.getJustStreamFailure(e));
    }
}

export function* handleFollowingStream(action) {
    try {
        const response = yield call(SocialAPI.GetFollowingLiveStream, action.payload);
        yield put(SocialActions.getFollowingStreamSuccess(response));
    } catch (e) {
        yield put(SocialActions.getFollowingStreamFailure(e));
    }
}

export function* handleFetchLiveStreamByID(action) {
    try {
        const response = yield call(SocialAPI.GetLiveStreamById, action.payload.id);
        yield put(SocialActions.fetchLiveStreamByIdSuccess(response));
        const user = yield select(getUserProfile);
        if (user._id === response.data.owner._id && response.data.streamingStatus === "Waiting") {
            action.payload.history.push("/setuplive_preview");
        }
        else if (response.data.streamingStatus === "Ended") {
            action.payload.history.push("/livestream-ended");
        }
        else {
            action.payload.history.push("/livestream");
        }

    } catch (e) {
        yield put(SocialActions.fetchLiveStreamByIdFailure(e));
    }
}
export function* handleFetchLiveStream(action) {
    try {
        const response = yield call(SocialAPI.GetLiveStreamList, action.payload ? action.payload : "");
        yield put(SocialActions.fetchLiveStreamSuccess(response));
    } catch (e) {
        yield put(SocialActions.fetchLiveStreamFailure(e));
    }
}

export function* handleFetchBookMark(action) {
    try {
        const response = yield call(SocialAPI.GetBookMarks, action.payload ? action.payload : "");
        yield put(SocialActions.fetchBookMarkSuccess(response));
    } catch (e) {
        yield put(SocialActions.fetchBookMarkFailure(e));
    }
}

export function* handleFetchReaction(action) {
    try {
        const response = yield call(SocialAPI.GetReactionList);
        yield put(SocialActions.fetchReactionSuccess(response));
    } catch (e) {
        yield put(SocialActions.fetchReactionFailure(e));
    }
}

export function* handleCreateBookMark(action) {
    try {
        const response = yield call(SocialAPI.CreateBookMark, action.payload);
        yield put(SocialActions.createBookMarkSuccess(response));
        toastr.success("Bookmark Created Successfully", "Bookmark");
        yield put(SocialActions.fetchBookMarkRequest());
    } catch (e) {
        yield put(SocialActions.createBookMarkFailure(e));
    }
}

export function* handleDeleteBookMark(action) {
    try {
        const response = yield call(SocialAPI.DeleteBookMark, action.payload);
        toastr.success("Bookmark Deleted Successfully", "Bookmark");
        yield put(SocialActions.deleteBookMarkSuccess(action.payload));
        yield put(SocialActions.fetchBookMarkRequest());
    } catch (e) {
        yield put(SocialActions.deleteBookMarkFailure(e));
    }
}

export function* handleWowzaCreate(action) {
    try {
        const response = yield call(SocialAPI.WowzaCreateEvent, action.payload);
        yield put(SocialActions.createWowzaEventSuccess(response));
        toastr.success("Your Livestream is streaming now", "Live Stream")
    } catch (e) {
        yield put(SocialActions.createWowzaEventFailure(e));
    }
}

export function* handleFetchEvents(action) {
    try {
        const response = yield call(SocialAPI.GetEvents, action.payload);
        yield put(SocialActions.fetchEventSuccess(response));
    } catch (e) {
        yield put(SocialActions.fetchEventFailure(e));
    }
}

export function* SocialSaga() {
    yield takeEvery(SocialActionTypes.CREATE_LIVESTREAM_REQUEST, handleCreateLiveStream);
    yield takeEvery(SocialActionTypes.TOP_RECOMMENDED_LIVESTREAM_REQUEST, handleTopLiveStream);
    yield takeEvery(SocialActionTypes.TOP_RECOMMENDED_HOMELIVESTREAM_REQUEST, handleHomeTopLiveStream);
    yield takeEvery(SocialActionTypes.RECENT_LIVESTREAM_REQUEST, handleRecentLiveStream);
    yield takeEvery(SocialActionTypes.JUST_LIVESTREAM_REQUEST, handleJustLiveStream);
    yield takeEvery(SocialActionTypes.FETCH_LIVESTREAM_ID_REQUEST, handleFetchLiveStreamByID);
    yield takeEvery(SocialActionTypes.FETCH_LIVESTREAM_REQUEST, handleFetchLiveStream);
    yield takeEvery(SocialActionTypes.FETCH_BOOKMARK_REQUEST, handleFetchBookMark);
    yield takeEvery(SocialActionTypes.CREATE_BOOKMARK_REQUEST, handleCreateBookMark);
    yield takeEvery(SocialActionTypes.DELETE_BOOKMARK_REQUEST, handleDeleteBookMark);
    yield takeEvery(SocialActionTypes.CREATE_WOWZA_REQUEST, handleWowzaCreate);
    yield takeEvery(SocialActionTypes.FOLLOWING_LIVESTREAM_REQUEST, handleFollowingStream);
    yield takeEvery(SocialActionTypes.FETCH_EVENT_REQUEST, handleFetchEvents);
    yield takeEvery(SocialActionTypes.FETCH_REACTION_REQUEST, handleFetchReaction);
}