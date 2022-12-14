const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

global.appRoot = path.resolve(__dirname);

const PORT = 3000;

mongoose.connect('mongodb://localhost/test');

app.use(cors())

//Per gestire i parametri passati nel corpo della richiesta http.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/static', express.static(__dirname + '/public'));

const routes = require('./src/routes/moviesRoutes');
routes(app);

app.use((req, res)=> {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(PORT,  ()=> {
  console.log('Node API server started on port '+PORT);
});
