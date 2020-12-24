const express=require('express');
const app=express();
const cors = require('cors');
var bodyParser = require('body-parser');
const port=2060;

const db=require('./util/database');

// routes

const todolistRoute=require('./routes/todolist');

app.use(cors());
// body-parse middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/todolist',todolistRoute);

// error handling
app.use((err, req, res, next) => {
    res.send({
        error: true,
        message: 'Server error',
        err: err
    });
});

app.listen(port,()=>{
    console.log(`app is running at port ${port}`);
})