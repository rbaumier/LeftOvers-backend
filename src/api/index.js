'use strict';

module.exports = (server) => {
  const handlers = require('./handlers')();
  const validate = require('./validate')();
  const routes = require('./routes')(server, handlers, validate);

  return routes;
};
