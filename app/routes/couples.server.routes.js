// Invoke 'strict' JavaScript mode
'use strict';

var users = require('../../app/controllers/users.server.controller'),
	couples = require('../../app/controllers/couples.server.controller');

module.exports = function(app) {
	app.route('/api/couples')
		.get(couples.list)
		.post(users.requiresLogin, couples.create);

	app.route('/api/couples/:coupleId')
		.get(couples.read)
		.put(users.requiresLogin, couples.hasAuthorization, couples.update)
		.delete(couples.requiresLogin, couples.hasAuthorization, couples.delete);

	app.param('coupleId', couples.coupleByID);
};
