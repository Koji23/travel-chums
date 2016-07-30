/* eslint-disable */

// const User = require('./userModel.js');
// const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');

// module.exports = {
//   validateUserLogin: (username, password, socket) => {
//     User.findOne({ username }, (err, userData) => {
//       var user = false;
//       if (userData) {
//         user = userData.password === password ? username : false;
//       }
//       socket.emit('Authentication', user);
//     });
//   },

//   validateUserSignup: (username, password, socket) => {
//     User.findOne({ username }, (err, userData) => {
//       if (userData) {
//         socket.emit('Authentication', false);
//       } else {
//         User.create({
//           username,
//           password,
//         }).then(() => {
//           socket.emit('Authentication', username);
//         }).catch((err) => {
//           console.log('Failed to create User Data', err);
//         });
//       }
//     });
//   },
// };

const sequelize = require('sequelize');
const db = require('../config.js');


module.exports = {
  
  createNewUser: (socket, id, name, photo) => {
    db.UserTest.findOrCreate({where: {facebookId: id, username: name, displayName: name}})
    .then(function(user) {
      console.log('USER------------------------------', user);
    })
  }
};

