dItems = require('./models/model'),

module.exports = function (app) {
	'use strict';
	
	//Default gateway
	app.get('*', function (req, res) {
		res.sendfile('./public/index.html');
	});
};