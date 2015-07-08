var express = require('express');

var router = express.Router();


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
	console.log(data);
	res.json(data);
});

module.exports = router;