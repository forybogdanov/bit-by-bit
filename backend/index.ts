const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.get('/', (_req: any, res: any) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(4000, () => {
  console.log('server running at http://localhost:4000');
});