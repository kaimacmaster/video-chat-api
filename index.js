/**
 * Express Socket.io server for the video chat app 
 * 
 * This is the main entry point for the application.
 * It is responsible for setting up the application and
 * starting the main loop.
 */

// setup express
const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

// setup the port 
const port = process.env.PORT || 5000;

// setup the routes
app.get('/', (req, res) => {
  res.send('video chat api is currently running');
});

// setup the socket.io server
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// start the server
server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
