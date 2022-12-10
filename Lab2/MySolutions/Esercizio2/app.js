const express = require('express');
const app = express();
const routes = require('./src/routes/moviesRoutes');
app.use(express.json());
routes(app);
app.listen(3000, () => {
    console.log('Listening on port 3000');
});