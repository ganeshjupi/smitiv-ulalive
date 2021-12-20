import { combineReducers } from 'redux';
import { UserReducer } from "./user/user.reducer";
import { ShoppingReducer } from "./shopping/shopping.reducer";
import { SocialReducer } from "./social/social.reducer";
import { FileReducer } from "./file/file.reducer";
import { NotificationReducer } from "./notification/notification.reducer";
import { PrivacySettingReducer } from "./user/privacysetting/privacysetting.reducer";
import { DeliveryAddressReducer } from "./user/deliveryaddress/deliveryaddress.reducer";
import { PrivateLoungeReducer } from "./user/privatelounge/privatelounge.reducer";
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist"
import { UserActionTypes } from './user/user.model';

const appReducer = combineReducers({
    UserReducer,
    PrivacySettingReducer,
    ShoppingReducer,
    FileReducer,
    SocialReducer,
    DeliveryAddressReducer,
    PrivateLoungeReducer,
    NotificationReducer
});

const persistConfig = {
    key: "ulalive",
    storage: storageSession
}
const rootReducer = (state, action) => {
    if (action.type === UserActionTypes.USER_LOGOUT) {
        state = undefined;
    }
    return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);