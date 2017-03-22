'use strict';

const authenticate = require(__dirname + '/../controllers/authenticate');
const admin = require(__dirname + '/../controllers/admin');
const user = require(__dirname + '/../controllers/user');

module.exports = function(router){


	//AUTHENTICATE
	router.post('/login', authenticate.login);
	router.post('/logout', authenticate.logout);
	router.put('/signup', authenticate.signup);
	router.post('/getName', authenticate.getName);

	//ADMIN
	router.delete('/deleteUser', admin.deleteUser);

	//USER
	router.post('/computeCarbon', user.computeCarbon);

	return router;
};
