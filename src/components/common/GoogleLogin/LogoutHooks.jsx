import React from 'react';
import { useGoogleLogout } from 'react-google-login';
require('dotenv').config();

const clientId = process.env.REACT_APP_GOOGLE_ID;

function LogoutHooks() {
    const onLogoutSuccess = (res) => {
        console.log('Logged out Success');
        alert('Logged out Successfully ✌');
    };

    const onFailure = () => {
        console.log('Handle failure cases');
    };

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
    });

    return (
        <button onClick={signOut} className="button">
            <span className="buttonText">Sign out</span>
        </button>
    );
}

export default LogoutHooks;