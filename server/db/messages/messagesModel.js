const Sequelize = require('sequelize');

var PublicMessagesTest = Sequelize.define('publicMessagesTest', {
	message: {
		type: Sequelize.STRING
	},
	userId: {
		type: Sequelize.STRING
	},
	roomId: {
		type: Sequelize.STRING
	}
});

PublicMessagesTest.sync();

module.exports = PublicMessagesTest;