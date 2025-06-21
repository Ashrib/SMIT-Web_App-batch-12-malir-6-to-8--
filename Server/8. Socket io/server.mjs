import express from 'express';
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });

io.on('connection', (socket) => {
    console.log('a user connected');
  socket.on('chat', (msg) => { // Listen for 'chat' events
    console.log('message: ' + msg);
    io.emit('chat', msg); // Emit the message to all connected clients
  });
});

server.listen(4000, () => {
  console.log('server running at http://localhost:4000');
});
