var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    stylus = require('stylus'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
    return stylus(str).set('filename', path);
}


console.log(typeof app);
app.set('views', __dirname + '/server/viewes');
app.set('view engine', 'jade');


// app.use(morgan.logger('dev'))
// create "middleware"
var logger = morgan('dev');
app.use(morgan('dev'));

//app.use(express.bodyParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile : compile
    }
));

//this tells express if requested file is present in public directory, server it.
// /vendor/angular/angular.js
app.use(express.static(__dirname + '/public'));


mongoose.connect('mongodb://localhost/multivion_db')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error...'))
db.once('open', function() {
    console.log('Connected to Mongo DB');
})


var messageSchema = mongoose.Schema({
    message : String
});
var Message = mongoose.model('Message', messageSchema);

app.get('/partials/*', function(req, res){
    console.log("Requested partial name:" + req.params[0]);
    res.render('../../public/app/' + req.params[0]);
})

//using *, server index page for any request and let client do routing.
//or
//have all matching routes inclioent and server
app.get('*', function(req, res) {
    res.render('index');
});
var port = 3030;
app.listen(port);
console.log("Listening on port:" + port);

