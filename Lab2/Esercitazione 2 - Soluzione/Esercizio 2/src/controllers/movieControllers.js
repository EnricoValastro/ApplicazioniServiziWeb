/*
exports.rootByGet = function (req,res){
    res.send('Hello World da get');
}

exports.rootByPost = function (req,res){
    res.send('Hello World da post');
}*/
const data = require('./movies.json');

const rootByGet = (req,res)=>{
    res.send('Hello World da get');
}

const rootByPost = (req,res)=>{
    res.send('Hello World da post');
}

const readAllMovies = (req,res)=>{
    res.json(data);
}

const readMovie = (req,res)=>{
    let i = data.findIndex((item)=>{
        return item.id == req.params.id;
    })
    if(i>-1){
        res.json(data[i]);
    }
    else{
        res.status(404).json({description: 'Movie not found'})
    }
}

const createMovie = (req,res)=>{
    const movie = req.body;
    const n_items = data.length;
    data.push(movie);
    if(data.length>n_items){
        res.json({description: 'New Movie Added'});
    }
    else{
        res.status(500).json({description: 'error occurs adding a new movie'});
    }

}

const updateMovie = (req,res)=>{
    const movie = req.body;
    /*for(var key in movie){
        console.log(movie[key]);
    }*/
    const i = data.findIndex((item)=>{
        return item.id == req.params.id;
    })
    if(i>-1){
        data.splice(i,1,movie);
        res.status(201).json({description:"movie updated"})
    }
    else{
        res.status(404).json({description: 'movie not found'});
    }

}

const deleteMovie = (req,res)=>{
    const i = data.findIndex((item)=>{
        return item.id == req.params.id;
    })
    if(i>-1){
        data.splice(i,1);
        res.json({description:"movie deleted"})
    }
    else{
        res.status(404).json({description: 'movie not found'});
    }
}

module.exports = {
    rootByGet,
    rootByPost,
    readMovie,
    createMovie,
    updateMovie,
    deleteMovie,
    readAllMovies
}