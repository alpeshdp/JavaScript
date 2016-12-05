var passport = require('passport');

module.exports = function(app, config) {
    app.get('/partials/*', function(req, res){
        console.log("Requested partial name:" + req.params[0]);
        //res.render('../../public/app/' + req.params[0]);
        res.render(config.rootPath +  '/public/app/' + req.params[0]);
    });


    app.post('/login', function(req, res, next) {

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
    });

    //using *, server index page for any request and let client do routing.
    //or
    //have all matching routes inclioent and server
    app.get('*', function(req, res) {
        res.render('index');
    });
}