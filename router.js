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

router.post('/login', function(req, res){
	data = req.body;
	user.login(data, function(result){
		if(!result) {
			res.render('login', {layout: 'base', title: "Login", message: "Invalid Login"});
		} else {
			res.redirect('/');
		}
	});
});

router.get('/register', function(req, res){
	res.render('register', {layout: 'base', title: "Register"});
});

router.post('/register', function(req, res){
	data = req.body;
	user.register(data, function(result){
		if(result) {
			res.redirect('/');
		} else {
			res.render('register', {layout: 'base', title: "Register", message: "Invalid Registration"});
		}
	});
});

module.exports = router;