var config = require('../config/config.js');
var mysql = require('../config/database.js');

module.exports.controller = (app) => {  
// get homepage  

app.use('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

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

app.post('/login', (req, res) => {
	 res.send(req.body);
	 console.log(req.body);

})

} 