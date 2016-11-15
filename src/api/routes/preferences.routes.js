'use strict';

module.exports = (server, handlers, validate, defaultConfig) => {
  server.route({
    method: 'GET',
    path: '/users/preferences',
    config: _.assign({}, defaultConfig, {
      handler: handlers.preferences.findAll,
    })
  });

  server.route({
    method: 'POST',
    path: '/users/{id}/preferences',
    config: _.assign({}, defaultConfig, {
      handler: handlers.preferences.create,
      validate: validate.preferences.create
    })
  });

  server.route({
    method: 'GET',
    path: '/users/{user_id}/preferences',
    config: _.assign({}, defaultConfig, {
      handler: handlers.preferences.findById,
      validate: validate.preferences.findById
    })
  });

  server.route({
    method: 'PUT',
    path: '/users/{user_id}/preferences',
    config: _.assign({}, defaultConfig, {
      handler: handlers.preferences.updateById,
      validate: validate.preferences.updateById
    })
  });

  server.route({
    method: 'DELETE',
    path: '/users/{user_id}/preferences',
    config: _.assign({}, defaultConfig, {
      handler: handlers.preferences.removeById,
      validate: validate.preferences.removeById
    })
  });
};
