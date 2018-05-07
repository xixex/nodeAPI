'use strict'
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var db;


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded


app.get('/', function (req, res) {
    res.send('Hello API');
});


//UPDATE
app.put('/artist/:id', function (req, res) {
    db.collection('artists').updateOne(
        {_id: objectId(req.params.id)},
        {name: req.body.name},
        function (err,result) {
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);

        }
    )

});

app.delete('/artist/:id', function (req, res) {
    db.collection('artists').deleteOne(
        {_id: objectId(req.params.id)},
        function (err,result) {
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    )
});

// ADD ONE
app.post('/artist', function (req, res) {
    var artist = {
        name: req.body.name
    };
    db.collection('artists').insert(artist, function (err, result) {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.send(artist);
    });

});

//GET ALL

app.get('/artist', function (req, res) {
    db.collection('artists').find().toArray(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(docs);
    })
    // res.send(artists);
});

//GET ONE
app.get('/artist/:id', function (req, res) {
   db.collection('artists').findOne({_id: objectId(req.params.id)}, function (err,doc) {
       if (err){
           console.log(err);
           return res.sendStatus(500);
       }
       res.send(doc);
   })


});


mongoClient.connect('mongodb://localhost:27017/myapi', function (err, database) {
    if (err) {
        return console.error(err);
    }
    db = database;
    app.listen(8000, function () {
        console.log('Server is started on 8000')
    });

})
