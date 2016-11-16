'use strict';

module.exports = (server, handlers, validate, defaultConfig) => {
  server.route({
    method: 'GET',
    path: '/api/users',
    config: _.assign({}, defaultConfig, {
      handler: handlers.users.findAll,
    })
  });

  server.route({
    method: 'POST',
    path: '/api/users',
    config: _.assign({}, defaultConfig, {
      handler: handlers.users.create,
      validate: validate.users.create
    })
  });

  server.route({
    method: 'GET',
    path: '/api/users/{user_id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.users.findById,
      validate: validate.users.findById
    })
  });

  server.route({
    method: 'PUT',
    path: '/api/users/{user_id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.users.updateById,
      validate: validate.users.updateById
    })
  });

  server.route({
    method: 'DELETE',
    path: '/api/users/{user_id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.users.removeById,
      validate: validate.users.removeById
    })
  });
};
