var express = require('express');
var router = express.Router();
const mysql = require('../config/database.js');

/* GET home page. */
	router.get('/', function(req, res, next) {
	  res.render('index', { title: 'Express' });
	});

	router.get('/login', function(req, res, next){
		mysql.query('SELECT * from login', function (err, rows, fields) {
		  if (err) throw err
		  	
		  res.render('index', { title: 'Express', data: rows });
		});

		
		
	});

module.exports = router;
