var mongoose = require('mongoose'),
Schema = mongoose.Schema,
passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    username: String,
    password: String,
    created_at: Date,
    last: Date,
    birthdate: Date
});

Account.plugin(passportLocalMongoose, {
    limitAttempts: true
});

module.exports = mongoose.model('Account', Account);
