'use strict';

const mongoose = require('mongoose');

module.exports = (server) => {
  const api = require('./api')(server);
};
