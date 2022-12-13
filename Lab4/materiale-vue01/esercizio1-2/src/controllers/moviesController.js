const mongoose = require('mongoose');
const Movie = require("../models/moviesModel.js")(mongoose);

exports.show_index = (req, res)=> {
	res.sendFile(global.appRoot  + '/www/movies.html');
};

exports.show_crud = (req, res)=> {
	res.sendFile(global.appRoot  + '/www/movies-crud.html');
};

exports.list_movies = (req, res)=> {
	Movie.find().exec((err, movie)=> {
		if (err)
			res.send(err);
		res.json(movie);
	});
};

exports.read_movie = (req, res)=> {
	/*
	TODO cast req.params.id to ObjectId
	*/
	Movie.findById(req.params.id).exec((err, movie)=> {
		if (err)
			res.send(err);
		else{
			if(movie==null){
				res.status(404).send({
					description: 'Movie not found'
				});
			}
			else{
				res.json(movie);
			}
		}
	});
};

exports.create_movie = (req, res)=> {
	const new_movie = new Movie(req.body);
	new_movie.save((err, movie) =>{
		if (err)
			res.send(err);
		res.status(201).json(movie);
	});
};

exports.update_movie = (req, res)=> {
	Movie.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, movie) =>{
		if (err)
			res.send(err);
		else{
			if(movie==null){
				res.status(404).send({
					description: 'Movie not found'
				});
			}
			else{
				res.json(movie);
			}
		}
	});
};

exports.delete_movie = (req, res)=> {
	Movie.deleteOne({_id: req.params.id}, (err, result)=> {
		if (err)
			res.send(err);
		else{
			if(result.deletedCount==0){
				res.status(404).send({
					description: 'Movie not found'
				});
			}
			else{
				res.json({ message: 'Movie successfully deleted' });
			}
		}
  });
};
