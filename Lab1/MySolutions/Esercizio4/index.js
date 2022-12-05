/*
* Web Server using Express.
* Use the 'get' method to handle GET requests, for path '/' and reply using the 'send' method of RES.
* Use the 'use' method to handle other request and sends error message. N.B. The 'use' method goes after all other methods, otherwise
* return error on any request.
* Use the 'listen' method to listen on port 8080.
* */

const express = require('express');
const app = express();
const data = require('./colors.json');

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/colors', (req, res) => {
    //res.setHeader('Content-Type', 'application/json');
    //res.send(JSON.stringify(data));
    res.json(data);
});
app.get('/contacts', (req, res) => {
    res.sendFile(__dirname + '/www/contacts.html');
});
app.get('/sayhello/:name', (req, res) => {
     res.send('Hello ' + req.params.name);
});
app.use(express.static ('public'))
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Sorry cant find that!');
});
app.listen(8080, () => {
    console.log('Example app listening on port 8080!');
});