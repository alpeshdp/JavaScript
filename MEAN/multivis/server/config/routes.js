var auth = require('./auth');

module.exports = function(app, config) {
    app.get('/partials/*', function(req, res){
        console.log("Requested partial name:" + req.params[0]);
        //res.render('../../public/app/' + req.params[0]);
        res.render(config.rootPath +  '/public/app/' + req.params[0]);
    });


    app.post('/login', auth.authenticate);

    //using *, server index page for any request and let client do routing.
    //or
    //have all matching routes inclioent and server
    app.get('*', function(req, res) {
        res.render('index');
    });
}