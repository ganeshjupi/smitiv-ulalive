import { action } from "typesafe-actions";
import { PrivateLoungeActionTypes } from "./privatelounge.model";

export const getPrivateLoungeRequest = (req) => action(PrivateLoungeActionTypes.FETCH_PRIVATE_LOUNGE_REQUEST, req);
export const getPrivateLoungeSuccess = (res) => action(PrivateLoungeActionTypes.FETCH_PRIVATE_LOUNGE_SUCCESS, res);
export const getPrivateLoungeFailure = (err) => action(PrivateLoungeActionTypes.FETCH_PRIVATE_LOUNGE_FAILURE, err);

export const updatePrivateLoungeRequest = (req) => action(PrivateLoungeActionTypes.UPDATE_PRIVATE_LOUNGE_REQUEST, req);
export const updatePrivateLoungeSuccess = (res) => action(PrivateLoungeActionTypes.UPDATE_PRIVATE_LOUNGE_SUCCESS, res);
export const updatePrivateLoungeFailure = (err) => action(PrivateLoungeActionTypes.UPDATE_PRIVATE_LOUNGE_FAILURE, err);

export const getPrivateLoungeUserRequest = (req) => action(PrivateLoungeActionTypes.FETCH_PRIVATE_LOUNGE_USER_REQUEST, req);
export const getPrivateLoungeUserSuccess = (res) => action(PrivateLoungeActionTypes.FETCH_PRIVATE_LOUNGE_USER_SUCCESS, res);
export const getPrivateLoungeUserFailure = (err) => action(PrivateLoungeActionTypes.FETCH_PRIVATE_LOUNGE_USER_FAILURE, err);
