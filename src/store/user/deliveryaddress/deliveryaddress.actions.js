import { action } from "typesafe-actions";
import { DeliveryAddressActionTypes } from "./deliveryaddress.model";

export const getDeliveryAddressRequest = (req) => action(DeliveryAddressActionTypes.FETCH_DELIVERY_ADDRESS_REQUEST, req);
export const getDeliveryAddressSuccess = (res) => action(DeliveryAddressActionTypes.FETCH_DELIVERY_ADDRESS_SUCCESS, res);
export const getDeliveryAddressFailure = (err) => action(DeliveryAddressActionTypes.FETCH_DELIVERY_ADDRESS_FAILURE, err);

export const getDeliveryAddressByIDRequest = (req) => action(DeliveryAddressActionTypes.FETCH_DELIVERY_ADDRESS_ID_REQUEST, req);
export const getDeliveryAddressByIDSuccess = (res) => action(DeliveryAddressActionTypes.FETCH_DELIVERY_ADDRESS_ID_SUCCESS, res);
export const getDeliveryAddressByIDFailure = (err) => action(DeliveryAddressActionTypes.FETCH_DELIVERY_ADDRESS_ID_FAILURE, err);

export const createDeliveryAddressRequest = (req) => action(DeliveryAddressActionTypes.CREATE_DELIVERY_ADDRESS_REQUEST, req);
export const createDeliveryAddressSuccess = (res) => action(DeliveryAddressActionTypes.CREATE_DELIVERY_ADDRESS_SUCCESS, res);
export const createDeliveryAddressFailure = (err) => action(DeliveryAddressActionTypes.CREATE_DELIVERY_ADDRESS_FAILURE, err);

export const deleteDeliveryAddressRequest = (req) => action(DeliveryAddressActionTypes.DELETE_DELIVERY_ADDRESS_REQUEST, req);
export const deleteDeliveryAddressSuccess = (res) => action(DeliveryAddressActionTypes.DELETE_DELIVERY_ADDRESS_SUCCESS, res);
export const deleteDeliveryAddressFailure = (err) => action(DeliveryAddressActionTypes.DELETE_DELIVERY_ADDRESS_FAILURE, err);

export const updateDeliveryAddressRequest = (req) => action(DeliveryAddressActionTypes.UPDATE_DELIVERY_ADDRESS_REQUEST, req);
export const updateDeliveryAddressSuccess = (res) => action(DeliveryAddressActionTypes.UPDATE_DELIVERY_ADDRESS_SUCCESS, res);
export const updateDeliveryAddressFailure = (err) => action(DeliveryAddressActionTypes.UPDATE_DELIVERY_ADDRESS_FAILURE, err);