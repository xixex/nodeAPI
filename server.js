var express = require('express');
var app = express()

var artists = [
  {
    id: 1,
    name: 'Deep Purple'
  },
  {
    id: 2,
    name: 'Iron Maden'
  },
  {
    id: 3,
    name: 'Metallica'
  }
];

app.get('/', function(req, res) {
  res.send('Hello API');
});

app.get('/artist', function(req, res) {
  res.send(artists);
});

app.listen(8000, function() {
  console.log('Server is started on 8000')
});
