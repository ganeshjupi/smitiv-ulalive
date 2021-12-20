import moment from 'moment';

require('dotenv').config();
var jwtDecode = require('jwt-decode');

export function getHeaderDetail(headerInfo = {}) {
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,PATCH',
        'Authorization': "Bearer " + getToken()
    };
    headers = { ...headers, ...headerInfo };

    return headers;
}

export function IsNullOrEmpty(name) {
    return name === "" ||
        name === undefined ||
        name === null;
};

export function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !IsNullOrEmpty(str) && !!pattern.test(str);
}

export function validEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !IsNullOrEmpty(email) && re.test(String(email).toLowerCase());
}

export function validPassword(password) {
    const pa = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    return !IsNullOrEmpty(password) && pa.test(password); 
}

export function validUsername(username) {
    return !IsNullOrEmpty(username) && username.length < 30 && username.length > 5;
}

export function validPhone(phone) {
    return !IsNullOrEmpty(phone) && phone.length < 11 && phone.length > 6;
}

export const arrayToObject = (array) =>
    array.reduce((obj, item) => {
        obj[item.name] = item.type === "FileDrop" || item.type === "Chip" ? [] : item.defaultValue;
        return obj;
    }, {});

export const replaceLocalSrcTags = (input, localSrc, src) => {
    return input.replace(localSrc, src);

    // if ( images ) {
    //     for ( let uploadedImage of images ) {
    //         input = input.replace( uploadedImage.localSrc, uploadedImage.file.name );
    //     }

    //     return input;
    // }
    // else {
    //     return '';
    // }
};

export function decodeToken() {
    let token = getToken();
    try {
        if (token !== null && token !== undefined && token !== "")
            return jwtDecode(token);
        else
            return null;
    }
    catch (e) {
        return null;
    }
}

export function isTokenValid() {
    let token = getToken();
    let isAuthenticated = false;
    try {
        isAuthenticated = !IsNullOrEmpty(token);
        if (isAuthenticated) {
            var decoded = decodeToken();
            isAuthenticated = moment.unix(decoded.exp).isAfter(moment());
        }
    }
    catch (e) {
        isAuthenticated = false
    }

    return isAuthenticated;
}

export function clearToken() {
    sessionStorage.removeItem(process.env.REACT_APP_AUTH_TOKEN);
    sessionStorage.removeItem("persist:ulalive");
}

export function getToken() {
    return sessionStorage.getItem(process.env.REACT_APP_AUTH_TOKEN)?.toString();
}

export function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & (0x3 | 0x8));
        return v.toString(16);
    });
}

export function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

export function convertToSlug(Text) {
    return Text
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
        ;
}