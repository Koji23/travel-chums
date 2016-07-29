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
    databaseModels.publicsRoomsTest.create({
      roomName: 'roomname',
    }).then((data) => {
      socket.emit('UPDATE ROOM STATE HERE', data);
    }).catch((err) => {
      console.log('createToken data failed to save to database', err);
    });
  },

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
