'use strict';

module.exports = (server, handlers, validate, defaultConfig) => {
  server.route({
    method: 'GET',
    path: '/dealers',
    config: _.assign({}, defaultConfig, {
      handler: handlers.dealers.findAll,
    })
  });

  server.route({
    method: 'POST',
    path: '/dealers',
    config: _.assign({}, defaultConfig, {
      handler: handlers.dealers.create,
      validate: validate.dealers.create
    })
  });

  server.route({
    method: 'GET',
    path: '/dealers/{dealer_id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.dealers.findById,
      validate: validate.dealers.findById
    })
  });

  server.route({
    method: 'PUT',
    path: '/dealers/{dealer_id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.dealers.updateById,
      validate: validate.dealers.updateById
    })
  });

  server.route({
    method: 'DELETE',
    path: '/dealers/{dealer_id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.dealers.removeById,
      validate: validate.dealers.removeById
    })
  });
};
