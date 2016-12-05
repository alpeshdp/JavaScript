var mongoose = require('mongoose');

module.exports = function(config) {

    mongoose.connect(config.db)
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error...'))
    db.once('open', function() {
        console.log('Connected to Mongo DB');
    })

    var messageSchema = mongoose.Schema({
        message : String
    });
    var Message = mongoose.model('Message', messageSchema);

    var userSchema = mongoose.Schema({
       userName : String,
       firstName : String,
       lastName : String
    });
    var User = mongoose.model('User', userSchema);
    //User.find({}).exec(function(err, collection) {
    User.find({}, function(err, collection) {
        if(collection.length==0) {
            User.create({firstName:'Alpesh', lastName:'Parekh', userName:'alpeshp'});
            User.create({firstName:'Pinal', lastName:'Parekh', userName:'pinalp'});
            User.create({firstName:'Akshara', lastName:'Parekh', userName:'akup'});
            User.create({firstName:'Yogi', lastName:'Parekh', userName:'yogip'});
        }
    });

}