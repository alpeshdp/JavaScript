var express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/mongo')(config);

var User = mongoose.model('User');

passport.use(new LocalStrategy(
    function(username, password, done) {
        console.log('inside strategy: ' + username);
        User.findOne({userName : username}, function(err, user) {
            console.log(user);
            console.log(err);
            if(user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }
));
passport.serializeUser(function(user, done) {
    console.log('serializeUser' + user);
    if(user) {
        return done(null, user._id);
    }
});
passport.deserializeUser(function(id, done) {
    console.log('deserializeUser' + id);
    User.findOne({_id:id}, function(err, user) {
        if(user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    })
});


require('./server/config/routes')(app, config);

app.listen(config.port);
console.log("Listening on port:" + config.port);

