exports.hello_world = (req, res) => {
    res.send('Hello World!');
};

const movies = require('./movies.json');
exports.readAllMovies = (req, res) => {
    res.json(movies);
};

exports.readMovie = (req, res) => {
    const id = req.params.id;
    const i = movies.findIndex((item) => {
        return item.id == id
    });
    if(i >-1){
        res.json(movies[i]);
    }
    else{
        res.status(404).send('Not found');
    }
};


exports.createMovie = (req, res) => {
    const len = movies.length;
    movies.push(req.body);
    if(movies.length > len){
        res.send('Movie created');
    }
    else{
        res.status(500).send('Error');
    }
};

exports.updateMovie = (req, res) => {
    const index = movies.findIndex((mov) => { return mov.id == req.params.id});
    if(index > -1){
        movies.splice(index, 1, req.body);
        res.send('Movie updated');
    }
    else{
        res.status(404).send('Not found');
    }
};

exports.deleteMovie = (req, res) => {
  const index = movies.findIndex((mov) => { return mov.id == req.params.id});
  if(index > -1){
      movies.splice(index, 1);
      res.send('Movie deleted');
  }
  else{
        res.status(404).send('Not found');
  }
};