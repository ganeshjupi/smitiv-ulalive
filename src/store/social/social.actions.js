import { action } from "typesafe-actions";
import { SocialActionTypes } from "./social.model";

export const createLiveStreamRequest = (req) => action(SocialActionTypes.CREATE_LIVESTREAM_REQUEST, req);
export const createLiveStreamSuccess = (res) => action(SocialActionTypes.CREATE_LIVESTREAM_SUCCESS, res);
export const createLiveStreamFailure = (err) => action(SocialActionTypes.CREATE_LIVESTREAM_FAILURE, err);

export const getTopLiveStreamRequest = (req) => action(SocialActionTypes.TOP_RECOMMENDED_LIVESTREAM_REQUEST, req);
export const getTopLiveStreamSuccess = (res) => action(SocialActionTypes.TOP_RECOMMENDED_LIVESTREAM_SUCCESS, res);
export const getTopLiveStreamFailure = (err) => action(SocialActionTypes.TOP_RECOMMENDED_LIVESTREAM_FAILURE, err);

export const getTopHomeLiveStreamRequest = (req) => action(SocialActionTypes.TOP_RECOMMENDED_HOMELIVESTREAM_REQUEST, req);
export const getTopHomeLiveStreamSuccess = (res) => action(SocialActionTypes.TOP_RECOMMENDED_HOMELIVESTREAM_SUCCESS, res);
export const getTopHomeLiveStreamFailure = (err) => action(SocialActionTypes.TOP_RECOMMENDED_HOMELIVESTREAM_FAILURE, err);

export const getRecentStreamRequest = (req) => action(SocialActionTypes.RECENT_LIVESTREAM_REQUEST, req);
export const getRecentStreamSuccess = (res) => action(SocialActionTypes.RECENT_LIVESTREAM_SUCCESS, res);
export const getRecentStreamFailure = (err) => action(SocialActionTypes.RECENT_LIVESTREAM_FAILURE, err);

export const getJustStreamRequest = (req) => action(SocialActionTypes.JUST_LIVESTREAM_REQUEST, req);
export const getJustStreamSuccess = (res) => action(SocialActionTypes.JUST_LIVESTREAM_SUCCESS, res);
export const getJustStreamFailure = (err) => action(SocialActionTypes.JUST_LIVESTREAM_FAILURE, err);

export const getFollowingStreamRequest = (req) => action(SocialActionTypes.FOLLOWING_LIVESTREAM_REQUEST, req);
export const getFollowingStreamSuccess = (res) => action(SocialActionTypes.FOLLOWING_LIVESTREAM_SUCCESS, res);
export const getFollowingStreamFailure = (err) => action(SocialActionTypes.FOLLOWING_LIVESTREAM_FAILURE, err);

export const fetchLiveStreamByIdRequest = (req) => action(SocialActionTypes.FETCH_LIVESTREAM_ID_REQUEST, req);
export const fetchLiveStreamByIdSuccess = (res) => action(SocialActionTypes.FETCH_LIVESTREAM_ID_SUCCESS, res);
export const fetchLiveStreamByIdFailure = (err) => action(SocialActionTypes.FETCH_LIVESTREAM_ID_FAILURE, err);

export const fetchLiveStreamRequest = (req) => action(SocialActionTypes.FETCH_LIVESTREAM_REQUEST, req);
export const fetchLiveStreamSuccess = (res) => action(SocialActionTypes.FETCH_LIVESTREAM_SUCCESS, res);
export const fetchLiveStreamFailure = (err) => action(SocialActionTypes.FETCH_LIVESTREAM_FAILURE, err);

export const fetchBookMarkRequest = (req) => action(SocialActionTypes.FETCH_BOOKMARK_REQUEST, req);
export const fetchBookMarkSuccess = (res) => action(SocialActionTypes.FETCH_BOOKMARK_SUCCESS, res);
export const fetchBookMarkFailure = (err) => action(SocialActionTypes.FETCH_BOOKMARK_FAILURE, err);

export const createBookMarkRequest = (req) => action(SocialActionTypes.CREATE_BOOKMARK_REQUEST, req);
export const createBookMarkSuccess = (res) => action(SocialActionTypes.CREATE_BOOKMARK_SUCCESS, res);
export const createBookMarkFailure = (err) => action(SocialActionTypes.CREATE_BOOKMARK_FAILURE, err);

export const deleteBookMarkRequest = (req) => action(SocialActionTypes.DELETE_BOOKMARK_REQUEST, req);
export const deleteBookMarkSuccess = (res) => action(SocialActionTypes.DELETE_BOOKMARK_SUCCESS, res);
export const deleteBookMarkFailure = (err) => action(SocialActionTypes.DELETE_BOOKMARK_FAILURE, err);

export const createWowzaEventRequest = (req) => action(SocialActionTypes.CREATE_WOWZA_REQUEST, req);
export const createWowzaEventSuccess = (res) => action(SocialActionTypes.CREATE_WOWZA_SUCCESS, res);
export const createWowzaEventFailure = (err) => action(SocialActionTypes.CREATE_WOWZA_FAILURE, err);

export const fetchEventRequest = (req) => action(SocialActionTypes.FETCH_EVENT_REQUEST, req);
export const fetchEventSuccess = (res) => action(SocialActionTypes.FETCH_EVENT_SUCCESS, res);
export const fetchEventFailure = (err) => action(SocialActionTypes.FETCH_EVENT_FAILURE, err);

export const updateEventInternal = (req) => action(SocialActionTypes.UPDATE_EVENT_INTERNAL, req);

export const fetchReactionRequest = (req) => action(SocialActionTypes.FETCH_REACTION_REQUEST, req);
export const fetchReactionSuccess = (res) => action(SocialActionTypes.FETCH_REACTION_SUCCESS, res);
export const fetchReactionFailure = (err) => action(SocialActionTypes.FETCH_REACTION_FAILURE, err);
