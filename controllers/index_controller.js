var config = require('../config/config');
var db = require('../config/database');
var bodyParser = require('body-parser');
var md5 = require('md5');

module.exports.controller = (index) => {  
// get homepage  


index.get('/', (req, res) => {    
	res.render('index', 
		{ 	
			title: config.title ,
			div_id: 'header-holder',
			content: 'home',
			url: req.url,
			body_class: ''
		});  
});

index.get('/login', (req, res) => {
	res.render('index', {
		title: config.title,
		div_id: '',
		content: 'login',
		body_class: 'fullpage',
		url: req.url
	});
}); 

index.post('/login', (req, res) => {
	var username = req.body.username;
	var password = md5(req.body.password);

    var getLogin = "SELECT * FROM login WHERE username = '"+username+"' AND password = '"+password+"' ";

    db.pool.query(getLogin, function(err, results){
    		if(err){
    		res.send(err);
    		} else {
    			if(!results || results.length == 0) {

    			req.flash('msg', 'ok');
    			res.render('index', {
					title: config.title,
					div_id: '',
					content: 'login',
					body_class: 'fullpage',
					url: req.url
				});

    			} else {
    			req.flash('msg', 'fail');
    			res.render('index', {
					title: config.title,
					div_id: '',
					content: 'login',
					body_class: 'fullpage',
					url: req.url
				});
    			
    			}
    		
    		}
    	})

})

} 