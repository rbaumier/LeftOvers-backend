'use strict';

const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const jwt2Auth = require('hapi-auth-jwt2');
const Massive = require('massive');

module.exports = (server, packageJSON, f) => {
  const db = Massive.connectSync(config.postgres);
  const domains = require('./domains')(db);
  const { AuthService } = require('./services')(domains);
  const handlers = require('./handlers')(domains);
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
          version: packageJSON.version
        }
      },
      routes: {
        prefix: '/api'
      }
    }], f);
  });
};
