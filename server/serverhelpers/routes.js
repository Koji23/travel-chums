 /* eslint-disable */
const path = require('path');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const chatroomController = require('../db/chatroom/chatroomController.js');
const userController = require('../db/user/userController.js');
const messagesController = require('../db/messages/messagesController.js');
const sequelize = require('../db/config.js');
const bluebird = require('bluebird');


var dummyData = [{roomname: '2016-06-01_madrid_to_barcelona', username: 'admin', message: 'Welcome', createdAt:''},
                 {roomname: '2016-06-01_madrid_to_barcelona', username: 'anonymous', message: 'hello', createdAt:''},
                 {roomname: '2016-06-01_madrid_to_barcelona', username: 'ghost', message: 'boo', createdAt:''},
                 {roomname: '2016-06-01_madrid_to_barcelona', username: 'ghostyyy', message: 'boohooo', createdAt:''}];

module.exports = (socket, io, app) => {

/// COMPLETE 

  socket.on('send message', (message, roomname) => {
    messagesController.createMessage(message, socket);
    // console.log('heard send message', message);
    // messagesController.grabMessages(roomname, socket);
  });

/// COMPLETE

  socket.on('send typing status', (bool) => {
    io.emit('typing status', true);
  });

///UPDATE CONTROLLER FOR LISTENERR

  socket.on('get messages for room', (roomname) => {
    messagesController.grabMessages(roomname, socket);
  });

/// TYING IN TO FRONT END

  socket.on('send itinerary', (roomname) => {
    chatroomController.createChatRoom(roomname);
  });
  socket.on('get chatrooms', (username) => {
    chatroomController.getChatRooms(username, socket);
  })


  socket.on('updateMessagesState', (location) => {
    chatroomController.updateMessagesState(location, socket);
  });

  socket.on('createChatRoom', (location) => {
    chatroomController.createChatRoom(location, socket);
  });

  // socket.on('addMessageToChatRoom', (msgObj) => {
  //   chatroomController.addMessageToChatRoom(msgObj.location, msgObj.message, msgObj.username, socket);
  // });

  app.get('/auth/facebook', passport.authenticate('facebook'));

  app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
      var redirectPromise = function(page) {
          return new Promise(function(resolve, reject) {
              res.redirect(page, function (err, response) {
                if (err) {
                  reject(err);
                } else {
                    resolve(res.send(newInfo));
                }
              });
          })
      };
      // Successful authentication, redirect ho11me.
      res.redirectPromise('/').then(function(data){
        // res.send({username:1req.user.displayName, photo:req.user.photos[0].value})
        console.log("*&^%$%$#@!",data);
      });
  });

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
  });

};