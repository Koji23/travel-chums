const sequelize = require('sequelize');
const db = require('../config.js');

module.exports = {
	assignUserToRoom: (socket) => {
		UsersRoomsTest.create({
			userId: 3,
			roomId: 5
			)}.then((data) => {
      socket.emit('UPDATE SOME STATE HERE', data);
    }).catch((err) => {
      console.log(err);
    });
  },
})
