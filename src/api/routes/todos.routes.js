'use strict';

module.exports = (server, handlers, validate, defaultConfig) => {
  server.route({
    method: 'GET',
    path: '/todos',
    config: _.assign({}, defaultConfig, {
      handler: handlers.todos.findAll,
    })
  });

  server.route({
    method: 'POST',
    path: '/todos',
    config: _.assign({}, defaultConfig, {
      handler: handlers.todos.create,
      validate: validate.todos.create
    })
  });

  server.route({
    method: 'GET',
    path: '/todos/{id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.todos.findById,
      validate: validate.todos.findById
    })
  });

  server.route({
    method: 'PUT',
    path: '/todos/{id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.todos.updateById,
      validate: validate.todos.updateById
    })
  });

  server.route({
    method: 'DELETE',
    path: '/todos/{id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.todos.removeById,
      validate: validate.todos.removeById
    })
  });
};
