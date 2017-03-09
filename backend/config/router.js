'use strict';

const authenticate = require(__dirname + '/../controllers/authenticate');

module.exports = function(router){

	router.post('/login', authenticate.login);
	router.post('/logout', authenticate.logout);
	router.put('/signup', authenticate.signup);

	return router;
};