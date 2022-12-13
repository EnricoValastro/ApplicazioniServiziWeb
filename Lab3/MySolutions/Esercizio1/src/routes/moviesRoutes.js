const moviesController = require('../controllers/moviesControllers');

module.exports = (app) => {
    app.route('/').get(moviesController.welcome);
    app.route('/movies')
        .get(moviesController.getAllMovies)
        .post(moviesController.addMovie);
    app.route('/movie/:id')
        .get(moviesController.getMovieById)
        .delete(moviesController.removeMovie)
        .put(moviesController.updateMovie);
    /*
    app.route('/movies/:name/:by/:ly')
        .get(moviesController.getMoviesByQuery);
    */
    app.route('/movies/querydb')
        .get(moviesController.getMoviesByQuery);
};