const app = require('express')();
const {createServer} = require('http');
const http = createServer(app);

//Socket.io
const {Server} = require('socket.io');
const io = new Server(http);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(8080, () => {
  console.log('listening on *:8080');
});