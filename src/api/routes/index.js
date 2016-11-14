'use strict';

const defaultConfig = {
  description: 'no notes',
  notes: 'no description',
  tags: ['api'],
};

module.exports = (server, handlers, validate) => {
  require('./todos.routes')(server, handlers, validate, defaultConfig);
};
