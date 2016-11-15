'use strict';

const defaultConfig = {
  description: 'no notes',
  notes: 'no description',
  tags: ['api'],
  auth: false // TO REMOVE ONCE WE HAVE AUTH
};

module.exports = (server, handlers, validate) => {
  require('./todos.routes')(server, handlers, validate, defaultConfig);
};
