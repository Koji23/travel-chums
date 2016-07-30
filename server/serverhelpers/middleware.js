const path = require('path');
const morgan = require('morgan');
const express = require('express');
const passport = require('passport');

module.exports = (app) => {
  app.use(morgan('dev'));
  app.use(passport.initialize());
  app.use(express.static(path.join(__dirname, '/../../client')));
  // app.get('*', function(req, res, next) {
  //   res.sendFile(path.resolve(__dirname + '/../../client/index.html'));
  // });
};
