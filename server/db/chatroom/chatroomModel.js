// const mongoose = require('mongoose');

// const chatroomSchema = mongoose.Schema({
//   location: String,
//   messages: [{message: String, username: String, createdAt: {type: Date, default: Date.now}}],
// });

// const Chatroom = mongoose.model('Chatroom', chatroomSchema);

//////

const Sequelize = require('sequelize');

var PublicRoomsTest = Sequelize.define('publicRoomsTest', {
	roomName: {
		type: Sequelize.STRING
	}
});

PublicRoomsTest.sync();

module.exports = PublicRoomsTest;