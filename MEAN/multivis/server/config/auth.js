var passport = require('passport');

exports.authenticate = function(req, res, next) {

    var auth = passport.authenticate('local', function(err, user) {
        console.log('inside authenticate callback: ' + err);
        console.log('inside authenticate callback: ' + user);
        if(err) {return next(err);}
        if(!user) {res.send({success:false})}
        req.logIn(user, function(err) {
            console.log('inside req.login callback: ' + user);
            if(err) {return next(err);}
            res.send({success:true, user:user});
        });
    });
    console.log('calling auth');
    console.log(req.body)
    if(req.body.username)
        console.log('nfvsjdjffjshdfj: ' + req.body.username)
    auth(req, res, next);
}