const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 4000;

enum PollValue {
  CHANGE_TOPIC="change topic",
  KEEP_TOPIC="keep topic",
  CHANGE_QUESTION="change question",
}

const pollOptions = [
  {value: PollValue.KEEP_TOPIC, label: "Keep Question"},
  {value: PollValue.CHANGE_QUESTION, label: "Change Question"},
  {value: PollValue.CHANGE_TOPIC, label: "Change Topic"},
]

app.get('/', (_req: any, _res: any) => {
});

let lastUser = 1;

interface IMessage {
  text: string;
  user: string;
  type: string;
}

let votes = {
  [PollValue.CHANGE_TOPIC]: 0,
  [PollValue.KEEP_TOPIC]: 0,
  [PollValue.CHANGE_QUESTION]: 0,
}

let connectedUsers = 0;

io.on('connection', (socket: any) => {
  connectedUsers++;
  console.log('a user connected', connectedUsers);
  socket.on('message', (message: IMessage) => {
    io.emit('message', message);
  });
  socket.on('newUser', () => {
    socket.emit('newUser', lastUser);
    lastUser++;
  });
  socket.on('vote', ({vote}: {vote: PollValue}) => {
    votes[vote]++;
    console.log(Object.values(votes));
    const totalVotes = Object.values(votes).reduce((acc, cur) => acc + cur);
    console.log('totalVotes', totalVotes);
    if (totalVotes >= connectedUsers) {
      if (votes[PollValue.CHANGE_TOPIC] > 0) {
        console.log('pollResults', PollValue.CHANGE_TOPIC);
        io.emit('pollResults', PollValue.CHANGE_TOPIC);
      } else if (votes[PollValue.CHANGE_QUESTION] > 0) {
        console.log('pollResults', PollValue.CHANGE_QUESTION);
        io.emit('pollResults', PollValue.CHANGE_QUESTION);
      } else {
        console.log('pollResults', PollValue.KEEP_TOPIC);
        io.emit('pollResults', PollValue.KEEP_TOPIC);
      }
      votes = {
        [PollValue.CHANGE_TOPIC]: 0,
        [PollValue.KEEP_TOPIC]: 0,
        [PollValue.CHANGE_QUESTION]: 0,
      }
    }
  });
  socket.on('disconnect', () => {
    connectedUsers--;
    console.log('a user disconnected', connectedUsers);
  });
});

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});