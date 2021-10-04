import React, { useState, useEffect } from 'react';
import queryString from 'query-string'; //Helping to use the url's parameters
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
    
        socket = io(ENDPOINT, { transports : ['websocket'] });
    
        setRoom(room);
        setName(name)
    
        socket.emit('join', { name, room }, (error) => {
          if(error) {
            alert(error);
          }
        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
      }, [ENDPOINT, location.search]);

    return (
        <h1>Chat</h1>
    )
} 

export default Chat;