/*const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);*/



const express = require('express');
const app = express();
const {createServer} = require('http');
const {Server} = require('socket.io');

const http = createServer(app);
const io = new Server(http);

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket)=>{
  console.log('a user connected');
  
  socket.on('chat message', (msg)=>{
    io.emit('chat message', msg);
  });
  
  socket.on('disconnect', ()=>{
    console.log('user disconnected');
  });
});

http.listen(3000, ()=>{
  console.log('Listen on port 3000');
});
