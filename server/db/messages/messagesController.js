const sequelize = require('sequelize');
const databaseModels = require('../config.js');

console.log(databaseModels.PublicMessagesTest);
module.exports = {
    createMessage: (socket) => {
        console.log('user', socket.username);
        console.log('room', socket.room);
        return databaseModels.UserTest.findOne({where: {username: socket.username}})
        .then(function(data) {
            console.log('username id', data.id);
            return databaseModels.PublicRoomsTest.findOne({where: {roomName: socket.room}})
            .then(function(data2) {
                console.log('room id', data2.id);
                return databaseModels.PublicMessagesTest.create({
                    message: socket.message,
                    userTestId: data.id,
                    publicRoomsTestId: data2.id
                })
            })
        });
        // databaseModels.PublicMessagesTest.findOrCreate({
        //     where: {
        //     message: socket.message,
        //     userTestId: 1,
        //     publicRoomsTestId: 1
        // }});
      },
      grabMessages: (socket) => {
          console.log(socket);
          databaseModels.PublicMessagesTest.findAll({
              where: {
                  roomId: 1
              }
          })
      }
};