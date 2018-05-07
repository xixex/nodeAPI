var mongoCliend = require('mongodb').MongoClient;
var state = {
    db: null
};
exports
    .connect = function (url, done) {
    if (state.db) {
        return done();
    }
    mongoCliend.connect(url, function (err, db) {
        if (err) {
            console.log(err);
        }
        state.db = db;
        done();
    })
};
exports.get = function () {
    return state.db;
};
