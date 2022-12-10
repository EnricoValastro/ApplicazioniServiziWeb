const movieControllers = require('../controllers/moviesControllers');
module.exports = (app) => {
    app.route('/')
        .get(movieControllers.hello_world)
        //.post(movieControllers.rootByPost)
    app.route('/movies')
        .get(movieControllers.readAllMovies)
        .post(movieControllers.createMovie)
    app.route('/movie/:id')
        .get(movieControllers.readMovie)
        .put(movieControllers.updateMovie)
        .delete(movieControllers.deleteMovie)
}