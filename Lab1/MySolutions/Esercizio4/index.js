/*
* Web Server using Express.
* Use the 'get' method to handle GET requests, for path '/...' and reply using the 'send' method of RES.
* Use the 'use' method to handle other request and sends error message. N.B. The 'use' method goes after all other methods, otherwise
* return error on any request.
* Use the 'listen' method to listen on port 8080.
* */

const express = require('express');
const app = express();
const data = require('./colors.json');

app.set('view engine', 'pug');


//Exercise 4.0
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Exercise 4.1
app.get('/colors', (req, res) => {
    //res.setHeader('Content-Type', 'application/json');
    //res.send(JSON.stringify(data));
    res.json(data);
});
//Exercise 4.2
app.get('/contacts', (req, res) => {
    res.sendFile(__dirname + '/www/contacts.html');
});
//Exercise 4.3
app.get('/sayhello/:name', (req, res) => {
     res.send('Hello ' + req.params.name);
});
//Exercise 4.4
app.get('/tehello/:name', (req, res) => {
   res.render('hello', {name: req.params.name});
});

//Exercise 4.2bis
app.use(express.static ('public'))
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Sorry cant find that!');
});
app.listen(8080, () => {
    console.log('Example app listening on port 8080!');
});