import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('/api/socket'); // Connect to the WebSocket API route

export default function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to the WebSocket server');
    });

    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (message.trim() !== '' && username.trim() !== '') {
      socket.emit('chat message', { username, message });
      setMessage('');
    }
  };

  return (
    <div>
      <h1>Chat App</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg.username}: {msg.message}</li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}
