var express = require('express');
var app = express();

var path = require('path');
var parser = require('body-parser');
var expressLayout = require('express-ejs-layouts');
var mongoose = require('mongoose');

//Custom Modules
var router = require('./router');

//Connect to DB
mongoose.connect('mongodb://localhost/auth', function (error) {
    if (error) {
        console.log(error);
    }
});

//Configuration App
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middleware
app.use(express.static(path.join(__dirname, 'static')));
app.use(expressLayout);
app.use(parser.urlencoded({
  extended: true
}));


//Routes
app.use(router)

//Server
app.listen('8080', function(){
	console.log('Listening on 8080');
});
