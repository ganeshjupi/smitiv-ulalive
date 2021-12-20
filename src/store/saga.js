import { all } from 'redux-saga/effects';
import { ShoppingSaga } from './shopping/shopping.saga';
import { PrivacySettingSaga } from './user/privacysetting/privacysetting.saga';
import { PrivateLoungeSaga } from './user/privatelounge/privatelounge.saga';
import { DeliveryAddressSaga } from './user/deliveryaddress/deliveryaddress.saga';
import { UserSaga } from './user/user.saga';
import { FileSaga } from './file/file.saga';
import { SocialSaga } from './social/social.saga';
import { NotificationSaga } from './notification/notification.saga';

export default function* rootSaga() {
    yield all([
        UserSaga(),
        PrivacySettingSaga(),
        ShoppingSaga(),
        FileSaga(),
        SocialSaga(),
        DeliveryAddressSaga(),
        PrivateLoungeSaga(),
        NotificationSaga()
    ]);
}