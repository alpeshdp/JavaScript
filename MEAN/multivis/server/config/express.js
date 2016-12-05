var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    stylus = require('stylus')
    passport = require('passport');

module.exports = function(app, config) {

    function compile(str, path) {
        return stylus(str).set('filename', path);
    }

    console.log(typeof app);
    app.set('views', config.rootPath + '/server/viewes');
    app.set('view engine', 'jade');


    // app.use(morgan.logger('dev'))
    // create "middleware"
    var logger = morgan('dev');
    app.use(morgan('dev'));
    app.use(cookieParser());

    //app.use(express.bodyParser());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    //app.use(express.session({secret : 'Some super secret'}));
    app.use(session({secret : 'Some super secret'}));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(stylus.middleware(
        {
            src: config.rootPath + '/public',
            compile : compile
        }
    ));

    //this tells express if requested file is present in public directory, server it.
    // /vendor/angular/angular.js
    app.use(express.static(config.rootPath + '/public'));
}