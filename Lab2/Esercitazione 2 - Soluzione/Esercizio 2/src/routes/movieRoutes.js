const movieControllers = require('../controllers/movieControllers');
module.exports =  (app)=>{
    app.route('/')
        .get(movieControllers.rootByGet)
        .post(movieControllers.rootByPost)
    app.route('/movies')
        .get(movieControllers.readAllMovies)
        .post(movieControllers.createMovie)
    app.route('/movies/:id')
        .get(movieControllers.readMovie)
        .put(movieControllers.updateMovie)
        .delete(movieControllers.deleteMovie)
}