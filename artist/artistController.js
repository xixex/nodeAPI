
var artistService = require ('./artistService');
var objectId = require('mongodb').ObjectID;

module.exports = {
    all: function (req, res) {

        artistService.all(function (err, docs) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }

            res.send(docs);
        })
    },
    
    findById: function (req, res) {
        artistService.findById(objectId(req.params.id), function (err, doc) {
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
        artistService.create(artist, function (err, result) {
            if (err) {
                console.error(err);
                return res.sendStatus(500);
            }
            res.send(artist);
        });
    },
    delete: function (req, res) {
        artistService.delete(objectId(req.params.id), function (err) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        })

    },
    update: function (req,res) {
        artistService.update(objectId(req.params.id), req.body, function (err, result) {
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);

        })
    }

}
