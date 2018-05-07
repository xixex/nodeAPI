'use strict'
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoClient = require ('mongodb').MongoClient;

var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var db;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

var artists = [
  {
    id: 1,
    name: 'Deep Purple'
  }, {
    id: 2,
    name: 'Iron Maden'
  }, {
    id: 3,
    name: 'Metallica'
  }
];
app.put('/artist/:id', function (req, res) {
  console.log(req.params);
  var artist = artists.find(function(artist) {
    return artist.id === + req.params.id;
  })
  artist.name = req.body.name;
  res.send(200);
});

app.delete('/artist/:id', function (req, res) {
  artists = artists.filter(function (artist) {
    return artist.id !== +req.params.id;
  res.send(200);
  });
});

app.post('/artist', function(req, res) {
  var artist = {
    name: req.body.name
  }
  // res.send(artist)

})

app.get('/', function(req, res) {
  res.send('Hello API');
});

app.get('/artist', function(req, res) {
  res.send(artists);
});

app.get('/artist/:id', function(req, res) {
  console.log(req.params);
  var artist = artists.find(function(artist) {
    return artist.id === + req.params.id;
  })
  res.send(artist);
})


mongoClient.connect('mongodb://localhost:27017/myapi', function (err, database) {
  if (err){
    return console.error(err);
  }
  db = database;

  app.listen(8000, function() {
    console.log('Server is started on 8000')
  });

})
