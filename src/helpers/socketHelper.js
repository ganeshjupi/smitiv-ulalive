import { getToken } from "./utility";
import io from 'socket.io-client';
require('dotenv').config();

export var socket = null;

export const startSocketService = () => {
    socket = io(process.env.REACT_APP_SOCKETIO_URL,
        {
            transports: ['websocket'],
            query: {
                token: getToken()
            },
        });

    socket.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
    });
}