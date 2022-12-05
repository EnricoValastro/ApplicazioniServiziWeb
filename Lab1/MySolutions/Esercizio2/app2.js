/* Simile ad app.js ma risposta visualizzata in html */

const http = require('http'); //richiedo il modulo http

const server = http.createServer((req, res) => { //creo un server http "req" = richiesta "res" = risposta
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World!</h1>');
    res.write('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>')
    res.end(); //chiude la risposta
}).listen(8080); //il server ascolta richieste sulla porta 8080