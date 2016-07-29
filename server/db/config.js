// const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');

// module.exports.connect = () => {
//   mongoose.connect('mongodb://127.0.0.1:27017/crumbs2', (err) => {
//     err ? console.log(err) : console.log('db connected');
//   });
// };

/* eslint-disable */

const Sequelize = require('sequelize');

// module.exports.connect = () => {

var sequelize = new Sequelize('travelapp_db', 'keystone', 'password', {
  host: 'ta.cmrtcj07hrzy.us-west-1.rds.amazonaws.com',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

// }



// var sequelize = new Sequelize('travelapp_db', 'keystone', 'password', {
//   host: 'ta.cmrtcj07hrzy.us-west-1.rds.amazonaws.com',
//   dialect: 'mysql',

//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   },
// });

// sequelize
//   .authenticate()
//   .then(function(err) {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(function (err) {
//     console.log('Unable to connect to the database:', err);
//   });


/// Testing Users Model

  var UserTest = sequelize.define('userTest', {
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });


/// Testing Public Rooms Model

  var PublicRoomsTest = sequelize.define('publicRoomsTest', {
  	roomName: {
  		type: Sequelize.STRING
  	}
  });



/// Testing Users Rooms Model

  var UsersRoomsTest = sequelize.define('usersRoomsTest', {
    userId: {
      type: Sequelize.INTEGER
    },
    roomId: {
      type: Sequelize.INTEGER
    }
  });

///  Testing Public messages Model

  var PublicMessagesTest = sequelize.define('publicMessagesTest', {
    message: {
      type: Sequelize.STRING
    }
  });

/// Room Sync

  UserTest.hasMany(PublicMessagesTest);
  PublicRoomsTest.hasMany(PublicMessagesTest);

  UserTest.sync().then(
  PublicRoomsTest.sync().then(
    UsersRoomsTest.sync().then(
    PublicMessagesTest.sync().then(
        function () {
           console.log('All tables created')
  }))));

/// Controllers

exports.PublicMessagesTest = PublicMessagesTest;
exports.UserTest = UserTest;
exports.PublicRoomsTest = PublicRoomsTest;
exports.UsersRoomsTest = UsersRoomsTest;




