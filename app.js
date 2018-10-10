var express = require('express');
var app = express();
var nunjucks = require('nunjucks');

var port = process.env.PORT || 3000;

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('view engine', 'njk');

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/person/:id', function(req, res) {
    res.render('person', { ID: req.params.id });
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'Michael', lastname: 'Busby' });
});

app.listen(port);

