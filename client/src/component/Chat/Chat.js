import React, { useState, useEffect } from 'react';
import queryString from 'query-string'; //Helping to use the url's parameters
import io from 'socket.io-client';

const Chat = ({ location }) => {
    useEffect(() => {
        const data = queryString.parse(location.search);

        console.log(location.search);
        console.log(data);
    })

    return (
        <h1>Chat</h1>
    )
} 

export default Chat;