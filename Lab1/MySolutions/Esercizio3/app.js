const dispatcher = require('./httpdispatcher');
const http = require('http');

dispatcher.onGet('/page1', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Page One</h1>')
    res.end();
});

dispatcher.onPost('/page2', (req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Page Two</h1>')
    res.end();
});

http.createServer((req, res) => {
    dispatcher.dispatcher(req, res);
}).listen(8080);