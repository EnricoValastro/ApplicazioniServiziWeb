const dispatcher = require('./httpdispatcher');
const http = require('http');
dispatcher.onGet("/page1", (req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Page One');
});
dispatcher.onPost("/page2", (req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Page Two');
});
http.createServer((req, res)=> {
    dispatcher.dispatch(req, res);
}).listen(1337, '127.0.0.1');
