import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IsNullOrEmpty } from './utility';
require('dotenv').config();

const ProtectedRoute = ({
    component: Component,
    isAuthenticated,
    isVerifying,
    ...rest
}) => {
    let accessToken = sessionStorage.getItem(process.env.REACT_APP_AUTH_TOKEN);
    return (
        <Route
            {...rest}
            render={props =>
                isVerifying ? (
                    <div />
                ) : isAuthenticated && !IsNullOrEmpty(accessToken) ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "log_in"
                        }}
                    />
                )
            }
        />
    );
}
export default ProtectedRoute;