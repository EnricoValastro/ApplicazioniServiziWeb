const mongoose = require('mongoose');
const moviesModel = require('../models/moviesModel')(mongoose)

exports.welcome = (req, res) => {
    res.send('Welcome to the movies API!');
};
exports.getAllMovies = (req, res) => {
    moviesModel.find({}, (err, doc) => {
        res.json(doc);
    });
};
exports.getMovieById = (req, res) => {
  moviesModel.findById(req.params.id, (err, doc) => {
     res.json(doc);
  });
};
exports.addMovie = (req, res) => {
  const newMovie = new moviesModel(req.body);
  newMovie.save((err, doc) => {
      if(err){
          res.send(err);
      }
      else{
          res.json(doc);
      }

  });
};
exports.removeMovie = (req, res) => {
  moviesModel.findByIdAndDelete(req.params.id, (err, doc) => {
      res.json(doc);
  });
};

exports.updateMovie = (req, res) => {
  const newContent = req.body;
    moviesModel.findByIdAndUpdate(req.params.id, newContent, (err, doc) => {
        res.json(doc);
    });
};

exports.getMoviesByQuery = (req, res) => {
    moviesModel.find({actors: req.params.name, year: {$gte: req.params.by, $lte: req.params.ly}}, (err, doc) =>{
        if(err){
            res.send(err);
        }
        else{
            res.json(doc);
        }
    });
};