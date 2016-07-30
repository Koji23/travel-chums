// const Chatroom = require('./chatroomModel.js');
// const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');

const sequelize = require('sequelize');
const db = require('../config.js');


module.exports = {
  // takes in array of lat and long and will query database to see if a token exists in that location
  //if it exists will return an array of messages from db, if not, will return null
  // updateMessagesState: (location, socket) => {
  //   Chatroom.findOne({ location }, (err, tokenData) => {
  //     socket.emit('updateMessagesState', tokenData);
  //   });
  // },

  // takes in array of lat and long and will write a key (lat long array) value (empty array for messages) to db
  createChatRoom: (socket) => {
    db.PublicRoomsTest.findOrCreate({where: { roomName: socket.itinerary}}).then(function(data) {
      db.UserTest.findOrCreate({where: {username: socket.username}}).then(function(data2) {
        db.UsersRoomsTest.findOrCreate({where: {roomId: data[0].dataValues.id, userId: data2[0].dataValues.id}})
      })
    });
  },

  getChatRooms: (username, socket) => {
    db.UserTest.findOne({where: {username: username.username}}).then(function(data) {
      db.UsersRoomsTest.findAll({where: {userId: data.id}}).then(function(data) {
        var roomIdList = data.map(function(item) {
          return item.dataValues.roomId;
        })
        // console.log('039847102938471092834701928347198023471p3984712938471092384710928347', roomIdList)
        db.PublicRoomsTest.findAll({where: {id: {$or: roomIdList}}}).then(function(data1) {
          var roomNames = data1.map(function(item) {
            return item.dataValues.roomName;
          })
          // console.log(roomNames);
          socket.emit('send rooms to front end', roomNames);
        })
      })
    })
  }

  // that inputs a {location: [long, lat], message: 'string'} object and pushes string into that token's messages array
  // addMessageToChatRoom: (location, message, username, socket) => {
  //   var tokenDataReturn = {};
  //   Chatroom.findOne({ location }, (err, tokenData) => {
  //     tokenDataReturn = tokenData;
  //     var newMessages = tokenData.messages;
  //     newMessages.unshift({ message, username });
  //     tokenDataReturn.messages = newMessages;
  //     Chatroom.update({ location }, { messages: newMessages }, (err, dataBaseResponse) => {
  //       socket.emit('updateMessagesState', tokenDataReturn);
  //     });
  //   });
  // },
};

