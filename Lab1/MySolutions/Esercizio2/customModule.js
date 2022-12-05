const concat = (a,b) => {return a+b};
const multiply = (a,b) => {return a*b};
const upper = (a) => {return a.toUpperCase()};

var http = require('http');
const welcome = () =>{
    const server = http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Hello World!</h1>');
        res.write('<p>Questa pagina web è stata creata con un modulo personalizzato.</p>')
        res.end();
    }).listen(8080);
}

exports.welcome = welcome;
exports.concat = concat;