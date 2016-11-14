'use strict';
require('./bootstrap');

const Hapi = require('hapi');
const server = new Hapi.Server();
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const packageJSON = require('./package');

server.connection({
  host: 'localhost',
  port: config.api.port
});

require('./src')(server);

server.register([Inert, Vision, {
  'register': HapiSwagger,
  'options': {
    'info': {
      'title': packageJSON.name,
      'version': packageJSON.version,
    }
  }
}], error => {
  server.start(err => {
    console.log(error || err || `Server running at ${server.info.uri}`);
  });
});
