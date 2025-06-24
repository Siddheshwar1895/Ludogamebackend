
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, { cors: { origin: "*" } });

app.use(cors());
app.get('/api/start', (req, res) => res.send({ message: 'Ludo server running' }));

let players = [];
let gameState = {};

io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);
  // Game logic here
});

server.listen(10000, () => console.log('Server running on port 10000'));
