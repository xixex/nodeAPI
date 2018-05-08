'use strict'
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

var db = require('./db');
var artistController = require('./artist/artistController');


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded


app.get('/', function (req, res) {
    res.send('Hello API');
});


//UPDATE
app.put('/artist/:id', artistController.update);

//DELETE ONE
app.delete('/artist/:id', artistController.delete);

// ADD ONE
app.post('/artist', artistController.create);

//GET ALL
app.get('/artist', artistController.all);

//GET ONE
app.get('/artist/:id', artistController.findById);


db.connect('mongodb://localhost:27017/myapi', function (err) {
    if (err) {
        return console.error(err);
    }
    app.listen(8000, function () {
        console.log('Server is started on 8000')
    });

})
