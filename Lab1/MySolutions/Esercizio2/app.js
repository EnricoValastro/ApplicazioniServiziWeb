/* Creazione di un server http che risponde "hello world" quando riceve richiesta dal browser */

const http = require('http'); //richiedo il modulo http

const server = http.createServer((req, res) => { //creo un server http "req" = richiesta "res" = risposta
  res.write('Hello World!');
  res.end();
});
server.listen(8080); //il server ascolta richieste sulla porta 8080