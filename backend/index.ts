const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 4000;


app.get('/', (_req: any, _res: any) => {
});

let lastUser = 1;

interface IMessage {
  text: string;
  user: string;
  type: string;
}

io.on('connection', (socket: any) => {
  console.log('a user connected');
  socket.on('message', (message: IMessage) => {
    io.emit('message', message);
  });
  socket.on('newUser', () => {
    socket.emit('newUser', lastUser);
    lastUser++;
  });
});

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});