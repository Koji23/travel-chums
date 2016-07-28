const chatroomController = require('../db/chatroom/chatroomController.js');
const userController = require('../db/user/userController.js');

module.exports = (socket, io) => {
  socket.on('send message', (message) => {
    console.log('!!!!!!!', message);
  });
  socket.on('send typing status', (bool) => {
    console.log('???????', bool);
    io.emit('typing status', true);
  });
  socket.on('get messages for room', (roomname) => {
    console.log(roomname);
    //query database for messages from 'roomname' room
    io.emit('get messages for room', [{roomname: '2016-06-01_madrid_to_barcelona', username: 'admin', message: 'Welcome', createdAt:'', id:'1'},
                                      {roomname: '2016-06-01_madrid_to_barcelona', username: 'anonymous', message: 'hello', createdAt:'', id:'2'},
                                      {roomname: '2016-06-01_madrid_to_barcelona', username: 'ghost', message: 'boo', createdAt:'', id:'3'}]);
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

  socket.on('validateUserLogin', (userCredentials) => {
    userController.validateUserLogin(userCredentials.username, userCredentials.password, socket);
  });

  socket.on('validateUserSignup', (userCredentials) => {
    userController.validateUserSignup(userCredentials.username, userCredentials.password, socket);
  });


};
