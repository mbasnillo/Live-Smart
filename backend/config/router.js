'use strict';

const authenticate = require(__dirname + '/../controllers/authenticate');
const admin = require(__dirname + '/../controllers/admin');
const user = require(__dirname + '/../controllers/user');

module.exports = function(router){

	router.post('/login', authenticate.login);
	router.post('/logout', authenticate.logout);
	router.put('/signup', authenticate.signup);
	router.post('/getName', authenticate.getName);
	router.delete('/deleteUser', admin.deleteUser);

	router.post('/test', user.test);

	return router;
};