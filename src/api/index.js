'use strict';

const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const jwt2Auth = require('hapi-auth-jwt2');

module.exports = (server, packageJSON, f) => {
  const domains = require('./domains')();
  const { AuthService } = require('./services')(domains);
  const handlers = require('./handlers')();
  const validate = require('./validate')();
  const routes = require('./routes')(server, handlers, validate);

  server.register(jwt2Auth, (err) => {
    if (err) {
      return f(err);
    }

    server.auth.strategy('jwt', 'jwt', {
      key: config.api.jwt2.secret,
      validateFunc: AuthService.check,
      verifyOptions: { algorithms: ['HS256'] }
    });

    server.auth.default('jwt');

    server.register([Inert, Vision, {
      register: HapiSwagger,
      options: {
        info: {
          title: packageJSON.name,
          version: packageJSON.version,
        }
      }
    }], f);
  });
};
