'use strict';

const Joi = require('joi');

module.exports = () => {
  return {
    dealers: require('./dealers')(Joi),
    users: require('./users')(Joi),
    preferences: require('./preferences')(Joi),
    deals: require('./deals')(Joi),
    ratings: require('./ratings')(Joi)
  };
};
