const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path');
const routes = require('./src/routes/moviesRoutes');

global.appRoot = path.resolve(__dirname);


const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/test');

app.use(cors())

//Per gestire i parametri passati nel corpo della richiesta http.

app.use(express.json());


routes(app);

app.use((req, res)=> {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(PORT,() =>{
  console.log('Node API server started on port '+PORT);
});
