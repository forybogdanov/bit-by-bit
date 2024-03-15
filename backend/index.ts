const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 4000;


app.get('/', (_req: any, _res: any) => {
});

io.on('connection', (socket: any) => {
  console.log('a user connected');
  socket.on('message', (message: string) => {
    io.emit('message', message);
  });
});

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});