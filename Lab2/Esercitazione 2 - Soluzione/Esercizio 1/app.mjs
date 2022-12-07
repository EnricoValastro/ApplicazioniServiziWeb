import { Server } from 'socket.io';
import express from 'express';
import { createServer } from 'http';
import path from 'path';

const app = express();
const http = createServer(app);
const io = new Server(http,{});
const __dirname = path.resolve();

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
