const express = require('express');
const app = express();

app.use(express.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test').then(()=>{console.log("connected to DB")});

//mongoose.set('returnOriginal', false);


const userSchema = new mongoose.Schema({
    name: {"type": String, "required": true},
    surname: String,
    age: Number
})

const User = mongoose.model('User',userSchema);
// Create
app.post('/users', (req,res)=>{
    const new_user = new User(req.body);
    new_user.save((err,doc)=>{
        if(err){
            res.send(err);
        }
        res.json(doc);
    })
    })


//Read all
app.get('/users', (req,res)=>{
    User.find({},(err,doc)=>{
        if(err){
            res.send(err);
        }
        res.json(doc);
    })
})

//Read one
app.get('/users/:id',(req,res)=>{
    User.findById(req.params.id,(err,doc)=>{
        if(err){
            res.send(err);
        }
        res.json(doc);
    })
})

//Update
app.put('/users/:id',(req,res)=>{
    User.findByIdAndUpdate(req.params.id,req.body,{new: true},(err,doc)=>{
        if(err){
            res.send(err);
        }
        res.json(doc);
    })
})

//Delete
app.delete('/users/:id',(req,res)=>{
    User.findByIdAndDelete(req.params.id,(err,doc)=>{
        if(err){
            res.send(err);
        }
        res.json({description: 'user ' + doc.id + " deleted"});
    })
})


app.listen(3000,()=>{
    console.log('Listening on http://localhost:3000');
})