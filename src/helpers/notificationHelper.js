import OneSignal from 'react-onesignal';
import toastr from 'toastr';
import { IsNullOrEmpty } from './utility';
require('dotenv').config();

export var playerId = null;

export const startNotificationService = async () => {
    return await OneSignal.init({
        appId: process.env.NODE_ENV === "production" ? process.env.REACT_APP_ONESIGNAL: process.env.REACT_APP_ONESIGNAL_DEV,
        allowLocalhostAsSecureOrigin: true,
        notifyButton: {
            enable: true,
            size: 'small',
            position: 'bottom-right',
            showCredit: true
        }
    }).then(async () => {
        let isEnabled = await OneSignal.isPushNotificationsEnabled();
        if (isEnabled) {
            return await OneSignal.getUserId().then((pId) => {
                if (IsNullOrEmpty(pId)) {
                    return "d2dfe7d1-21b7-4dd4-b16c-00774e2ea815";
                }
                else {
                    return pId;
                }
            });
        }
        else {
            OneSignal.showSlidedownPrompt();
            return ""
        }
    }).catch((x) => {
        toastr.error("Something Went Wrong. Please refresh the browser");
        return "";
    })
}

export const getPlayerId = async () => {
    return await OneSignal.getUserId().then((pId) => {
        if (IsNullOrEmpty(pId)) {
            return "";
        }
        else {
            return playerId;
        }
    }).catch((x) => {
        return "";
    })
}

export const registerForPushNotifications = async () => {
    await OneSignal.registerForPushNotifications();
    return await getPlayerId();
}

export const getUpdatedPlayerId = (pId) => {
    if (IsNullOrEmpty(pId)) {
        return "d2dfe7d1-21b7-4dd4-b16c-00774e2ea815"
    }
    return pId;
}