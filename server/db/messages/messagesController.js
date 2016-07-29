const sequelize = require('sequelize');
const databaseModels = require('../config.js');

console.log(databaseModels.PublicMessagesTest);
module.exports = {
	createMessage: (socket) => {
		console.log('user', socket.username);
		console.log('room', socket.room);
		// databaseModels.userTest.findOne({
		// 	where: {
		// 		username: socket.username
		// 	}
		// }).then(function(data){
		// 	console.log(data)
		// });
		// databaseModels.PublicMessagesTest.findOrCreate({
		// 	where: {
		// 	message: socket.message,
		// 	userTestId: 1,
		// 	publicRoomsTestId: 1
		// }});
  	},
  	grabMessages: (socket) => {
  		console.log(socket);
  		databaseModels.PublicMessagesTest.findAll({
  			// where: {
  			// 	roomId: 1
  			// }
  		})
  	}
};


