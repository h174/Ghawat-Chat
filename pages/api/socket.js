// pages/api/socket.js

import { Server } from 'socket.io';

export const config = {
  api: {
    bodyParser: false, // Disable the default body parser since we are using WebSocket
  },
};

export default async (req, res) => {
  if (!res.socket.server.io) {
    // Initialize a Socket.io server if it doesn't exist
    const io = new Server(res.socket.server);

    io.on('connection', (socket) => {
      console.log('A user connected');

      socket.on('chat message', (message) => {
        io.emit('chat message', message);
      });

      socket.on('disconnect', () => {
        console.log('User disconnected');
      });

      res.socket.server.io = io; // Store the io instance on the server object for reusing
    });
  }

  res.end();
};
