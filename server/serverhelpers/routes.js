const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const chatroomController = require('../db/chatroom/chatroomController.js');
const userController = require('../db/user/userController.js');

var dummyData = [{roomname: '2016-06-01_madrid_to_barcelona', username: 'admin', message: 'Welcome', createdAt:''},
                 {roomname: '2016-06-01_madrid_to_barcelona', username: 'anonymous', message: 'hello', createdAt:''},
                 {roomname: '2016-06-01_madrid_to_barcelona', username: 'ghost', message: 'boo', createdAt:''}];

module.exports = (socket, io, express, app) => {
  socket.on('send message', (message) => {
    console.log('!!!!!!!', message);
    dummyData.push(message);
    io.emit('get messages for room', dummyData);
  });
  socket.on('send typing status', (bool) => {
    console.log('???????', bool);
    io.emit('typing status', true);
  });
  socket.on('get messages for room', (roomname) => {
    console.log(roomname);
    //query database for messages from 'roomname' room
    io.emit('get messages for room', dummyData);
  });


  socket.on('updateMessagesState', (location) => {
    chatroomController.updateMessagesState(location, socket);
  });

  socket.on('createChatRoom', (location) => {
    chatroomController.createChatRoom(location, socket);
  });

  socket.on('addMessageToChatRoom', (msgObj) => {
    chatroomController.addMessageToChatRoom(msgObj.location, msgObj.message, msgObj.username, socket);
  });

  app.get('/auth/facebook', passport.authenticate('facebook'));

  app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    }
  );
};


