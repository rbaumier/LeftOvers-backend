'use strict';

module.exports = (server, handlers, validate, defaultConfig) => {
  server.route({
    method: 'GET',
    path: '/api/dealers',
    config: _.assign({}, defaultConfig, {
      handler: handlers.dealers.findAll
    })
  });

  server.route({
    method: 'POST',
    path: '/api/dealers',
    config: _.assign({}, defaultConfig, {
      handler: handlers.dealers.create,
      validate: validate.dealers.create,
    })
  });

  server.route({
    method: 'GET',
    path: '/api/dealers/{dealer_id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.dealers.findById,
      validate: validate.dealers.findById
    })
  });

  server.route({
    method: 'PUT',
    path: '/api/dealers/{dealer_id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.dealers.updateById,
      validate: validate.dealers.updateById
    })
  });

  server.route({
    method: 'DELETE',
    path: '/api/dealers/{dealer_id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.dealers.removeById,
      validate: validate.dealers.removeById
    })
  });
};
