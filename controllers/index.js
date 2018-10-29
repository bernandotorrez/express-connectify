var config = require('../config/config.js');
var mysql = require('../config/database.js');

module.exports.controller = (app) => {  
// get homepage  
app.get('/', (req, res) => {    
	res.render('index', 
		{ 	
			title: config.title ,
			div_id: 'header-holder',
			content: 'home',
			url: req.url,
			body_class: ''

		});  
});

app.get('/login', (req, res) => {
	res.render('index', {
		title: config.title,
		div_id: '',
		content: 'login',
		body_class: 'fullpage',
		url: req.url
	})
}); 

app.get('/query', (req, res) => {
var data = mysql.pool.query(
  'SELECT * FROM login',
  function(err, results, fields) {
    res.send(results);
  }
);



});

} 