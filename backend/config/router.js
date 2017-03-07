'use strict';

const authenticate = require(__dirname + '/../controllers/authenticate');

module.exports = function(router){

	router.post('/login', authenticate.login);
	router.post('/logout', authenticate.logout);

	return router;
};