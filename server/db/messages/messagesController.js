 /* eslint-disable */

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
  },
  grabMessages: (roomname, socket) => {
    var messageData = [];
    return databaseModels.PublicRoomsTest.findOne({where: {roomName: roomname}})
    .then(function(data) {
      return databaseModels.PublicMessagesTest.findAll({where: {publicRoomsTestId: data.dataValues.id}})     
    })
    .then(function(data2){
      
      data2.forEach(function(messageInstance) {
        messageData.push({username: messageInstance.dataValues.userTestId, message: messageInstance.dataValues.message})
      })
      
      return messageData;
    })
    .then(function(data3) {
      socket.emit('get messages for room', data3);
    })
  }
};


//      grabMessages: (roomname, socket) => {
//           var messageData = [];
//           databaseModels.PublicRoomsTest.findOne({
//             where: {
//               roomName: roomname
//             }
//           })
//           .then(function(data) {
//             console.log(data);
//           databaseModels.PublicMessagesTest.findAll({
//               where: {
//                   publicRoomsTestId: 
//               }
//           })
//           .then(function(data) {
//             data.forEach(function(messageInstance) {
//               messageData.push(messageInstance.message)
//             })
//           })
//           .then(function(messageData) {
//             socket.emit('send message')
//           })
            
//           })
//       }
// };