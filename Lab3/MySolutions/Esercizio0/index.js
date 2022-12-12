const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
mongoose.connect('mongodb://localhost:27017/test');

const userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
});
const User = new mongoose.model('User', userSchema);    //terzo parametro opzionale, nome della collezzione 'utenti' mongoose la crea di default

app.get('/', (req, res) => {
   res.send('Hello World');
});
app.get('/users', (req, res) => {
    User.find({}, (err, doc) => {
        if(err) {
            res.send(err);
        }
        else{
            res.json(doc);
        }
    });
});

app.post('/users', (req, res) => {
   const newUser = new User(req.body);
    newUser.save((err, doc) => {
       if(err){
           res.send(err);
       }
       else{
           res.json(doc);
       }
    });
});

app.get('/users/:name', (req, res) => {
    User.find({name: req.params.name}, (err, doc) => {
       if(err){
           res.send(err);
       }
       else{
              res.json(doc);
       }
    });
});

app.put('/users/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, doc) => {
        if(err){
            res.send(err);
        }
        else{
            res.json(doc);
        }
    });
});

app.delete('/users/:id', (req, res) => {
   User.findByIdAndDelete(req.params.id, (err, doc) => {
       if(err){
           res.send(err);
       }
       else{
           res.json(doc);
       }
   });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});