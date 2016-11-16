'use strict';
require('./bootstrap');

const Hapi = require('hapi');
const server = new Hapi.Server();
const packageJSON = require('./package');

server.connection({
  port: config.api.port,
  routes: {
    cors: config.api.cors
  }
});

require('./src')(server, packageJSON, (err) => {
  server.start(err => {
    if(err) {
      throw err;
    }
    console.log(`Server running at ${server.info.uri}`);

    server.on('response', function (request) {
      console.log(request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.url.path + ' --> ' + request.response.statusCode);
    });
  });
});


