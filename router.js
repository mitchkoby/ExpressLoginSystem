var express = require('express');
var path = require('path');
var router = express.Router();

//Database Models
var user = require(path.join(__dirname, 'models/user'));


router.get('/', function(req, res){
	res.render('index', {layout: 'base', title: "Login Test"});
});

router.get('/login', function(req, res){
	res.render('login', {layout: 'base', title: "Login"});
});

router.get('/register', function(req, res){
	res.render('register', {layout: 'base', title: "register"});
});

router.post('/register', function(req, res){
	data = req.body;
	user.register(data)
	res.redirect('/');
});

module.exports = router;