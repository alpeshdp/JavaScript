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

}