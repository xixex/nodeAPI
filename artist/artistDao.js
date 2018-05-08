var db = require('../db');


module.exports =
    {
        all: function (cb) {
            db.get().collection('artists').find().toArray(function (err, docs) {
                cb(err, docs);
            })
        },
        findById: function (id, cb) {
            db.get().collection('artists').findOne({_id: id}, function (err, doc) {
                cb(err, doc)
            });
        },
        create: function (artist, cb) {

            db.get().collection('artists').insert(artist, function (err, result) {
                    cb(err, result);
                }
            );
        },
        delete: function (id, cb) {
            db.get().collection('artists').deleteOne({_id: id}, function (err) {
                cb(err);
            })
        },
        update: function (id, newData, cb) {
            db.get().collection('artists').updateOne(
                {_id: id},
                {name: newData.name},
                function (err, result) {
                    cb(err, result)
                });

        }
    };