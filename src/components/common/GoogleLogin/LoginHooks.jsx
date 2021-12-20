import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import GoogleIcon from "../../../assets/images/google-ico.svg";
import { getPlayerId, getUpdatedPlayerId } from '../../../helpers/notificationHelper';
import { loginGoogleRequest } from '../../../store/user/user.actions';
// refresh token
import { refreshTokenSetup } from './refreshToken';
require('dotenv').config();

const clientId = process.env.REACT_APP_GOOGLE_ID;

function LoginHooks() {
  const dispatch = useDispatch();
  const onSuccess = (async (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    const playerId = await getPlayerId();
    dispatch(loginGoogleRequest({
      accessToken: res.accessToken,
      countryCode: "65",
      originalCountry: "IN",
      deviceId: "A6FFFEBE-8282-484D-BE5B-2439013F44B1",
      deviceType: "android",
      deviceToken: getUpdatedPlayerId(playerId)
    }))
    refreshTokenSetup(res);
  });

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button className="btn btn-white btnpadding" onClick={signIn}>
      <img
        className="google-ico "
        src={GoogleIcon}
        alt="icon"
      />
      <span className="google">Google</span>
    </button>
  );
}

export default LoginHooks;