const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./src/routes/moviesRoutes');
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/test');
routes(app);

app.listen(3000, () => {
   console.log('Example app listening on port 3000!');
});