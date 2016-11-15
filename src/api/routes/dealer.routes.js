'use strict';

module.exports = (server, handlers, validate, defaultConfig) => {
  server.route({
    method: 'GET',
    path: '/dealers',
    config: _.assign({}, defaultConfig, {
      handler: handlers.todos.findAll,
    })
  });

  server.route({
    method: 'POST',
    path: '/dealers',
    config: _.assign({}, defaultConfig, {
      handler: handlers.todos.create,
      validate: validate.todos.create
    })
  });

  server.route({
    method: 'GET',
    path: '/dealers/{id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.todos.findById,
      validate: validate.todos.findById
    })
  });

  server.route({
    method: 'PUT',
    path: '/dealers/{id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.todos.updateById,
      validate: validate.todos.updateById
    })
  });

  server.route({
    method: 'DELETE',
    path: '/dealers/{id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.todos.removeById,
      validate: validate.todos.removeById
    })
  });
};
