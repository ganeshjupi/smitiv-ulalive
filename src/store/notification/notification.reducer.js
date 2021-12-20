import '../../assets/css/toastr.min.css';
import { NotificationActionTypes } from "./notification.model";
import moment from "moment";
require('dotenv').config();

export const initialState = {
    notificationSetting: {},
    notifications: [],
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case NotificationActionTypes.CREATE_SETTING_REQUEST:
        case NotificationActionTypes.READ_ALL_PUSH_REQUEST:
        case NotificationActionTypes.READ_PUSH_REQUEST:
        case NotificationActionTypes.FETCH_PUSH_REQUEST:
            {
                return Object.assign({}, state, {
                    isLoading: true
                });
            }

        case NotificationActionTypes.FETCH_PUSH_SUCCESS:
            {
                return Object.assign({}, state, {
                    notifications: action.payload.data
                });
            }

        case NotificationActionTypes.READ_ALL_PUSH_SUCCESS:
            {
                return Object.assign({}, state, {
                    notifications: []
                });
            }

        case NotificationActionTypes.READ_PUSH_SUCCESS:
            {
                let notifications = state.notifications.data.filter((x) => x._id !== action.payload.data._id)
                return Object.assign({}, state, {
                    notifications: {
                        data: notifications,
                        countUnread: notifications.countUnread == 0 ? parseInt(notifications.countUnread) - 1 : "0"
                    }
                });
            }

        case NotificationActionTypes.FETCH_PUSH_FAILURE:
        case NotificationActionTypes.CREATE_SETTING_FAILURE:
        case NotificationActionTypes.READ_ALL_PUSH_FAILURE:
        case NotificationActionTypes.READ_PUSH_FAILURE:
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

export { reducer as NotificationReducer };