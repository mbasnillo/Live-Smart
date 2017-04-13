'use strict';

const authenticate = require(__dirname + '/../controllers/authenticate');
const analytics = require(__dirname + '/../controllers/analytics');
const admin = require(__dirname + '/../controllers/admin');
const user = require(__dirname + '/../controllers/user');

module.exports = function(router){


	//AUTHENTICATE
	router.post('/login', authenticate.login);
	router.post('/logout', authenticate.logout);
	router.put('/signup', authenticate.signup);
	router.post('/getName', authenticate.getName);
	router.get('/getRole', authenticate.getRole);
	router.post('/checkLoggedIn', authenticate.checkLoggedIn);
	router.post('/checkLoggedOut', authenticate.checkLoggedOut);

	//ANALYTICS
	router.get('/getCarbonFootprints', analytics.getCarbonFootprints);
	router.post('/getUserGraph', analytics.getUserGraph);
	router.get('/getStatistics', analytics.getStatistics);
	router.get('/getUsers', analytics.getUsers);

	//ADMIN
	router.delete('/deleteUser', admin.deleteUser);

	//USER
	router.post('/computeCarbon', user.computeCarbon);
	router.put('/answerSurvey', user.answerSurvey);

	return router;
};
