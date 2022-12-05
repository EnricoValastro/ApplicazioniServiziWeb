const http = require('http');
const server = http.createServer((req, res)=> {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
});
server.listen(8080);
