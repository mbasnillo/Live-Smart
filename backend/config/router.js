'use strict';

const authenticate = require(__dirname + '/../controllers/authenticate');
const admin = require(__dirname + '/../controllers/admin');

module.exports = function(router){

	router.post('/login', authenticate.login);
	router.post('/logout', authenticate.logout);
	router.put('/signup', authenticate.signup);
	router.delete('/deleteUser', admin.deleteUser);

	return router;
};