var Artist = require('../models/artist');
var objectId = require('mongodb').ObjectID;

module.exports = {
    all: function (req, res) {
        Artist.all(function (err, docs) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            res.send(docs);
        })
    },
    findById: function (req, res) {
        Artist.findById(objectId(req.params.id), function (err, doc) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send(doc);
        })

    },
    create: function (req, res) {
        var artist = {
            name: req.body.name
        };
        Artist.create(artist, function (err, result) {
            if (err) {
                console.error(err);
                return res.sendStatus(500);
            }
            res.send(artist);
        });
    },
    delete: function (req, res) {
        Artist.delete(objectId(req.params.id), function (err) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        })

    },
    update: function (req,res) {
        Artist.update(objectId(req.params.id), req.body, function (err, result) {
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);

        })
    }

}