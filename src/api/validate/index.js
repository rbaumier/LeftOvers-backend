'use strict';

const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = () => {
  return {
    todos: require('./todos')(Joi)
  };
};
