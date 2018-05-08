var artistDao = require('./artistDao');
module.exports = {
    all: function (cb) {
        artistDao.all(cb)
    },

    findById:
        function (id, cb) {
            artistDao.update(id, cb)
        },

    create: function (artist, cb) {
        artistDao.create(artist, cb)
    },

    delete: function (id, cb) {
        artistDao.all(id, cb)
    },

    update: function (id, newData, cb) {
        artistDao.all(id, newData, cb)
    }
};